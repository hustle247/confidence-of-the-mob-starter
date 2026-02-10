import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen antialiased">
      {/* Header & Navigation */}
      <header className="sticky top-0 z-50 header-bg border-b border-stone-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" legacyBehavior>
            <a className="text-xl font-bold tracking-wider text-white rounded-lg p-2 hover:text-accent-red transition duration-300 font-mono-file">
              <span className="text-accent-red">//</span> CONFIDENCE OF THE MOB
            </a>
          </Link>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/podcast" legacyBehavior>
              <a className="text-stone-300 hover:text-accent-red transition duration-300">Podcast</a>
            </Link>
            {/* <Link href="/files" legacyBehavior>
              <a className="text-stone-300 hover:text-accent-red transition duration-300">Case Files</a>
            </Link> */}
            <Link href="/mob-web" legacyBehavior>
              <a className="text-stone-300 hover:text-accent-red transition duration-300">Mob Web</a>
            </Link>
            <Link href="/book" legacyBehavior>
              <a className="text-stone-300 hover:text-accent-red transition duration-300">Book</a>
            </Link>
            <Link href="/timeline" legacyBehavior>
              <a className="text-stone-300 hover:text-accent-red transition duration-300">Timeline</a>
            </Link>
            <Link href="/ask-fred" legacyBehavior>
              <a className="text-stone-300 hover:text-accent-red transition duration-300">Ask Fred</a>
            </Link>
            {/* <Link href="/subscribe" legacyBehavior>
              <a className="text-stone-300 hover:text-accent-red transition duration-300">Subscribe</a>
            </Link> */}
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

      {/* Mobile Menu (Dropdown) */}
      <div className={`md:hidden bg-stone-800 border-t border-stone-700 ${mobileMenuOpen ? 'block' : 'hidden'} absolute w-full z-40`}>
        <Link href="/podcast" legacyBehavior>
          <a className="block px-4 py-3 text-sm text-stone-200 hover:bg-stone-700 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Podcast</a>
        </Link>
        {/* <Link href="/files" legacyBehavior>
          <a className="block px-4 py-3 text-sm text-stone-200 hover:bg-stone-700 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Case Files</a>
        </Link> */}
        <Link href="/mob-web" legacyBehavior>
          <a className="block px-4 py-3 text-sm text-stone-200 hover:bg-stone-700 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Mob Web</a>
        </Link>
        <Link href="/book" legacyBehavior>
          <a className="block px-4 py-3 text-sm text-stone-200 hover:bg-stone-700 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Book</a>
        </Link>
        <Link href="/timeline" legacyBehavior>
          <a className="block px-4 py-3 text-sm text-stone-200 hover:bg-stone-700 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Timeline</a>
        </Link>
        <Link href="/ask-fred" legacyBehavior>
          <a className="block px-4 py-3 text-sm text-stone-200 hover:bg-stone-700 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Ask Fred</a>
        </Link>
        {/* <Link href="/subscribe" legacyBehavior>
          <a className="block px-4 py-3 text-sm text-stone-200 hover:bg-stone-700 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Subscribe</a>
        </Link> */}
      </div>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:flex md:justify-between md:items-center text-center md:text-left">
          <p className="text-sm text-stone-500 mb-4 md:mb-0 font-mono-file">
            // END OF FILE // &copy; {new Date().getFullYear()} Confidence of The Mob.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="#" className="text-stone-400 hover:text-accent-red transition duration-300 text-sm">Privacy</a>
            <a href="#" className="text-stone-400 hover:text-accent-red transition duration-300 text-sm">Contact</a>
            <a href="#" className="text-stone-400 hover:text-accent-red transition duration-300 text-sm">Social</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
