import React from 'react';
import styles from './Celebration25.module.css';
import TempleSketchWatermark from './TempleSketchWatermark';

const Celebration25 = ({ onNext }) => {
  return (
    <div className={styles.section}>
      {/* Background Temple Watermark */}
      <TempleSketchWatermark opacity={0.14} />

      <div className="section-container">
        <div className={`${styles.card} reveal-scale is-revealed`}>
          {/* Chapter Badge — Marathi "२५ वर्षे" removed per correction 4 */}
          <div className="chapter-badge">
            <span className="dot" />
            <span>MILESTONE</span>
            <span className="dot" />
          </div>

          {/* Top Label */}
          <div className={styles.labelWrapper}>
            <span className={styles.labelWing}>❧</span>
            <span className={styles.label}>CELEBRATING</span>
            <span className={styles.labelWing}>☙</span>
          </div>

          {/* Central 25 Monogram Frame */}
          <div className={styles.monogramWrapper}>
            {/* Ornate Radiating Circles */}
            <div className={styles.outerGlow} />
            <div className={styles.decorativeCircle}>
              <div className={`${styles.cardinalOrnament} ${styles.top}`} />
              <div className={`${styles.cardinalOrnament} ${styles.right}`} />
              <div className={`${styles.cardinalOrnament} ${styles.bottom}`} />
              <div className={`${styles.cardinalOrnament} ${styles.left}`} />
            </div>
            <div className={styles.innerDottedCircle} />

            {/* Dimensional Gold "25" */}
            <div className={styles.heroNumber}>25</div>
          </div>

          {/* Years Label */}
          <div className={styles.yearsWrapper}>
            <h3 className={styles.yearsText}>YEARS</h3>
          </div>

          {/* Decorative Divider */}
          <div className="ornament-divider">
            <span className="line" />
            <span className="diamond" />
            <span className="dot" />
            <span className="diamond" />
            <span className="line" />
          </div>

          {/* Dedication paragraph — exactly 3 lines on every device via container-query sizing */}
          <div className={styles.dedicationText}>
            <div className={styles.dedicationLine}>
              With the divine blessings of Lord Ganesha and our beloved parents,
            </div>
            <div className={styles.dedicationLine}>
              Laxmiben Manoharlal Shah &amp; Monoharlal Vitthaldas Shah,
            </div>
            <div className={styles.dedicationLine}>
              we proudly celebrate 25 blessed years of Ganpati Bappa&apos;s presence.
            </div>
          </div>

          <div className={styles.flourishCluster}>
            <span className={styles.clusterDot} />
            <span className={styles.clusterDiamond} />
            <span className={styles.clusterDot} />
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

export default Celebration25;
