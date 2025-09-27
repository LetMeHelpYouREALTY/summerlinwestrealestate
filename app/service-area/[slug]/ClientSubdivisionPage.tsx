'use client';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import SubdivisionNavigation from '../../../components/ui/SubdivisionNavigation';
import styles from '../page.module.css';
import clientStyles from './client-subdivision.module.css';

// Enhanced Loading Skeleton
function LoadingSkeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonHero}>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonSubtext}></div>
        <div className={styles.skeletonStats}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={styles.skeletonStat}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Interactive Hero Stats with animations
function HeroStats({
  builder,
  years,
  homeSizes,
}: {
  builder?: string;
  years?: string;
  homeSizes?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const stats = [
    {
      label: 'Builder',
      value: builder,
      condition: builder && builder !== '-',
      icon: '🏗️',
      gradient: 'from-blue-400 to-purple-600',
    },
    {
      label: 'Years Built',
      value: years,
      condition: years && years !== '-',
      icon: '📅',
      gradient: 'from-green-400 to-blue-600',
    },
    {
      label: 'Home Sizes',
      value: homeSizes,
      condition: homeSizes && homeSizes !== '-',
      icon: '🏠',
      gradient: 'from-orange-400 to-red-600',
    },
  ];

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className={styles.heroStats}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, staggerChildren: 0.1 }}
    >
      {stats.map(
        ({ label, value, condition, icon, gradient }, index) =>
          condition && (
            <motion.div
              key={label}
              className={`${styles.heroStat} ${styles.modernStat}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className={`${styles.statIcon} bg-gradient-to-r ${gradient}`}>{icon}</div>
              <div className={styles.statContent}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            </motion.div>
          )
      )}
    </motion.div>
  );
}

// Interactive Feature Tags with hover effects
function FeatureTags({ type, features }: { type: string; features: string[] }) {
  return (
    <motion.div
      className={styles.communityMeta}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.span
        className={`${styles.featureTag} ${styles.primaryTag}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {type}
      </motion.span>
      {features.map((feature, index) => (
        <motion.span
          key={feature}
          className={styles.featureTag}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {feature}
        </motion.span>
      ))}
    </motion.div>
  );
}

// Enhanced Social Media Links with share functionality
function SocialMediaLinks({ subdivisionName }: { subdivisionName: string }) {
  const [copySuccess, setCopySuccess] = useState(false);

  const socialLinks = [
    {
      href: 'https://www.youtube.com/@DrDuffy',
      label: 'YouTube',
      icon: 'youtube.svg',
      color: '#FF0000',
    },
    {
      href: 'https://www.linkedin.com/showcase/berkshire-hathaway-homeservices-summerlin/',
      label: 'LinkedIn',
      icon: 'linkedin.svg',
      color: '#0077B5',
    },
    {
      href: 'https://www.pinterest.com/DrJanDuffy/',
      label: 'Pinterest',
      icon: 'pinterest.svg',
      color: '#BD081C',
    },
    {
      href: 'https://www.facebook.com/RealtorDrJanDuffySummerlin',
      label: 'Facebook',
      icon: 'facebook.svg',
      color: '#1877F2',
    },
  ];

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `${subdivisionName} - The Vistas`,
        text: `Check out this amazing subdivision in Summerlin West!`,
        url: window.location.href,
      });
    } catch (_err) {
      // Fallback to copying URL
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (_clipboardErr) {
        console.log('Share failed');
      }
    }
  };

  return (
    <div className={styles.ctaSocials}>
      <motion.button
        onClick={handleShare}
        className={styles.shareButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {copySuccess ? '✓ Copied!' : '📤 Share'}
      </motion.button>
      {socialLinks.map(({ href, label, icon, color }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit Dr. Jan Duffy on ${label}`}
          className={styles.socialLink}
          style={{ '--hover-color': color } as React.CSSProperties}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={`/images/${icon}`} alt="" />
        </motion.a>
      ))}
    </div>
  );
}

// Add SubdivisionImage component
function SubdivisionImage({
  subdivision,
  heroImage,
  imageAlt,
}: {
  subdivision: Subdivision;
  heroImage: string;
  imageAlt: string;
}) {
  const [src, setSrc] = useState(heroImage);
  useEffect(() => {
    // Only generate if using the placeholder
    if (heroImage.includes('placehold.co')) {
      const prompt = `A beautiful ${subdivision.type} neighborhood in Summerlin West, Las Vegas, called ${subdivision.name}${subdivision.builder && subdivision.builder !== '-' ? `, built by ${subdivision.builder}` : ''}${subdivision.features?.length ? `, featuring ${subdivision.features.join(', ')}` : ''}.`;
      fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.imagePath) {
            setSrc(data.imagePath);
          } else if (data.fallback) {
            setSrc(data.fallback);
          }
        })
        .catch(() => setSrc(heroImage));
    }
  }, [subdivision, heroImage]);
  return (
    <Image
      src={src}
      alt={imageAlt}
      width={480}
      height={300}
      className={styles.heroMapImg}
      priority
      sizes="(max-width: 768px) 100vw, 480px"
    />
  );
}

// Interactive Amenities with reveal animation
function AmenitiesSection() {
  const [expandedAmenity, setExpandedAmenity] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const amenities = [
    {
      title: 'Recreation & Fitness',
      icon: '🏊‍♂️',
      description: 'Access to Vistas Community Park, sports fields, tennis, and pools',
      details: 'Multiple pools, state-of-the-art fitness center, tennis and basketball courts',
    },
    {
      title: 'Shopping & Dining',
      icon: '🛍️',
      description: 'Nearby shopping at Vista Commons and Downtown Summerlin',
      details: 'Over 125 stores, restaurants, and entertainment venues within minutes',
    },
    {
      title: 'Education Excellence',
      icon: '🎓',
      description:
        'Top-rated schools: Linda Rankin Givens Elementary, Sig Rogich Middle, Palo Verde High',
      details: 'Award-winning schools with excellent test scores and graduation rates',
    },
    {
      title: 'Security & Access',
      icon: '🛡️',
      description: 'Guard-gated and non-gated options available',
      details: '24/7 security monitoring with controlled access points',
    },
    {
      title: 'Scenic Views',
      icon: '🌄',
      description: 'Stunning views of Red Rock Canyon and the Las Vegas Strip',
      details: 'Panoramic mountain and city views from many home sites',
    },
  ];

  return (
    <motion.section
      ref={ref}
      className={styles.sectionCard}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2 className={styles.centerTitle}>Community Amenities and Lifestyle Features</h2>
      <p className={styles.heroSubtitle}>
        Experience the exceptional amenities and lifestyle features that make The Vistas one of Summerlin West's most sought-after communities. From world-class recreational facilities to convenient shopping and dining options, residents enjoy a comprehensive lifestyle that combines luxury living with practical convenience. These amenities contribute to the strong property values and desirability of homes in The Vistas.
      </p>
      <div className={styles.amenitiesGrid}>
        {amenities.map((amenity, index) => (
          <motion.div
            key={amenity.title}
            className={`${styles.amenityCard} ${expandedAmenity === index ? styles.expanded : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setExpandedAmenity(expandedAmenity === index ? null : index)}
          >
            <div className={styles.amenityIcon}>{amenity.icon}</div>
            <h3 className={styles.amenityTitle}>{amenity.title}</h3>
            <p className={styles.amenityDescription}>{amenity.description}</p>
            {expandedAmenity === index && (
              <motion.div
                className={styles.amenityDetails}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {amenity.details}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// Enhanced CTA with floating action and urgency
function EnhancedCTA({ subdivision }: { subdivision: Subdivision }) {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setShowFloatingCTA(latest > 800);
    });
    return unsubscribe;
  }, [scrollY]);

  const contactMethods = [
    {
      type: 'phone',
      href: 'tel:7025500112',
      label: 'Call Now',
      number: '(702) 550-0112',
      icon: '📞',
      primary: true,
    },
    {
      type: 'email',
      href: 'mailto:DrJanSells@SummerlinWestRealEstate.com',
      label: 'Email',
      number: 'DrJanSells@SummerlinWestRealEstate.com',
      icon: '📧',
      primary: false,
    },
  ];

  return (
    <>
      <motion.section
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.ctaContent}>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Ready to Call {subdivision.name} Home? Contact Dr. Jan Duffy Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Dr. Jan Duffy offers exclusive access to off-market properties, personalized market
            analysis, and VIP showings in {subdivision.name}. With her deep knowledge of The Vistas and Summerlin West real estate market, she can help you find your dream home or sell your current property for maximum value. Don&apos;t miss your opportunity to work with the area's most trusted real estate expert.
          </motion.p>

          <motion.div
            className={styles.ctaButtons}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.type}
                href={method.href}
                className={method.primary ? styles.ctaButton : clientStyles.ctaButtonSecondary}
                aria-label={`${method.label}: ${method.number}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <span className={styles.ctaIcon}>{method.icon}</span>
                {method.label}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className={styles.urgencyBadge}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            ⚡ Limited inventory - Act fast!
          </motion.div>

          <SocialMediaLinks subdivisionName={subdivision.name} />
        </div>
      </motion.section>

      {/* Floating CTA */}
      <motion.div
        className={styles.floatingCTA}
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: showFloatingCTA ? 1 : 0,
          y: showFloatingCTA ? 0 : 100,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.floatingContent}>
          <span>Interested in {subdivision.name}? Contact Dr. Jan Duffy</span>
          <a href="tel:7025500112" className={styles.floatingButton}>
            📞 Call Now
          </a>
        </div>
      </motion.div>
    </>
  );
}

// Add type for subdivision object
interface Subdivision {
  slug: string;
  name: string;
  builder: string;
  years: string;
  homeSizes: string;
  features: string[];
  type: string;
  image?: string;
}

// Fix implicit any for sub in generateDescription
function generateDescription(sub: Subdivision) {
  const builderText =
    sub.builder && sub.builder !== '-'
      ? `expertly developed by ${sub.builder}`
      : 'developed by renowned builders';
  const yearsText = sub.years && sub.years !== '-' ? ` between ${sub.years}` : '';
  const sizesText =
    sub.homeSizes && sub.homeSizes !== '-' ? sub.homeSizes : 'thoughtfully designed sizes';
  const featuresText =
    sub.features?.length > 0
      ? sub.features.join(', ')
      : 'premium amenities and exceptional quality';

  return `Discover ${sub.name}, a distinguished ${sub.type.toLowerCase()} neighborhood in The Vistas, ${builderText}${yearsText}. These exceptional homes range from ${sizesText}, featuring ${featuresText}. Experience the pinnacle of Summerlin West luxury living in this exclusive community.`;
}

export default function ClientSubdivisionPage({ subdivision }: { subdivision: Subdivision }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, _setError] = useState<string | null>(null);

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Handle error states
  if (error) {
    return (
      <div className={styles.errorPage}>
        <h1>Something went wrong</h1>
        <p>{error}</p>
        <Link href="/service-area" className={styles.ctaButton}>
          Return to Service Area
        </Link>
      </div>
    );
  }

  // Handle loading state
  if (isLoading) {
    return <LoadingSkeleton />;
  }

  // Generate enhanced content
  const heroImage = subdivision.image || 'https://placehold.co/600x300?text=The+Vistas';
  const imageAlt = subdivision.image
    ? `${subdivision.name} neighborhood view showcasing luxury homes and community amenities`
    : `Placeholder image for ${subdivision.name} luxury subdivision`;

  return (
    <div className={styles.page}>
      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol className={styles.breadcrumbList}>
          <li className={styles.breadcrumbItem}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
          </li>
          <li className={styles.breadcrumbItem}>
            <Link href="/communities" className={styles.breadcrumbLink}>Communities</Link>
          </li>
          <li className={styles.breadcrumbItem}>
            <Link href="/service-area" className={styles.breadcrumbLink}>The Vistas</Link>
          </li>
          <li className={styles.breadcrumbItem} aria-current="page">
            {subdivision.name}
          </li>
        </ol>
      </nav>

      {/* Enhanced Hero Section with Parallax */}
      <motion.section
        className={styles.hero}
        role="banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.heroContent}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subdivision.name}: Luxury {subdivision.type} Subdivision in The Vistas, Summerlin West
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover {subdivision.name}, a distinguished {subdivision.type.toLowerCase()} neighborhood in The Vistas, Summerlin West. This exclusive community offers luxury living with modern amenities, top-rated schools, and convenient access to Red Rock Canyon. Dr. Jan Duffy provides expert guidance for buying or selling homes in {subdivision.name}, with deep knowledge of the local market and community characteristics.
          </motion.p>
          <HeroStats
            builder={subdivision.builder}
            years={subdivision.years}
            homeSizes={subdivision.homeSizes}
          />
        </div>
        <SubdivisionImage subdivision={subdivision} heroImage={heroImage} imageAlt={imageAlt} />
      </motion.section>

      {/* Enhanced Features & Description */}
      <motion.section
        className={styles.sectionCard}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.centerTitle}>About {subdivision.name}: Community Overview and Lifestyle</h2>
        <p className={styles.heroSubtitle}>
          {subdivision.name} represents the pinnacle of luxury living in The Vistas, Summerlin West. This exclusive {subdivision.type.toLowerCase()} community offers residents an unparalleled lifestyle with modern amenities, stunning architecture, and convenient access to world-class shopping, dining, and recreational facilities. Dr. Jan Duffy's deep knowledge of {subdivision.name} allows her to provide expert guidance for buyers and sellers in this prestigious neighborhood.
        </p>
        <FeatureTags type={subdivision.type} features={subdivision.features || []} />
        <motion.div
          className={styles.communityDescription}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {generateDescription(subdivision)}
        </motion.div>
      </motion.section>

      {/* Interactive Amenities Section */}
      <AmenitiesSection />

      {/* Subdivision Navigation */}
      <SubdivisionNavigation currentSlug={subdivision.slug} />

      {/* Enhanced Contact CTA */}
      <EnhancedCTA subdivision={subdivision} />

      {/* Enhanced Navigation */}
      <motion.div
        className={clientStyles.ctaButtonSecondary}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link href="/service-area">← Explore More Communities</Link>
      </motion.div>
    </div>
  );
}
