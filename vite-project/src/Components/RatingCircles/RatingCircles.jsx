import React from 'react';
import styles from './RatingCircles.module.css';

const RatingCircles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Your Rating</h3>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur</p>
      </div>

      <div className={styles.circlesArea}>
        {/* الدائرة الكبيرة - Food Taste */}
        <div className={`${styles.circle} ${styles.foodTaste}`}>
          <span className={styles.percentage}>85%</span>
          <span className={styles.label}>Food Taste</span>
        </div>

        {/* الدائرة المتوسطة - Hygiene */}
        <div className={`${styles.circle} ${styles.hygiene}`}>
          <span className={styles.percentage}>85%</span>
          <span className={styles.label}>Hygiene</span>
        </div>

        {/* الدائرة الصغيرة - Packaging */}
        <div className={`${styles.circle} ${styles.packaging}`}>
          <span className={styles.percentage}>92%</span>
          <span className={styles.label}>Packaging</span>
        </div>
      </div>
    </div>
  );
};

export default RatingCircles;
