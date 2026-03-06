import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function BuyBook() {
    const [isOpen, setIsOpen] = useState(false);

    const purchaseOptions = [
        { label: 'Kindle Edition', icon: '📱', price: 'Sale $2.99', href: 'https://a.co/d/4s7bzmO?ref=website' },
        { label: 'Hardcover', icon: '📚', price: '$24.99', href: 'https://www.amazon.com/Confidence-Mob-Agent-Mafia-Advised/dp/B0GPD3RM9N/ref=cotmweb' },
        { label: 'Paperback', icon: '📓', price: '$16.99', href: 'https://www.amazon.com/Confidence-Mob-Agent-Mafia-Then-Advised/dp/B0GMQ1B16F/ref=cotmweb' },
        { label: 'Autographed Hardcover', icon: '✍️', price: '$39.99', href: 'https://buy.stripe.com/3cI4gyeBpdEAcOCaH4bwk00' },
        { label: 'Autographed Paperback', icon: '✍️', price: '$29.99', href: 'https://buy.stripe.com/aFa7sKfFt58429YdTgbwk01' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pb-32 md:pb-24">
            <Head>
                <title>Buy the Book - Confidence of The Mob</title>
            </Head>
            <div className="max-w-4xl mx-auto">
                <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">COMPANION BOOK</p>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Book</h1>
                <p className="text-lg text-stone-400 mb-8 leading-relaxed">
                    The definitive account of Fred Pastore's double life. This story began with a box of dusty papers. It led to uncovering Fred Pastore's secret life as "The Elliot Ness of Boston," who successfully busted rackets until he was targeted. He paid the price by leaving the IRS... only to go to work on "the other side."
                </p>

                {/* Purchase Options Section */}
                <div className="mb-12 p-8 bg-stone-800/80 backdrop-blur-sm rounded-xl border-2 border-stone-700 shadow-file text-center sm:relative">
                    <h2 className="text-2xl font-bold mb-6 text-white text-left">
                        Purchase <span className="text-accent-red">Options</span>
                    </h2>

                    {/* Mobile Sticky Wrapper */}
                    <div className="fixed bottom-0 left-0 right-0 p-4 bg-stone-900/95 border-t border-stone-700 backdrop-blur-md z-[100] sm:relative sm:p-0 sm:bg-transparent sm:border-t-0 sm:backdrop-blur-none">
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
                                <div className="origin-bottom sm:origin-top-right absolute left-0 right-0 bottom-full mb-2 sm:bottom-auto sm:top-full sm:mt-2 rounded-lg shadow-file bg-stone-700 ring-1 ring-black ring-opacity-5 z-[110] overflow-hidden animate-fade-in-up sm:animate-fade-in">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        {purchaseOptions.map((option, index) => (
                                            <a
                                                key={index}
                                                href={option.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group block px-6 py-4 text-white hover:bg-stone-600 transition duration-200 border-b border-stone-600 last:border-b-0"
                                                role="menuitem"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center">
                                                        <span className="mr-3 text-xl">{option.icon}</span>
                                                        <span className="font-semibold group-hover:text-accent-red transition-colors">{option.label}</span>
                                                    </div>
                                                    <span className="text-sm font-mono text-stone-400 group-hover:text-white transition-colors">{option.price}</span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Trust Elements */}
                    <div className="mt-8 flex flex-col items-center justify-center space-y-2 pb-4 sm:pb-0">
                        <div className="flex items-center text-stone-400 text-xs font-medium uppercase tracking-widest">
                            <svg className="w-3 h-3 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            Secure Checkout via Stripe
                        </div>
                        <p className="text-[10px] text-stone-500 italic max-w-xs leading-relaxed">
                            Limited edition autographed copies available directly from the author. Verified secure transaction.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
