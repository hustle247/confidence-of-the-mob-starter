import Head from 'next/head';

export default function MobWeb() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <Head>
        <title>The Mob Web - Confidence of The Mob</title>
      </Head>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">VISUALIZED NETWORK</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">The Mob Web</h1>
        <p className="text-lg text-stone-400 mb-12">
          Explore the network of people, events, and relationships.
        </p>

        <div className="relative mb-24">
          <img
            src="/images/mob_players.jpg"
            alt="The Mob Web Players"
            className="mx-auto rounded-xl border-2 border-stone-700 shadow-file max-w-full h-auto"
          />
        </div>

        {/* Patriarca Org Chart Section */}
        <div className="mt-24 max-w-5xl mx-auto">
          <p className="text-xs text-stone-500 font-mono-file mb-4 tracking-widest uppercase text-center">// FEATURED ARCHIVE: PATRIARCA ORG CHART</p>
          <a
            href="https://drive.google.com/file/d/1b173AqtpGU7I2LtednhlnoROXw2Jr5Wz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative"
          >
            <div className="overflow-hidden rounded-xl border-2 border-stone-700 shadow-file grayscale group-hover:grayscale-0 transition-all duration-700">
              <img
                src="/images/patriarca-org-chart-thumb.webp"
                alt="Raymond Patriarca Family Org Chart"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />

              <div className="absolute bottom-4 right-4 bg-accent-red text-white text-[10px] px-3 py-1.5 uppercase tracking-widest font-mono-file shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                View Full Resolution
              </div>
            </div>
          </a>
          <p className="mt-6 text-stone-500 text-sm font-mono-file italic text-center">
            "The internal structure of the Patriarca Family of Massachusetts. Photo courtesy of Jim Donahue."
          </p>
        </div>
      </div>
    </div>
  );
}
