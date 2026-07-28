import Link from 'next/link';
import Seo from "../components/Seo";
import { PAGE_META } from "../lib/seo";
import Head from 'next/head';
import bookClips from '../data/bookClips.json';

export default function Book() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <Seo meta={PAGE_META["/book"]} />
      <div className="max-w-4xl mx-auto">
        <p className="text-xs text-red-600 font-mono-file mb-2 tracking-widest uppercase">EVIDENCE</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Audio Clips</h1>
        <p className="text-lg text-stone-400 mb-8">
          Listen to exclusive audio interviews and stories from the investigation.
        </p>

        <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-file">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Already read the book?</h2>
            <p className="text-stone-400 text-sm">
              Reviews are the lifeblood of independent authors. If you enjoyed the story, please consider leaving a quick review on Amazon to help others find it.
            </p>
          </div>
          <a 
            href="https://www.amazon.com/review/create-review/ref=cm_cr_othr_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B0GSF9DZC7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shrink-0 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-colors font-mono-file text-sm tracking-wider uppercase"
          >
            Leave a Review
          </a>
        </div>

        <div className="grid gap-6">
          {bookClips.map((clip) => (
            <Link key={clip.id} href={`/book/clip/${clip.id}`} legacyBehavior>
              <a className="block p-6 bg-stone-800 rounded-xl border-2 border-stone-700 hover:border-red-600 transition duration-500 shadow-file group">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex gap-4 mb-3 text-sm text-stone-400 font-mono-file flex-wrap">
                      <span className="font-semibold text-red-600">Page {clip.page}</span>
                      <span>Clip #{clip.clipNumber}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-red-600 transition duration-300">
                      {clip.topic}
                    </h3>
                    <p className="text-stone-400">
                      Featuring: <strong className="text-stone-300">{clip.person}</strong>
                    </p>
                  </div>
                  <div className="text-2xl text-red-600 group-hover:translate-x-1 transition duration-300">
                    ▶
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
