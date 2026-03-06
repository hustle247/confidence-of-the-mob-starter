import Link from 'next/link';
import Head from 'next/head';

export default function Success() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
            <Head>
                <title>Order Confirmed - Confidence of The Mob</title>
            </Head>
            <div className="max-w-3xl mx-auto">
                <p className="text-xs text-accent-red font-mono-file mb-4 tracking-widest uppercase">CONFIDENTIAL // ORDER RECEIVED</p>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-8 text-white">
                    Mission Accomplished.<br />Your Evidence is En Route.
                </h1>

                <div className="bg-stone-800 p-8 rounded-xl border-2 border-stone-700 shadow-file mb-10 text-left relative overflow-hidden">
                    {/* Subtle watermark or decorative element to enhance the noir/archive feel */}
                    <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                    </div>

                    <p className="text-lg text-stone-200 leading-relaxed mb-6 font-mono-file italic border-l-4 border-accent-red pl-6">
                        "Thank you for joining the investigation. We’ve received your order for the signed edition of Confidence of The Mob. Your copy is being pulled from the archives, inscribed with your custom message, and prepared for shipment via USPS Media Mail."
                    </p>
                    <div className="flex items-center gap-3 text-sm text-stone-500 font-mono-file mt-4 pt-4 border-t border-stone-700">
                        <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                        PROCESSING SHIPMENT
                    </div>
                </div>

                <div className="space-y-6">
                    <p className="text-lg text-stone-400">
                        While you wait for your physical copy, start the journey now by exploring the Digital Archive.
                    </p>
                    <Link href="/documents" legacyBehavior>
                        <a className="cta-button inline-block bg-accent-red text-white font-bold py-4 px-10 rounded-lg shadow-file hover:bg-red-600 transition duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                            🔍 Explore the Digital Archive
                        </a>
                    </Link>
                </div>

                <div className="mt-16 pt-8 border-t border-stone-800">
                    <Link href="/" legacyBehavior>
                        <a className="text-stone-500 hover:text-stone-300 transition duration-300 font-mono-file text-sm lowercase underline underline-offset-4">
                            Return to Headquarters
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
