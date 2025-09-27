import type React from 'react';
import { formatPrice } from '../../lib/utils';
import styles from './NeighborhoodHero.module.css';
import StatCard from './StatCard';

export type MarketData = {
  medianPrice: number;
  priceChange: number;
  daysOnMarket: number;
  marketTrend: 'up' | 'down' | 'flat';
};

export type Neighborhood = {
  name: string;
};

interface NeighborhoodHeroProps {
  neighborhood: Neighborhood;
  marketData: MarketData;
}

const NeighborhoodHero: React.FC<NeighborhoodHeroProps> = ({ neighborhood, marketData }) => (
  <section
    className={styles['hero-section']}
    aria-label={`${neighborhood.name} Real Estate Overview`}
  >
    <div className={styles['hero-section__content']}>
      <h1 className={styles['hero-section__title']}>{neighborhood.name} Real Estate Expert</h1>
      <div className={styles['hero-section__market-stats']}>
        <StatCard
          title="Median Price"
          value={formatPrice(marketData.medianPrice)}
          change={marketData.priceChange}
        />
        <StatCard
          title="Days on Market"
          value={marketData.daysOnMarket}
          trend={marketData.marketTrend}
        />
      </div>
    </div>
  </section>
);

export default NeighborhoodHero;
