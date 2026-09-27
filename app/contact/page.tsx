import styles from "./contact.module.css";
import Link from "next/link";
import SummerlinWestOverview from "../../components/ui/SummerlinWestOverview";
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import LeadCaptureFormClient from "../../components/ui/LeadCaptureFormClient";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";

export const metadata = {
  title: "Contact a Summerlin Real Estate Expert | Summerlin West Real Estate",
  description:
    "Contact a Summerlin real estate expert for buying, selling, or market questions. Get personalized help with Summerlin homes, communities, and market trends.",
  openGraph: {
    title:
      "Contact a Summerlin Real Estate Expert | Summerlin West Real Estate",
    description:
      "Contact a Summerlin real estate expert for buying, selling, or market questions. Get personalized help with Summerlin homes, communities, and market trends.",
  },
};

const socialLinks = [
  {
    name: "Browse Properties",
    url: "https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy",
    icon: <FaFacebook />,
    color: "#3A8DDE",
  },
  {
    name: "View Listings",
    url: "https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy",
    icon: <FaInstagram />,
    color: "#16B286",
  },
  {
    name: "Search Properties",
    url: "https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy",
    icon: <FaYoutube />,
    color: "#0A2540",
  },
];

const serviceAreas = [
  "Summerlin West",
  "The Vistas",
  "Stonebridge",
  "Redpoint",
  "The Cliffs",
  "Reverence",
  "Downtown Summerlin",
  "All Summerlin Villages",
];

const quickLinks = [
  { href: "/market-reports", label: "Summerlin Market Reports" },
  { href: "/current-listing", label: "Featured Home for Sale" },
  { href: "/about", label: "Meet Your Summerlin Expert" },
  { href: "/communities", label: "Explore Summerlin Communities" },
];

export default function Contact() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          Contact a Summerlin Real Estate Expert
        </h1>
        <p className={styles.heroSubtitle}>
          Get in touch for buying, selling, or market questions
        </p>
        <a href="#contact-form" className={styles.contactButton}>
          <FaChevronDown /> Contact Form
        </a>
      </section>
      <main className={styles.main}>
        <section
          className={styles.sectionCard}
          aria-label="Send a Message"
          id="contact-form"
        >
          <h2 className={styles.sectionTitle}>Send a Message</h2>
          <LeadCaptureFormClient
            variant="inline"
            title="Contact a Summerlin Real Estate Expert"
            subtitle="Get personalized help with Summerlin homes, communities, and market trends."
            source="Contact Page"
          />
        </section>
        <section className={styles.sectionCard} aria-label="Quick Links">
          <h2 className={styles.sectionTitle}>Quick Links</h2>
          <div className={styles.quickLinksContainer}>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.quickLink}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Our Office">
          <h2 className={styles.sectionTitle}>Our Office</h2>
          <div className={styles.officeLocationContainer}>
            <iframe
              title="Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.123456789!2d-115.3336!3d36.1540!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c1a2b3c4d5e6%3A0x1234567890abcdef!2s1980%20Festival%20Plaza%20Dr%2C%20Las%20Vegas%2C%20NV%2089135!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width={350}
              height={200}
              className={styles.mapIframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className={styles.officeDetails}>
              <div className={styles.officeDetail}>
                <FaMapMarkerAlt className={styles.icon} />
                <span className={styles.detailText}>
                  1980 Festival Plaza Dr (One Summerlin), Las Vegas, NV 89135
                </span>
              </div>
              <div className={styles.officeDetail}>
                <FaPhone className={styles.icon} />
                <a href="tel:7025500112" className={styles.detailText}>
                  (702) 550-0112
                </a>
              </div>
              <div className={styles.officeDetail}>
                <FaEnvelope className={styles.icon} />
                <a
                  href="mailto:info@summerlinwestrealestate.com"
                  className={styles.detailText}
                >
                  info@summerlinwestrealestate.com
                </a>
              </div>
              <div className={styles.socialLinksContainer}>
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className={styles.socialLink}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Areas We Serve">
          <h2 className={styles.sectionTitle}>Areas We Serve</h2>
          <div className={styles.serviceAreasContainer}>
            {serviceAreas.map((area) => (
              <span key={area} className={styles.serviceAreaTag}>
                {area}
              </span>
            ))}
          </div>
          <div className={styles.responseTime}>
            <strong>Response Time:</strong> We reply to all inquiries within 1
            business day (often much faster!)
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Market Insights">
          <h2 className={styles.sectionTitle}>Featured Summerlin Listings</h2>
          <LatestMarketInsightsClient />
        </section>
      </main>
    </div>
  );
}
