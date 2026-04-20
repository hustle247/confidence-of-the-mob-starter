import { useState, useEffect } from 'react';
import AudioGatePlayer from './AudioGatePlayer';
import NewsletterGateForm from './NewsletterGateForm';
import SignupSuccess from './SignupSuccess';
import AudioEndModal from './AudioEndModal';

export default function EpisodePreview({ previewData }) {
  const [showModal, setShowModal] = useState(false);
  const [hasSubscribed, setHasSubscribed] = useState(false);

  useEffect(() => {
    if (!hasSubscribed) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [hasSubscribed]);

  const handleAudioPlay = () => {
    if (!hasSubscribed) {
      setShowModal(true);
    }
  };

  const handleAudioEnded = () => {
    if (!hasSubscribed) {
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSuccess = () => {
    setHasSubscribed(true);
    // Optionally close the modal automatically after a delay
    // setTimeout(() => setShowModal(false), 3000);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto bg-stone-900/40 border-2 border-stone-800 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-md relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-red to-transparent opacity-20"></div>
        
        <div className="flex flex-col gap-8 items-start mb-6">
          {/* Content */}
          <div className="w-full flex flex-col justify-center">
            {/* Mobile-optimized spacing and hierarchy */}
            <span className="text-accent-red font-mono-file tracking-widest text-xs uppercase mb-3 inline-block">EPISODE 01 PREVIEW</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">{previewData.title}</h2>
            <p className="text-stone-300 font-medium mb-2 text-lg sm:text-xl">{previewData.subtitle}</p>
            
            {/* Audio Player Positioned high for immediate viewport capture */}
            <AudioGatePlayer 
              audioSrc={previewData.audioSrc}
              episodeId={previewData.episodeId}
              onPlay={handleAudioPlay}
              onGateReached={handleAudioEnded}
            />

            <p className="text-stone-500 mt-6 mb-6 leading-relaxed sm:text-lg">{previewData.description}</p>
            
            <div className="p-5 sm:p-6 bg-stone-800/50 rounded-lg border-l-4 border-accent-red font-mono-file text-sm sm:text-base text-stone-300 italic shadow-inner whitespace-pre-line leading-relaxed">
              {previewData.teaserTranscript}
            </div>
          </div>
        </div>

        {/* ALWAYS show the CTA at the bottom, so users can subscribe anytime */}
        <div className="mt-10 pt-10 border-t border-stone-800 fade-in">
          {!hasSubscribed ? (
            <>
              <div className="text-center mb-6 max-w-xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-3">{previewData.signupHeadline}</h3>
                <p className="text-stone-400 text-lg">{previewData.signupBody}</p>
              </div>
              <NewsletterGateForm 
                episodeId={previewData.episodeId}
                signupCTA={previewData.signupCTA}
                onSuccess={handleSuccess}
              />
            </>
          ) : (
            <SignupSuccess successMessage={previewData.successMessage} />
          )}
        </div>
      </div>

      <AudioEndModal 
        isOpen={showModal} 
        onClose={handleModalClose}
        previewData={previewData}
        onSuccess={handleSuccess}
        hasSubscribed={hasSubscribed}
      />
    </>
  );
}
