/**
 * Utility to safely send custom events to the Meta Pixel.
 * Gracefully degrades to a console.log if pixel is not loaded.
 */
export const trackEvent = (eventName, metadata = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      window.fbq('trackCustom', eventName, metadata);
    } catch (e) {
      console.warn('Failed to fire Meta Pixel event', e);
    }
  } else {
    // Helpful log for debugging locally
    console.log(`[Tracking] ${eventName}`, metadata);
  }
};
