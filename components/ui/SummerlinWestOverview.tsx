'use client';
import type React from 'react';
import styles from '../../app/page.module.css';

const SummerlinWestOverview: React.FC = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.sectionTitle}>Summerlin West Overview</h2>
      <div className={styles.grid}>
        <div>
          <h3 className={styles.heroSubtitle}>About the Community</h3>
          <p className={styles.propertyAddress}>
            Summerlin West represents the newest phase of Las Vegas&apos; premier master-planned
            community, offering modern amenities, top-rated schools, and stunning mountain views.
          </p>
          <ul className={styles.propertyDetails}>
            <li>World-class golf courses</li>
            <li>Downtown Summerlin shopping</li>
            <li>Red Rock Canyon proximity</li>
            <li>Award-winning schools</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.heroSubtitle}>Market Highlights</h3>
          <div className={styles.card}>
            <div>
              <span className={styles.propertyPrice}>New Construction:</span>
              <span className={styles.propertyAddress}> Active</span>
            </div>
            <div>
              <span className={styles.propertyPrice}>Price Range:</span>
              <span className={styles.propertyAddress}> $500K - $2M+</span>
            </div>
            <div>
              <span className={styles.propertyPrice}>Home Styles:</span>
              <span className={styles.propertyAddress}> Modern, Contemporary, Custom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerlinWestOverview;
