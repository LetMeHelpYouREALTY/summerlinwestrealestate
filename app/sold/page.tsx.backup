import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../page.module.css";
import dynamic from 'next/dynamic';
const LatestMarketInsights = dynamic(() => import('../../components/ui/LatestMarketInsights'), { ssr: false });

export default function Sold() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Recently Sold Homes in Summerlin | Summerlin West Real Estate</title>
        <meta name="description" content="See recently sold homes in Summerlin West. View sale prices, days on market, and market trends for buyers and sellers in Summerlin real estate." />
        <meta property="og:title" content="Recently Sold Homes in Summerlin | Summerlin West Real Estate" />
        <meta property="og:description" content="See recently sold homes in Summerlin West. View sale prices, days on market, and market trends for buyers and sellers in Summerlin real estate." />
      </Head>
      <section className={styles.hero} style={{marginBottom: '2rem'}}>
        <h1>Recently Sold Homes in Summerlin</h1>
        <p className={styles.subtitle}>Track the latest sales and market activity in Summerlin West</p>
      </section>
      <LatestMarketInsights />
      <section style={{marginBottom: '2.5rem'}}>
        <h2>Sold Listings</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto'}}>
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} style={{borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', background: '#fff'}}>
              <Image src={`https://placehold.co/400x220?text=Sold+Home+${i}`} alt={`Recently sold home in Summerlin ${i}`} width={400} height={220} style={{width: '100%', height: 'auto', display: 'block'}} />
              <div style={{padding: '1rem'}}>
                <h3 style={{margin: 0}}>Sold Home #{i}</h3>
                <p style={{fontSize: '0.98rem', color: '#0A2540'}}>Sold for $${800000 + i*10000} &bull; 4 bed &bull; 3 bath</p>
                <span style={{fontSize: '0.92rem', color: '#3A8DDE'}}>Closed: {2024 - i}-04-0{i+1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{marginBottom: '2.5rem', background: '#F7F9FC', borderRadius: '8px', padding: '2rem 1rem'}}>
        <h2>Summerlin Market Trends</h2>
        <ul style={{color: '#0A2540', fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li>Median sale price: $850,000</li>
          <li>Average days on market: 14</li>
          <li>List-to-sale price ratio: 98%</li>
          <li>Low inventory, high demand in Summerlin West</li>
        </ul>
      </section>
      <section style={{marginBottom: '2.5rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem 1rem'}}>
        <h2>Explore More</h2>
        <ul style={{color: '#3A8DDE', fontWeight: 600, fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li><Link href="/market-reports">Summerlin Market Reports</Link></li>
          <li><Link href="/current-listing">Featured Home for Sale</Link></li>
          <li><Link href="/about">Meet Your Summerlin Expert</Link></li>
          <li><Link href="/contact">Contact for a Home Value Report</Link></li>
        </ul>
      </section>
    </div>
  );
} 