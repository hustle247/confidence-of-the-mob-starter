import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NewsletterGateForm from './podcast/NewsletterGateForm';
import SignupSuccess from './podcast/SignupSuccess';

export default function GlobalNewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Exclude certain routes from showing the global popup
    const excludedRoutes = ['/buy-book', '/podcast'];
    if (excludedRoutes.includes(router.pathname)) {
      return;
    }

    // Check if user has already subscribed or closed the modal
    const subscribed = localStorage.getItem('cotm_podcast_subscribed');
    const closed = localStorage.getItem('cotm_newsletter_closed');
    
    if (subscribed === 'true') {
      setHasSubscribed(true);
      return; // Do not show if they are already subscribed
    }

    if (closed === 'true') {
      return; // Do not show if they explicitly closed it
    }

    // Show modal after 20 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, [router.pathname]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('cotm_newsletter_closed', 'true');
  };

  const handleSuccess = () => {
    setHasSubscribed(true);
    localStorage.setItem('cotm_podcast_subscribed', 'true');
    // We don't automatically close it here so they can read the success message
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm fade-in">
      <div className="bg-stone-900 border-2 border-stone-700 rounded-2xl p-6 sm:p-10 shadow-2xl relative max-w-lg w-full animate-slide-up">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-stone-500 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!hasSubscribed ? (
          <>
            <div className="text-center mb-6 mt-4">
              <span className="text-4xl block mb-4">🎧</span>
              <h3 className="text-2xl font-bold text-white mb-3">Hear the first 9 minutes of our companion podcast right now</h3>
              <p className="text-stone-400">We will let you know when the season is ready to listen</p>
            </div>
            
            <NewsletterGateForm 
              episodeId="global_newsletter_popup"
              signupCTA="Listen Now"
              onSuccess={handleSuccess}
            />
          </>
        ) : (
          <div className="mt-4">
            <SignupSuccess successMessage="You're in! We'll keep you updated on the full podcast release." />
          </div>
        )}

      </div>
      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slideUp 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
