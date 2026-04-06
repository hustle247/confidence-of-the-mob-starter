import NewsletterGateForm from './NewsletterGateForm';
import SignupSuccess from './SignupSuccess';

export default function AudioEndModal({ isOpen, onClose, previewData, onSuccess, hasSubscribed }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm fade-in">
      <div className="bg-stone-900 border-2 border-stone-700 rounded-2xl p-6 sm:p-10 shadow-2xl relative max-w-lg w-full animate-slide-up">
        
        {/* Close Button */}
        <button
          onClick={onClose}
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
              <h3 className="text-2xl font-bold text-white mb-3">{previewData.signupHeadline}</h3>
              <p className="text-stone-400">{previewData.signupBody}</p>
            </div>
            
            <NewsletterGateForm 
              episodeId={previewData.episodeId}
              signupCTA={previewData.signupCTA}
              onSuccess={onSuccess}
            />
          </>
        ) : (
          <div className="mt-4">
            <SignupSuccess successMessage={previewData.successMessage} />
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
