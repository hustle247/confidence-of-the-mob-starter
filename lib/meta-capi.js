export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '1268456198274255';

/**
 * Generates a unique ID for deduplication
 */
function generateEventId() {
  return 'evt_' + Date.now() + '_' + Math.floor(Math.random() * 1000000);
}

/**
 * Retrieves a cookie by name
 */
function getCookie(name) {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
}

/**
 * Triggers a Facebook Pixel/CAPI event
 * @param {string} eventName - e.g., 'PageView', 'Lead', 'Purchase'
 * @param {object} eventData - Custom data for the event (e.g., currency, value)
 * @param {object} userData - User data (email, phone, etc.) to be hashed on the server
 */
export const trackMetaEvent = async (eventName, eventData = {}, userData = {}) => {
  const eventId = generateEventId();
  const url = window.location.href;
  const fbc = getCookie('_fbc');
  const fbp = getCookie('_fbp');

  // 1. Send client-side event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, eventData, { eventID: eventId });
  }

  // 2. Send server-side event via our API route
  try {
    await fetch('/api/meta-capi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventId,
        eventUrl: url,
        eventData,
        userData: {
          ...userData,
          fbc,
          fbp,
        },
        userAgent: navigator.userAgent,
      }),
    });
  } catch (error) {
    console.error('Error sending CAPI event:', error);
  }
};
