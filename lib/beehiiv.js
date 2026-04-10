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
    reactivate_existing: true,
    send_welcome_email: false,
    double_opt_override: 'off',
    
    // Tracking metadata
    utm_source: 'confidenceofthemob.com',
    utm_medium: 'organic'
  };

  // Only add custom fields if firstName is provided
  if (firstName) {
    payload.custom_fields = [
      {
        name: 'First Name',
        value: firstName
      }
    ];
  }

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
