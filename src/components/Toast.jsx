import React from 'react';
import styles from './Toast.module.css';

const Toast = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.toastContainer} role="status" aria-live="polite">
      <div className={styles.toastCard}>
        <span className={styles.toastIcon}>✨</span>
        <span className={styles.toastText}>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
