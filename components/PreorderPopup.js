import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PreorderPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Contextual Suppression: Don't show on purchase-intent pages
        const suppressedPages = ['/buy-book', '/success', '/book'];
        if (suppressedPages.includes(router.pathname)) {
            return;
        }

        // Check if the popup has been shown before
        const hasSeenPopup = localStorage.getItem('hasSeenPreorderPopup');
        if (!hasSeenPopup) {
            // Show popup after a longer delay (15 seconds)
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 15000);
            return () => clearTimeout(timer);
        }
    }, [router.pathname]);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('hasSeenPreorderPopup', 'true');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 p-0 pointer-events-none animate-slide-in-right">
            <div className="relative w-full max-w-sm bg-gray-900 rounded-2xl border border-accent-red shadow-2xl overflow-hidden pointer-events-auto flex flex-col md:flex-row">

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 z-10 p-1.5 bg-black/50 hover:bg-red-600 rounded-full text-white transition-colors"
                    aria-label="Close popup"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Image Section (Smaller for Toast) */}
                <div className="hidden sm:block w-32 bg-gray-800">
                    <img
                        src="/images/book_no_bg.png"
                        alt="Book Cover"
                        className="w-full h-full object-contain p-2"
                    />
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col justify-center text-left">
                    <p className="text-[10px] text-accent-red font-mono-file mb-1 tracking-widest uppercase animate-pulse">
                        LIMITED TIME OFFER
                    </p>
                    <h2 className="text-lg font-bold text-white mb-1 leading-tight">
                        Kindle Edition <span className="text-accent-red">Special</span>
                    </h2>
                    <p className="text-gray-400 text-xs mb-3 leading-snug">
                        Grab the digital version now for a special price.
                    </p>

                    <div className="mb-3 flex items-center gap-3">
                        <span className="text-xl font-bold text-white">$2.99</span>
                        <span className="text-xs text-gray-500 line-through decoration-red-500">$9.99</span>
                    </div>

                    <a
                        href="https://www.amazon.com/dp/B0GSF9DZC7?ref=cotmweb"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClose}
                        className="w-full py-2 px-4 bg-accent-red hover:bg-red-600 text-white font-bold rounded-lg shadow-file transition-all text-xs text-center"
                    >
                        Order Kindle Now
                    </a>
                </div>
            </div>
            <style jsx>{`
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .animate-slide-in-right {
                    animation: slideInRight 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
