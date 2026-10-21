import { useState, useEffect, useRef } from 'react';
import AudioGatePlayer from './AudioGatePlayer';
import NewsletterGateForm from './NewsletterGateForm';
import SignupSuccess from './SignupSuccess';
import AudioEndModal from './AudioEndModal';

export default function EpisodePreview({ previewData }) {
  const [showModal, setShowModal] = useState(false);
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const [isTeaserPlaying, setIsTeaserPlaying] = useState(false);
  const [teaserTime, setTeaserTime] = useState(0);
  const teaserAudioRef = useRef(null);

  useEffect(() => {
    const subscribed = localStorage.getItem('cotm_podcast_subscribed');
    if (subscribed === 'true') {
      setHasSubscribed(true);
    }
  }, []);

  const toggleTeaserPlay = () => {
    if (!teaserAudioRef.current) return;
    if (isTeaserPlaying) {
      teaserAudioRef.current.pause();
      setIsTeaserPlaying(false);
    } else {
      teaserAudioRef.current.play();
      setIsTeaserPlaying(true);
    }
  };

  const handleTeaserTimeUpdate = () => {
    if (!teaserAudioRef.current) return;
    const current = teaserAudioRef.current.currentTime;
    if (current >= 60) {
      teaserAudioRef.current.pause();
      teaserAudioRef.current.currentTime = 0;
      setIsTeaserPlaying(false);
      setTeaserTime(0);
    } else {
      setTeaserTime(current);
    }
  };

  const handlePlayAttempt = () => {
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
    localStorage.setItem('cotm_podcast_subscribed', 'true');
    setShowModal(false);
  };

  const formatSecs = (sec) => {
    const s = Math.floor(sec);
    return `0:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <>
      <div className="max-w-4xl mx-auto bg-ink-2 border border-rule rounded-[6px] p-6 sm:p-10 shadow-[0_25px_60px_-15px_#000e] relative">
        <div className="flex flex-col gap-6 items-start mb-6">
          <div className="w-full flex flex-col justify-center">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <span className="stamp text-[0.72rem]">Exhibit C · Episode 01 Preview</span>
              <span className="font-type text-[0.7rem] tracking-[0.16em] text-text-dim uppercase">Runtime: 09:14 · Archival Tape</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-text mb-2 tracking-tight">{previewData.title}</h2>
            <p className="text-paper-dim font-display font-medium mb-4 text-lg sm:text-xl">{previewData.subtitle}</p>
            <p className="text-text-dim mb-6 leading-relaxed sm:text-lg">{previewData.description}</p>

            {/* Unlocked 60-Second Audio Clip & Quote Card */}
            <div className="bg-ink border border-rule rounded-[6px] p-5 sm:p-6 mb-6 relative overflow-hidden">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3 border-b border-rule pb-3">
                <span className="font-type text-[0.7rem] tracking-[0.18em] text-stamp uppercase flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-stamp animate-pulse"></span>
                  Unlocked 60-Second Soundbites · Tape Excerpt
                </span>
                <span className="font-type text-[0.68rem] tracking-[0.14em] text-text-dim uppercase">
                  No Email Required
                </span>
              </div>

              <blockquote className="font-body italic text-text text-base sm:text-lg leading-relaxed mb-4 border-l-2 border-stamp pl-4">
                &ldquo;We had to keep the shades drawn. We couldn&apos;t leave the yard. Come to find out later — we were being watched. We were being followed.&rdquo;
                <footer className="font-type not-italic text-[0.72rem] tracking-[0.15em] text-paper-dim uppercase mt-2">
                  — Sharman Pastore, Fred&apos;s Daughter
                </footer>
              </blockquote>

              <audio
                ref={teaserAudioRef}
                src="/audio/book/clip-1.mp3"
                onTimeUpdate={handleTeaserTimeUpdate}
                onEnded={() => { setIsTeaserPlaying(false); setTeaserTime(0); }}
                preload="metadata"
              />

              <div className="flex items-center gap-4 bg-ink-2 border border-rule rounded-[4px] p-3">
                <button
                  type="button"
                  onClick={toggleTeaserPlay}
                  className="btn btn-primary !py-2 !px-4 !text-[0.75rem] flex items-center gap-2 shrink-0"
                >
                  {isTeaserPlaying ? (
                    <>
                      <span>❚❚</span> Pause Teaser
                    </>
                  ) : (
                    <>
                      <span>▶</span> Play 60s Teaser
                    </>
                  )}
                </button>
                <div className="flex-1">
                  <div className="flex justify-between font-type text-[0.68rem] tracking-[0.12em] text-text-dim uppercase mb-1">
                    <span>Audio Sample · Sound Design Preview</span>
                    <span>{formatSecs(teaserTime)} / 0:55</span>
                  </div>
                  <div className="w-full bg-rule h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-stamp h-full transition-all duration-150"
                      style={{ width: `${Math.min(100, (teaserTime / 55) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full 9-Minute Gated Player */}
            <div className="mt-2">
              <div className="flex items-center justify-between font-type text-[0.72rem] tracking-[0.14em] text-paper-dim uppercase mb-1">
                <span>Full 9-Minute Opening Sequence</span>
                <span>{hasSubscribed ? 'Status: Unlocked' : 'Status: Email Gate Active'}</span>
              </div>
              <AudioGatePlayer 
                audioSrc={previewData.audioSrc}
                episodeId={previewData.episodeId}
                isLocked={!hasSubscribed}
                onPlayAttempt={handlePlayAttempt}
                onGateReached={handleAudioEnded}
              />
            </div>
          </div>
        </div>

        {/* Email Gate CTA at the bottom */}
        <div id="podcast-email-gate" className="mt-8 pt-8 border-t border-rule fade-in">
          {!hasSubscribed ? (
            <>
              <div className="text-center mb-6 max-w-xl mx-auto">
                <span className="font-type text-[0.7rem] tracking-[0.2em] text-stamp uppercase block mb-2">
                  // DECLASSIFY EPISODE 01 //
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-text mb-3">{previewData.signupHeadline}</h3>
                <p className="text-text-dim text-base sm:text-lg">{previewData.signupBody}</p>
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

