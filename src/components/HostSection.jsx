import React from 'react';
import styles from './HostSection.module.css';

const HostSection = () => {
  return (
    <section id="host-section" className={styles.section}>
      <div className="section-container">
        <div className={`${styles.card} reveal-scale`}>
          {/* Namaste / Pranam Icon */}
          <div className={styles.pranamWrapper}>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Hands joined in devotion */}
              <path
                d="M32 10 C30 16 26 26 24 38 C23 44 26 48 30 50 L32 52 L34 50 C38 48 41 44 40 38 C38 26 34 16 32 10 Z"
                fill="#FAF4E6"
                stroke="#B88624"
                strokeWidth="1.8"
              />
              <path d="M32 16 L32 46" stroke="#B88624" strokeWidth="1.2" strokeDasharray="2 2" />
              <circle cx="32" cy="6" r="2.5" fill="#B88624" />
            </svg>
          </div>

          <p className={styles.label}>HOSTED BY</p>

          <h2 className={styles.mainName}>AMIT SHAH & FAMILY</h2>

          <div className="ornament-divider">
            <span className="line" />
            <span className="diamond" />
            <span className="line" />
          </div>

          <div className={styles.familyBlock}>
            <p className={styles.ampersand}>&</p>
            <p className={styles.familyText}>Family</p>
          </div>

          <p className={styles.regardsText}>Regards</p>
        </div>
      </div>
    </section>
  );
};

export default HostSection;
