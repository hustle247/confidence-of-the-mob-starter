import Head from 'next/head';
import Seo from "../components/Seo";
import { PAGE_META } from "../lib/seo";
import { useState } from 'react';
import Link from 'next/link';
import docs from '../data/documents.json';

export default function Documents() {
  const [activeFilter, setActiveFilter] = useState('All Files');

  const categories = ['All Files', ...Array.from(new Set(docs.map(d => d.category)))];

  const filteredDocs = activeFilter === 'All Files' 
    ? docs 
    : docs.filter(d => d.category === activeFilter);

  // Use a specific doc for the featured exhibit, or fallback to the first one
  const featuredDocId = "031_specialprojectfourbinder_1959-10-01";
  const featuredDoc = docs.find(d => d.id === featuredDocId) || docs[0];

  const openDocument = (driveId) => {
      const url = `https://drive.google.com/file/d/${driveId}/view?usp=sharing`;
      window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Seo meta={PAGE_META["/documents"]} />
      
      <main>
        <div className="py-[72px] pb-[40px] max-w-[1100px] mx-auto px-6">
          <span className="stamp">Evidence &amp; Records · From "The Box"</span>
          <h1 className="font-display font-black text-[clamp(2.2rem,4.6vw,3.4rem)] leading-[1.05] my-[20px] mb-[14px] tracking-[-0.015em]">
            The Case Files
          </h1>
          <p className="text-text-dim max-w-[40em] text-[1.1rem]">
            Every document here is real — pulled from <strong>a Florida orange crate in an attic</strong>, the JFK Library, and the National Archives. Wiretap logs, IRS memoranda, and correspondence that sat sealed for seventy years.
          </p>

          <div className="bg-ink-2 border border-rule rounded-[6px] mt-[44px] grid grid-cols-1 md:grid-cols-[1fr_1.4fr] overflow-hidden">
            <div className="bg-paper min-h-[280px] flex items-center justify-center relative">
              <span className="absolute top-[18px] right-[18px] rotate-[8deg] text-[0.7rem] border-2 stamp z-10">
                Newly Declassified
              </span>
              {featuredDoc.thumbnail ? (
                  <img src={featuredDoc.thumbnail} alt={featuredDoc.title} className="w-[70%] h-[78%] object-cover shadow-[0_12px_30px_-10px_#0008] -rotate-[1.4deg]" />
              ) : (
                <div className="bg-[#f4ecd8] w-[70%] h-[78%] shadow-[0_12px_30px_-10px_#0008] p-[22px] -rotate-[1.4deg] font-type text-[#5a4f3c] text-[0.62rem] leading-loose tracking-[0.06em] overflow-hidden">
                  <b className="block text-center text-[0.7rem] text-[#3d3426] mb-[10px]">TREASURY DEPARTMENT · INTERNAL REVENUE SERVICE</b>
                  MEMORANDUM · APRIL 20, 1959<br/>
                  TO: REGIONAL COMMISSIONER DONALD BACON<br/>
                  FROM: FRED G. PASTORE, GROUP SUPERVISOR<br/>
                  SUBJECT: RELEASE OF TAXPAYER RECORDS —<br/>
                  FORMAL OBJECTION ····································<br/>
                  ····························································<br/>
                  ····························································
                </div>
              )}
            </div>
            <div className="p-[36px]">
              <span className="font-type text-[0.7rem] tracking-[0.2em] text-stamp uppercase">
                Featured Exhibit · {featuredDoc.category}
              </span>
              <h2 className="font-display font-black text-[1.6rem] leading-[1.15] my-[10px] mb-[12px]">
                {featuredDoc.title}
              </h2>
              <p className="text-text-dim text-[0.98rem]">
                {featuredDoc.description}
              </p>
              <button onClick={() => openDocument(featuredDoc.driveId)} className="btn btn-primary mt-[22px]">
                View the document
              </button>
            </div>
          </div>

          <div className="flex gap-[10px] flex-wrap my-[56px] mb-[34px]" role="tablist" aria-label="Filter documents by category">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={activeFilter === cat}
                className={`font-type text-[0.74rem] tracking-[0.14em] uppercase border rounded-[999px] p-[0.5em_1.2em] cursor-pointer transition-all duration-150 ${activeFilter === cat ? 'bg-stamp border-stamp text-white' : 'text-text-dim border-rule hover:text-text hover:border-paper-dim bg-transparent'}`}
              >
                {cat}
              </button>
            ))}
            <span className="font-type text-[0.72rem] text-text-dim tracking-[0.12em] ml-auto self-center">
              SHOWING {filteredDocs.length} FILES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[30px] gap-x-[22px] pb-[90px]">
            {filteredDocs.map(doc => {
              // Create a short title for the tab, appending a year if it exists in the ID (e.g. 1961)
              let tabName = doc.category;
              const yearMatch = doc.id.match(/_(\d{4})-\d{2}-\d{2}$/);
              if (yearMatch) {
                  tabName += ` · ${yearMatch[1]}`;
              }

              return (
                <article key={doc.id} className="folder" data-tab={tabName}>
                  {doc.isNew && (
                    <span className="absolute top-[14px] right-[-8px] bg-stamp text-white font-type text-[0.58rem] tracking-[0.14em] p-[4px_10px] rotate-[3deg] uppercase">
                      New
                    </span>
                  )}
                  <h3 className="font-display font-bold text-[1.05rem] leading-[1.3] mb-[8px] line-clamp-2" title={doc.title}>
                    {doc.title}
                  </h3>
                  <p className="text-[0.88rem] leading-[1.55] text-[#4d4433] flex-1 line-clamp-4">
                    {doc.description}
                  </p>
                  <button onClick={() => openDocument(doc.driveId)} className="font-type text-[0.74rem] text-stamp tracking-[0.1em] inline-block mt-[16px] uppercase hover:underline text-left">
                    View archive file →
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        <div className="bg-ink-2 border-y border-rule py-[44px]">
          <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between gap-[24px] flex-wrap">
            <div>
              <h2 className="font-display font-black text-[1.5rem]">Don't dig alone.</h2>
              <p className="text-text-dim text-[0.95rem] max-w-[32em]">
                Ask Fred — the AI trained on this archive — to find the file you're looking for, or explain what one means.
              </p>
            </div>
            <Link href="/ask-fred" className="btn btn-primary">
              Ask Fred
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
