import React, { memo } from 'react';
import styles from './CurtainReveal.module.css';

const CurtainReveal = ({ isOpening, isClosing, isClosed, onAnimationComplete, onCloseComplete }) => {
  const isInactive = !isOpening && !isClosing && !isClosed;

  let leftClass = styles.curtainPanel;
  let rightClass = styles.curtainPanel;

  if (isClosed) {
    // Static closed position — no animation
    leftClass = `${styles.curtainPanel} ${styles.curtainStaticLeft}`;
    rightClass = `${styles.curtainPanel} ${styles.curtainStaticRight}`;
  } else if (isClosing) {
    leftClass = `${styles.curtainPanel} ${styles.curtainCloseLeft}`;
    rightClass = `${styles.curtainPanel} ${styles.curtainCloseRight}`;
  } else if (isOpening) {
    leftClass = `${styles.curtainPanel} ${styles.curtainLeft}`;
    rightClass = `${styles.curtainPanel} ${styles.curtainRight}`;
  }

  let valanceClass = styles.curtainValance;
  if (isInactive) {
    valanceClass = `${styles.curtainValance} ${styles.valanceHidden}`;
  } else if (isClosed) {
    valanceClass = `${styles.curtainValance} ${styles.valanceStatic}`;
  } else if (isClosing) {
    valanceClass = `${styles.curtainValance} ${styles.valanceClose}`;
  }

  return (
    <div
      className={`${styles.curtainOverlay} ${isInactive ? styles.curtainHidden : ''}`}
      onAnimationEnd={(e) => {
        // Opening: fire when left panel finishes sliding out
        if (e.animationName && e.animationName.includes('curtainSlideLeft')) {
          if (onAnimationComplete) onAnimationComplete();
        }
        // Closing: fire when left panel finishes sliding in
        if (e.animationName && e.animationName.includes('curtainCloseLeft')) {
          if (onCloseComplete) onCloseComplete();
        }
      }}
      aria-hidden={isInactive ? 'true' : 'false'}
    >
      {/* Divine Golden Light Radiance behind curtains */}
      {isOpening && (
        <div className={styles.radianceCenter}>
          <div className={styles.haloRing}></div>
          <div className={styles.lightRay}></div>
        </div>
      )}

      {/* Left Curtain Panel */}
      <div className={leftClass}>
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
      <div className={rightClass}>
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
      <div className={valanceClass}>
        <div className={styles.valanceFringe}></div>
      </div>
    </div>
  );
};

export default memo(CurtainReveal);
