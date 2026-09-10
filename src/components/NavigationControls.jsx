import React from 'react';
import styles from './NavigationControls.module.css';

const NavigationControls = ({
  currentPage,
  totalPages = 7,
  onNext,
  onPrev,
  onGoToPage,
  onShare,
}) => {
  // Do not show full bottom nav bar on Cover page (page 1) since Cover has its own prominent "OPEN INVITATION" button
  if (currentPage === 1) return null;

  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  return (
    <nav className={styles.navBar} aria-label="Invitation page navigation">
      <div className={styles.navContainer}>
        {/* PREVIOUS Button */}
        <button
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          disabled={isFirst}
          aria-label="Go to previous page"
          title="Previous Page (Left Arrow)"
        >
          <span className={styles.arrowIcon}>←</span>
          <span className={styles.btnText}>PREV</span>
        </button>

        {/* Page Dots & Numbers */}
        <div className={styles.indicatorWrapper} onClick={(e) => e.stopPropagation()}>
          <div className={styles.pageDots}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={`${styles.dot} ${p === currentPage ? styles.activeDot : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onGoToPage && onGoToPage(p);
                }}
                aria-label={`Go to page ${p}`}
                aria-current={p === currentPage ? 'page' : undefined}
              />
            ))}
          </div>
          <span className={styles.pageNumber}>
            0{currentPage} <span className={styles.slash}>/</span> 0{totalPages}
          </span>
        </div>

        {/* SHARE Button on final page only; no bottom NEXT button */}
        {isLast ? (
          <button
            className={`${styles.navBtn} ${styles.shareBtn}`}
            onClick={(e) => {
              e.stopPropagation();
              onShare();
            }}
            aria-label="Share this digital invitation"
            title="Share Invitation"
          >
            <span className={styles.btnText}>SHARE</span>
            <span className={styles.shareIcon}>📤</span>
          </button>
        ) : (
          /* Spacer to keep PREV and dots aligned when there is no right-side button */
          <div className={styles.navSpacer} aria-hidden="true" />
        )}
      </div>
    </nav>
  );
};

export default NavigationControls;
