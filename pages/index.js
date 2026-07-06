import Link from 'next/link';
import Image from 'next/image';
import Seo from "../components/Seo";
import { PAGE_META } from "../lib/seo";

export default function Home() {
  return (
    <>
      <Seo meta={PAGE_META["/"]} />

      <main>
        {/* ---------- hero ---------- */}
        <section className="relative py-[88px] pb-[72px]">
          <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-[56px] items-center">
            <div>
              <span className="stamp mb-[26px] text-[1rem]">Declassified · Case №59-041</span>
              <h1 className="font-display font-black text-[clamp(2.3rem,5.2vw,3.9rem)] leading-[1.04] tracking-[-0.015em] text-balance">
                I thought my grandfather was just an accountant. <span className="text-paper-dim">Then I opened The Box.</span>
              </h1>
              <p className="text-[1.15rem] text-text-dim my-[22px] mb-[8px] max-w-[34em]">
                A Florida orange crate in my mother's attic held <strong className="text-text font-semibold">secret files, wiretap logs, and evidence</strong> that Fred Pastore — the IRS agent who took down the Boston Mafia — became a target of the White House. And then went to work for the other side.
              </p>
              <div className="flex gap-[16px] mt-[34px] flex-wrap items-center">
                <a className="btn btn-primary" href="https://www.amazon.com/dp/B0GSF9DZC7?ref=cotmweb" target="_blank" rel="noopener noreferrer">Order the Book</a>
                <Link href="/buy-book" className="btn btn-ghost">
                  Autographed Copies
                </Link>
                <span className="font-type text-[0.75rem] text-text-dim w-full tracking-[0.08em]">Paperback · Hardcover · Signed editions limited</span>
              </div>
            </div>
            
            <div className="relative justify-self-center">
              <div className="bg-ink-2 border border-rule p-[26px_26px_18px] rounded-[4px] shadow-[0_30px_60px_-20px_#000c] rotate-[1.2deg]">
                <Image 
                  src="/images/book_no_bg.webp" 
                  alt="Confidence of The Mob book cover" 
                  width={280} 
                  height={420} 
                  className="w-[280px] rounded-[2px]"
                />
                <div className="font-type text-[0.72rem] text-text-dim text-center mt-[14px] tracking-[0.15em]">
                  EXHIBIT A · <em className="text-stamp not-italic">ENTERED INTO EVIDENCE</em>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- featured-on strip ---------- */}
        <section className="border-y border-rule py-[18px] mt-[70px]">
          <div className="max-w-[1100px] mx-auto px-6 flex gap-[12px_40px] items-center justify-center flex-wrap">
            <span className="font-type text-[0.72rem] tracking-[0.2em] text-text-dim uppercase">As featured on</span>
            <b className="font-display font-bold text-[0.95rem] text-paper-dim tracking-[0.03em]">WGN Chicago</b>
            <b className="font-display font-bold text-[0.95rem] text-paper-dim tracking-[0.03em]">Gangland Wire</b>
            <b className="font-display font-bold text-[0.95rem] text-paper-dim tracking-[0.03em]">Woburn Daily Times</b>
            <b className="font-display font-bold text-[0.95rem] text-paper-dim tracking-[0.03em]">Barnes &amp; Noble Nationwide</b>
          </div>
        </section>

        {/* ---------- evidence / documents section ---------- */}
        <section className="py-[84px] max-w-[1100px] mx-auto px-6">
          <p className="eyebrow">The evidence</p>
          <h2 className="font-display font-black text-[clamp(1.7rem,3.4vw,2.5rem)] leading-[1.1] my-[18px] mb-[14px] tracking-[-0.01em]">
            The story is in the book. The proof is in the files.
          </h2>
          <p className="text-text-dim max-w-[38em] text-[1.05rem]">
            Wiretap logs, IRS memoranda, and a telegram sent to President Kennedy — documents that sat unread for seventy years. Open the folders.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] mt-[44px]">
            <article className="folder" data-tab="File 01 · 1959">
              <h3 className="font-display font-bold text-[1.15rem] mb-[8px]">The Goldfine Memorandum</h3>
              <p className="text-[0.92rem] leading-[1.55] text-[#4d4433] flex-1">
                Fred's formal objection to releasing Bernard Goldfine's records — the document that put him in the White House's crosshairs.
              </p>
              <Link href="/documents" className="font-type text-[0.78rem] text-stamp tracking-[0.1em] inline-block mt-[14px] uppercase hover:underline">
                Open file →
              </Link>
            </article>
            <article className="folder" data-tab="File 02 · 1961">
              <h3 className="font-display font-bold text-[1.15rem] mb-[8px]">The Telegram to JFK</h3>
              <p className="text-[0.92rem] leading-[1.55] text-[#4d4433] flex-1">
                April 13, 1961: a career agent wires the President and the Attorney General directly. The acknowledgment came from Kenneth O'Donnell. The answer never came.
              </p>
              <Link href="/documents" className="font-type text-[0.78rem] text-stamp tracking-[0.1em] inline-block mt-[14px] uppercase hover:underline">
                Open file →
              </Link>
            </article>
            <article className="folder" data-tab="File 03 · The Box">
              <h3 className="font-display font-bold text-[1.15rem] mb-[8px]">The Wiretap Logs</h3>
              <p className="text-[0.92rem] leading-[1.55] text-[#4d4433] flex-1">
                Surveillance notes from the streets of Boston's North End — the racket-busting casework that earned Fred the name "the Eliot Ness of Boston."
              </p>
              <Link href="/documents" className="font-type text-[0.78rem] text-stamp tracking-[0.1em] inline-block mt-[14px] uppercase hover:underline">
                Open file →
              </Link>
            </article>
          </div>
        </section>

        {/* ---------- Ask Fred ---------- */}
        <section className="bg-ink-2 border-y border-rule py-[84px]">
          <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-[56px] items-center">
            <div>
              <p className="eyebrow">Interrogate the archive</p>
              <h2 className="font-display font-black text-[clamp(1.7rem,3.4vw,2.5rem)] leading-[1.1] my-[18px] mb-[14px] tracking-[-0.01em]">
                Ask Fred.
              </h2>
              <p className="text-text-dim max-w-[38em] text-[1.05rem]">
                An AI trained on the case files, the book, and the archival record. Ask it anything — it answers from the documents, and shows you which ones.
              </p>
              <div className="mt-[34px]">
                <Link href="/ask-fred" className="btn btn-primary">
                  Start asking
                </Link>
              </div>
            </div>
            
            <div className="bg-ink border border-rule rounded-[6px] font-type text-[0.85rem] overflow-hidden shadow-[0_20px_40px_-20px_#000a]" role="img" aria-label="Example conversation with the Ask Fred AI">
              <div className="bg-[#0d0b0a] p-[10px_16px] text-[0.68rem] tracking-[0.18em] text-text-dim border-b border-rule">
                ASK FRED · CONNECTED TO CASE ARCHIVE
              </div>
              <div className="p-[22px] flex flex-col gap-[16px]">
                <p className="text-paper-dim before:content-['YOU_›_'] before:text-text-dim">
                  Why did Fred leave the IRS?
                </p>
                <p className="text-text border-l-2 border-stamp pl-[14px] leading-[1.7] before:content-['FRED\'S_FILES_›_'] before:text-stamp before:block before:mb-[4px] before:text-[0.7rem]">
                  The paper trail points to April 1959. His memorandum to Regional Commissioner Bacon objected to releasing Goldfine's records — and the pressure that followed came from above his pay grade. Want to see the memo itself?
                  <span className="inline-block w-[8px] h-[14px] bg-stamp animate-pulse align-[-2px] ml-[2px]"></span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- testimonial ---------- */}
        <section className="text-center py-[84px] max-w-[1100px] mx-auto px-6">
          <p className="eyebrow justify-center">Reader verdicts</p>
          <blockquote className="font-body italic font-normal text-[clamp(1.35rem,2.8vw,1.9rem)] leading-[1.45] max-w-[26em] mx-auto my-[26px] mb-[18px] text-balance">
            "I don't know how you did it, but somehow you made being an IRS agent sound <mark className="bg-transparent text-stamp italic">pretty f*cking cool</mark>."
          </blockquote>
          <cite className="font-type text-[0.75rem] tracking-[0.18em] text-text-dim not-italic uppercase">
            — CG27 · Verified reader
          </cite>
        </section>

      </main>
    </>
  );
}
