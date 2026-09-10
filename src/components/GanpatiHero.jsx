import React from 'react';
import styles from './GanpatiHero.module.css';
import ganpatiImg from '../assets/bg removed ganapati image.png';
import DiyaIcon from './DiyaIcon';

const GanpatiHero = ({ onNext }) => {
  return (
    <div className={styles.heroSection}>
      <div className="section-container">
        <div className={`${styles.heroCard} reveal-scale is-revealed`}>
          {/* Chapter Badge */}
          <div className="chapter-badge">
            <span className="dot" />
            <span>SACRED DARSHAN • श्री गणेश</span>
            <span className="dot" />
          </div>

          {/* Temple Arch / Prabhavali Frame */}
          <div className={styles.archFrame}>
            {/* Top Ornamental Toran */}
            <div className={styles.topToran}>
              <svg viewBox="0 0 320 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.toranSvg}>
                <path d="M0 0 C40 25 80 25 120 0 C160 25 200 25 240 0 C280 25 320 25 320 0" stroke="#B88624" strokeWidth="1.5" />
                <circle cx="60" cy="14" r="3" fill="#B88624" />
                <circle cx="180" cy="14" r="3" fill="#B88624" />
                <circle cx="300" cy="14" r="3" fill="#B88624" />
              </svg>
            </div>

            {/* Divine Golden Halo Rays behind Ganpati */}
            <div className={styles.divineHalo} />

            {/* Ganpati Artwork (Existing supplied image preserved) */}
            <div className={styles.imageContainer}>
              <img
                src={ganpatiImg}
                alt="Lord Ganesha - Ganpati Bappa"
                className={styles.ganpatiImage}
                loading="eager"
              />
            </div>

            {/* Temple Pedestal / Base Steps */}
            <div className={styles.pedestal}>
              <div className={styles.stepTop} />
              <div className={styles.stepMid} />
              <div className={styles.stepBottom} />
            </div>

            {/* Glowing Diya on Pedestal */}
            <div className={styles.pedestalDiya}>
              <DiyaIcon size={52} />
            </div>
          </div>

          {/* Sacred Chant Inscription in approved FESTIVE RED */}
          <div className={styles.chantWrapper}>
            <div className="ornament-divider">
              <span className="line" />
              <span className="diamond" />
              <span className="dot" />
              <span className="diamond" />
              <span className="line" />
            </div>
            <h2 className={styles.sanskritChant}>“मंगलमूर्ति मोरया”</h2>
            <p className={styles.devotionalSubtitle}>॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ॥</p>

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
    </div>
  );
};

export default GanpatiHero;
