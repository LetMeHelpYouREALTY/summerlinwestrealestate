import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../page.module.css";
import dynamic from 'next/dynamic';
const LatestMarketInsights = dynamic(() => import('../../components/ui/LatestMarketInsights'), { ssr: false });

export default function Market() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Summerlin Real Estate Market | Trends & Analysis</title>
        <meta name="description" content="Get the latest Summerlin real estate market trends, home values, and expert analysis. Stay informed about Summerlin West housing market conditions." />
        <meta property="og:title" content="Summerlin Real Estate Market | Trends & Analysis" />
        <meta property="og:description" content="Get the latest Summerlin real estate market trends, home values, and expert analysis. Stay informed about Summerlin West housing market conditions." />
      </Head>
      <section className={styles.hero} style={{marginBottom: '2rem'}}>
        <h1>Summerlin Real Estate Market</h1>
        <p className={styles.subtitle}>Trends, home values, and expert analysis for Summerlin West</p>
      </section>
      <LatestMarketInsights />
      <section style={{marginBottom: '2.5rem'}}>
        <h2>Current Market Trends</h2>
        <Image src="https://placehold.co/800x300?text=Market+Trends" alt="Summerlin real estate market trends graph" width={800} height={300} style={{width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: '1.5rem'}} />
        <ul style={{color: '#0A2540', fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li>Median home price: $850,000</li>
          <li>Average days on market: 14</li>
          <li>Inventory: Low, with high buyer demand</li>
          <li>List-to-sale price ratio: 98%</li>
        </ul>
      </section>
      <section style={{marginBottom: '2.5rem', background: '#F7F9FC', borderRadius: '8px', padding: '2rem 1rem'}}>
        <h2>Expert Market Insights</h2>
        <ul style={{color: '#0A2540', fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li>Summerlin West remains a top choice for families and professionals</li>
          <li>Strong appreciation and resale value</li>
          <li>New construction and resale opportunities</li>
          <li>Contact for a personalized market report</li>
        </ul>
      </section>
      <section style={{marginBottom: '2.5rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem 1rem'}}>
        <h2>Explore More</h2>
        <ul style={{color: '#3A8DDE', fontWeight: 600, fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li><Link href="/market-reports">Summerlin Market Reports</Link></li>
          <li><Link href="/current-listing">Featured Home for Sale</Link></li>
          <li><Link href="/about">Meet Your Summerlin Expert</Link></li>
          <li><Link href="/contact">Contact for Market Insights</Link></li>
        </ul>
      </section>
    </div>
  );
} 