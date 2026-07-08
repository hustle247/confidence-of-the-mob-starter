import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import NewsletterGateForm from './podcast/NewsletterGateForm';
import GlobalNewsletterModal from './GlobalNewsletterModal';

export default function Layout({ children }) {
  const router = useRouter();
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

  const isActive = (path) => router.pathname === path;

  const NavLink = ({ href, children, className = '' }) => (
    <Link href={href} legacyBehavior>
      <a 
        className={`${isActive(href) ? 'text-text border-b-2 border-stamp pb-[2px]' : 'text-text-dim hover:text-text'} ${className}`}
        aria-current={isActive(href) ? 'page' : undefined}
      >
        {children}
      </a>
    </Link>
  );

  return (
    <div className="min-h-screen antialiased relative">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:px-4 focus:py-2 focus:bg-stamp focus:text-white focus:z-50 focus:outline-none m-2 rounded-lg left-0 top-0">
        Skip to main content
      </a>

      {/* Header & Navigation */}
      <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur-md border-b border-rule">
        {/* Main Header Bar */}
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" legacyBehavior>
            <a className="font-type text-[0.75rem] sm:text-[0.95rem] tracking-[0.05em] sm:tracking-[0.1em] shrink-1 truncate mr-2">
              <em className="not-italic text-stamp">■</em> CONFIDENCE OF THE MOB
            </a>
          </Link>
          <nav className="flex items-center gap-3 sm:gap-7 font-display font-medium text-[0.85rem] tracking-[0.04em] uppercase shrink-0">
            {/* Desktop only links */}
            <div className="hidden md:flex items-center gap-7">
              <NavLink href="/">The Book</NavLink>
              <NavLink href="/podcast">Podcast</NavLink>
              <NavLink href="/documents">Case Files</NavLink>
              <NavLink href="/events">Events</NavLink>
              <Link href="/ask-fred" legacyBehavior>
                <a className="text-stamp font-bold hover:text-stamp-hover">Ask Fred</a>
              </Link>
            </div>
            
            {/* Order the Book button (always visible) */}
            <Link href="/buy-book" legacyBehavior>
              <a className="bg-paper text-ink font-bold py-[0.45em] px-[0.6em] sm:py-[0.55em] sm:px-[1.1em] text-[0.7rem] sm:text-[0.85rem] rounded-[3px] hover:bg-paper-dim transition text-center leading-[1.1]">
                Order the<br className="md:hidden block" /> <span className="hidden md:inline"> </span>Book
              </a>
            </Link>
          </nav>
        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="md:hidden border-t border-rule bg-ink-2/95 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <nav className="flex items-center gap-5 px-4 py-[10px] font-display font-medium text-[0.75rem] tracking-[0.05em] uppercase whitespace-nowrap w-max mx-auto sm:mx-0">
            <NavLink href="/">The Book</NavLink>
            <NavLink href="/podcast">Podcast</NavLink>
            <NavLink href="/documents">Case Files</NavLink>
            <NavLink href="/events">Events</NavLink>
            <Link href="/ask-fred" legacyBehavior>
              <a className="text-stamp font-bold hover:text-stamp-hover">Ask Fred</a>
            </Link>
          </nav>
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </header>

      <div id="main-content" className="w-full flex-grow">{children}</div>

      {!cookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-ink-2 border-t border-rule p-4 z-[100] flex flex-col md:flex-row justify-between items-center shadow-2xl">
          <p className="text-base text-text-dim mb-4 md:mb-0 max-w-4xl font-body">
            This site uses tracking cookies (including the Facebook Pixel) to measure interactions and improve your experience. 
            By clicking "Accept", you consent to our use of cookies per our <Link href="/privacy" className="text-text hover:underline font-bold">Privacy Policy</Link>.
          </p>
          <button onClick={acceptCookies} className="btn btn-primary">
            Accept
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-rule py-11 text-center">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-12">
            <div>
              <NewsletterGateForm signupCTA="Follow The Investigation" />
            </div>
            
            <div>
              <h4 className="eyebrow mb-5">The Case</h4>
              <ul className="space-y-3 text-sm text-text-dim font-display">
                <li><Link href="/buy-book" className="hover:text-text transition">Order the Book</Link></li>
                <li><Link href="/podcast" className="hover:text-text transition">Podcast</Link></li>
                <li><Link href="/mob-web" className="hover:text-text transition">Mob Web</Link></li>
                <li><Link href="/documents" className="hover:text-text transition">Case Files</Link></li>
                <li><Link href="/ask-fred" className="text-stamp hover:text-stamp-hover font-bold transition">Ask Fred (AI)</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="eyebrow mb-5">Contact</h4>
              <ul className="space-y-3 text-sm text-text-dim font-display">
                <li><Link href="/about" className="hover:text-text transition">About Eddy</Link></li>
                <li><Link href="/contact" className="hover:text-text transition">Contact</Link></li>
                <li><Link href="/social" className="hover:text-text transition">Social Media</Link></li>
                <li><Link href="/events" className="hover:text-text transition">Events & Media</Link></li>
                <li><Link href="/privacy" className="hover:text-text transition">Privacy Policy</Link></li>
                <li><Link href="/media-kit" className="hover:text-text transition">Media Kit / Press</Link></li>
              </ul>
            </div>
          </div>
          
          <p className="font-type text-[0.68rem] tracking-[0.16em] text-[#5e564b] uppercase mt-12">
            // END OF FILE · &copy; {new Date().getFullYear()} CONFIDENCE OF THE MOB //
          </p>
        </div>
      </footer>
      <GlobalNewsletterModal />
    </div>
  );
}
