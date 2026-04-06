import Head from 'next/head';
import PodcastHero from '../components/podcast/PodcastHero';
import EpisodePreview from '../components/podcast/EpisodePreview';
import { episodePreview } from '../content/podcastPreview';

export default function Podcast() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 fade-in">
      <Head>
        <title>Podcast - Confidence of The Mob</title>
      </Head>
      
      <PodcastHero />
      
      <EpisodePreview previewData={episodePreview} />

      {/* Optional Credibility Section placeholder */}
      <div className="max-w-3xl mx-auto mt-24 text-center border-t border-stone-800 pt-16">
        <p className="text-stone-500 font-mono-file text-sm uppercase tracking-widest mb-4">Investigative Archives</p>
        <p className="text-stone-400 leading-relaxed text-lg">
          The upcoming podcast series features real audio recordings, declassified agency memos, and exclusive interviews gathered over years of research. 
        </p>
      </div>

    </div>
  );
}
