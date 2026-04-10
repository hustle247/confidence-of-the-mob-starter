import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function BuyBook() {
    const [isOpen, setIsOpen] = useState(false);

    const purchaseOptions = [
        { label: 'Kindle Edition', icon: '📱', price: 'Sale $7.99', href: 'https://www.amazon.com/dp/B0GSS9WHWC' },
        { label: 'Hardcover', icon: '📚', price: '$24.99', href: 'https://www.amazon.com/dp/B0GSFCNRH9?ref=cotmweb' },
        { label: 'Paperback', icon: '📓', price: '$16.99', href: 'https://www.amazon.com/dp/B0GSF9DZC7?ref=cotmweb' },
        { label: 'Autographed Hardcover', icon: '✍️', price: '$39.99', href: 'https://buy.stripe.com/3cI4gyeBpdEAcOCaH4bwk00' },
        { label: 'Autographed Paperback', icon: '✍️', price: '$29.99', href: 'https://buy.stripe.com/aFa7sKfFt58429YdTgbwk01' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pb-32 md:pb-24">
            <Head>
                <title>Buy the Book - Confidence of The Mob</title>
            </Head>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5 flex flex-col justify-center items-center lg:sticky lg:top-32 relative group">
                    <div className="absolute inset-0 bg-accent-red blur-[80px] opacity-10 group-hover:opacity-20 transition duration-700 pointer-events-none rounded-full"></div>
                    <img 
                        src="/images/book_no_bg.png" 
                        alt="Confidence of The Mob Book Cover" 
                        className="w-3/4 max-w-md rounded-r-3xl rounded-l-md shadow-2xl border-2 border-stone-800 relative z-10 hover:scale-[1.02] hover:-rotate-1 transition duration-700"
                    />
                    <div className="mt-8 opacity-60 flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-stone-500 block"></span>
                      <span className="w-2 h-2 rounded-full bg-stone-500 block"></span>
                      <span className="w-2 h-2 rounded-full bg-stone-500 block"></span>
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">THE DECLASSIFIED EVIDENCE</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white uppercase tracking-tight">Confidence of The Mob</h1>
                    <p className="text-lg text-stone-300 mb-8 leading-relaxed font-serif">
                        The definitive account of IRS Agent Fred Pastore's double life. This story began with a box of dusty papers. It led to uncovering Fred's secret life as "The Elliot Ness of Boston," who successfully busted rackets until he was targeted. He paid the price by leaving the IRS... only to go to work on "the other side."
                    </p>

                    {/* Purchase Options Section */}
                    <div className="mb-12 p-8 sm:p-10 bg-stone-800/50 backdrop-blur-sm rounded-xl border border-stone-700 shadow-file sm:relative">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-stone-700 pb-4">
                            <h2 className="text-2xl font-bold text-white">
                                Purchase <span className="text-accent-red">Options</span>
                            </h2>
                            <span className="text-xs font-mono-file text-stone-500 uppercase tracking-widest mt-2 sm:mt-0">SECURE TRANSACTION CHECKOUT</span>
                        </div>

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
                        <div className="mt-10 pt-6 border-t border-stone-700/50 flex flex-col items-center justify-center space-y-3 pb-4 sm:pb-0">
                            <div className="flex items-center text-stone-400 text-xs font-medium uppercase tracking-widest">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                Secure Checkout via Stripe / Amazon
                            </div>
                            <p className="text-[11px] text-stone-500 italic max-w-sm leading-relaxed text-center font-serif">
                                Limited edition autographed copies are fulfilled directly from Eddy Inserra's inventory.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
