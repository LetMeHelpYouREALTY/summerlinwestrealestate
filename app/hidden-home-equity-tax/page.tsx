import { Metadata } from 'next';
import styles from './HiddenHomeEquityTax.module.css';

export const metadata: Metadata = {
  title: 'Are You a Summerlin West Homeowner Facing a Hidden Tax? Find Out Before You Sell.',
  description: 'Learn about the hidden home equity tax that could impact Summerlin West homeowners. Get a free, no-obligation equity analysis before you sell.',
  alternates: {
    canonical: '/hidden-home-equity-tax',
  },
  openGraph: {
    title: 'Are You a Summerlin West Homeowner Facing a Hidden Tax? Find Out Before You Sell.',
    description: 'Learn about the hidden home equity tax that could impact Summerlin West homeowners. Get a free, no-obligation equity analysis before you sell.',
    url: 'https://summerlinwestrealestate.com/hidden-home-equity-tax',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Hidden Home Equity Tax Information',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Are You a Summerlin West Homeowner Facing a Hidden Tax? Find Out Before You Sell.',
    description: 'Learn about the hidden home equity tax that could impact Summerlin West homeowners. Get a free, no-obligation equity analysis before you sell.',
    images: ['/images/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HiddenHomeEquityTaxPage() {
  return (
    <section className={styles.container} aria-labelledby="hidden-tax-headline">
      <header>
        <h1 id="hidden-tax-headline" className={styles.headline}>
          Are You a Summerlin West Homeowner Facing a Hidden Tax? Find Out Before You Sell.
        </h1>
      </header>
      <article>
        <p className={styles.opening}>
          If you own a home in Summerlin West, you’ve made a smart investment. Over the past decade,
          our community has seen remarkable growth, with property values soaring and neighborhoods
          flourishing. As a homeowner, you’ve likely built substantial equity—an achievement worth
          celebrating. But before you consider selling, there’s a crucial financial detail that
          could dramatically impact your bottom line, and many long-term residents are unaware of
          it.
        </p>
        <section className={styles.section}>
          <h2>The Core Problem: An Outdated Tax Law That Could Cost You</h2>
          <p>
            Here’s what every homeowner needs to know: the federal capital gains tax law for home
            sales was created in 1997. Under this law, individuals can exclude up to{' '}
            <strong>$250,000</strong> of profit from the sale of their primary residence, while
            married couples filing jointly can exclude up to <strong>$500,000</strong>.
          </p>
          <p>
            But here’s the catch: since 1997, national home prices have skyrocketed by over{' '}
            <strong>260%</strong>, yet these exemption limits have never been adjusted for inflation
            or rising property values. As a result, more and more homeowners are finding themselves
            exposed to a significant tax bill—one that was never intended for ordinary families.
          </p>
        </section>
        <section className={styles.section}>
          <h2>The Local Impact: Why Summerlin West is Uniquely Affected</h2>
          <p>
            This isn’t just a national issue—it’s hitting close to home. According to the National
            Association of Realtors®, <strong>43%</strong> of homeowners in Nevada have accumulated
            more equity than the federal exemption allows. In a high-appreciation area like
            Summerlin West, that percentage is likely even higher.
          </p>
          <p>
            The very success of our local market—the same appreciation that has built your
            wealth—could now trigger a substantial and unexpected tax liability when you sell. This
            is the <strong>“hidden home equity tax”</strong>: a consequence of your home’s
            impressive performance outpacing an outdated, stagnant law.
          </p>
        </section>
        <section className={styles.ctaSection} aria-labelledby="cta-headline">
          <h2 id="cta-headline" className={styles.ctaHeadline}>
            Don’t Wait Until It’s Too Late: Get Your Free Equity Analysis
          </h2>
          <p>
            <strong>
              As a specialist in the Summerlin West market, I am offering a Free, No-Obligation Home
              Equity Tax Analysis.
            </strong>
          </p>
          <p>
            This personalized analysis will help you understand your potential tax liability before
            you list your home. You’ll gain the critical information needed to maximize your net
            proceeds and make the smartest financial decision for your sale—without any cost or
            obligation.
          </p>
          <a
            href="/contact"
            className={styles.ctaButton}
            aria-label="Schedule your confidential home equity tax analysis"
          >
            Click here to schedule your confidential analysis today and protect the equity you’ve
            worked so hard to build.
          </a>
        </section>
      </article>
    </section>
  );
}
