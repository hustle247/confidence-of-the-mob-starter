import Head from 'next/head';

export default function Timeline() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <Head>
        <title>Timeline - Confidence of The Mob</title>
      </Head>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">CHRONOLOGY</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Timeline</h1>
        <p className="text-lg text-stone-400 mb-12">
          Explore the timeline of events that shaped Fred's career
        </p>

        <div className="relative">
          <img
            src="/images/timeline_document.jpg"
            alt="Fred Pastore Timeline Document"
            className="mx-auto rounded-xl border-2 border-stone-700 shadow-file max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
