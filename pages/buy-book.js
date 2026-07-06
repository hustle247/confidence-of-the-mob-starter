import Head from 'next/head';
import Seo from "../components/Seo";
import { PAGE_META } from "../lib/seo";
import { RETAILERS } from "../lib/retailers";

const RetailerCard = ({ name, note, url, onClick }) => {
    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={onClick}
            className="block bg-ink border border-rule rounded-[4px] p-[22px_20px] transition-all duration-150 hover:border-paper-dim hover:-translate-y-[3px]"
        >
            <b className="font-display font-bold text-[1rem] block mb-[4px]">{name}</b>
            <span className="font-type text-[0.68rem] tracking-[0.12em] text-text-dim uppercase">{note}</span>
        </a>
    );
};

const IndieCard = ({ name, note, url, onClick }) => {
    let location = note;
    let event = null;
    if (note && note.includes('—')) {
        const parts = note.split('—');
        location = parts[0].trim();
        event = parts.slice(1).join('—').trim();
    }

    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={onClick}
            className="block border border-rule rounded-[4px] p-[22px_20px] transition-colors duration-150 hover:border-stamp"
        >
            <b className="font-display font-bold block mb-[4px]">{name}</b>
            <span className="text-[0.85rem] text-text-dim">{location}</span>
            {event && <span className="font-type text-[0.66rem] tracking-[0.12em] text-stamp block mt-[8px] uppercase">{event}</span>}
        </a>
    );
};

