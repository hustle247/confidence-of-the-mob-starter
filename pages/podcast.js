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
      
      <div className="max-w-3xl mx-auto my-12 text-center animate-fade-in-up">
        <p className="text-stone-300 text-lg md:text-xl font-serif leading-relaxed px-4">
          The <span className="text-white font-bold italic">Confidence of The Mob</span> podcast is a deeply researched narrative documentary series. Unpacking decades of Fred Pastore's declassified IRS records, we bring the investigation to life through real audio tapes, insider interviews, and expert analysis of how the American Mafia infiltrated the government.
        </p>
      </div>
      
      <EpisodePreview previewData={episodePreview} />

      {/* Production Credits */}
      <div className="max-w-3xl mx-auto mt-24 text-center border-t border-stone-800 pt-16">
        <p className="text-stone-500 font-mono-file text-sm uppercase tracking-widest mb-6">Production Credits</p>
        <div className="text-stone-400 leading-relaxed text-sm sm:text-base space-y-2">
          <p><span className="text-white font-semibold italic">Confidence of The Mob</span> is created, hosted, and executive produced by <strong className="text-stone-200 font-bold">Eddy Inserra</strong>.</p>
          <p>Produced by <strong className="text-stone-200 font-bold">Bobby Inserra</strong>.</p>
          <p>Narrative production by <strong className="text-stone-200 font-bold">Tim Pilleri</strong> and <strong className="text-stone-200 font-bold">Lance Reenstierna</strong> of Crawlspace Media.</p>
          <p>Sound design by <strong className="text-stone-200 font-bold">Brendan Brady</strong>.</p>
        </div>
      </div>

    </div>
  );
}
