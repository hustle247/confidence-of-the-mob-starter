import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: 'Book Signing',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = `[Confidence of The Mob] New Contact: ${formData.reason} from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\nReason: ${formData.reason}\n\nMessage:\n${formData.message}`;

        const mailtoLink = `mailto:eddyinserra@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        // Show success message briefly
        setStatus('success');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <Head>
                <title>Contact - Confidence of The Mob</title>
            </Head>
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">GET IN TOUCH</p>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Contact</h1>
                    <p className="text-lg text-stone-400">
                        Reach out for book signings, talks, and more.
                    </p>
                </div>

                <div className="bg-stone-800 p-8 rounded-xl border-2 border-stone-700 shadow-file">
                    {status === 'success' ? (
                        <div className="text-center py-12">
                            <div className="text-5xl mb-4">✅</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-stone-400">Thank you for reaching out. We'll get back to you shortly.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-6 text-accent-red hover:underline font-mono-file text-sm"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-stone-400 mb-2 font-mono-file">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-stone-900 border border-stone-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition duration-300"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-stone-400 mb-2 font-mono-file">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-stone-900 border border-stone-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition duration-300"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="reason" className="block text-sm font-medium text-stone-400 mb-2 font-mono-file">Reason for Outreach</label>
                                <select
                                    id="reason"
                                    name="reason"
                                    value={formData.reason}
                                    onChange={handleChange}
                                    className="w-full bg-stone-900 border border-stone-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition duration-300"
                                >
                                    <option value="Book Signing">Book Signing</option>
                                    <option value="Speaking Engagement">Speaking Engagement</option>
                                    <option value="Press Inquiry">Press Inquiry</option>
                                    <option value="Feedback">Just wanted to say hi</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-400 mb-2 font-mono-file">Message (Optional)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-stone-900 border border-stone-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition duration-300"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-accent-red text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-file"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'error' && (
                                <p className="text-red-400 text-sm text-center font-mono-file mt-4">
                                    There was an error sending your message. Please try again.
                                </p>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
