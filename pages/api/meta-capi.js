import crypto from 'crypto';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '1268456198274255';
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;

// Helper function to hash user data as required by Meta (SHA256)
const hashData = (data) => {
  if (!data) return undefined;
  return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  if (!ACCESS_TOKEN) {
    return res.status(500).json({ message: 'Meta CAPI Access Token is missing' });
  }

  const { eventName, eventId, eventUrl, eventData = {}, userData = {}, userAgent } = req.body;

  // Get client IP address
  const clientIpAddress = req.headers['x-forwarded-for'] || req.socket?.remoteAddress;

  // Format user data
  const formattedUserData = {
    client_ip_address: clientIpAddress,
    client_user_agent: userAgent,
    ...(userData.fbp && { fbp: userData.fbp }),
    ...(userData.fbc && { fbc: userData.fbc }),
    ...(userData.email && { em: [hashData(userData.email)] }),
    ...(userData.phone && { ph: [hashData(userData.phone)] }),
    ...(userData.firstName && { fn: [hashData(userData.firstName)] }),
    ...(userData.lastName && { ln: [hashData(userData.lastName)] }),
  };

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_id: eventId,
        event_source_url: eventUrl,
        user_data: formattedUserData,
        custom_data: eventData,
      },
    ],
  };

  if (TEST_EVENT_CODE) {
    payload.test_event_code = TEST_EVENT_CODE;
  }

  try {
    const response = await fetch(`https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Meta CAPI Error:', data);
      return res.status(response.status).json({ message: 'Error sending event to Meta', error: data });
    }

    return res.status(200).json({ message: 'Event sent successfully', data });
  } catch (error) {
    console.error('Meta CAPI Exception:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
