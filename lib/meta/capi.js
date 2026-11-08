import { createHash } from 'crypto';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '1268456198274255';
const TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const VERSION = process.env.META_GRAPH_VERSION || 'v25.0';

export const sha256 = (v) =>
  v ? createHash('sha256').update(String(v).trim().toLowerCase()).digest('hex') : undefined;

const digits = (v) => {
  if (!v) return undefined;
  const cleaned = String(v).replace(/\D/g, '');
  return cleaned || undefined;
};

/**
 * Sends a server-side event to Meta Conversions API (CAPI).
 * @param {object} i
 * @param {string} i.eventName
 * @param {string} i.eventId
 * @param {string} [i.eventSourceUrl]
 * @param {Record<string, unknown>} [i.customData]
 * @param {string} [i.ip]
 * @param {string} [i.userAgent]
 * @param {string} [i.fbp]
 * @param {string} [i.fbc]
 * @param {string} [i.externalId] - raw; hashed here
 * @param {string} [i.email] - raw; hashed here
 * @param {string} [i.emailHash] - already hashed (from cotm_em cookie)
 * @param {string} [i.phone] - raw; stripped to digits & hashed here
 * @param {string} [i.firstName] - raw; hashed here
 * @param {string} [i.lastName] - raw; hashed here
 * @param {'website' | 'system_generated'} [i.actionSource]
 */
export async function sendCapiEvent(i) {
  if (!TOKEN) {
    console.error('[CAPI] Missing META_CAPI_ACCESS_TOKEN');
    return { ok: false, emailHash: undefined };
  }

  const em = i.email ? sha256(i.email) : i.emailHash;
  const phDigits = digits(i.phone);

  const user_data = Object.fromEntries(
    Object.entries({
      client_ip_address: i.ip || undefined,
      client_user_agent: i.userAgent || undefined,
      fbp: i.fbp || undefined,
      fbc: i.fbc || undefined,
      external_id: i.externalId ? [sha256(i.externalId)] : undefined,
      em: em ? [em] : undefined,
      ph: phDigits ? [sha256(phDigits)] : undefined,
      fn: i.firstName ? [sha256(i.firstName)] : undefined,
      ln: i.lastName ? [sha256(i.lastName)] : undefined,
    }).filter(([, v]) => v !== undefined)
  );

  const payload = {
    data: [
      {
        event_name: i.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: i.eventId,
        event_source_url: i.eventSourceUrl,
        action_source: i.actionSource ?? 'website',
        user_data,
        custom_data: i.customData ?? {},
      },
    ],
    access_token: TOKEN,
  };

  if (process.env.META_TEST_EVENT_CODE && process.env.VERCEL_ENV !== 'production') {
    payload.test_event_code = process.env.META_TEST_EVENT_CODE;
  }

  try {
    const res = await fetch(`https://graph.facebook.com/${VERSION}/${PIXEL_ID}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error('[CAPI]', res.status, await res.text());
    }
    return { ok: res.ok, emailHash: em };
  } catch (err) {
    console.error('[CAPI] Fetch error:', err);
    return { ok: false, emailHash: em };
  }
}
