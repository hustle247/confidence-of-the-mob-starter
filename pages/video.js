import Head from 'next/head';

export default function Video() {
    return (
        <div className="bg-stone-950 min-h-screen">
            <Head>
                <title>Video - Confidence of The Mob</title>
            </Head>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">AUDIO-VISUAL ARCHIVE</p>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Video</h1>
                    <p className="text-lg text-stone-400">
                        Preview the stories and investigations in motion.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-stone-700 shadow-file bg-stone-900">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/I6T6HyMOtik?si=P3HqeEr0EeO1oDxy&amp;start=30"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="absolute inset-0"
                        ></iframe>
                    </div>

                    <div className="mt-8 p-6 bg-stone-900/50 border border-stone-800 rounded-lg">
                        <p className="text-stone-300 text-sm leading-relaxed font-mono-file italic">
                            "This is a preview only. We have changed the title of this story since we created this video, but wanted to give you something to watch and enjoy while we finalize the actual podcast. Enjoy!"
                        </p>
                    </div>
                </div>

                {/* Featured Archive Divider */}
                <div className="mt-24 text-center">
                    <p className="text-[10px] text-stone-600 font-mono-file tracking-[0.3em] uppercase">
            // STATUS: PODCAST SERIES IN PRODUCTION //
                    </p>
                </div>
            </div>
        </div>
    );
}
