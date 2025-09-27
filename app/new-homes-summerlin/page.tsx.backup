import LeadCaptureForm from '../../components/ui/LeadCaptureForm';
import Head from 'next/head';
import styles from '../page.module.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const LatestMarketInsights = dynamic(() => import('../../components/ui/LatestMarketInsights'), { ssr: false });

export default function NewHomesSummerlin() {
  return (
    <div className={styles.page}>
      <Head>
        <title>New Homes in Summerlin Las Vegas | Builders, Incentives & Buying Guide</title>
        <meta name="description" content="Explore new homes in Summerlin Las Vegas. See builder incentives, new construction communities, and the home buying process. Get alerts for new homes!" />
        <meta property="og:title" content="New Homes in Summerlin Las Vegas | Builders, Incentives & Buying Guide" />
        <meta property="og:description" content="Explore new homes in Summerlin Las Vegas. See builder incentives, new construction communities, and the home buying process. Get alerts for new homes!" />
      </Head>
      <section className={styles.hero} style={{marginBottom: '2rem'}}>
        <h1>New Homes in Summerlin Las Vegas</h1>
        <p className={styles.subtitle}>Your guide to new construction communities, builder incentives, and the new home buying process in Summerlin</p>
      </section>
      <LatestMarketInsights />

      {/* New Construction Communities */}
      <section style={{marginBottom: '2.5rem'}}>
        <h2>New Construction Communities</h2>
        <ul style={{color: '#0A2540', fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li>Redpoint &amp; Redpoint Square</li>
          <li>Stonebridge</li>
          <li>Reverence</li>
          <li>The Cliffs</li>
          <li>Summerlin Centre</li>
          <li>And more—contact us for the latest releases!</li>
        </ul>
      </section>

      {/* Builder Information */}
      <section style={{marginBottom: '2.5rem'}}>
        <h2>Top Builders in Summerlin</h2>
        <ul style={{color: '#0A2540', fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li>Pulte Homes</li>
          <li>Toll Brothers</li>
          <li>Lennar</li>
          <li>Woodside Homes</li>
          <li>Richmond American</li>
          <li>Tri Pointe Homes</li>
        </ul>
      </section>

      {/* Incentives Section */}
      <section style={{marginBottom: '2.5rem'}}>
        <h2>Builder Incentives &amp; Special Offers</h2>
        <p style={{color: '#0A2540', fontSize: '1.08rem'}}>
          Many builders in Summerlin offer special incentives for new home buyers, including closing cost assistance, design center credits, and rate buydowns. Incentives change frequently—contact us for the latest offers and VIP access to new releases.
        </p>
      </section>

      {/* Process Section */}
      <section style={{marginBottom: '2.5rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem 1rem'}}>
        <h2>The New Home Buying Process</h2>
        <ol style={{color: '#0A2540', fontSize: '1.08rem', marginLeft: '1.5rem', listStyle: 'decimal inside'}}>
          <li>Consultation: Discuss your needs, budget, and timeline</li>
          <li>Community &amp; Builder Selection: Tour model homes and compare options</li>
          <li>Lot &amp; Floor Plan Choice: Reserve your preferred lot and design</li>
          <li>Contract &amp; Customization: Sign contract and select finishes/upgrades</li>
          <li>Construction &amp; Inspections: Monitor progress and attend walkthroughs</li>
          <li>Closing &amp; Move-In: Finalize paperwork and get your keys!</li>
        </ol>
      </section>

      {/* FAQ Section */}
      <section style={{marginBottom: '2.5rem'}}>
        <h2>New Home Buyer FAQ</h2>
        <ul style={{color: '#0A2540', fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li>How do I get notified about new home releases in Summerlin?</li>
          <li>What incentives are available for new construction buyers?</li>
          <li>How does the builder contract process work?</li>
          <li>Can I use my own agent for a new home purchase?</li>
        </ul>
      </section>

      {/* Internal Links Section */}
      <section style={{marginBottom: '2.5rem', background: '#F7F9FC', borderRadius: '8px', padding: '2rem 1rem'}}>
        <h2>Explore More Summerlin Real Estate Resources</h2>
        <ul style={{color: '#3A8DDE', fontWeight: 600, fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li><Link href="/market-reports">See all Summerlin market reports</Link></li>
          <li><Link href="/communities">Explore Summerlin West communities</Link></li>
          <li><Link href="/current-listing">View our current listing in The Vistas</Link></li>
          <li><Link href="/contact">Contact a Summerlin new home expert</Link></li>
        </ul>
      </section>

      {/* Lead Capture */}
      <section style={{marginBottom: '2.5rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem 1rem'}}>
        <h2 style={{textAlign: 'center', marginBottom: '1.5rem'}}>Get Alerts for New Homes in Summerlin</h2>
        <LeadCaptureForm 
          variant="inline"
          title="Get New Home Alerts"
          subtitle="Be the first to know about new construction releases and builder incentives."
          source="New Homes Summerlin Page"
        />
      </section>
    </div>
  );
} 