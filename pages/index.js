import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import PreorderPopup from '../components/PreorderPopup';

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
      <Head>
        <title>Confidence of The Mob - The Box, The Agent, The Files</title>
        <meta name="description" content="I thought my grandfather was just an accountant. Then I opened The Box. The never-before-seen files of IRS Agent Fred Pastore." />
      </Head>





      <main>
        {/* 1. Hero / Main Hook Section */}
        <section className="hero-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 md:pt-24 md:pb-24 text-center">
          <p className="text-xs sm:text-sm text-accent-red font-mono-file mb-4 tracking-widest uppercase">THE FLORIDA CITRUS BOX</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 text-white">
            I thought my grandfather was just an accountant.<br className="hidden sm:inline" /> Then I opened <span className="text-accent-red">The Box.</span>
          </h1>
          <p className="mt-4 text-lg text-stone-200 max-w-4xl mx-auto">
            My mother found a dusty Florida orange crate full of my grandfather Fred Pastore's old papers. I expected boring ledgers. I found secret files, wiretap logs, and evidence he was a racket-busting IRS agent... and a target of the White House.
          </p>

          {/* Primary Actions */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/podcast" legacyBehavior>
              <a className="cta-button bg-accent-red text-white font-bold py-3 px-8 rounded-lg shadow-file hover:bg-red-600 transition duration-300">
                🎧 Start Listening: Confidence of The Mob
              </a>
            </Link>
            <Link href="/files" legacyBehavior>
              <a className="cta-button bg-stone-700 text-white border border-stone-600 font-bold py-3 px-8 rounded-lg shadow-file hover:bg-stone-600 transition duration-300">
                📂 Browse the Original Files
              </a>
            </Link>
          </div>
        </section>

        {/* 2. Feature Grid / Interactive Archive Links */}
        <section id="archive" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-stone-800">
          <h2 className="text-3xl font-bold text-center mb-12">
            The <span className="text-accent-red">Fred Pastore</span> Archive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: AI Assistant (Ask Fred) */}
            <div className="bg-stone-800 p-6 rounded-xl shadow-file border-2 border-stone-700 hover:border-accent-red transition duration-500">
              <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest">DIGITAL INTERROGATION</p>
              <h3 className="text-2xl font-semibold mb-3">Ask Fred's Files (AI)</h3>
              <p className="text-stone-400 mb-4 text-sm">
                Engage with an AI assistant trained on hundreds of Fred Pastore's real government memos and wiretap logs. Ask it anything about the investigation.
              </p>
              <Link href="/ask-fred" legacyBehavior>
                <a className="inline-block text-accent-red font-bold hover:underline font-mono-file text-sm">
                  🤖 Access the AI Database &rarr;
                </a>
              </Link>
            </div>

            {/* Feature 2: Mob Web */}
            <div className="bg-stone-800 p-6 rounded-xl shadow-file border-2 border-stone-700 hover:border-accent-red transition duration-500">
              <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest">VISUALIZED NETWORK</p>
              <h3 className="text-2xl font-semibold mb-3">The Mob Web</h3>
              <p className="text-stone-400 mb-4 text-sm">
                Explore the dynamic visual maps of the crime syndicates. See who connected to who, tracing the line from the street to the corporation.
              </p>
              <Link href="/mob-web" legacyBehavior>
                <a className="inline-block text-accent-red font-bold hover:underline font-mono-file text-sm">
                  📜 View Dynamic Maps &rarr;
                </a>
              </Link>
            </div>

            {/* Feature 3: Timeline & Documents */}
            <div className="bg-stone-800 p-6 rounded-xl shadow-file border-2 border-stone-700 hover:border-accent-red transition duration-500">
              <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest">EVIDENCE & CHRONOLOGY</p>
              <h3 className="text-2xl font-semibold mb-3">Search Documents</h3>
              <p className="text-stone-400 mb-4 text-sm">
                Search and filter hundreds of primary source documents: internal raid plans, deposition transcripts, and FBI/IRS communications.
              </p>
              <Link href="/files" legacyBehavior>
                <a className="inline-block text-accent-red font-bold hover:underline font-mono-file text-sm">
                  🔍 Search the Files &rarr;
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. About the Project / Book Teaser */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-stone-800">
          <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
            {/* Text Content */}
            <div className="md:order-2">
              <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">The Full Story</p>
              <h2 className="text-3xl font-bold mb-6">
                The IRS Agent Who Took Down the Mafia—Then Advised Them
              </h2>
              <p className="text-stone-400 mb-6 leading-relaxed">
                This story began with a box of dusty papers. It led to uncovering Fred Pastore's secret life as "The Elliot Ness of Boston," who successfully busted rackets until he was targeted. He paid the price by leaving the IRS... only to go to work on "the other side."
              </p>
              <p className="text-stone-400 mb-8 leading-relaxed">
                The podcast lays out the narrative, but the companion book provides the chilling evidence: the documents proving corruption that stretched from the streets of Boston to the White House.
              </p>
              <Link href="/book" legacyBehavior>
                <a className="cta-button bg-stone-700 text-white font-bold py-3 px-8 rounded-lg shadow-file hover:bg-stone-600 transition duration-300">
                  Pre-Order The Book
                </a>
              </Link>
            </div>
            {/* Book Cover Image */}
            <div className="mt-12 md:mt-0 md:order-1 flex justify-center">
              <img
                src="/images/book_no_bg.png"
                alt="Book Cover: Confidence of The Mob by Eddy Manfred Inserra III"
                className="w-2/3 md:w-full max-w-xs rounded-xl border-4 border-stone-700 shadow-file hover:border-accent-red transition duration-500 aspect-[4/6] object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/400x600/333333/ef4444?text=BOOK+COVER+PENDING+UPLOAD';
                }}
              />
            </div>
          </div>
        </section>

        {/* 4. Subscription CTA (Insider Access) */}
        <section id="subscribe" className="bg-stone-900 py-16 md:py-24 border-t border-stone-700">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-stone-800 p-8 rounded-2xl shadow-file border-2 border-accent-red/50">
            <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">UNLOCK PREMIUM ACCESS</p>
            <h2 className="text-3xl font-bold mb-4">
              Become an <span class="text-accent-red">Insider</span>
            </h2>
            <p className="text-stone-400 mb-8">
              Your subscription funds the digitization of hundreds of documents and the maintenance of the AI tools. Get behind-the-scenes audio, bonus episodes, and deep file access.
            </p>
            <form onSubmit={handleSubscription} className="space-y-4">
              <input
                type="email"
                id="email"
                required
                placeholder="Enter your confidential email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-stone-700 text-white border border-stone-600 font-mono-file focus:border-accent-red focus:ring focus:ring-accent-red/50 transition duration-300 placeholder-stone-400"
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
        <PreorderPopup />
      </main>


    </>
  );
}
