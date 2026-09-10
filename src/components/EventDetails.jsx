import React from 'react';
import styles from './EventDetails.module.css';

const EventDetails = ({ onNext }) => {
  return (
    <div className={styles.section}>
      <div className="section-container">
        {/* Chapter Badge */}
        <div style={{ textAlign: 'center' }}>
          <div className="chapter-badge">
            <span className="dot" />
            <span>PROGRAMME</span>
            <span className="dot" />
          </div>
        </div>

        {/* Section Heading */}
        <div className={styles.headingWrapper}>
          <span className={styles.flourishWing}>❧</span>
          <h2 className={styles.heading}>ON</h2>
          <span className={styles.flourishWing}>☙</span>
        </div>

        <div className="ornament-divider">
          <span className="line" />
          <span className="diamond" />
          <span className="dot" />
          <span className="diamond" />
          <span className="line" />
        </div>

        {/* DATE card only — centred */}
        <div className={styles.gridSingle}>
          <div className={styles.card}>
            <div className={styles.cardCornerTL} />
            <div className={styles.cardCornerBR} />

            <div className={styles.iconWrapper}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B88624" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" fill="#FAF4E6" />
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <circle cx="8" cy="15" r="1" fill="#B88624" />
                <circle cx="12" cy="15" r="1" fill="#B88624" />
                <circle cx="16" cy="15" r="1" fill="#B88624" />
              </svg>
            </div>

            <div className={styles.label}>DATE</div>
            <div className={styles.content}>
              <div className={styles.dateText}>14 September 2026</div>
              <span className={styles.smallMuted}>to</span>
              <div className={styles.dateText}>15 September 2026</div>
            </div>
          </div>
        </div>

        {/* In-page Next Navigation */}
        <div style={{ textAlign: 'center' }}>
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

export default EventDetails;
