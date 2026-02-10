import Head from 'next/head';

export default function Privacy() {
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <Head>
                <title>Privacy Policy - Confidence of The Mob</title>
            </Head>
            <div className="max-w-4xl mx-auto">
                <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">LEGAL</p>
                <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-white">Privacy Policy</h1>

                <div className="prose prose-invert prose-lg text-stone-300">
                    <p className="text-sm text-stone-500">Last Updated: {currentDate}</p>

                    <h3>1. Introduction</h3>
                    <p>
                        Confidence of The Mob ("we," "our," or "us") operates the website located at confidenceofthemob.com (the "Service").
                        We are committed to respecting and protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
                        and safeguard your information when you visit our website, including any other media form, media channel, mobile website,
                        or mobile application related or connected thereto.
                    </p>
                    <p>
                        Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                    </p>

                    <h3>2. Collection of Your Information</h3>
                    <p>
                        We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                    </p>

                    <h4>Personal Data</h4>
                    <p>
                        Personally identifiable information, such as your name, email address, and telephone number, and demographic information,
                        such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site
                        or usage of our "Contact Us" form or newsletter subscription. You are under no obligation to provide us with personal
                        information of any kind, however your refusal to do so may prevent you from using certain features of the Site.
                    </p>

                    <h4>Derivative Data</h4>
                    <p>
                        Information our servers automatically collect when you access the Site, such as your IP address, your browser type,
                        your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                    </p>

                    <h3>3. Use of Your Information</h3>
                    <p>
                        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience.
                        Specifically, we may use information collected about you via the Site to:
                    </p>
                    <ul>
                        <li>Send you a newsletter or updates regarding the book release and podcast episodes.</li>
                        <li>Respond to product and customer service requests (`Ask Fred` inquiries, etc.).</li>
                        <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                        <li>Notify you of updates to the Site.</li>
                        <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                    </ul>

                    <h3>4. Disclosure of Your Information</h3>
                    <p>
                        We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                    </p>
                    <ul>
                        <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                        <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                    </ul>

                    <h3>5. Security of Your Information</h3>
                    <p>
                        We use administrative, technical, and physical security measures to help protect your personal information.
                        While we have taken reasonable steps to secure the personal information you provide to us, please be aware that
                        despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be
                        guaranteed against any interception or other type of misuse.
                    </p>

                    <h3>6. Policy for Children</h3>
                    <p>
                        We do not knowingly solicit information from or market to children under the age of 13. If you become aware of
                        any data we have collected from children under age 13, please contact us using the contact information provided below.
                    </p>

                    <h3>7. Third-Party Websites</h3>
                    <p>
                        The Site may contain links to third-party websites and applications of interest, including advertisements and external
                        services (e.g., Amazon, Podcast platforms). Once you have used these links to leave the Site, any information you
                        provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy
                        of your information.
                    </p>

                    <h3>8. Contact Us</h3>
                    <p>
                        If you have questions or comments about this Privacy Policy, please contact us at:
                    </p>
                    <p>
                        <a href="/contact" className="text-accent-red hover:underline font-bold">Visit our Contact Page</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