export default function BuyBook() {
    const handleRetailerClick = (name) => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('trackCustom', 'RetailerClick', { retailer: name });
        }
    };

    return (
        <>
            <Seo meta={PAGE_META["/buy-book"]} />
            <main>
                <div className="py-[72px] pb-[64px] max-w-[1100px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-[60px] items-center">
                        <div className="bg-ink-2 border border-rule p-[24px_24px_16px] rounded-[4px] shadow-[0_30px_60px_-20px_#000c] -rotate-[1.2deg] justify-self-center">
                            <img 
                                src="/images/book_no_bg.png" 
                                alt="Confidence of The Mob book cover" 
                                width="260" 
                                height="390"
                                className="w-[260px] rounded-[2px]"
                            />
                            <div className="font-type text-[0.7rem] text-text-dim text-center mt-[12px] tracking-[0.15em]">
                                EXHIBIT A · <em className="not-italic text-stamp">ENTERED INTO EVIDENCE</em>
                            </div>
                        </div>
                        <div>
                            <span className="stamp">All Formats · Worldwide</span>
                            <h1 className="font-display font-black text-[clamp(2.1rem,4.4vw,3.2rem)] leading-[1.06] my-[20px] mb-[16px] tracking-[-0.015em] text-balance">
                                Get your copy of the case.
                            </h1>
                            <p className="text-text-dim text-[1.1rem] max-w-[34em]">
                                The definitive account of IRS Agent Fred Pastore's double life — <strong>the "Eliot Ness of Boston"</strong> who busted the rackets, was targeted for it, and went to work for the other side.
                            </p>
                            <div className="flex gap-[26px] mt-[24px] flex-wrap">
                                <div className="font-type text-[0.72rem] tracking-[0.12em] text-text-dim uppercase">
                                    <b className="block font-display text-[1rem] text-text tracking-[0.02em] mb-[2px]">Paperback</b>
                                    Amazon &amp; retailers
                                </div>
                                <div className="font-type text-[0.72rem] tracking-[0.12em] text-text-dim uppercase">
                                    <b className="block font-display text-[1rem] text-text tracking-[0.02em] mb-[2px]">Hardcover</b>
                                    Amazon &amp; signed
                                </div>
                                <div className="font-type text-[0.72rem] tracking-[0.12em] text-text-dim uppercase">
                                    <b className="block font-display text-[1rem] text-text tracking-[0.02em] mb-[2px]">eBook</b>
                                    Kindle &amp; Apple Books
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="py-[70px] max-w-[1100px] mx-auto px-6">
                    <p className="eyebrow">Limited autographed editions</p>
                    <h2 className="font-display font-black text-[clamp(1.6rem,3.2vw,2.3rem)] leading-[1.12] my-[16px] mb-[10px] tracking-[-0.01em]">
                        Signed by the author. Shipped from his desk.
                    </h2>
                    <p className="text-text-dim max-w-[36em] text-[1.02rem]">
                        Fulfilled directly from Eddy Inserra's private inventory — each copy signed by hand and shipped with a limited-edition custom bookmark.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[26px] mt-[40px]">
                        <article className="folder" data-tab="Edition 01">
                            <span className="absolute top-[20px] right-[20px] font-type text-stamp border-2 border-stamp rounded-[4px] p-[0.15em_0.5em] text-[0.68rem] tracking-[0.14em] rotate-[6deg] uppercase">
                                Signed
                            </span>
                            <h3 className="font-display font-black text-[1.5rem] mb-[6px]">Autographed Hardcover</h3>
                            <div className="font-display font-black text-[2rem] text-stamp my-[10px] mb-[4px]">$39.99</div>
                            <p className="text-[0.92rem] text-[#4d4433] leading-[1.55]">The collector's format — casebound, signed by Eddy Inserra.</p>
                            <ul className="list-none my-[16px] mb-[22px] text-[0.88rem] text-[#4d4433] space-y-[6px]">
                                <li className="pl-[22px] relative"><span className="absolute left-0 text-stamp font-bold">✓</span> Hand-signed by the author</li>
                                <li className="pl-[22px] relative"><span className="absolute left-0 text-stamp font-bold">✓</span> Limited-edition custom bookmark included</li>
                                <li className="pl-[22px] relative"><span className="absolute left-0 text-stamp font-bold">✓</span> Ships directly to you</li>
                            </ul>
                            <a className="btn btn-primary w-full" href="https://buy.stripe.com/3cI4gyeBpdEAcOCaH4bwk00">Buy the signed hardcover</a>
                        </article>

                        <article className="folder" data-tab="Edition 02">
                            <span className="absolute top-[20px] right-[20px] font-type text-stamp border-2 border-stamp rounded-[4px] p-[0.15em_0.5em] text-[0.68rem] tracking-[0.14em] rotate-[6deg] uppercase">
                                Signed
                            </span>
                            <h3 className="font-display font-black text-[1.5rem] mb-[6px]">Autographed Paperback</h3>
                            <div className="font-display font-black text-[2rem] text-stamp my-[10px] mb-[4px]">$29.99</div>
                            <p className="text-[0.92rem] text-[#4d4433] leading-[1.55]">The reader's format — same signature, easier on the shelf.</p>
                            <ul className="list-none my-[16px] mb-[22px] text-[0.88rem] text-[#4d4433] space-y-[6px]">
                                <li className="pl-[22px] relative"><span className="absolute left-0 text-stamp font-bold">✓</span> Hand-signed by the author</li>
                                <li className="pl-[22px] relative"><span className="absolute left-0 text-stamp font-bold">✓</span> Limited-edition custom bookmark included</li>
                                <li className="pl-[22px] relative"><span className="absolute left-0 text-stamp font-bold">✓</span> Ships directly to you</li>
                            </ul>
                            <a className="btn btn-primary w-full" href="https://buy.stripe.com/aFa7sKfFt58429YdTgbwk01">Buy the signed paperback</a>
                        </article>
                    </div>
                    <p className="font-type text-[0.7rem] tracking-[0.14em] text-text-dim text-center mt-[22px] uppercase">
                        Secure checkout via Stripe · Signed copies are limited
                    </p>
                </section>

                <section className="bg-ink-2 border-y border-rule py-[70px]">
                    <div className="max-w-[1100px] mx-auto px-6">
                        <p className="eyebrow">Major retailers</p>
                        <h2 className="font-display font-black text-[clamp(1.6rem,3.2vw,2.3rem)] leading-[1.12] my-[16px] mb-[10px] tracking-[-0.01em]">
                            Prefer your usual bookstore? It's there too.
                        </h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] mt-[36px]">
                            <RetailerCard 
                                name="Amazon" 
                                note="Paperback · Hardcover · Kindle" 
                                url="https://www.amazon.com/dp/B0GSF9DZC7?ref=cotmweb" 
                                onClick={() => handleRetailerClick('Amazon')}
                            />
                            {RETAILERS.filter(r => r.group === 'major').map((retailer, i) => (
                                <RetailerCard 
                                    key={i} 
                                    {...retailer} 
                                    onClick={() => handleRetailerClick(retailer.name)} 
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-[70px] max-w-[1100px] mx-auto px-6">
                    <div className="flex justify-between items-end gap-[24px] flex-wrap">
                        <div>
                            <p className="eyebrow">Support independent bookstores</p>
                            <h2 className="font-display font-black text-[clamp(1.6rem,3.2vw,2.3rem)] leading-[1.12] my-[16px] mb-[10px] tracking-[-0.01em]">
                                Buy indie. They host the events.
                            </h2>
                            <p className="text-text-dim max-w-[36em] text-[1.02rem]">
                                Every independent purchase supports the bookstores that host our signings and author talks.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] mt-[36px]">
                        {RETAILERS.filter(r => r.group === 'indie').map((retailer, i) => (
                            <IndieCard 
                                key={i} 
                                {...retailer} 
                                onClick={() => handleRetailerClick(retailer.name)} 
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
