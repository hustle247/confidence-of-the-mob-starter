import Link from 'next/link';
import Seo from "../components/Seo";
import { PAGE_META } from "../lib/seo";
import { RETAILERS } from "../lib/retailers";
import Head from 'next/head';

const RetailerCard = ({ name, note, url }) => {
    const handleClick = () => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('trackCustom', 'RetailerClick', { retailer: name });
        }
    };

    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={handleClick}
            className="flex items-center justify-between bg-stone-800 p-4 sm:p-5 rounded-lg border border-stone-700 hover:border-accent-red hover:shadow-file transition-all duration-300 group min-h-[44px]"
        >
            <div>
                <h3 className="font-bold text-white text-lg">{name}</h3>
                {note && <p className="text-stone-400 text-xs sm:text-sm mt-1">{note}</p>}
            </div>
            <div className="text-stone-500 group-hover:text-accent-red transition-colors ml-4 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </div>
        </a>
    );
};

export default function BuyBook() {
    const autographedOptions = [
        { label: 'Autographed Hardcover', icon: '✍️', price: '$39.99', href: 'https://buy.stripe.com/3cI4gyeBpdEAcOCaH4bwk00', desc: 'Signed by Eddy Inserra. Perfect for collectors.', image: '/images/hardcover_autographed.webp' },
        { label: 'Autographed Paperback', icon: '✍️', price: '$29.99', href: 'https://buy.stripe.com/aFa7sKfFt58429YdTgbwk01', desc: 'Signed by Eddy Inserra. Ships directly to you.', image: '/images/softcover_autographed.webp' },
    ];



    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pb-32 md:pb-24">
            <Seo meta={PAGE_META["/buy-book"]} />
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4 flex flex-col justify-center items-center lg:sticky lg:top-32 relative group">
                    <div className="absolute inset-0 bg-accent-red blur-[80px] opacity-10 group-hover:opacity-20 transition duration-700 pointer-events-none rounded-full"></div>
                    <img 
                        src="/images/book_no_bg.png" 
                        alt="Confidence of The Mob Book Cover" 
                        className="w-3/4 max-w-sm rounded-r-3xl rounded-l-md shadow-2xl border-2 border-stone-800 relative z-10 hover:scale-[1.02] hover:-rotate-1 transition duration-700 mb-8"
                    />
                    
                    <a 
                        href="https://www.amazon.com/dp/B0GSF9DZC7?ref=cotmweb" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-3/4 max-w-sm inline-flex justify-center items-center bg-[#FF9900] hover:bg-[#e68a00] text-black font-extrabold py-4 px-6 rounded-lg transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,153,0,0.3)] border border-[#cc7a00] z-20"
                    >
                        <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                          <path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-27.5 0 22-3.2 45.3-3.2 45.3zM273 234.3c-3 15-17.5 43.5-60 43.5-44.5 0-41.5-31.5-41.5-45.5 0-36 34.5-41.5 67.5-44.5 24-2.5 34 2.5 34 2.5v44zM392 384.2c-54.5 55-126 84.5-197.5 84.5-54 0-111-17.5-155.5-57.5-30.5-27-24-37 11.5-13.5 45.5 30 110.5 41 161 41 49 0 108.5-11 154-46.5 17.5-13.5 37.5-23.5 26.5 8zm-88.5-24.5c4.5-4 13.5-8 23-1 25.5 18.5 28.5 33.5 24.5 44-7 18-36 12-42 6.5-6-5.5-10-18.5-5.5-49.5z"/>
                        </svg>
                        <span className="text-lg tracking-tight">Buy on Amazon</span>
                    </a>
                </div>

                <div className="lg:col-span-8">
                    <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">THE DECLASSIFIED EVIDENCE</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white uppercase tracking-tight">Confidence of The Mob</h1>
                    <p className="text-lg text-stone-300 mb-12 leading-relaxed font-serif">
                        The definitive account of IRS Agent Fred Pastore's double life. This story began with a box of dusty papers. It led to uncovering Fred's secret life as "The Eliot Ness of Boston," who successfully busted rackets until he was targeted. He paid the price by leaving the IRS... only to go to work on "the other side."
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
                                    <p className="text-stone-400 text-base mb-4 flex-grow">{opt.desc}</p>
                                    
                                    <div className="bg-stone-900/80 border border-stone-700/50 rounded-lg p-3 mb-6 flex items-center gap-3 shadow-inner group-hover:border-stone-600 transition-colors">
                                        <div className="w-10 h-10 flex-shrink-0 bg-stone-950 rounded border border-stone-800 overflow-hidden relative">
                                            <img src="/images/bookmark_front_and_back.webp" alt="Custom Bookmark" className="w-full h-full object-cover scale-110" />
                                        </div>
                                        <div>
                                            <p className="text-accent-red font-mono-file text-[10px] uppercase tracking-widest mb-0.5">Bonus Included</p>
                                            <p className="text-stone-300 text-xs leading-snug font-medium">Limited edition custom bookmark</p>
                                        </div>
                                    </div>
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

                    {/* Retailer Section: Where to Buy */}
                    <div className="mb-12 pt-12 border-t border-stone-800 animate-fade-in-up">
                        <div className="mb-8">
                            <p className="text-xs text-stone-500 font-mono-file mb-2 tracking-widest uppercase">// DISTRIBUTION CHANNELS //</p>
                            <h2 className="text-3xl font-bold text-white font-serif">Where to Buy</h2>
                        </div>

                        {/* Group A: Major Retailers */}
                        <div className="mb-8">
                            <h3 className="text-sm font-mono-file text-stone-400 uppercase tracking-widest mb-4">Major Retailers</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {RETAILERS.filter(r => r.group === 'major').map((retailer, i) => (
                                    <RetailerCard key={i} {...retailer} />
                                ))}
                            </div>
                        </div>

                        {/* Group B: Independent Bookstores */}
                        <div className="pt-8 border-t border-stone-800">
                            <h3 className="text-sm font-mono-file text-stone-400 uppercase tracking-widest mb-2">Support Independent Bookstores</h3>
                            <p className="text-stone-400 text-base italic mb-6">Every indie purchase supports the bookstores hosting our events.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {RETAILERS.filter(r => r.group === 'indie').map((retailer, i) => (
                                    <RetailerCard key={i} {...retailer} />
                                ))}
                            </div>
                        </div>
                    </div>


                    
                    {/* Goodreads Reviews */}
                    <div className="mt-12 pt-12 border-t border-stone-800 animate-fade-in-up">
                        <div className="mb-8">
                            <p className="text-xs text-stone-500 font-mono-file mb-2 tracking-widest uppercase">// READER REVIEWS //</p>
                            <h2 className="text-3xl font-bold text-white font-serif">What People Are Saying</h2>
                        </div>
                        <div 
                            className="w-full overflow-hidden bg-stone-900 border border-stone-800 p-4 sm:p-8 rounded-lg flex justify-center"
                            dangerouslySetInnerHTML={{ __html: `
<style>
  #goodreads-widget {
    font-family: georgia, serif;
    padding: 0;
    width: 100%;
    max-width: 565px;
  }
  #goodreads-widget h1 {
    font-weight:normal;
    font-size: 16px;
    border-bottom: 1px solid #444;
    margin-bottom: 0;
    padding-bottom: 8px;
  }
  #goodreads-widget a {
    text-decoration: none;
    color:#f87171;
  }
  #goodreads-widget iframe {
    background-color: transparent;
    width: 100%;
  }
  #goodreads-widget a:hover { text-decoration: underline; }
  #goodreads-widget a:active {
    color:#f87171;
  }
  #gr_footer {
    width: 100%;
    border-top: 1px solid #444;
    text-align: right;
    padding-top: 8px;
  }
  #goodreads-widget .gr_branding{
    color: #888;
    font-size: 11px;
    text-decoration: none;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>
<div id="goodreads-widget">
  <div id="gr_header"><h1><a rel="nofollow" href="https://www.goodreads.com/book/isbn/9798995080404">Goodreads reviews for Confidence of The Mob</a></h1></div>
  <iframe sandbox="allow-scripts allow-same-origin allow-popups" id="the_iframe" src="https://www.goodreads.com/api/reviews_widget_iframe?did=DEVELOPER_ID&format=html&header_text=Goodreads+reviews+for+Confidence+of+The+Mob&isbn=9798995080404&links=f87171&review_back=1c1917&stars=f59e0b&text=d6d3d1" width="565" height="400" frameborder="0"></iframe>
  <div id="gr_footer">
    <a class="gr_branding" target="_blank" rel="nofollow noopener noreferrer" href="https://www.goodreads.com/book/isbn/9798995080404?utm_medium=api&utm_source=reviews_widget">Reviews from Goodreads.com</a>
  </div>
</div>
`}} 
                        />
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
                            Limited edition autographed copies are safely fulfilled directly from Eddy Inserra's private inventory.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
