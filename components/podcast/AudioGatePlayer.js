import { useState, useRef, useEffect } from 'react';
import { trackEvent } from '../../lib/tracking';

export default function AudioGatePlayer({ 
  audioSrc, 
  episodeId,
  onGateReached,
  onPlay
}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      if (onPlay) onPlay();
      trackEvent('podcast_preview_play_clicked', { episode_id: episodeId, page: '/podcast' });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    onGateReached();
    trackEvent('podcast_preview_gate_reached', { episode_id: episodeId, page: '/podcast' });
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * (duration || 0);
    if (!isNaN(seekTime) && audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const progressPercentage = duration > 0 ? ((currentTime / duration) * 100).toFixed(2) : 0;
  const maxProgressPercentage = Math.min(100, Math.max(0, progressPercentage));

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 shadow-file my-6 relative overflow-hidden group">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-accent-red opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      <audio 
        ref={audioRef} 
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onDurationChange={handleLoadedMetadata}
        onCanPlay={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      />
      
      <div className="flex items-center gap-6">
        <button 
          onClick={togglePlay}
          className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-accent-red text-white transition-all hover:scale-105 hover:bg-red-600"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
          ) : (
            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
          )}
        </button>

        <div className="flex-1 py-2">
          <div className="flex justify-between text-xs text-stone-500 font-mono-file mb-3 tracking-widest uppercase">
            <span className="text-stone-300">{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div className="w-full relative h-8 py-3 flex items-center group/scrubber">
            {/* Track background */}
            <div className="absolute w-full bg-stone-800 rounded-full h-1.5 overflow-hidden pointer-events-none">
              <div 
                className="h-full rounded-full transition-all duration-75 bg-accent-red"
                style={{ width: `${maxProgressPercentage}%` }}
              ></div>
            </div>
            
            {/* Interactive native range scrubber (Expanded hit area, opacity hack for Safari touch bypass) */}
            <input 
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progressPercentage}
              onChange={handleSeek}
              onInput={handleSeek}
              className="absolute inset-0 w-full h-full appearance-none bg-transparent cursor-pointer z-10 touch-pan-y"
              style={{ opacity: 0.01 }}
              aria-label="Audio scrubber"
            />
            
            {/* Visual Knob */}
            <div 
              className="absolute h-4 w-4 bg-white rounded-full shadow pointer-events-none opacity-0 group-hover/scrubber:opacity-100 transition-opacity transform -translate-x-1/2"
              style={{ left: `${maxProgressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
