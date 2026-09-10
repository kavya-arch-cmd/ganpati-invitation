import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import styles from './MusicController.module.css';

const MusicController = forwardRef(({ autoStart = false, currentPage = 1 }, ref) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasAudioError, setHasAudioError] = useState(false);

  // Expose imperative methods to parent (App.jsx)
  useImperativeHandle(ref, () => ({
    startAt25s: () => {
      if (audioRef.current && !hasAudioError) {
        try {
          audioRef.current.currentTime = 25;
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                setIsPlaying(true);
                setHasStarted(true);
              })
              .catch((err) => {
                // Autoplay policy or user gesture requirement
                console.log('Audio playback waiting for direct user gesture:', err.message);
              });
          }
        } catch (e) {
          console.warn('Audio start error:', e);
        }
      }
    },
    togglePlay: () => {
      toggleMusic();
    },
    isPlaying: () => isPlaying,
  }));

  const toggleMusic = () => {
    if (!audioRef.current || hasAudioError) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // If never started or at end, start at 25s
      if (!hasStarted || audioRef.current.ended) {
        audioRef.current.currentTime = 25;
      }
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setHasStarted(true);
          })
          .catch((e) => {
            console.warn('Playback error:', e);
          });
      }
    }
  };

  const handleEnded = () => {
    // If ended, loop back to 25s for continuous devotional ambiance
    if (audioRef.current) {
      audioRef.current.currentTime = 25;
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  };

  const handleError = () => {
    console.log('Local audio file not ready or not supported; continuing gracefully.');
    setHasAudioError(true);
  };

  return (
    <div className={styles.musicWrapper}>
      {/* Hidden native audio element */}
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}music/ganesha-slokam.mp3`}
        preload="auto"
        onEnded={handleEnded}
        onError={handleError}
      />

      {/* Floating Music Toggle Button — hidden on Slide 1 */}
      <button
        className={`${styles.musicBtn} ${isPlaying ? styles.playing : ''} ${currentPage === 1 ? styles.hiddenOnCover : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleMusic();
        }}
        aria-label={isPlaying ? 'Mute devotional music' : 'Play devotional music'}
        title={isPlaying ? 'Music ON (Click to Pause)' : 'Music OFF (Click to Play)'}
      >
        <span className={styles.soundWaveIcon}>
          {isPlaying ? (
            <span className={styles.equalizerBars}>
              <span className={styles.bar1}></span>
              <span className={styles.bar2}></span>
              <span className={styles.bar3}></span>
            </span>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          )}
        </span>
        <span className={styles.btnLabel}>{isPlaying ? 'MUSIC ON' : 'MUSIC OFF'}</span>
      </button>
    </div>
  );
});

export default MusicController;
