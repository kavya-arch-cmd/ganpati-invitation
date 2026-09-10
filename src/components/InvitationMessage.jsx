import React from 'react';
import styles from './InvitationMessage.module.css';

const InvitationMessage = ({ onNext }) => {
  return (
    <div className={styles.section}>
      <div className="section-container">
        <div className={`${styles.card} reveal-scale is-revealed`}>
          {/* Chapter Badge */}
          <div className="chapter-badge">
            <span className="dot" />
            <span>SHUBH NIMANTRAN</span>
            <span className="dot" />
          </div>

          {/* Corner Flourishes */}
          <div className={`${styles.cornerOrnament} ${styles.topLeft}`} />
          <div className={`${styles.cornerOrnament} ${styles.topRight}`} />
          <div className={`${styles.cornerOrnament} ${styles.bottomLeft}`} />
          <div className={`${styles.cornerOrnament} ${styles.bottomRight}`} />

          {/* Sacred Lotus / Om Icon Header */}
          <div className={styles.sacredHeader}>
            <div className={styles.omCircle}>
              <span className={styles.omSymbol}>ॐ</span>
            </div>
          </div>

          {/* Message Lines with Editorial Hierarchy */}
          <p className={styles.line1}>On the auspicious occasion of</p>

          <div className={styles.headingWrapper}>
            <span className={styles.flourishWing}>✦</span>
            <h2 className={styles.mainHeading}>GANESH CHATURTHI</h2>
            <span className={styles.flourishWing}>✦</span>
          </div>

          <div className="ornament-divider">
            <span className="line" />
            <span className="diamond" />
            <span className="line" />
          </div>

          <p className={styles.line3}>we welcome you and your family with</p>
          <p className={styles.line4}>love and devotion</p>
          <p className={styles.line5}>to seek blessings of</p>
          <h3 className={styles.line6}>Lord Ganesha</h3>

          {/* Bottom Lotus Line-art */}
          <div className={styles.lotusLineArt}>
            <svg viewBox="0 0 100 40" fill="none" stroke="#B88624" strokeWidth="1" className={styles.lotusSvg}>
              <path d="M50 35 C42 22 30 18 15 28 C26 38 42 38 50 38 C58 38 74 38 85 28 C70 18 58 22 50 35 Z" fill="#FBF6E9" />
              <path d="M50 32 C46 15 36 8 28 14 C35 25 45 28 50 32 Z" fill="#F4EBD7" />
              <path d="M50 32 C54 15 64 8 72 14 C65 25 55 28 50 32 Z" fill="#F4EBD7" />
              <path d="M50 28 C48 10 44 4 50 2 C56 4 52 10 50 28 Z" fill="#EFE3C8" />
            </svg>
          </div>

          {/* In-page Next Navigation */}
          <button
            className="page-next-btn"
            onClick={(e) => { e.stopPropagation(); onNext && onNext(); }}
            aria-label="Continue to next page"
          >
            <span>CONTINUE</span>
            <span className="page-next-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvitationMessage;
