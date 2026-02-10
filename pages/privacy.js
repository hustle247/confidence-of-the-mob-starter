import Head from 'next/head';

export default function Privacy() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <Head>
                <title>Privacy Policy - Confidence of The Mob</title>
            </Head>
            <div className="max-w-4xl mx-auto">
                <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">LEGAL</p>
                <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-white">Privacy Policy</h1>

                <div className="prose prose-invert prose-lg text-stone-300">
                    <p>Last Updated: {new Date().toLocaleDateString()}</p>

                    <h3>1. Introduction</h3>
                    <p>
                        Welcome to Confidence of The Mob. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                        and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h3>2. Information We Collect</h3>
                    <p>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul>
                        <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data:</strong> includes email address and telephone number.</li>
                        <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                    </ul>

                    <h3>3. How We Use Your Personal Data</h3>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul>
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal or regulatory obligation.</li>
                    </ul>

                    <h3>4. Data Security</h3>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                    </p>

                    <h3>5. Contact Us</h3>
                    <p>
                        If you have any questions about this privacy policy or our privacy practices, please contact us via our <a href="/contact" className="text-accent-red hover:underline">Contact page</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
