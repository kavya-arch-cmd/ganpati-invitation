import React from 'react';
import styles from './EventDetails.module.css';

const EventDetails = ({ onNext }) => {
  const handleGetDirections = () => {
    const address = "A2/1401, 14th Floor, Sawali CHS., Laxmi Nagar, Ghatkopar (E), Mumbai - 400 075";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.section}>
      <div className="section-container">
        <div className={`${styles.combinedCard} reveal-scale is-revealed`}>

          {/* Chapter Badge */}
          <div className="chapter-badge" style={{ marginBottom: '0.5rem' }}>
            <span className="dot" />
            <span>DATE</span>
            <span className="dot" />
          </div>

          {/* TOP SECTION: The DATE BOX */}
          <div className={styles.dateBox}>
            <div className={styles.cardCornerTL} />
            <div className={styles.cardCornerBR} />

            <div className={styles.dateLabel}>DATE</div>
            <div className={styles.dateContent}>
              <div className={styles.dateText}>14 September 2026</div>
              <span className={styles.smallMuted}>to</span>
              <div className={styles.dateText}>15 September 2026</div>
            </div>
          </div>

          {/* Subtle connecting divider */}
          <div className={styles.sectionDivider}>
            <span className={styles.divLine} />
            <span className={styles.divDiamond} />
            <span className={styles.divLine} />
          </div>

          {/* VENUE / LOCATION SECTION */}
          <div className={styles.venueSection}>
            <div className="chapter-badge" style={{ marginBottom: '0.5rem' }}>
              <span className="dot" />
              <span>LOCATION</span>
              <span className="dot" />
            </div>

            {/* Address Frame */}
            <div className={styles.addressFrame}>
              <div className={styles.pinIconWrapper}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#B88624" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

            {/* GET DIRECTIONS Button */}
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
          </div>

          {/* In-page CONTINUE Navigation */}
          <div className={styles.continueWrapper}>
            <button
              className="page-next-btn"
              onClick={(e) => { e.stopPropagation(); onNext && onNext(); }}
              aria-label="Continue to next page"
              style={{ marginTop: '0.5rem' }}
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

export default EventDetails;
