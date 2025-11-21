import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscription = (e) => {
    e.preventDefault();
    // Simulate API call success
    setMessage(`[CONFIRMED] Email logged: ${email}. Thank you, Insider.`);
    setEmail('');
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <>
      {/* 1. Hero / Main Hook Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 md:pt-24 md:pb-24 text-center">
        <p className="text-xs sm:text-sm text-accent-red font-mono-file mb-4 tracking-widest uppercase">
          IRS SPECIAL AGENT FRED G. PASTORE - CASE FILES 1953-1960
        </p>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          What if the Mob wasn't your biggest threat—<br className="hidden sm:inline" /> your own{' '}
          <span className="text-accent-red">government</span> was?
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
          The never-before-seen files of the IRS's top mob hunter. What he uncovered—from illicit gambling to corporate
          corruption and a White House bribery chain—made him a target. Now, his grandson opens the archive.
        </p>

        {/* Primary Actions */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href="/podcast">
            <a className="cta-button bg-accent-red text-white font-bold py-3 px-8 rounded-lg shadow-file hover:bg-red-600 transition duration-300">
              🎧 Listen to the Podcast
            </a>
          </Link>
          <Link href="/files">
            <a className="cta-button bg-gray-700 text-white border border-gray-600 font-bold py-3 px-8 rounded-lg shadow-file hover:bg-gray-600 transition duration-300">
              📂 Browse the Case Files
            </a>
          </Link>
        </div>
      </section>

      {/* 2. Feature Grid / Interactive Archive Links */}
      <section id="archive" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">
          The <span className="text-accent-red">Interactive</span> Archive
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: AI Assistant (Ask Fred) */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-file border-2 border-gray-700 hover:border-accent-red transition duration-500">
            <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest">DIGITAL INTERROGATION</p>
            <h3 className="text-2xl font-semibold mb-3">Ask Fred's Files (AI)</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Engage with an AI assistant trained on hundreds of Fred Pastore's real government memos and wiretap logs.
              Ask it anything about the investigation.
            </p>
            <Link href="/ask-fred">
              <a className="inline-block text-accent-red font-bold hover:underline font-mono-file text-sm">
                🤖 Access the AI Database &rarr;
              </a>
            </Link>
          </div>

          {/* Feature 2: Mob Web */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-file border-2 border-gray-700 hover:border-accent-red transition duration-500">
            <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest">VISUALIZED NETWORK</p>
            <h3 className="text-2xl font-semibold mb-3">The Mob Web</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Explore the dynamic visual maps of the crime syndicates. See who connected to who, tracing the line from
              the street to the corporation.
            </p>
            <Link href="/mob-web">
              <a className="inline-block text-accent-red font-bold hover:underline font-mono-file text-sm">
                📜 View Dynamic Maps &rarr;
              </a>
            </Link>
          </div>

          {/* Feature 3: Timeline & Documents */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-file border-2 border-gray-700 hover:border-accent-red transition duration-500">
            <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest">EVIDENCE & CHRONOLOGY</p>
            <h3 className="text-2xl font-semibold mb-3">Search Documents</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Search and filter hundreds of primary source documents: internal raid plans, deposition transcripts, and
              FBI/IRS communications.
            </p>
            <Link href="/files">
              <a className="inline-block text-accent-red font-bold hover:underline font-mono-file text-sm">
                🔍 Search the Files &rarr;
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. About the Project / Book Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-gray-800">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
          {/* Text Content */}
          <div className="md:order-2">
            <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">The Full Story</p>
            <h2 className="text-3xl font-bold mb-6">More Than a Podcast: The Companion Book</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              "Confidence of the Mob" is an immersive, multi-platform project. While the podcast lays out the narrative,
              the companion book and digital archive provide the evidence—the documents that were locked away for
              decades.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Fred uncovered high-stakes corruption at Raytheon and a bribery scheme that led straight to the highest
              offices in D.C. These revelations led to a career-ending confrontation. The truth is now in the open.
            </p>
            <Link href="/book">
              <a className="cta-button bg-gray-700 text-white font-bold py-3 px-8 rounded-lg shadow-file hover:bg-gray-600 transition duration-300">
                Explore The Book
              </a>
            </Link>
          </div>
          {/* Mock Book Cover/Image Placeholder */}
          <div className="mt-12 md:mt-0 md:order-1 flex justify-center">
            <img
              src="https://placehold.co/400x550/333333/ef4444?text=BOOK+COVER+MOCKUP"
              alt="Mockup of the Confidence of The Mob book cover"
              className="w-2/3 md:w-full max-w-xs rounded-xl border-4 border-gray-700 shadow-file hover:border-accent-red transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* 4. Subscription CTA (Insider Access) */}
      <section id="subscribe" className="bg-gray-900 py-16 md:py-24 border-t border-gray-700">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-800 p-8 rounded-2xl shadow-file border-2 border-accent-red/50">
          <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">UNLOCK PREMIUM ACCESS</p>
          <h2 className="text-3xl font-bold mb-4">
            Become an <span className="text-accent-red">Insider</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Your subscription funds the digitization of hundreds of documents and the maintenance of the AI tools. Get
            behind-the-scenes audio, bonus episodes, and deep file access.
          </p>
          <form onSubmit={handleSubscription} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your confidential email address"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 font-mono-file focus:border-accent-red focus:ring focus:ring-accent-red/50 transition duration-300 placeholder-gray-400"
            />
            <button
              type="submit"
              className="cta-button w-full bg-accent-red text-white font-bold py-3 px-8 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Join the Investigation
            </button>
            {message && (
              <p className={`text-sm mt-3 font-mono-file ${message.includes('CONFIRMED') ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
