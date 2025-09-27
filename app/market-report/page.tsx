'use client';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './market-report.module.css';

export default function MarketReportRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the canonical URL
    router.replace('/market-reports');
  }, [router]);

  return (
    <>
      <Head>
        <title>Redirecting to Market Reports | Summerlin West Real Estate</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://summerlinwestrealestate.com/market-reports" />
      </Head>
      <div className={styles.redirectContainer}>
        <div className={styles.redirectContent}>
          <h1>Redirecting...</h1>
          <p>You are being redirected to the market reports page.</p>
          <p>
            <a href="/market-reports" className={styles.redirectLink}>
              Click here if you are not redirected automatically
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
