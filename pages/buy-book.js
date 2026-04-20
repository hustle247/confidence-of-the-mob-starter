import Link from 'next/link';
import Head from 'next/head';

export default function BuyBook() {
    const autographedOptions = [
        { label: 'Autographed Hardcover', icon: '✍️', price: '$39.99', href: 'https://buy.stripe.com/3cI4gyeBpdEAcOCaH4bwk00', desc: 'Signed by Eddy Inserra. Perfect for collectors.', image: '/images/hardcover_autographed.png' },
        { label: 'Autographed Paperback', icon: '✍️', price: '$29.99', href: 'https://buy.stripe.com/aFa7sKfFt58429YdTgbwk01', desc: 'Signed by Eddy Inserra. Ships directly to you.', image: '/images/softcover_autographed.png' },
    ];

    const standardOptions = [
        { label: 'Kindle Edition', icon: '📱', price: 'Sale $7.99', href: 'https://www.amazon.com/dp/B0GSS9WHWC' },
        { label: 'Hardcover', icon: '📚', price: '$24.99', href: 'https://www.amazon.com/dp/B0GSFCNRH9?ref=cotmweb' },
        { label: 'Paperback', icon: '📓', price: '$16.99', href: 'https://www.amazon.com/dp/B0GSF9DZC7?ref=cotmweb' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pb-32 md:pb-24">
            <Head>
                <title>Buy the Book - Confidence of The Mob</title>
            </Head>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4 flex flex-col justify-center items-center lg:sticky lg:top-32 relative group">
                    <div className="absolute inset-0 bg-accent-red blur-[80px] opacity-10 group-hover:opacity-20 transition duration-700 pointer-events-none rounded-full"></div>
                    <img 
                        src="/images/book_no_bg.png" 
                        alt="Confidence of The Mob Book Cover" 
                        className="w-3/4 max-w-sm rounded-r-3xl rounded-l-md shadow-2xl border-2 border-stone-800 relative z-10 hover:scale-[1.02] hover:-rotate-1 transition duration-700"
                    />
                    <div className="mt-8 opacity-60 flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-stone-500 block"></span>
                      <span className="w-2 h-2 rounded-full bg-stone-500 block"></span>
                      <span className="w-2 h-2 rounded-full bg-stone-500 block"></span>
                    </div>
                </div>

                <div className="lg:col-span-8">
                    <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">THE DECLASSIFIED EVIDENCE</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white uppercase tracking-tight">Confidence of The Mob</h1>
                    <p className="text-lg text-stone-300 mb-12 leading-relaxed font-serif">
                        The definitive account of IRS Agent Fred Pastore's double life. This story began with a box of dusty papers. It led to uncovering Fred's secret life as "The Elliot Ness of Boston," who successfully busted rackets until he was targeted. He paid the price by leaving the IRS... only to go to work on "the other side."
                    </p>

                    {/* Autographed Editions */}
                    <div className="mb-12 animate-fade-in-up">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 pb-2 border-b border-stone-700">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                                <span className="text-accent-red">✍️</span> Limited Autographed Editions
                            </h2>
                            <span className="text-xs font-mono-file text-stone-500 uppercase tracking-widest mt-2 sm:mt-0 pb-1">SECURE STRIPE CHECKOUT</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {autographedOptions.map((opt, i) => (
                                <div key={i} className="bg-stone-800/80 p-6 rounded-xl border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.1)] hover:border-amber-500/60 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all flex flex-col h-full group">
                                    <div className="w-full aspect-[3/4] bg-stone-900 border border-stone-700 rounded-md mb-6 flex flex-col items-center justify-center text-stone-600 font-mono-file text-xs text-center relative overflow-hidden group/img">
                                        {opt.image ? (
                                            <img src={opt.image} alt={opt.label} className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
                                        ) : (
                                            <div className="p-4 flex flex-col items-center justify-center h-full w-full">
                                                <span className="text-3xl mb-3">{opt.icon}</span>
                                                <span className="uppercase tracking-widest">[ {opt.label} <br/> Image Placeholder ]</span>
                                            </div>
                                        )}
                                        <div className="absolute top-4 right-[-30px] bg-amber-500 text-black font-bold text-[10px] w-[120px] text-center rotate-45 shadow-glow uppercase tracking-widest py-1 border border-amber-300 z-10">SIGNED</div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{opt.label}</h3>
                                    <p className="text-stone-400 text-sm mb-6 flex-grow">{opt.desc}</p>
                                    <a 
                                        href={opt.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex justify-between items-center bg-accent-red hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg transition-colors border border-red-500 shadow-file"
                                    >
                                        <span>Buy Now</span>
                                        <span className="font-mono text-white/90">{opt.price}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Standard Editions */}
                    <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 pb-2 border-b border-stone-800">
                            <h2 className="text-xl font-bold text-white">
                                Standard Editions
                            </h2>
                            <span className="text-xs font-mono-file text-stone-500 uppercase tracking-widest mt-2 sm:mt-0 pb-1">VIA AMAZON</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {standardOptions.map((opt, i) => (
                                <div key={i} className="bg-stone-900 border border-stone-800 p-5 rounded-xl hover:border-stone-600 transition-colors flex flex-col h-full group">
                                    <div className="w-full aspect-[4/5] bg-stone-950 border border-stone-800 rounded-md mb-4 flex flex-col items-center justify-center text-stone-700 font-mono-file text-[10px] text-center p-4">
                                        <span className="text-2xl mb-2">{opt.icon}</span>
                                        <span className="uppercase tracking-widest">[ {opt.label} <br/> Placeholder ]</span>
                                    </div>
                                    <h3 className="text-md sm:text-lg font-bold text-white mb-1 group-hover:text-accent-red transition-colors">{opt.label}</h3>
                                    <p className="text-stone-500 font-mono text-sm mb-4 flex-grow">{opt.price}</p>
                                    <a 
                                        href={opt.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-full text-center bg-stone-800 hover:bg-stone-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors border border-stone-700 text-sm"
                                    >
                                        View on Amazon
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Trust Elements */}
                    <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col items-center justify-center space-y-3 pb-4">
                        <div className="flex items-center text-stone-500 text-xs font-medium uppercase tracking-widest">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            Secure Checkout via Stripe & Amazon
                        </div>
                        <p className="text-xs text-stone-600 italic max-w-sm leading-relaxed text-center font-serif">
                            Limited edition autographed copies are safely fulfilled directly from Eddie Inserra's private inventory.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
