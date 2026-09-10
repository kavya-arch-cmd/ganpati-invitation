import React from 'react';
import styles from './OpeningScreen.module.css';
import TempleBell from './TempleBell';
import DiyaIcon from './DiyaIcon';

const OpeningScreen = ({ onOpenInvitation }) => {
  const handleOpenClick = () => {
    if (onOpenInvitation) {
      onOpenInvitation();
    }
  };

  return (
    <div className={styles.openingScreen}>
      {/* Hanging Temple Bells */}
      <div className="hanging-bell-wrapper left">
        <TempleBell />
      </div>
      <div className="hanging-bell-wrapper right">
        <TempleBell />
      </div>

      {/* Ornate Outer Card Frame */}
      <div className={styles.outerFrame}>
        <div className={styles.innerFrame}>
          {/* Corner Flourishes */}
          <div className={`${styles.cornerFlourish} ${styles.tl}`} />
          <div className={`${styles.cornerFlourish} ${styles.tr}`} />
          <div className={`${styles.cornerFlourish} ${styles.bl}`} />
          <div className={`${styles.cornerFlourish} ${styles.br}`} />

          <div className={styles.content}>
            {/* Top Auspicious Inscription */}
            <div className={styles.topAuspicious}>
              <span className={styles.flourishWing}>❧</span>
              <h1 className={styles.sanskritText}>॥ श्री गणेशाय नमः ॥</h1>
              <span className={styles.flourishWing}>☙</span>
            </div>

            <div className="ornament-divider">
              <span className="line" />
              <span className="diamond" />
              <span className="dot" />
              <span className="diamond" />
              <span className="line" />
            </div>

            {/* Central Celebration Title */}
            <div className={styles.milestoneBadge}>
              <span className={styles.badgeLine} />
              <span className={styles.badgeText}>SPECIAL MILESTONE</span>
              <span className={styles.badgeLine} />
            </div>

            <h2 className={styles.mainTitle}>25th Year Celebration</h2>
            <p className={styles.tagline}>25 Years of Faith • Devotion • Blessings</p>

            {/* Sacred Diya */}
            <div className={styles.diyaWrapper}>
              <DiyaIcon size={52} />
            </div>

            {/* Interactive Open Invitation CTA */}
            <button
              className={styles.openButton}
              onClick={handleOpenClick}
              aria-label="Open Ganpati Digital Invitation"
            >
              <span className={styles.buttonShimmer} />
              <span className={styles.buttonText}>OPEN INVITATION</span>
            </button>

            {/* Tap prompt */}
            <div className={styles.scrollIndicator} onClick={handleOpenClick}>
              <span className={styles.scrollArrow}>Tap to Unveil Divine Invitation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningScreen;
