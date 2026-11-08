export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '1268456198274255';

const STANDARD = new Set([
  'PageView',
  'ViewContent',
  'Lead',
  'CompleteRegistration',
  'InitiateCheckout',
  'AddToCart',
  'Purchase',
  'Subscribe',
  'Contact',
  'Search',
]);

export function getCookie(name) {
  if (typeof document === 'undefined') return undefined;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : undefined;
}

export function ensureExternalId() {
  if (typeof document === 'undefined') return undefined;
  let eid = getCookie('cotm_eid');
  if (!eid) {
    eid =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : 'eid_' + Date.now() + '_' + Math.floor(Math.random() * 1000000);
    document.cookie = `cotm_eid=${eid}; path=/; max-age=31536000; SameSite=Lax`;
  }
  return eid;
}

function getFbc() {
  const existing = getCookie('_fbc');
  if (existing) return existing;
  if (typeof window === 'undefined') return undefined;
  const fbclid = new URLSearchParams(window.location.search).get('fbclid');
  if (!fbclid) return undefined;
  const fbc = `fb.1.${Date.now()}.${fbclid}`;
  document.cookie = `_fbc=${fbc}; path=/; max-age=${60 * 60 * 24 * 90}; SameSite=Lax`;
  return fbc;
}

// Wait for the Pixel library and init call (it loads afterInteractive)
function withFbq(cb) {
  if (typeof window === 'undefined') return;
  let invoked = false;
  const attempt = (tries) => {
    if (invoked) return;
    if (window.fbq && window._cotmFbqInitialized) {
      invoked = true;
      cb(window.fbq);
      return;
    }
    if (tries < 20) {
      setTimeout(() => attempt(tries + 1), 250);
    }
  };
  attempt(0);
}

/**
 * Fires an event to both the browser Meta Pixel and the server CAPI endpoint with deduplication.
 * @param {string} name - Event name (standard or custom)
 * @param {Record<string, unknown>} [params={}] - Custom data / parameters
 * @param {{ email?: string; phone?: string; firstName?: string; lastName?: string }} [userData] - Raw PII hashed server-side
 */
export function trackEvent(name, params = {}, userData) {
  if (typeof window === 'undefined') return;
  ensureExternalId();
  const eventId =
    typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : 'evt_' + Date.now() + '_' + Math.floor(Math.random() * 1000000);

  // Browser side (same eventID = Meta dedupes against server copy)
  withFbq((fbq) =>
    fbq(STANDARD.has(name) ? 'track' : 'trackCustom', name, params, { eventID: eventId })
  );

  // Server side
  fetch('/api/meta-capi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    keepalive: true, // survives navigation (retailer outbound clicks)
    body: JSON.stringify({
      eventName: name,
      eventId,
      eventSourceUrl: window.location.href,
      customData: params,
      fbp: getCookie('_fbp'),
      fbc: getFbc(),
      userData,
    }),
  }).catch(() => {});
}
