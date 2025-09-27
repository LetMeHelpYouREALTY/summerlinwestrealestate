import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './Testimonials.module.css';

export const metadata: Metadata = {
  title: 'Client Testimonials | Dr. Jan Duffy Real Estate | Summerlin West',
  description:
    'Read testimonials from satisfied clients of Dr. Jan Duffy, luxury real estate expert in Summerlin West, Las Vegas.',
  keywords:
    'Dr. Jan Duffy testimonials, luxury real estate reviews, Summerlin West client feedback, Las Vegas realtor reviews',
  openGraph: {
    title: 'Client Testimonials | Dr. Jan Duffy Real Estate | Summerlin West',
    description: 'Read testimonials from satisfied clients of Dr. Jan Duffy.',
    type: 'website',
  },
};

export default function Testimonials() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Client Testimonials</h1>
          <p className={styles.heroSubtitle}>
            Hear from our satisfied clients about their luxury real estate experience with Dr. Jan
            Duffy
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className={styles.featuredTestimonial}>
        <div className={styles.sectionContainer}>
          <div className={styles.featuredCard}>
            <div className={styles.featuredQuote}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              </svg>
            </div>
            <blockquote className={styles.featuredText}>
              "Dr. Jan Duffy made our dream of owning a luxury home in The Vistas a reality. Her
              expertise, attention to detail, and genuine care for our needs exceeded all
              expectations. She guided us through every step of the process with professionalism and
              grace."
            </blockquote>
            <div className={styles.featuredAuthor}>
              <div className={styles.authorImage}>
                <Image
                  src="/images/testimonials/client-1.jpg"
                  alt="Sarah and Michael Johnson"
                  width={80}
                  height={80}
                  className={styles.image}
                />
              </div>
              <div className={styles.authorInfo}>
                <h3 className={styles.authorName}>Sarah & Michael Johnson</h3>
                <p className={styles.authorLocation}>The Vistas, Summerlin West</p>
                <p className={styles.authorProperty}>$2.8M Luxury Estate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className={styles.testimonialsGrid}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          <div className={styles.grid}>
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>
              </div>
              <p className={styles.testimonialText}>
                "Working with Dr. Jan Duffy was an absolute pleasure. Her market knowledge and
                negotiation skills helped us secure our perfect home at an excellent price. She
                truly understands luxury real estate."
              </p>
              <div className={styles.testimonialAuthor}>
                <h4 className={styles.authorName}>David Chen</h4>
                <p className={styles.authorLocation}>Stonebridge</p>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>
              </div>
              <p className={styles.testimonialText}>
                "Dr. Duffy's professionalism and attention to detail made selling our home seamless.
                She marketed our property beautifully and found the perfect buyers quickly."
              </p>
              <div className={styles.testimonialAuthor}>
                <h4 className={styles.authorName}>Jennifer Martinez</h4>
                <p className={styles.authorLocation}>Redpoint</p>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>
              </div>
              <p className={styles.testimonialText}>
                "As first-time luxury home buyers, we were nervous about the process. Dr. Duffy's
                expertise and guidance made everything clear and stress-free. We couldn't be happier
                with our new home."
              </p>
              <div className={styles.testimonialAuthor}>
                <h4 className={styles.authorName}>Robert & Lisa Thompson</h4>
                <p className={styles.authorLocation}>The Cliffs</p>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>
              </div>
              <p className={styles.testimonialText}>
                "Dr. Jan Duffy's market insights and negotiation skills are unmatched. She helped us
                secure an incredible investment property that has already appreciated
                significantly."
              </p>
              <div className={styles.testimonialAuthor}>
                <h4 className={styles.authorName}>Amanda Rodriguez</h4>
                <p className={styles.authorLocation}>Reverence</p>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>
              </div>
              <p className={styles.testimonialText}>
                "The level of service and attention to detail Dr. Duffy provides is exceptional. She
                made our relocation to Las Vegas smooth and found us the perfect luxury home."
              </p>
              <div className={styles.testimonialAuthor}>
                <h4 className={styles.authorName}>Mark & Susan Williams</h4>
                <p className={styles.authorLocation}>The Vistas</p>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>
              </div>
              <p className={styles.testimonialText}>
                "Dr. Duffy's expertise in luxury real estate is evident in every interaction. She
                understands the market and her clients' needs perfectly. Highly recommended!"
              </p>
              <div className={styles.testimonialAuthor}>
                <h4 className={styles.authorName}>James Patterson</h4>
                <p className={styles.authorLocation}>Stonebridge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Client Success Metrics</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Client Satisfaction Rate</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>$6B+</div>
              <div className={styles.statLabel}>Total Sales Volume</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Happy Clients</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>40+</div>
              <div className={styles.statLabel}>Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Experience Exceptional Service?</h2>
            <p className={styles.ctaSubtitle}>
              Join our satisfied clients and let Dr. Jan Duffy guide your luxury real estate journey
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.ctaButton}>
                Get Started Today
              </a>
              <a href="/properties" className={styles.ctaButtonSecondary}>
                View Properties
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
