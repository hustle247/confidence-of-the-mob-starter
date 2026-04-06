/**
 * Subscribes a user to Beehiiv using the V2 API.
 * Must only be called from server environments.
 */
export const subscribeToBeehiiv = async ({ email, firstName, metadata }) => {
  const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
  const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

  if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
    throw new Error('Missing Beehiiv API credentials. Ensure BEEHIIV_API_KEY and BEEHIIV_PUBLICATION_ID are set.');
  }

  // Construct payload matching the required specification
  const payload = {
    email: email,
    first_name: firstName || '',
    reactivate_existing: true,
    send_welcome_email: false,
    
    // Tracking metadata
    utm_source: 'website',
    utm_medium: 'podcast_page',
    utm_campaign: 'season_one_waitlist',
    referring_site: 'confidenceofthemob.com'
  };

  const response = await fetch(`https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${BEEHIIV_API_KEY}`
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Beehiiv API failed with status ${response.status}`);
  }

  return response.json();
};
