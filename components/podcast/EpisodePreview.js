import { useState } from 'react';
import AudioGatePlayer from './AudioGatePlayer';
import NewsletterGateForm from './NewsletterGateForm';
import SignupSuccess from './SignupSuccess';

export default function EpisodePreview({ previewData }) {
  const [isGated, setIsGated] = useState(false);
  const [hasSubscribed, setHasSubscribed] = useState(false);

  const handleGateReached = () => {
    setIsGated(true);
  };

  const handleSuccess = () => {
    setHasSubscribed(true);
  };

  return (
    <div className="max-w-4xl mx-auto bg-stone-900/40 border-2 border-stone-800 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-md relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-red to-transparent opacity-20"></div>
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Cover Art Placeholder */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="aspect-square relative rounded-xl overflow-hidden border border-stone-700 shadow-file bg-stone-800 flex flex-col items-center justify-center p-6 text-center">
            {/* The real implementation will use next/image here */}
            <div className="w-16 h-16 border-2 border-stone-600 rounded-full flex items-center justify-center mb-4">
               <span className="text-2xl text-stone-500">🎙️</span>
            </div>
            <span className="text-stone-500 font-mono-file tracking-widest text-xs uppercase mb-2">EPISODE 01</span>
            <span className="text-stone-400 font-bold text-sm tracking-widest">PREVIEW</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 w-full flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">{previewData.title}</h2>
          <p className="text-stone-300 font-medium mb-4 text-lg">{previewData.subtitle}</p>
          <p className="text-stone-500 mb-6 leading-relaxed">{previewData.description}</p>
          
          <div className="p-5 bg-stone-800/50 rounded-lg border-l-4 border-accent-red font-mono-file text-sm text-stone-300 italic shadow-inner">
            "{previewData.teaserTranscript}"
          </div>
        </div>
      </div>

      <AudioGatePlayer 
        audioSrc={previewData.audioSrc}
        gateAtSeconds={previewData.gateAtSeconds}
        durationSeconds={previewData.durationSeconds}
        episodeId={previewData.episodeId}
        isLocked={isGated && !hasSubscribed}
        onGateReached={handleGateReached}
      />

      {isGated && !hasSubscribed && (
        <div className="mt-10 pt-10 border-t border-stone-800 fade-in">
          <div className="text-center mb-6 max-w-xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-3">{previewData.signupHeadline}</h3>
            <p className="text-stone-400 text-lg">{previewData.signupBody}</p>
          </div>
          <NewsletterGateForm 
            episodeId={previewData.episodeId}
            signupCTA={previewData.signupCTA}
            onSuccess={handleSuccess}
          />
        </div>
      )}

      {hasSubscribed && (
        <SignupSuccess successMessage={previewData.successMessage} />
      )}
    </div>
  );
}
