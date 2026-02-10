import Head from 'next/head';
import Image from 'next/image';

export default function Social() {
    const socials = [
        {
            name: 'YouTube',
            url: 'https://youtube.com', // Placeholder
            icon: '▶', // Or an SVG/Image if available, simplified for now
            color: 'hover:text-red-600',
            description: 'Watch video episodes, documentaries, and exclusive clips.'
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com', // Placeholder
            icon: '📸',
            color: 'hover:text-pink-600',
            description: 'Behind the scenes photos, historical documents, and daily updates.'
        },
        {
            name: 'Facebook',
            url: 'https://facebook.com', // Placeholder
            icon: '👍',
            color: 'hover:text-blue-600',
            description: 'Join the community discussion and share your theories.'
        },
        {
            name: 'TikTok',
            url: 'https://tiktok.com', // Placeholder
            icon: '🎵',
            color: 'hover:text-pink-500', // TikTok has specific branding, but pink/black works for simplified
            description: 'Short-form stories, quick facts, and viral moments.'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <Head>
                <title>Social Media - Confidence of The Mob</title>
            </Head>
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">COMMUNITY</p>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Follow the Investigation</h1>
                <p className="text-lg text-stone-400 mb-12">
                    Connect with us across platforms for the latest updates, bonus content, and community discussions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {socials.map((platform) => (
                        <a
                            key={platform.name}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-8 bg-stone-800 rounded-xl border-2 border-stone-700 shadow-file hover:border-accent-red transition duration-300"
                        >
                            <div className={`text-5xl mb-4 text-stone-500 ${platform.color} transition duration-300`}>
                                {platform.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-red transition duration-300">
                                {platform.name}
                            </h3>
                            <p className="text-stone-400 text-sm">
                                {platform.description}
                            </p>
                            <div className="mt-4 inline-block text-xs font-mono-file text-stone-500 border border-stone-600 rounded px-2 py-1 group-hover:border-accent-red group-hover:text-accent-red transition duration-300">
                                FOLLOW &rarr;
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
