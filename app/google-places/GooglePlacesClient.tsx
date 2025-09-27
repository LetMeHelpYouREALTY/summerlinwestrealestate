'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import SummerlinWestOverview from '../../components/ui/SummerlinWestOverview';
import styles from '../page.module.css';

const LatestMarketInsights = dynamic(() => import('../../components/ui/LatestMarketInsights'), {
  ssr: false,
});
const LeadCaptureForm = dynamic(() => import('../../components/ui/LeadCaptureForm'), {
  ssr: false,
});

export default function GooglePlacesClient() {
  const placesFeatures = [
    {
      title: 'Autocomplete Search',
      description: 'Intelligent address suggestions with real-time validation',
      icon: '🔍',
      benefits: [
        'Reduces form errors and improves user experience',
        'Supports international addresses',
        'Customizable styling to match your brand',
        'Mobile-optimized for touch devices',
      ],
    },
    {
      title: 'Place Details',
      description: 'Rich location information including photos, reviews, and contact details',
      icon: '📍',
      benefits: [
        'Comprehensive property and neighborhood data',
        'High-quality photos and virtual tours',
        'User reviews and ratings',
        'Business hours and contact information',
      ],
    },
    {
      title: 'Geocoding',
      description: 'Convert addresses to coordinates and vice versa',
      icon: '🗺️',
      benefits: [
        'Precise location mapping for properties',
        'Distance calculations and route planning',
        'Neighborhood boundary detection',
        'Integration with mapping services',
      ],
    },
    {
      title: 'Nearby Search',
      description: 'Find amenities, schools, and services near properties',
      icon: '🏪',
      benefits: [
        'School district information',
        'Shopping and dining options',
        'Healthcare facilities and services',
        'Transportation and commute times',
      ],
    },
  ];

  const implementationSteps = [
    {
      step: 1,
      title: 'API Key Setup',
      description:
        'Obtain and configure your Google Places API key with proper restrictions and billing setup.',
    },
    {
      step: 2,
      title: 'Component Integration',
      description:
        'Integrate Google Places components into your real estate search forms and property pages.',
    },
    {
      step: 3,
      title: 'Customization',
      description:
        'Style components to match your luxury real estate brand with custom CSS and theming.',
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Test across devices and optimize for performance and user experience.',
    },
  ];

  const codeExamples = [
    {
      title: 'Autocomplete Component',
      language: 'javascript',
      code: `import { Autocomplete } from '@googlemaps/react-wrapper&apos;;

function AddressSearch() {
  return (
    <Autocomplete
      onLoad={autocomplete => {
        autocomplete.setFields(['address_components&apos;, &apos;geometry']);
      }}
      onPlaceChanged={() => {
        // Handle place selection
      }}
    >
      <input
        type="text"
        placeholder="Enter property address..."
        className="luxury-input"
      />
    </Autocomplete>
  );
}`,
    },
    {
      title: 'Place Details Display',
      language: 'javascript',
      code: `function PropertyDetails({ placeId }) {
  const [place, setPlace] = useState(null);
  
  useEffect(() => {
    const service = new google.maps.places.PlacesService(map);
    service.getDetails({
      placeId: placeId,
      fields: ['name&apos;, &apos;formatted_address&apos;, &apos;photos&apos;, &apos;reviews']
    }, (result, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        setPlace(result);
      }
    });
  }, [placeId]);
  
  return (
    <div className="property-details">
      {place && (
        <>
          <h3>{place.name}</h3>
          <p>{place.formatted_address}</p>
          {/* Display photos and reviews */}
        </>
      )}
    </div>
  );
}`,
    },
  ];

  return (
    <div className={styles.page}>
      <script type="application/ld+json" suppressHydrationWarning>{`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Google Places UI Kit for Real Estate",
          "description": "Comprehensive guide to integrating Google Places API for luxury real estate websites",
          "url": "https://summerlinwestrealestate.com/google-places"
        }
      `}</script>

      <main className={`${styles.luxuryMainContent} ${styles.googlePlacesContainer}`}>
        <SummerlinWestOverview />

        <section className={`${styles.hero} ${styles.luxuryHero}`}>
          <h1 className={styles.luxuryHeroTitle}>Google Places UI Kit for Real Estate</h1>
          <p className={styles.luxurySubtitle}>
            Enhance your real estate website with powerful location services and intelligent search
            capabilities
          </p>
        </section>

        <section className={styles.sectionCard}>
          <LatestMarketInsights />
        </section>

        {/* Overview Section */}
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>Why Google Places for Real Estate?</h2>
          <p className={styles.contentText}>
            Google Places API provides powerful tools to enhance your real estate website with
            intelligent location services, autocomplete search, and rich property information. From
            address validation to neighborhood insights, Google Places helps create a seamless and
            professional user experience for luxury real estate clients.
          </p>
        </section>

        {/* Features Grid */}
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>Key Features & Benefits</h2>
          <div className={styles.featuresGrid}>
            {placesFeatures.map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <ul className={styles.featureBenefits}>
                  {feature.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Guide */}
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>Implementation Guide</h2>
          <div className={styles.implementationSteps}>
            {implementationSteps.map((step) => (
              <div key={step.title} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.step}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security & API Key Setup */}
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>Security & API Key Setup</h2>
          <div className={styles.contentGrid}>
            <div className={styles.contentText}>
              <h3>Environment Variables</h3>
              <p>
                Store your Google Maps API credentials securely using environment variables. Create
                a <code>.env.local</code> file in your project root:
              </p>
              <pre className={styles.codeBlock}>
                <code>{`# Google Maps API Configuration
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
GOOGLE_MAPS_URL_SIGNING_SECRET=your_signing_secret_here

# Other environment variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com`}</code>
              </pre>

              <h3>URL Signing for Enhanced Security</h3>
              <p>
                Use URL signing to protect your API requests and increase your daily quota limit
                from 25,000 to 100,000 requests per day. Our utility functions handle URL signing
                automatically for static maps and other signed requests.
              </p>

              <h3>API Key Restrictions</h3>
              <ul className={styles.contentList}>
                <li>Restrict API key to your domain only</li>
                <li>Enable only the APIs you need (Places, Geocoding, Static Maps)</li>
                <li>Set up billing alerts to monitor usage</li>
                <li>Use URL signing for sensitive requests</li>
              </ul>
            </div>
            <div className={styles.securityImage}>
              <Image
                src="https://placehold.co/400x300?text=Security+Setup"
                alt="Google Maps API Security Setup"
                width={400}
                height={300}
                className={styles.contentImage}
              />
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>Code Examples</h2>
          <div className={styles.codeExamples}>
            {codeExamples.map((example) => (
              <div key={example.title} className={styles.codeCard}>
                <h3 className={styles.codeTitle}>{example.title}</h3>
                <pre className={styles.codeBlock}>
                  <code>{example.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Benefits */}
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>Real Estate Integration Benefits</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3>Enhanced Search Experience</h3>
              <p>
                Provide intelligent address suggestions and reduce form abandonment with
                autocomplete functionality.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Rich Property Information</h3>
              <p>
                Display comprehensive property details, photos, and neighborhood information from
                Google&apos;s extensive database.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Mobile Optimization</h3>
              <p>
                Ensure seamless experience across all devices with responsive design and
                touch-friendly interfaces.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3>SEO & Performance</h3>
              <p>
                Improve search engine visibility and page load times with optimized Google Places
                integration.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing & Plans */}
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>Pricing & API Limits</h2>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <h3>Basic Plan</h3>
              <div className={styles.price}>$200/month</div>
              <ul>
                <li>1,000 autocomplete requests/day</li>
                <li>500 place details requests/day</li>
                <li>Basic support</li>
                <li>Standard styling</li>
              </ul>
            </div>
            <div className={styles.pricingCard}>
              <h3>Professional Plan</h3>
              <div className={styles.price}>$500/month</div>
              <ul>
                <li>5,000 autocomplete requests/day</li>
                <li>2,500 place details requests/day</li>
                <li>Priority support</li>
                <li>Custom styling</li>
                <li>Advanced analytics</li>
              </ul>
            </div>
            <div className={styles.pricingCard}>
              <h3>Enterprise Plan</h3>
              <div className={styles.price}>Custom</div>
              <ul>
                <li>Unlimited requests</li>
                <li>Dedicated support</li>
                <li>Custom development</li>
                <li>White-label solutions</li>
                <li>SLA guarantees</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>Get Started with Google Places Integration</h2>
          <LeadCaptureForm
            variant="inline"
            title="Request Google Places Integration"
            subtitle="Let us help you integrate Google Places API into your real estate website for enhanced user experience."
            source="Google Places Page"
          />
        </section>

        {/* Related Resources */}
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>Related Resources</h2>
          <ul className={styles.resourceLinks}>
            <li>
              <Link href="/market-reports">Summerlin Market Reports</Link>
            </li>
            <li>
              <Link href="/communities">Explore Summerlin West Communities</Link>
            </li>
            <li>
              <Link href="/current-listing">View Featured Properties</Link>
            </li>
            <li>
              <Link href="/contact">Contact Real Estate Expert</Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
