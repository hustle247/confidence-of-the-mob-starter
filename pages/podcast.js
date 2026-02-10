import Head from 'next/head';

export default function Podcast() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <Head>
        <title>Podcast - Confidence of The Mob</title>
      </Head>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">ON AIR</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">The Podcast</h1>
        <p className="text-lg text-stone-400 mb-12">
          Listen to the latest episodes deconstructing the life and cases of Agent Fred Pastore.
        </p>

        {/* YouTube Video Placeholder */}
        <div className="relative w-full aspect-video bg-stone-800 rounded-xl border-2 border-stone-700 shadow-file flex items-center justify-center overflow-hidden group hover:border-accent-red transition duration-500">
          <div className="text-center">
            <div className="text-6xl text-stone-700 mb-4 group-hover:text-accent-red transition duration-300">▶</div>
            <p className="text-stone-400 font-mono-file text-xl mb-2 tracking-wider">VIDEO COMING SOON</p>
            <p className="text-stone-600 text-sm">YouTube Component Placeholder</p>
          </div>
          {/* 
            TODO: When video is ready, replace the inner content of this div with:
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          */}
        </div>
      </div>
    </div>
  );
}
