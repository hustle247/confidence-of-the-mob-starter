import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, reason, message } = req.body;

        try {
            const { data, error } = await resend.emails.send({
                from: 'Confidence of The Mob <contact@confidenceofthemob.com>',
                to: ['contact@confidenceofthemob.com'],
                reply_to: email, // Set reply-to as the submitter's email
                subject: `[Website Contact] ${reason} from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\nReason: ${reason}\n\nMessage:\n${message}`,
                html: `
                    <h3>New Contact Form Submission</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Reason:</strong> ${reason}</p>
                    <hr />
                    <p><strong>Message:</strong></p>
                    <p>${message ? message.replace(/\n/g, '<br>') : 'No message provided.'}</p>
                `,
            });
            
            if (error) {
                console.error('Resend returned an error:', error);
                return res.status(400).json({ status: 'error', message: error.message });
            }

            return res.status(200).json({ status: 'success', message: 'Email sent successfully via Resend.' });
        } catch (err) {
            console.error('Exception when sending email:', err);
            return res.status(500).json({ status: 'error', message: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
