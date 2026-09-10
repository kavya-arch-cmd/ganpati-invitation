import React from 'react';
import styles from './ShlokSlide.module.css';

const ShlokSlide = ({ onNext }) => {
  return (
    <div className={styles.shlokSection}>
      <div className={styles.card}>

        {/* Top ornamental diya glow ring */}
        <div className={styles.glowRing} aria-hidden="true" />

        {/* Om symbol */}
        <div className={styles.omWrapper} aria-hidden="true">
          <span className={styles.omSymbol}>ॐ</span>
        </div>

        {/* Top gold ornament line */}
        <div className="ornament-divider" style={{ marginTop: '0.25rem' }}>
          <span className="line" />
          <span className="diamond" />
          <span className="dot" />
          <span className="diamond" />
          <span className="line" />
        </div>

        {/* Shlok lines */}
        <div className={styles.shlokWrapper}>
          <p className={`${styles.shlokLine} ${styles.line1}`}>
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ
          </p>
          <p className={`${styles.shlokLine} ${styles.line2}`}>
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा
          </p>
        </div>

        {/* Bottom ornament */}
        <div className="ornament-divider">
          <span className="line" />
          <span className="diamond" />
          <span className="dot" />
          <span className="diamond" />
          <span className="line" />
        </div>

        {/* Continue button */}
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
  );
};

export default ShlokSlide;
