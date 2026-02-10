import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, reason, message } = req.body;

        // Check if required environment variables are set
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.warn('EMAIL_USER or EMAIL_PASS not set. Logging email to console instead.');
            console.log('--- NEW CONTACT FORM SUBMISSION ---');
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Reason: ${reason}`);
            console.log(`Message: ${message}`);
            // Simulate success for demo purposes
            return res.status(200).json({ status: 'success', message: 'Message logged (email not sent due to missing config)' });
        }

        // Create a transporter using Gmail (or configured SMTP)
        // Note: For Gmail, you usually need an App Password if 2FA is enabled
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address (must be the authenticated user)
            to: 'eddyinserra@gmail.com', // Recipient address
            replyTo: email, // Set reply-to as the submitter's email
            subject: `[Confidence of The Mob] New Contact: ${reason} from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Reason: ${reason}

Message:
${message}
      `,
            html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Reason:</strong> ${reason}</p>
<hr />
<p><strong>Message:</strong></p>
<p>${message ? message.replace(/\n/g, '<br>') : 'No message provided.'}</p>
      `,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ status: 'success' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ status: 'error', message: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
