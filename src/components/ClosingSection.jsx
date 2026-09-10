import React from 'react';
import styles from './ClosingSection.module.css';
import DiyaIcon from './DiyaIcon';

const ClosingSection = ({ onShare, onRestart }) => {
  return (
    <div className={styles.closingSection}>
      <div className="section-container">
        <div className={`${styles.card} reveal-scale is-revealed`}>
          {/* Chapter Badge */}
          <div className="chapter-badge">
            <span className="dot" />
            <span>BLESSINGS</span>
            <span className="dot" />
          </div>

          {/* Emotional Blessing Text */}
          <p className={styles.mainMessage}>
            Your presence and blessings<br />
            will make our celebration even more special.
          </p>

          <div className="ornament-divider">
            <span className="line" />
            <span className="diamond" />
            <span className="dot" />
            <span className="diamond" />
            <span className="line" />
          </div>

          {/* Sacred Ganpati Bappa Morya Chant in approved SOLID FESTIVE RED */}
          <div className={styles.chantWrapper}>
            <h2 className={styles.chant}>
              <span className={styles.namasteEmoji}>🙏</span>
              <span className={styles.chantText}>गणपती बाप्पा मोरया</span>
              <span className={styles.namasteEmoji}>🙏</span>
            </h2>
          </div>

          {/* Host Signoff with exact 3-line sequence */}
          <div className={styles.signatureContainer}>
            <p className={styles.regards}>Regards</p>
            <div className={styles.namesList}>
              <span className={styles.nameLine}>• Ravindra Shah • Shital Shah</span>
              <span className={styles.nameLine}>• Amit Shah • Poonam Shah</span>
              <span className={styles.nameLine}>• Manthan R. Shah</span>
            </div>
          </div>

          {/* Central Devotional Glowing Diya */}
          <div className={styles.diyaWrapper}>
            <DiyaIcon size={56} />
          </div>

          {/* COMPLETE INVITATION — triggers closing curtain */}
          <button
            className={styles.restartBtn}
            onClick={(e) => {
              e.stopPropagation();
              if (onRestart) onRestart();
            }}
            aria-label="Complete the invitation"
          >
            <span>COMPLETE INVITATION</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClosingSection;
