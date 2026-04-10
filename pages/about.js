import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About the Author - Confidence of The Mob</title>
        <meta name="description" content="Meet Eddy Inserra, the author of Confidence of The Mob and the man who uncovered the files of IRS Agent Fred Pastore." />
      </Head>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 font-mono-file text-sm text-stone-500 uppercase tracking-wider">
          <Link href="/" className="hover:text-accent-red transition">// Home</Link> <span className="mx-2">&gt;</span> <span className="text-stone-300">Personnel File</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-stone-300">
          
          {/* Photo & Identity Sidebar */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            <div className="relative">
              {/* Photo Box */}
              <div className="border border-stone-700 bg-stone-900 p-3 shadow-file transform -rotate-1 hover:rotate-0 transition duration-500">
                <img 
                  src="/images/author-photo.jpg" 
                  alt="Eddy Inserra - Author" 
                  className="w-full h-auto aspect-square object-cover filter grayscale hover:grayscale-0 transition duration-700" 
                  onError={(e) => { e.target.src = 'https://placehold.co/600x600/333333/555555?text=AUTHOR+PHOTO+MISSING' }}
                />
                <div className="mt-3 flex justify-between items-center px-1">
                  <p className="font-mono-file text-[10px] tracking-widest uppercase text-stone-500">Exhibit A.1</p>
                  <p className="font-mono-file text-[10px] tracking-widest text-accent-red">DTC: 1985</p>
                </div>
              </div>
              {/* Paperclip Graphic (CSS generated) */}
              <div className="absolute -top-4 -left-4 w-8 h-16 border-4 border-stone-400 rounded-full bg-transparent z-10 hidden sm:block opacity-70" style={{ transform: 'rotate(-15deg)', clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 70%)' }}></div>
            </div>

            <div className="border border-stone-800 bg-stone-900/50 p-6 rounded-lg font-mono-file text-xs leading-loose">
              <p><span className="text-stone-500">NAME:</span> <span className="text-white">EDDY MANFRED INSERRA III</span></p>
              <p><span className="text-stone-500">ORIGIN:</span> <span className="text-white">WOBURN, MASSACHUSETTS</span></p>
              <p><span className="text-stone-500">RELATION:</span> <span className="text-white">GRANDSON (FRED PASTORE)</span></p>
              <p><span className="text-stone-500">STATUS:</span> <span className="text-green-500">ACTIVE - INVESTIGATING</span></p>
            </div>
          </div>

          {/* Biography Content */}
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 border-b border-stone-800 pb-4">
              The <span className="text-accent-red">Author</span>
            </h1>
            
            <div className="space-y-6 text-lg leading-relaxed font-serif text-stone-300">
              <p>
                Born and raised in Woburn, Massachusetts, Eddy is a lifelong entrepreneur, pioneer of the “link in bio” social media space, and subject matter expert in X-ray detection technology.
              </p>
              <p>
                After receiving a box filled with his Grandfather Fred’s personal case files from his mother—filled with government memos and handwritten notes—Eddy embarked on a journey to uncover his grandfather’s hidden legacy. It was a story that intertwined organized crime, political scandal, and the enduring fight for integrity.
              </p>
              <p>
                Eddy is also the creator and host of the companion podcast to his book <span className="italic">"Confidence of The Mob"</span>, which brings Fred’s story to life through firsthand interviews, archival documents, and rare historical insights.
              </p>
              <p>
                Today, Eddy lives in Massachusetts with his family, where he continues to build new platforms, tell powerful stories, and honor the legacies that shaped him.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-stone-800 flex gap-4">
              <Link href="/podcast" className="bg-accent-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-file transition">
                Listen to the Podcast
              </Link>
              <Link href="/buy-book" className="bg-stone-800 hover:bg-stone-700 text-white font-bold py-3 px-6 rounded-lg shadow-file border border-stone-700 transition">
                Order the Book
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
