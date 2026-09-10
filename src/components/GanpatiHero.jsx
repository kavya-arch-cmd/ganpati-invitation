import React from 'react';
import styles from './GanpatiHero.module.css';
import ganpatiImg from '../assets/bg removed ganapati image.png';
import DiyaIcon from './DiyaIcon';

const GanpatiHero = ({ onNext }) => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroCard}>

        {/* "गणपती बाप्पा मोरया" heading — replaces removed badge + toran */}
        <h1 className={styles.bappaHeading}>गणपती बाप्पा मोरया</h1>

        {/* Arch frame — divine halo + image + pedestal */}
        <div className={styles.archFrame}>

          {/* Divine golden halo behind the murti */}
          <div className={styles.divineHalo} aria-hidden="true" />

          {/* Ganpati murti — ceremonial slow reveal */}
          <div className={styles.imageContainer}>
            <img
              src={ganpatiImg}
              alt="Lord Ganesha – Ganpati Bappa"
              className={styles.ganpatiImage}
              loading="eager"
            />
          </div>

          {/* Temple pedestal steps */}
          <div className={styles.pedestal}>
            <div className={styles.stepTop} />
            <div className={styles.stepMid} />
            <div className={styles.stepBottom} />
          </div>

          {/* Diya on pedestal */}
          <div className={styles.pedestalDiya}>
            <DiyaIcon size={44} />
          </div>
        </div>

        {/* "मंगलमूर्ति मोरया" — kept exactly as approved */}
        <div className={styles.chantWrapper}>
          <div className="ornament-divider">
            <span className="line" />
            <span className="diamond" />
            <span className="dot" />
            <span className="diamond" />
            <span className="line" />
          </div>
          <h2 className={styles.sanskritChant}>"मंगलमूर्ति मोरया"</h2>
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

export default GanpatiHero;
