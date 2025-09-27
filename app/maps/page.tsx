'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function MapsPage() {
  const [activeTab, setActiveTab] = useState('property-search');
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => setMapLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Interactive Maps & Property Search</h1>
          <p className={styles.heroSubtitle}>
            Explore Summerlin West properties with our advanced mapping tools
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className={styles.tabNavigation}>
        <div className={styles.tabContainer}>
          <button
            className={`${styles.tab} ${activeTab === 'property-search' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('property-search')}
          >
            Property Search
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'neighborhoods' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('neighborhoods')}
          >
            Neighborhoods
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'market-analysis' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('market-analysis')}
          >
            Market Analysis
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'schools' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('schools')}
          >
            Schools & Amenities
          </button>
        </div>
      </section>

      {/* Map Container */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          {!mapLoaded ? (
            <div className={styles.mapLoading}>
              <div className={styles.loadingSpinner}></div>
              <p>Loading interactive map...</p>
            </div>
          ) : (
            <div className={styles.mapContent}>
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapOverlay}>
                  <h3>Interactive Map Coming Soon</h3>
                  <p>Our advanced mapping system is being integrated with:</p>
                  <ul>
                    <li>Real-time property listings</li>
                    <li>Neighborhood boundaries</li>
                    <li>School districts</li>
                    <li>Market trends</li>
                    <li>Walkability scores</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Map Controls */}
        <div className={styles.mapControls}>
          <div className={styles.controlGroup}>
            <h4>Search Filters</h4>
            <div className={styles.filterOptions}>
              <label className={styles.filterOption}>
                <input type="checkbox" defaultChecked aria-label="Show properties for sale" />
                <span>For Sale</span>
              </label>
              <label className={styles.filterOption}>
                <input type="checkbox" aria-label="Show recently sold properties" />
                <span>Recently Sold</span>
              </label>
              <label className={styles.filterOption}>
                <input type="checkbox" aria-label="Show new construction properties" />
                <span>New Construction</span>
              </label>
            </div>
          </div>

          <div className={styles.controlGroup}>
            <h4>Price Range</h4>
            <div className={styles.priceRange}>
              <input
                type="range"
                min="200000"
                max="2000000"
                step="50000"
                defaultValue="500000"
                className={styles.priceSlider}
                aria-label="Price range slider"
                title="Adjust price range"
              />
              <div className={styles.priceLabels}>
                <span>$200K</span>
                <span>$2M</span>
              </div>
            </div>
          </div>

          <div className={styles.controlGroup}>
            <h4>Property Type</h4>
            <select className={styles.propertySelect} aria-label="Select property type">
              <option>All Types</option>
              <option>Single Family</option>
              <option>Townhouse</option>
              <option>Condo</option>
              <option>Luxury</option>
            </select>
          </div>
        </div>
      </section>

      {/* Quick Search Section */}
      <section className={styles.quickSearch}>
        <div className={styles.searchContainer}>
          <h2>Quick Property Search</h2>
          <div className={styles.searchForm}>
            <div className={styles.searchRow}>
              <input
                type="text"
                placeholder="Enter address, neighborhood, or zip code"
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>Search Properties</button>
            </div>
            <div className={styles.searchOptions}>
              <Link href="/market" className={styles.searchLink}>
                View Market Reports
              </Link>
              <Link href="/communities" className={styles.searchLink}>
                Explore Communities
              </Link>
              <Link href="/contact" className={styles.searchLink}>
                Contact Agent
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Areas */}
      <section className={styles.featuredAreas}>
        <h2>Featured Areas in Summerlin West</h2>
        <div className={styles.areasGrid}>
          <div className={styles.areaCard}>
            <h3>Downtown Summerlin</h3>
            <p>Urban living with shopping, dining, and entertainment</p>
            <Link href="/downtown-summerlin" className={styles.areaLink}>
              Explore Area
            </Link>
          </div>
          <div className={styles.areaCard}>
            <h3>The Vistas</h3>
            <p>Luxury homes with mountain views and premium amenities</p>
            <Link
              href="https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049244&for_sale=1&for_rent=0"
              className={styles.areaLink}
            >
              Explore Area
            </Link>
          </div>
          <div className={styles.areaCard}>
            <h3>New Homes</h3>
            <p>Brand new construction with modern designs</p>
            <Link href="/new-homes-summerlin" className={styles.areaLink}>
              Explore Area
            </Link>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className={styles.marketInsights}>
        <h2>Market Insights</h2>
        <div className={styles.insightsGrid}>
          <div className={styles.insightCard}>
            <h4>Average Home Price</h4>
            <p className={styles.insightValue}>$675,000</p>
            <p className={styles.insightChange}>+5.2% from last year</p>
          </div>
          <div className={styles.insightCard}>
            <h4>Days on Market</h4>
            <p className={styles.insightValue}>23 days</p>
            <p className={styles.insightChange}>-8 days from last year</p>
          </div>
          <div className={styles.insightCard}>
            <h4>Inventory</h4>
            <p className={styles.insightValue}>156 homes</p>
            <p className={styles.insightChange}>+12% from last month</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Find Your Dream Home?</h2>
          <p>Our expert agents are here to help you navigate the Summerlin West market</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaButton}>
              Contact an Agent
            </Link>
            <Link href="/market-reports" className={styles.ctaButtonSecondary}>
              View Market Reports
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
