import type React from 'react';
import styles from './StatCard.module.css';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'flat';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend }) => {
  return (
    <div className={styles['stat-card']}>
      <div className={styles['stat-card__title']}>{title}</div>
      <div className={styles['stat-card__value']}>{value}</div>
      {typeof change === 'number' && (
        <div
          className={styles['stat-card__change']}
          data-positive={change > 0}
          data-negative={change < 0}
        >
          {change > 0 ? '+' : ''}
          {change}%
        </div>
      )}
      {trend && (
        <div
          className={styles['stat-card__trend']}
          data-trend={trend}
          aria-label={`Market trend: ${trend}`}
        />
      )}
    </div>
  );
};

export default StatCard;
