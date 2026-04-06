import { subscribeToBeehiiv } from '../../../lib/beehiiv';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { email, firstName, metadata } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const result = await subscribeToBeehiiv({ email, firstName, metadata });
    
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error('Newsletter subscribe error:', error.message);
    return res.status(500).json({ success: false, message: error.message || 'Failed to subscribe' });
  }
}
