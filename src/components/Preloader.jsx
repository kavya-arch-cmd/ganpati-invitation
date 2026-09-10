import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

const Preloader = ({ onLoaded }) => {
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsDone(true);
        if (onLoaded) onLoaded();
      }, 700);
    }, 1400);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (isDone) return null;

  return (
    <div className={`${styles.preloader} ${isFading ? styles.fadeOut : ''}`}>
      <div className={styles.container}>
        {/* Sacred Diya / Mandala Glow */}
        <div className={styles.sacredHalo}></div>
        <div className={styles.mandalaWrapper}>
          <svg className={styles.mandalaSvg} viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="46" strokeWidth="0.8" strokeDasharray="4 2" />
            <circle cx="50" cy="50" r="38" strokeWidth="1" />
            <circle cx="50" cy="50" r="28" strokeWidth="0.8" />
            <path d="M50 4 L50 96 M4 50 L96 50 M17.5 17.5 L82.5 82.5 M17.5 82.5 L82.5 17.5" strokeWidth="0.5" strokeOpacity="0.4" />
            <polygon points="50,14 62,38 86,50 62,62 50,86 38,62 14,50 38,38" strokeWidth="0.8" />
          </svg>
          <div className={styles.omSymbol}>ॐ</div>
        </div>

        <div className={styles.sanskritMantra}>॥ श्री गणेशाय नमः ॥</div>
        
        <div className={styles.loadingBar}>
          <div className={styles.loadingFill}></div>
        </div>

        <p className={styles.loadingText}>Opening Sacred Invitation</p>
      </div>
    </div>
  );
};

export default Preloader;
