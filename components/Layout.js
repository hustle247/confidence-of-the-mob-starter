import Link from 'next/link';
import { useState, useEffect } from 'react';
import NewsletterGateForm from './podcast/NewsletterGateForm';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('cookie_consent')) {
      setCookieConsent(false);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setCookieConsent(true);
  };

  return (
    <div className="min-h-screen antialiased relative">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:px-4 focus:py-2 focus:bg-accent-red focus:text-white focus:z-50 focus:outline-none m-2 rounded-lg left-0 top-0">
        Skip to main content
      </a>
      <div className="scanlines"></div>
      {/* Header & Navigation */}
      <header className="sticky top-0 z-50 header-bg border-b border-stone-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" legacyBehavior>
            <a className="text-base sm:text-lg md:text-xl font-bold tracking-wider text-white rounded-lg py-2 hover:text-accent-red transition duration-300 font-mono-file flex items-center shrink-0">
              <span className="text-accent-red animate-flicker mr-2">//</span> <span className="whitespace-nowrap truncate max-w-[200px] sm:max-w-none">CONFIDENCE OF THE MOB</span>
            </a>
          </Link>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/podcast" legacyBehavior>
              <a className="text-white font-bold hover:text-accent-red transition duration-300">Podcast</a>
            </Link>
            <Link href="/buy-book" legacyBehavior>
              <a className="text-white font-bold hover:text-accent-red transition duration-300">Book</a>
            </Link>
            <div className="relative group/dropdown flex items-center h-full">
              <span className="text-stone-300 hover:text-accent-red transition py-4 cursor-pointer">Explore ▾</span>
              <div className="absolute top-full left-0 w-48 bg-stone-900 border border-stone-700 rounded-md shadow-xl opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 overflow-hidden transform group-hover/dropdown:translate-y-0 translate-y-2">
                <Link href="/mob-web" legacyBehavior>
                  <a className="block px-4 py-3 text-stone-300 hover:bg-stone-800 hover:text-accent-red border-b border-stone-800">Mob Web</a>
                </Link>
                <Link href="/documents" legacyBehavior>
                  <a className="block px-4 py-3 text-stone-300 hover:bg-stone-800 hover:text-accent-red border-b border-stone-800">Documents</a>
                </Link>
                <Link href="/ask-fred" legacyBehavior>
                  <a className="block px-4 py-3 text-stone-300 hover:bg-stone-800 hover:text-accent-red border-b border-stone-800">Ask Fred (AI)</a>
                </Link>
                <Link href="/about" legacyBehavior>
                  <a className="block px-4 py-3 text-stone-300 hover:bg-stone-800 hover:text-accent-red">About Eddy</a>
                </Link>
              </div>
            </div>
          </nav>
          <button
            id="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-stone-700 transition duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Sticky Banner */}
      <div className="sticky top-[73px] md:top-[72px] z-40 w-full shadow-lg">
        <Link href="/podcast" legacyBehavior>
          <a className="block w-full bg-accent-red hover:bg-red-600 transition-colors cursor-pointer text-white py-2 text-center text-sm font-bold flex justify-center items-center gap-2">
            <svg className="w-4 h-4 animate-pulse shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" /></svg>
            <span className="truncate">Don't miss a beat. Join the Podcast Waitlist &rarr;</span>
          </a>
        </Link>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className={`md:hidden bg-stone-800 border-t border-stone-700 ${mobileMenuOpen ? 'block' : 'hidden'} absolute w-full z-40`}>
        <Link href="/podcast" legacyBehavior>
          <a className="block px-4 py-3 text-sm text-white font-bold hover:bg-stone-700 transition border-b border-stone-700" onClick={() => setMobileMenuOpen(false)}>Podcast</a>
        </Link>
        <Link href="/buy-book" legacyBehavior>
          <a className="block px-4 py-3 text-sm text-white font-bold hover:bg-stone-700 transition border-b border-stone-700" onClick={() => setMobileMenuOpen(false)}>Book</a>
        </Link>
        <div className="bg-stone-900/50 py-2">
          <p className="px-4 py-1 text-xs text-stone-500 font-mono-file tracking-widest uppercase">Explore</p>
          <Link href="/mob-web" legacyBehavior>
            <a className="block px-6 py-2 text-sm text-stone-300 hover:text-accent-red transition" onClick={() => setMobileMenuOpen(false)}>Mob Web</a>
          </Link>
          <Link href="/documents" legacyBehavior>
            <a className="block px-6 py-2 text-sm text-stone-300 hover:text-accent-red transition" onClick={() => setMobileMenuOpen(false)}>Documents</a>
          </Link>
          <Link href="/ask-fred" legacyBehavior>
            <a className="block px-6 py-2 text-sm text-stone-300 hover:text-accent-red transition" onClick={() => setMobileMenuOpen(false)}>Ask Fred (AI)</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="block px-6 py-2 text-sm text-stone-300 hover:text-accent-red transition" onClick={() => setMobileMenuOpen(false)}>About Eddy</a>
          </Link>
        </div>
      </div>

      <div id="main-content" className="w-full flex-grow">{children}</div>

      {!cookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-stone-900 border-t border-stone-800 p-4 z-[100] flex flex-col md:flex-row justify-between items-center shadow-2xl animate-fade-in-up">
          <p className="text-sm text-stone-400 mb-4 md:mb-0 max-w-4xl font-serif">
            This site uses tracking cookies (including the Facebook Pixel) to measure interactions and improve your experience. 
            By clicking "Accept", you consent to our use of cookies per our <Link href="/privacy" className="text-accent-red hover:underline font-bold">Privacy Policy</Link>.
          </p>
          <button onClick={acceptCookies} className="bg-accent-red text-white py-2 px-6 rounded text-sm font-bold hover:bg-red-600 transition tracking-widest uppercase shadow-lg">
            Accept
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <Link href="/" legacyBehavior>
                <a className="inline-block text-lg font-bold tracking-wider text-white mb-4 font-mono-file">
                  <span className="text-accent-red">//</span> CONFIDENCE OF THE MOB
                </a>
              </Link>
              <p className="text-stone-400 text-sm leading-relaxed mb-6">
                The true story of IRS Agent Fred Pastore: the man who took down the Mafia, then advised them. Uncover the files.
              </p>
              <div className="bg-stone-800/30 p-5 rounded-xl border border-stone-700 shadow-inner">
                <NewsletterGateForm signupCTA="Follow The Investigation" />
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs font-mono-file text-stone-500">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/buy-book" className="text-stone-300 hover:text-accent-red transition duration-300 font-medium">Order the Book</Link></li>
                <li><Link href="/podcast" className="text-stone-300 hover:text-accent-red transition duration-300 font-medium">Listen to the Podcast</Link></li>
                <li><Link href="/mob-web" className="text-stone-300 hover:text-accent-red transition duration-300">Mob Web</Link></li>
                <li><Link href="/documents" className="text-stone-300 hover:text-accent-red transition duration-300">Case Files</Link></li>
                <li><Link href="/ask-fred" className="text-stone-300 hover:text-accent-red transition duration-300">Ask Fred (AI)</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs font-mono-file text-stone-500">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="text-stone-300 hover:text-accent-red transition duration-300 font-medium">About EDDY</Link></li>
                <li><Link href="/contact" className="text-stone-300 hover:text-accent-red transition duration-300 font-medium">Contact</Link></li>
                <li><Link href="/social" className="text-stone-300 hover:text-accent-red transition duration-300 font-medium">Social Media</Link></li>
                <li><Link href="/privacy" className="text-stone-300 hover:text-accent-red transition duration-300 font-medium">Privacy Policy</Link></li>
                <li><Link href="/media-kit" className="text-stone-300 hover:text-accent-red transition duration-300 font-medium">Media Kit / Press</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-stone-800/50 flex flex-col items-center justify-center">
            <p className="text-xs text-stone-600 font-mono-file uppercase tracking-widest text-center">
              // END OF FILE // &copy; {new Date().getFullYear()} CONFIDENCE OF THE MOB.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
