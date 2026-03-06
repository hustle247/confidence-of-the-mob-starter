import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function BuyBook() {
    const [isOpen, setIsOpen] = useState(false);

    const purchaseOptions = [
        { label: '📖 Kindle Edition', href: 'https://a.co/d/4s7bzmO?ref=website' },
        { label: '📚 Hardcover', href: 'https://www.amazon.com/Confidence-Mob-Agent-Mafia-Advised/dp/B0GPD3RM9N/ref=cotmweb' },
        { label: '📓 Paperback', href: 'https://www.amazon.com/Confidence-Mob-Agent-Mafia-Then-Advised/dp/B0GMQ1B16F/ref=cotmweb' },
        { label: '✍️ Autographed Hardcover', href: 'https://buy.stripe.com/3cI4gyeBpdEAcOCaH4bwk00' },
        { label: '✍️ Autographed Paperback', href: 'https://buy.stripe.com/aFa7sKfFt58429YdTgbwk01' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <Head>
                <title>Buy the Book - Confidence of The Mob</title>
            </Head>
            <div className="max-w-4xl mx-auto">
                <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">COMPANION BOOK</p>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Book</h1>
                <p className="text-lg text-stone-400 mb-8">
                    The definitive account of Fred Pastore's double life.
                </p>

                {/* Purchase Options Section */}
                <div className="mb-12 p-8 bg-stone-800 rounded-xl border-2 border-stone-700 shadow-file text-center">
                    <h2 className="text-2xl font-bold mb-6 text-white text-left">
                        Purchase <span className="text-accent-red">Options</span>
                    </h2>

                    <div className="relative inline-block text-left w-full max-w-md mx-auto">
                        <div>
                            <button
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="cta-button w-full inline-flex justify-between items-center rounded-lg border border-stone-600 shadow-file px-6 py-4 bg-accent-red text-white font-bold hover:bg-red-600 transition duration-300"
                                id="options-menu"
                                aria-haspopup="true"
                                aria-expanded="true"
                            >
                                Choose your book
                                <svg className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        {isOpen && (
                            <div className="origin-top-right absolute left-0 right-0 mt-2 rounded-lg shadow-file bg-stone-700 ring-1 ring-black ring-opacity-5 z-50 overflow-hidden">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    {purchaseOptions.map((option, index) => (
                                        <a
                                            key={index}
                                            href={option.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block px-6 py-4 text-white hover:bg-stone-600 hover:text-accent-red transition duration-200 font-semibold border-b border-stone-600 last:border-b-0"
                                            role="menuitem"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {option.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <p className="text-xs text-stone-500 italic mt-6">
                        Limited edition autographed copies available directly from the author via Stripe
                    </p>
                </div>
            </div>
        </div>
    );
}
