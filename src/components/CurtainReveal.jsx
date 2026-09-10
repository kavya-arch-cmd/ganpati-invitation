import React from 'react';
import styles from './CurtainReveal.module.css';

const CurtainReveal = ({ isOpening, onAnimationComplete }) => {
  if (!isOpening) return null;

  return (
    <div
      className={styles.curtainOverlay}
      onAnimationEnd={(e) => {
        // When the curtain panel animation ends, trigger completion callback
        if (e.animationName && e.animationName.includes('curtainSlideLeft')) {
          if (onAnimationComplete) onAnimationComplete();
        }
      }}
      aria-hidden="true"
    >
      {/* Divine Golden Light Radiance behind curtains */}
      <div className={styles.radianceCenter}>
        <div className={styles.haloRing}></div>
        <div className={styles.lightRay}></div>
      </div>

      {/* Left Curtain Panel */}
      <div className={`${styles.curtainPanel} ${styles.curtainLeft}`}>
        <div className={styles.curtainFabric}>
          {/* Gold Embroidered Border on Curtain Edge */}
          <div className={styles.curtainBorderRight}>
            <div className={styles.goldFringe}></div>
            <div className={styles.goldPattern}></div>
          </div>
          {/* Subtle Fabric Folds / Creases */}
          <div className={styles.fabricFold1}></div>
          <div className={styles.fabricFold2}></div>
          <div className={styles.fabricFold3}></div>
        </div>
      </div>

      {/* Right Curtain Panel */}
      <div className={`${styles.curtainPanel} ${styles.curtainRight}`}>
        <div className={styles.curtainFabric}>
          {/* Gold Embroidered Border on Curtain Edge */}
          <div className={styles.curtainBorderLeft}>
            <div className={styles.goldFringe}></div>
            <div className={styles.goldPattern}></div>
          </div>
          {/* Subtle Fabric Folds / Creases */}
          <div className={styles.fabricFold1}></div>
          <div className={styles.fabricFold2}></div>
          <div className={styles.fabricFold3}></div>
        </div>
      </div>

      {/* Top Valance / Toran */}
      <div className={styles.curtainValance}>
        <div className={styles.valanceFringe}></div>
      </div>
    </div>
  );
};

export default CurtainReveal;
