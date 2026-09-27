import type { Metadata } from "next";
import Link from "next/link";
import CommunityAmenityMap from "../../components/ui/CommunityAmenityMap";
import {
  AMENITIES_CONTENT_SECTIONS,
  AMENITIES_FAQS,
  CURATED_PLACES,
  formatPlaceAddress,
} from "../../lib/amenities-data";
import { COMMUNITY } from "../../lib/community-config";
import styles from "./page.module.css";

const pageTitle = `Nearby Amenities in ${COMMUNITY.name}, ${COMMUNITY.city}`;
const pageDescription = `Interactive map and local guide to dining, parks, golf, healthcare, shopping, and schools near ${COMMUNITY.name}, ${COMMUNITY.city}. Hyperlocal insights from Dr. Jan Duffy, REALTOR®.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/amenities",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${COMMUNITY.siteUrl}/amenities`,
    type: "website",
  },
};

function buildPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: COMMUNITY.siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Nearby Amenities",
            item: `${COMMUNITY.siteUrl}/amenities`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: AMENITIES_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "ItemList",
        name: `Featured places near ${COMMUNITY.name}`,
        itemListElement: CURATED_PLACES.map((place, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": place.schemaType,
            name: place.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: place.streetAddress,
              addressLocality: place.addressLocality,
              addressRegion: place.addressRegion,
              postalCode: place.postalCode,
              addressCountry: COMMUNITY.country,
            },
          },
        })),
      },
      {
        "@type": "Place",
        "@id": `${COMMUNITY.siteUrl}/amenities#community`,
        name: COMMUNITY.name,
        description: `Master-planned villages on the western edge of Summerlin, ${COMMUNITY.city}.`,
        geo: {
          "@type": "GeoCoordinates",
          latitude: COMMUNITY.center.lat,
          longitude: COMMUNITY.center.lng,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: COMMUNITY.city,
          addressRegion: COMMUNITY.stateCode,
          addressCountry: COMMUNITY.country,
        },
      },
      {
        "@type": "RealEstateAgent",
        "@id": `${COMMUNITY.siteUrl}/#agent`,
        name: COMMUNITY.agent.name,
        jobTitle: COMMUNITY.agent.title,
        telephone: COMMUNITY.agent.phone,
        email: COMMUNITY.agent.email,
        url: COMMUNITY.siteUrl,
        areaServed: {
          "@type": "Place",
          name: COMMUNITY.name,
        },
      },
    ],
  };
}

export default function AmenitiesPage() {
  const schema = buildPageSchema();

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>
            Nearby Amenities in {COMMUNITY.name}, {COMMUNITY.city}
          </h1>
          <p className={styles.lead}>
            An interactive, hyperlocal map of everyday destinations around{" "}
            {COMMUNITY.name} — plus verified places buyers ask about before they
            move.
          </p>
        </section>

        <section className={styles.mapBlock} aria-label="Interactive amenity map">
          <CommunityAmenityMap showStaticList />
        </section>

        {AMENITIES_CONTENT_SECTIONS.map((section) => (
          <section key={section.id} className={styles.contentSection}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </section>
        ))}

        <section className={styles.faqSection} aria-labelledby="amenities-faq">
          <h2 id="amenities-faq">Frequently Asked Questions</h2>
          <dl className={styles.faqList}>
            {AMENITIES_FAQS.map((faq) => (
              <div key={faq.question} className={styles.faqItem}>
                <dt>{faq.question}</dt>
                <dd>{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.trustBlock} aria-label="Contact Dr. Jan Duffy">
          <h2>Your {COMMUNITY.name} REALTOR®</h2>
          <p>
            <strong>{COMMUNITY.agent.name}, {COMMUNITY.agent.title}</strong>{" "}
            helps buyers and sellers navigate {COMMUNITY.name} villages, from The
            Vistas and Stonebridge to Redpoint and Reverence.
          </p>
          <ul className={styles.contactList}>
            <li>{COMMUNITY.agent.officeAddress}</li>
            <li>
              {COMMUNITY.agent.officeCity}, {COMMUNITY.stateCode}{" "}
              {COMMUNITY.agent.officeZip}
            </li>
            <li>{COMMUNITY.agent.license}</li>
            <li>{COMMUNITY.agent.brokerage}</li>
            <li>
              Phone:{" "}
              <a href={`tel:${COMMUNITY.agent.phoneTel}`}>
                {COMMUNITY.agent.phoneDisplay}
              </a>
            </li>
            <li>
              Email:{" "}
              <a href={`mailto:${COMMUNITY.agent.officeEmail}`}>
                {COMMUNITY.agent.officeEmail}
              </a>
            </li>
          </ul>
          <p>
            <Link href="/contact" className={styles.ctaLink}>
              Schedule a consultation with Dr. Duffy →
            </Link>
          </p>
        </section>

        <section className={styles.curatedIndex} aria-label="Featured places index">
          <h2>Featured places (verified addresses)</h2>
          <ul>
            {CURATED_PLACES.map((place) => (
              <li key={place.name}>
                <strong>{place.name}</strong> — {formatPlaceAddress(place)}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
