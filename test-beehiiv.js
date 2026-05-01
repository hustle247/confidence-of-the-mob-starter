const fs = require('fs');
const env = fs.readFileSync('.env.local', 'utf8');
const BEEHIIV_API_KEY = env.match(/BEEHIIV_API_KEY=(.+)/)[1].trim();
const BEEHIIV_PUBLICATION_ID = env.match(/BEEHIIV_PUBLICATION_ID=(.+)/)[1].trim();

async function test() {
  const payload = {
    email: 'test-signup-12345@example.com',
    reactivate_existing: true,
    send_welcome_email: true,
    double_opt_override: 'off',
    utm_source: 'test',
    referring_site: 'test.com'
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

  console.log('Status:', response.status);
  const data = await response.json();
  console.log('Data:', JSON.stringify(data, null, 2));
}

test();
