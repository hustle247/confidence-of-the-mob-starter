import Link from 'next/link';
import Head from 'next/head';

export default function BuyBook() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <Head>
                <title>Buy the Book - Confidence of The Mob</title>
            </Head>
            <div className="max-w-4xl mx-auto">
                <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">COMPANION BOOK</p>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Book</h1>
                <p className="text-lg text-stone-400 mb-8">
                    Read excerpts from the companion book. The definitive account of Fred Pastore's double life.
                </p>

                {/* Purchase Options Section */}
                <div className="mb-12 p-8 bg-stone-800 rounded-xl border-2 border-stone-700 shadow-file">
                    <h2 className="text-2xl font-bold mb-6 text-white">
                        Purchase <span className="text-accent-red">Options</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {/* Amazon Options */}
                        <div className="space-y-3">
                            <p className="text-sm text-stone-400 font-mono-file mb-3">AMAZON</p>
                            <a
                                href="https://a.co/d/4s7bzmO?ref=website"
                                className="block p-4 bg-stone-700 hover:bg-stone-600 rounded-lg border border-stone-600 hover:border-accent-red transition duration-300 text-white font-semibold"
                            >
                                📖 Kindle Edition
                            </a>
                            <a
                                href="#"
                                className="relative group block p-4 bg-stone-700 hover:bg-stone-600 rounded-lg border border-stone-600 hover:border-accent-red transition duration-300 text-white font-semibold overflow-hidden"
                            >
                                <span className="group-hover:opacity-0 transition-opacity duration-300 block">🎧 Audiobook</span>
                                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-bold text-white">
                                    Coming Soon
                                </span>
                            </a>
                            <a
                                href="#"
                                className="relative group block p-4 bg-stone-700 hover:bg-stone-600 rounded-lg border border-stone-600 hover:border-accent-red transition duration-300 text-white font-semibold overflow-hidden"
                            >
                                <span className="group-hover:opacity-0 transition-opacity duration-300 block">📚 Hardcover (Amazon)</span>
                                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-bold text-white">
                                    Available on February 26th
                                </span>
                            </a>
                            <a
                                href="#"
                                className="relative group block p-4 bg-stone-700 hover:bg-stone-600 rounded-lg border border-stone-600 hover:border-accent-red transition duration-300 text-white font-semibold overflow-hidden"
                            >
                                <span className="group-hover:opacity-0 transition-opacity duration-300 block">📓 Paperback</span>
                                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-bold text-white">
                                    Available on February 26th
                                </span>
                            </a>
                        </div>

                        {/* Direct Purchase - Autographed */}
                        {/* <div className="space-y-3">
                            <p className="text-sm text-stone-400 font-mono-file mb-3">DIRECT PURCHASE</p>
                            <Link href="/subscribe" legacyBehavior>
                                <a className="block p-4 bg-accent-red hover:bg-red-600 rounded-lg border-2 border-accent-red hover:border-red-600 transition duration-300 text-white font-bold text-center shadow-file">
                                    ✍️ Autographed Hardcover
                                </a>
                            </Link>
                            <p className="text-xs text-stone-500 italic mt-2">
                                Limited edition autographed copies available directly from the author
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
