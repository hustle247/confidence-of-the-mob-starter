import Stripe from 'stripe';
import { sendCapiEvent } from '../../lib/meta/capi';

export const config = {
  api: {
    bodyParser: false,
  },
};

const HARDCOVER_LINK_SLUG = '3cI4gyeBpdEAcOCaH4bwk00';
const PAPERBACK_LINK_SLUG = 'aFa7sKfFt58429YdTgbwk01';

// In-memory cache of payment_link ID (plink_...) -> SKU ('cotm-hardcover-signed' | 'cotm-paperback-signed' | null)
const paymentLinkSkuCache = new Map();

async function getRawBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

async function resolveSkuFromPaymentLink(stripe, paymentLink) {
  if (!paymentLink) return null;
  const plinkId = typeof paymentLink === 'string' ? paymentLink : paymentLink.id;
  if (!plinkId) return null;

  if (process.env.STRIPE_HARDCOVER_PAYMENT_LINK_ID && plinkId === process.env.STRIPE_HARDCOVER_PAYMENT_LINK_ID) {
    return 'cotm-hardcover-signed';
  }
  if (process.env.STRIPE_PAPERBACK_PAYMENT_LINK_ID && plinkId === process.env.STRIPE_PAPERBACK_PAYMENT_LINK_ID) {
    return 'cotm-paperback-signed';
  }

  if (paymentLinkSkuCache.has(plinkId)) {
    return paymentLinkSkuCache.get(plinkId);
  }

  let plinkObj;
  try {
    plinkObj =
      typeof paymentLink === 'object' && paymentLink.url
        ? paymentLink
        : await stripe.paymentLinks.retrieve(plinkId);
  } catch (err) {
    console.error(`[Stripe Webhook] Failed to retrieve payment_link (${plinkId}):`, err);
    throw err;
  }

  const url = plinkObj?.url || '';
  let sku = null;
  if (url.includes(HARDCOVER_LINK_SLUG)) {
    sku = 'cotm-hardcover-signed';
  } else if (url.includes(PAPERBACK_LINK_SLUG)) {
    sku = 'cotm-paperback-signed';
  }

  paymentLinkSkuCache.set(plinkId, sku);
  return sku;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!secretKey || !webhookSecret) {
    console.error('[Stripe Webhook] Missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET');
    return res.status(500).json({ message: 'Stripe webhook not configured' });
  }

  const stripe = new Stripe(secretKey);
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    const rawBody = await getRawBody(req);
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('[Stripe Webhook] Signature verification failed:', err.message);
    return res.status(400).json({ message: `Webhook Error: ${err.message}` });
  }

  // Always return 200 to Stripe after a valid signature, even if downstream CAPI call fails
  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      // 1. Only fire Purchase when session.payment_status === 'paid'
      if (session.payment_status !== 'paid') {
        return res.status(200).json({ received: true, skipped: 'unpaid' });
      }

      // 2. Map session.payment_link to SKU; ignore sessions from any other payment link
      const sku = await resolveSkuFromPaymentLink(stripe, session.payment_link);
      if (!sku) {
        return res.status(200).json({ received: true, skipped: 'unmatched_payment_link' });
      }

      const customerDetails = session.customer_details || {};
      const fullName = (customerDetails.name || '').trim();
      const nameParts = fullName ? fullName.split(/\s+/) : [];
      const firstName = nameParts[0] || undefined;
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : undefined;

      const { ok } = await sendCapiEvent({
        eventName: 'Purchase',
        eventId: `order_${session.id}`,
        actionSource: 'website',
        eventSourceUrl: 'https://www.confidenceofthemob.com/buy-book',
        customData: {
          value: (session.amount_total ?? 0) / 100,
          currency: (session.currency || 'usd').toUpperCase(),
          content_ids: [sku],
          content_type: 'product',
          order_id: session.id,
        },
        email: customerDetails.email || undefined,
        phone: customerDetails.phone || undefined,
        firstName,
        lastName,
        externalId: session.client_reference_id || undefined,
      });

      if (!ok) {
        console.error('[Stripe Webhook] CAPI Purchase call failed for session:', session.id);
      }
    }
  } catch (err) {
    console.error('[Stripe Webhook] Error processing checkout.session.completed:', err);
  }

  return res.status(200).json({ received: true });
}
