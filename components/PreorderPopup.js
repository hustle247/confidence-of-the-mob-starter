import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PreorderPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if the popup has been shown before
        const hasSeenPopup = localStorage.getItem('hasSeenPreorderPopup');
        if (!hasSeenPopup) {
            // Show popup after a short delay
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('hasSeenPreorderPopup', 'true');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-lg bg-gray-900 rounded-2xl border-2 border-accent-red shadow-2xl overflow-hidden transform transition-all scale-100 grid md:grid-cols-2">

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 z-10 p-2 bg-black/50 hover:bg-red-600 rounded-full text-white transition-colors"
                    aria-label="Close popup"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Image Section */}
                <div className="relative h-64 md:h-auto bg-gray-800">
                    <img
                        src="/images/book_no_bg.png"
                        alt="Confidence of The Mob Book Cover"
                        className="w-full h-full object-contain md:object-cover p-4 hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-center text-center md:text-left">
                    <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase animate-pulse">
                        LIMITED TIME OFFER
                    </p>
                    <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
                        Get the <span className="text-accent-red">Full Story</span>
                    </h2>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                        Preorder the Kindle edition now for a special discounted price. Uncover the secrets before anyone else.
                    </p>

                    <div className="mb-6 flex items-center justify-center md:justify-start gap-4">
                        <span className="text-3xl font-bold text-white">$2.99</span>
                        <span className="text-sm text-gray-500 line-through decoration-red-500 decoration-2">$9.99</span>
                    </div>

                    <a
                        href="https://a.co/d/4s7bzmO"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClose}
                        className="w-full py-3 px-6 bg-accent-red hover:bg-red-600 text-white font-bold rounded-lg shadow-file transition-all transform hover:-translate-y-1 text-center"
                    >
                        Preorder Now
                    </a>

                    <p className="mt-4 text-[10px] text-gray-500 text-center">
                        Kindle Edition • Instant Delivery on Release
                    </p>
                </div>
            </div>
        </div>
    );
}
