import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <div className="bg-stone-950 min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Head>
        <title>404: File Not Found | Confidence of The Mob</title>
      </Head>

      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-accent-red/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-2xl mx-auto text-center relative z-10 w-full">
        <div className="bg-stone-900 border-2 border-stone-800 rounded-xl p-8 sm:p-12 shadow-file text-left relative">
          
          {/* Subtle watermark or decorative element */}
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-100">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
          </div>

          <div className="mb-8">
            <p className="text-xs text-accent-red font-mono-file tracking-widest uppercase mb-4">ERROR 404</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-2 tracking-tight uppercase">
              // FILE NOT FOUND //
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-500 mb-6 uppercase">
              This document has been redacted.
            </h2>
            <p className="text-stone-300 font-mono-file italic border-l-4 border-accent-red pl-6 py-2 text-sm mt-8 leading-relaxed">
              "The record you are attempting to access has been removed, classified, or shredded. The mob leaves no paper trail, and neither does this link."
            </p>
          </div>

          <p className="text-stone-400 text-lg mb-8 font-serif">
            Return to the investigation by exploring available evidence:
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/buy-book" legacyBehavior>
              <a className="flex items-center justify-center gap-2 bg-accent-red text-white font-bold py-3 px-6 rounded-lg shadow-file hover:bg-red-600 transition duration-300 transform hover:scale-[1.02]">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                Secure the Book
              </a>
            </Link>
            <Link href="/podcast" legacyBehavior>
              <a className="flex items-center justify-center gap-2 bg-stone-800 text-white font-bold border border-stone-600 py-3 px-6 rounded-lg hover:bg-stone-700 transition duration-300 transform hover:scale-[1.02]">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                Listen to the Podcast
              </a>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-stone-800 text-center">
            <Link href="/" legacyBehavior>
              <a className="text-stone-500 hover:text-stone-300 transition duration-300 font-mono-file text-xs sm:text-sm uppercase tracking-widest underline underline-offset-4">
                &larr; Return to Headquarters
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
