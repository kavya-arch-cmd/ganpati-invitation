import React from 'react';
import styles from './LocationSection.module.css';

const LocationSection = ({ onNext }) => {
  const handleGetDirections = () => {
    const address = "A2/1401, 14th Floor, Sawali CHS., Laxmi Nagar, Ghatkopar (E), Mumbai - 400 075";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.section}>
      <div className="section-container">
        <div className={`${styles.card} reveal-scale is-revealed`}>
          {/* Chapter Badge */}
          <div className="chapter-badge">
            <span className="dot" />
            <span>VENUE • स्थान</span>
            <span className="dot" />
          </div>

          {/* Section Heading */}
          <div className={styles.headingWrapper}>
            <span className={styles.flourishWing}>❧</span>
            <h2 className={styles.heading}>LOCATION</h2>
            <span className={styles.flourishWing}>☙</span>
          </div>

          <div className="ornament-divider">
            <span className="line" />
            <span className="diamond" />
            <span className="line" />
          </div>

          {/* Address Frame */}
          <div className={styles.addressFrame}>
            <div className={styles.pinIconWrapper}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B88624" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#FAF4E6" />
                <circle cx="12" cy="10" r="3" fill="#B88624" />
              </svg>
            </div>

            <div className={styles.addressLines}>
              <div className={styles.line}>A2/1401, 14th Floor,</div>
              <div className={styles.line}>Sawali CHS.,</div>
              <div className={styles.line}>Laxmi Nagar,</div>
              <div className={styles.line}>Ghatkopar (E),</div>
              <div className={styles.lineStrong}>Mumbai - 400 075</div>
            </div>
          </div>

          {/* Action Button */}
          <button
            className={styles.directionsButton}
            onClick={(e) => {
              e.stopPropagation();
              handleGetDirections();
            }}
            aria-label="Get directions to venue in Google Maps"
          >
            <span>GET DIRECTIONS</span>
            <span className={styles.buttonArrow}>→</span>
          </button>

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

export default LocationSection;
