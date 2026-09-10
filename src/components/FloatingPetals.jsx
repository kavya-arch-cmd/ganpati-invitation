import React from 'react';
import styles from './FloatingPetals.module.css';

const FloatingPetals = () => {
  return (
    <div className={styles.petalsContainer} aria-hidden="true">
      {/* Marigold Petals */}
      <div className={`${styles.petal} ${styles.marigold} ${styles.p1}`}></div>
      <div className={`${styles.petal} ${styles.marigold} ${styles.p2}`}></div>
      <div className={`${styles.petal} ${styles.marigold} ${styles.p3}`}></div>
      <div className={`${styles.petal} ${styles.marigold} ${styles.p4}`}></div>
      <div className={`${styles.petal} ${styles.marigold} ${styles.p5}`}></div>
      <div className={`${styles.petal} ${styles.marigold} ${styles.p6}`}></div>

      {/* Soft Rose / Terracotta Petals */}
      <div className={`${styles.petal} ${styles.rose} ${styles.p7}`}></div>
      <div className={`${styles.petal} ${styles.rose} ${styles.p8}`}></div>
      <div className={`${styles.petal} ${styles.rose} ${styles.p9}`}></div>
      <div className={`${styles.petal} ${styles.rose} ${styles.p10}`}></div>

      {/* Gold Sparkle Motes */}
      <div className={`${styles.sparkle} ${styles.s1}`}></div>
      <div className={`${styles.sparkle} ${styles.s2}`}></div>
      <div className={`${styles.sparkle} ${styles.s3}`}></div>
      <div className={`${styles.sparkle} ${styles.s4}`}></div>
    </div>
  );
};

export default FloatingPetals;
