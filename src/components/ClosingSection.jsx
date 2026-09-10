import React from 'react';
import styles from './ClosingSection.module.css';
import DiyaIcon from './DiyaIcon';

const ClosingSection = ({ onShare }) => {
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

          {/* Host Signoff */}
          <div className={styles.signatureContainer}>
            <p className={styles.regards}>Regards</p>
            <p className={styles.name}>• Ravindra Shah • Shital Shah • Amit Shah</p>
            <p className={styles.name}>• Poonam Shah • Manthan R. Shah</p>
          </div>

          {/* Central Devotional Glowing Diya */}
          <div className={styles.diyaWrapper}>
            <DiyaIcon size={64} />
          </div>

          {/* Subtle Bottom Inscription */}
          <p className={styles.bottomBlessing}>॥ शुभ गणेशोत्सव २०२६ ॥</p>
        </div>
      </div>
    </div>
  );
};

export default ClosingSection;
