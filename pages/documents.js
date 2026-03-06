import Head from 'next/head';
import { useState, useEffect } from 'react';
import EvidenceGallery from '../components/EvidenceGallery';

export default function Documents() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('ACCESSING ARCHIVE...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingText('DECRYPTING CASE FILES...');
    }, 800);

    const finishTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, []);

  return (
    <div className="bg-stone-950 min-h-screen">
      <Head>
        <title>Documents - Confidence of The Mob</title>
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh] terminal-loader">
            <div className="text-xl font-mono-file mb-4 tracking-widest">
              &gt; {loadingText}
              <span className="terminal-cursor"></span>
            </div>
          </div>
        ) : (
          <>
            <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
              <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">EVIDENCE & RECORDS</p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Documents</h1>
              <p className="text-lg text-stone-400">
                Explore the official documents and records that shaped Fred's career
              </p>
            </div>

            <EvidenceGallery />

            {/* Original Timeline Document as featured item */}
            <div className="mt-24 max-w-4xl mx-auto text-center animate-fade-in">
              <p className="text-xs text-stone-500 font-mono-file mb-4 tracking-widest uppercase">// FEATURED ARCHIVE: CHRONOLOGY</p>
              <div className="relative group">
                <img
                  src="/images/timeline_document.jpg"
                  alt="Fred Pastore Timeline Document"
                  className="mx-auto rounded-xl border-2 border-stone-700 shadow-file max-w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
              </div>
              <p className="mt-6 text-stone-500 text-sm font-mono-file italic">
                "The chronology of events as documented in the original files."
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
