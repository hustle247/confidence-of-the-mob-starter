import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import PreorderPopup from '../components/PreorderPopup';
import NewsletterGateForm from '../components/podcast/NewsletterGateForm';

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
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-stone-200 max-w-4xl mx-auto">
            The IRS Agent Who Took Down the Mafia—Then Advised Them.
          </h2>
          <p className="mt-6 text-lg text-stone-400 max-w-3xl mx-auto font-serif">
            My mother found a dusty Florida orange crate full of my grandfather Fred Pastore's old papers. I expected boring ledgers. I found secret files, wiretap logs, and evidence he was a racket-busting IRS agent... and a target of the White House.
          </p>

          {/* Primary Actions */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-10 sm:space-y-0 sm:space-x-6">
            <div className="relative">
              <Link href="https://www.amazon.com/dp/B0GSF9DZC7?ref=cotmweb" legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 cta-button bg-accent-red text-white font-bold py-3 px-8 rounded-lg shadow-file hover:bg-red-600 transition duration-300"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                  Order The Book
                </a>
              </Link>
            </div>
            <div className="relative group">
              <div className="badge-limited">
                Limited Supply
              </div>
              <Link href="/buy-book" legacyBehavior>
                <a className="flex items-center justify-center gap-2 cta-button premium-glow bg-stone-200 text-stone-900 border border-stone-300 font-extrabold py-3 px-8 rounded-lg shadow-file hover:bg-white transition duration-300 hover:scale-105 active:scale-95">
                  <svg className="w-5 h-5 flex-shrink-0 text-stone-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  Autographed Editions
                </a>
              </Link>
            </div>
          </div>

          {/* Sub-Hero Email Capture */}
          <div className="mt-16 max-w-xl mx-auto px-4 bg-stone-900/60 p-6 sm:p-8 rounded-2xl border border-stone-800 shadow-file backdrop-blur-sm relative z-20">
            <h3 className="text-xl font-bold text-white mb-2 font-mono-file tracking-tight"><span className="text-accent-red">//</span> FOLLOW THE INVESTIGATION</h3>
            <p className="text-sm text-stone-400 mb-6 font-serif">Sign up for exclusive access to Fred's case notes and upcoming podcast episodes before they hit the public feed.</p>
            <NewsletterGateForm signupCTA="Become an Insider" />
          </div>
        </section>
        {/* 1.5 Reader Testimonials Section */}
        <section className="bg-stone-900/40 py-16 border-t border-b border-stone-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs text-stone-500 font-mono-file mb-8 tracking-[0.3em] uppercase text-center">// READER EVIDENCE: DECLASSIFIED FEEDBACK //</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* J.H. Testimonial */}
              <div className="bg-stone-800/50 p-8 rounded-xl border border-stone-700 hover:border-accent-red/50 transition duration-500 shadow-file">
                <div className="flex text-accent-red mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h4 className="text-white font-bold mb-2">"Powerful story"</h4>
                <p className="text-stone-400 text-sm italic leading-relaxed mb-6">
                  "Very revealing look at early efforts of the IRS to take down criminal racketeers through tax evasion, when other legal avenues were less effective. Looks at high level government pressure and it's consequences."
                </p>
                <div className="flex items-center justify-between text-[10px] font-mono-file tracking-widest uppercase text-stone-500">
                  <span>From: J.H.</span>
                  <span className="text-accent-red/70">Verified Purchase</span>
                </div>
              </div>

              {/* CG27 Testimonial */}
              <div className="bg-stone-800/50 p-8 rounded-xl border border-stone-700 hover:border-accent-red/50 transition duration-500 shadow-file flex flex-col justify-between">
                <div>
                  <div className="flex text-accent-red mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white text-lg font-bold leading-tight mb-8">
                    "I don’t know how you did it but somehow you made being an IRS agent sound pretty f*cking cool."
                  </p>
                </div>
                <div className="text-[10px] font-mono-file tracking-widest uppercase text-stone-500">
                  <span>From: CG27</span>
                </div>
              </div>

              {/* Andrea DeFusco-Sullivan Testimonial */}
              <div className="bg-stone-800/50 p-8 rounded-xl border border-stone-700 hover:border-accent-red/50 transition duration-500 shadow-file flex flex-col justify-between">
                <div>
                  <div className="flex text-accent-red mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white text-lg font-bold leading-tight mb-8">
                    "If you like true crime memoirs, you'll love it... Highly recommended!"
                  </p>
                  <p className="text-stone-400 text-sm italic leading-relaxed mb-6">
                    "...and for those of us with roots in the Northeastern U.S., it's even more fascinating."
                  </p>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono-file tracking-widest uppercase text-stone-500">
                  <span>From: Andrea DeFusco-Sullivan</span>
                  <span className="text-accent-red/70">Verified Purchase</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Feature Grid / Interactive Archive Links */}
        {/* <section id="archive" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-stone-800">
          <h2 className="text-3xl font-bold text-center mb-12">
            The <span className="text-accent-red">Fred Pastore</span> Archive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </section> */}

        {/* 3. About the Project / Book Teaser */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-stone-800">
          <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
            {/* Text Content */}
            <div className="md:order-2">
              <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">The Full Story</p>
              <h2 className="text-3xl font-bold mb-6">
                Discover The Evidence
              </h2>
              <p className="text-stone-400 mb-6 leading-relaxed">
                This story began with a box of dusty papers. It led to uncovering Fred Pastore's secret life as "The Elliot Ness of Boston," who successfully busted rackets until he was targeted. He paid the price by leaving the IRS... only to go to work on "the other side."
              </p>
              <p className="text-stone-400 mb-8 leading-relaxed">
                The podcast lays out the narrative, but the companion book provides the chilling evidence: the documents proving corruption that stretched from the streets of Boston to the White House.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/buy-book" legacyBehavior>
                  <a className="cta-button bg-stone-700 text-white font-bold py-3 px-6 rounded-lg shadow-file hover:bg-stone-600 transition duration-300 text-center">
                    Order The Book
                  </a>
                </Link>
                <Link href="/book" legacyBehavior>
                  <a className="cta-button bg-accent-red text-white font-bold py-3 px-6 rounded-lg shadow-file hover:bg-red-700 transition duration-300 text-center">
                    🎧 Audio Clips from the Book
                  </a>
                </Link>
              </div>
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
        {/* <section id="subscribe" className="bg-stone-900 py-16 md:py-24 border-t border-stone-700">
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
        </section> */}
        <PreorderPopup />
      </main>


    </>
  );
}
