import { useRouter } from 'next/router';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import bookClips from '../../../data/bookClips.json';

export default function BookClip() {
  const router = useRouter();
  const { id } = router.query;

  // Find the clip data
  const clip = bookClips.find(c => c.id === parseInt(id));

  if (!clip) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">Clip Not Found</h1>
          <p className="text-gray-400 mb-6">The audio clip you're looking for doesn't exist.</p>
          <Link href="/book">
            <a className="text-accent-red hover:underline font-mono-file">← Back to Book</a>
          </Link>
        </div>
      </div>
    );
  }

  const audioPath = `/audio/book/${clip.audioFile}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/book">
          <a className="text-accent-red hover:underline font-mono-file mb-6 inline-block transition duration-300">
            ← Back to Book
          </a>
        </Link>

        <div className="mt-8">
          <div className="bg-gray-800 p-4 rounded-lg mb-6 text-sm text-gray-400 font-mono-file border border-gray-700">
            <strong className="text-accent-red">Book Page {clip.page}</strong> • Clip #{clip.clipNumber}
          </div>

          <h1 className="text-4xl font-bold mb-4 text-white">
            {clip.topic}
          </h1>
          
          <p className="text-lg text-gray-400 mb-8">
            Featuring: <strong className="text-gray-300">{clip.person}</strong>
          </p>

          <AudioPlayer 
            src={audioPath} 
            title={`Audio Clip #${clip.clipNumber}`}
          />

          {/* Podcast Upsell Section */}
          <div className="mt-12 p-8 bg-gray-900 rounded-2xl shadow-file border-2 border-accent-red/50 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Want to hear the <span className="text-accent-red">full story</span>?
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              This is just a preview. Listen to the complete companion podcast series 
              featuring extended interviews, deeper analysis, and never-before-heard stories.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/podcast">
                <a className="cta-button bg-white text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
                  🎧 Listen to Full Podcast
                </a>
              </Link>
              <Link href="/subscribe">
                <a className="cta-button bg-transparent text-white font-bold py-3 px-8 rounded-lg border-2 border-white hover:bg-white/10 transition duration-300">
                  Subscribe for Updates
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
