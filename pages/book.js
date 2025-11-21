import Link from 'next/link';
import bookClips from '../data/bookClips.json';

export default function Book() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">COMPANION BOOK</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Book</h1>
        <p className="text-lg text-gray-400 mb-12">
          Read excerpts from the companion book. Click on any clip below to listen to audio interviews and stories.
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-8 text-white border-b border-gray-700 pb-4">
            Audio <span className="text-accent-red">Clips</span>
          </h2>
          
          <div className="grid gap-6">
            {bookClips.map((clip) => (
              <Link key={clip.id} href={`/book/clip/${clip.id}`}>
                <a className="block p-6 bg-gray-800 rounded-xl border-2 border-gray-700 hover:border-accent-red transition duration-500 shadow-file group">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div className="flex-1">
                      <div className="flex gap-4 mb-3 text-sm text-gray-400 font-mono-file flex-wrap">
                        <span className="font-semibold text-accent-red">Page {clip.page}</span>
                        <span>Clip #{clip.clipNumber}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-accent-red transition duration-300">
                        {clip.topic}
                      </h3>
                      <p className="text-gray-400">
                        Featuring: <strong className="text-gray-300">{clip.person}</strong>
                      </p>
                    </div>
                    <div className="text-2xl text-accent-red group-hover:translate-x-1 transition duration-300">
                      ▶
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
