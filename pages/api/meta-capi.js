import { sendCapiEvent } from '../../lib/meta/capi';

// Only these events may be relayed (prevents abuse of the endpoint)
const ALLOWED = new Set([
  'PageView',
  'ViewContent',
  'Lead',
  'Contact',
  'InitiateCheckout',
  'PodcastPreviewGate',
  'PodcastNewsletterStart',
]);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ ok: false, message: 'Method Not Allowed' });
  }

  const b = req.body || {};
  if (!b.eventName || !b.eventId || !ALLOWED.has(b.eventName)) {
    return res.status(400).json({ ok: false });
  }

  const forwardedFor = req.headers['x-forwarded-for'];
  const ip =
    (typeof forwardedFor === 'string'
      ? forwardedFor.split(',')[0]?.trim()
      : Array.isArray(forwardedFor)
      ? forwardedFor[0]?.split(',')[0]?.trim()
      : undefined) || req.socket?.remoteAddress;

  const userAgent = req.headers['user-agent'] || b.userAgent || undefined;
  const userData = b.userData || {};

  const { ok, emailHash } = await sendCapiEvent({
    eventName: b.eventName,
    eventId: b.eventId,
    eventSourceUrl: b.eventSourceUrl ?? b.eventUrl,
    customData: b.customData ?? b.eventData,
    ip,
    userAgent,
    fbp: b.fbp ?? userData.fbp,
    fbc: b.fbc ?? userData.fbc,
    externalId: req.cookies?.cotm_eid || b.externalId,
    email: userData.email,
    emailHash: req.cookies?.cotm_em,
    phone: userData.phone,
    firstName: userData.firstName,
    lastName: userData.lastName,
  });

  // Remember the hashed email so later events (PageView etc.) match better
  if (userData.email && emailHash) {
    res.setHeader(
      'Set-Cookie',
      `cotm_em=${emailHash}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=15552000`
    );
  }

  return res.status(ok ? 200 : 502).json({ ok });
}
