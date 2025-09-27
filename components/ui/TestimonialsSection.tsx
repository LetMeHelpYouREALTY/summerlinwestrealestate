'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

const _TESTIMONIALS = [
  {
    name: 'Sarah M.',
    review:
      'Our experience was fantastic! We found our dream home in The Vistas and the process was smooth and stress-free.',
    rating: 5,
    photo: null,
  },
  {
    name: 'James R.',
    review:
      'Professional, knowledgeable, and always available. Highly recommend for anyone buying in Summerlin.',
    rating: 5,
    photo: null,
  },
  {
    name: 'Linda & Tom',
    review:
      'We sold our home above asking price thanks to expert marketing and negotiation. Couldn&apos;t be happier!',
    rating: 5,
    photo: null,
  },
  {
    name: 'Alex P.',
    review:
      'Great local insight and honest advice. The team made us feel like a priority every step of the way.',
    rating: 4,
    photo: null,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width={18}
          height={18}
          fill={i <= rating ? '#FBBF24' : '#E5E7EB'}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" />
        </svg>
      ))}
    </div>
  );
}

const testimonials = [
  {
    author: 'Jane Doe',
    rating: 5,
    body: 'Fantastic service and local expertise! Highly recommended for Summerlin buyers.',
  },
  {
    author: 'John Smith',
    rating: 5,
    body: 'The most knowledgeable agent in Summerlin! Helped us find our dream home.',
  },
  {
    author: 'Maria Lopez',
    rating: 5,
    body: 'Responsive, professional, and truly cares about clients.',
  },
  {
    author: 'David Kim',
    rating: 5,
    body: 'Negotiated a great deal and made the process stress-free.',
  },
  {
    author: 'Emily Chen',
    rating: 5,
    body: 'Answered all our questions and was always available.',
  },
  {
    author: 'Carlos Rivera',
    rating: 5,
    body: 'Knows the Summerlin market inside and out!',
  },
  // Add more testimonials as needed
];

const TestimonialsSection = React.memo(function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = useMemo(() => testimonials[index], [index]);

  const handlePrevious = useCallback(() => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handleNext = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  // Memoize JSON-LD data
  const reviewsJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': testimonials.map((t) => ({
        '@type': 'Review',
        itemReviewed: {
          '@type': 'RealEstateAgent',
          name: 'Summerlin West Real Estate',
        },
        author: { '@type': 'Person', name: t.author },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: t.rating,
          bestRating: '5',
        },
        reviewBody: t.body,
      })),
    }),
    []
  );

  return (
    <>
      <script 
        type="application/ld+json" 
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <section className="bg-[#F7F9FC] py-12 px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-2">
            What Our Clients Say
          </h2>
          <p className="text-[#3A8DDE] text-lg">Real stories from real buyers and sellers</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-xl">
            <div className="bg-white rounded-lg p-6 flex flex-col items-center" style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
              {/* Photo Placeholder */}
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-3">
                <svg width="32" height="32" fill="#A0AEC0" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-3 text-[#0A2540] text-lg font-medium">
                {`"${testimonial.body}"`}
              </blockquote>
              <div className="mt-4 text-[#16B286] font-semibold">{testimonial.author}</div>
            </div>
            {/* Rotator Controls */}
            <button
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-[#F7F9FC] transition z-10"
              onClick={handlePrevious}
            >
              <svg width="18" height="18" fill="#3A8DDE" viewBox="0 0 20 20">
                <path
                  d="M13 15l-5-5 5-5"
                  stroke="#3A8DDE"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-[#F7F9FC] transition z-10"
              onClick={handleNext}
            >
              <svg width="18" height="18" fill="#3A8DDE" viewBox="0 0 20 20">
                <path
                  d="M7 5l5 5-5 5"
                  stroke="#3A8DDE"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {/* Google Reviews Placeholder */}
          <div className="mt-8 flex flex-col items-center">
            <div className="text-gray-500 mb-2">See more reviews on Google</div>
            <button className="flex items-center gap-2 bg-white border border-gray-200 rounded px-4 py-2 shadow hover:bg-[#F7F9FC] transition">
              <svg width="20" height="20" viewBox="0 0 48 48">
                <g>
                  <circle fill="#4285F4" cx="24" cy="24" r="21" />
                  <path
                    fill="#fff"
                    d="M34.6 25.1c0-1.1-.1-2.1-.3-3.1H24v5.9h6c-.3 1.6-1.3 2.9-2.7 3.8v3.1h4.4c2.6-2.4 4.1-5.9 4.1-9.7z"
                  />
                  <path
                    fill="#fff"
                    d="M24 36c2.7 0 5-0.9 6.7-2.4l-4.4-3.1c-1.2.8-2.7 1.3-4.3 1.3-3.3 0-6-2.2-7-5.1h-4.5v3.2C13.7 33.7 18.5 36 24 36z"
                  />
                  <path
                    fill="#fff"
                    d="M17 26.8c-.3-.8-.5-1.6-.5-2.5s.2-1.7.5-2.5v-3.2h-4.5C11.2 21.5 10.7 22.7 10.7 24s.5 2.5 1.8 5.2L17 26.8z"
                  />
                  <path
                    fill="#fff"
                    d="M24 18.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8C28.9 15.9 26.7 15 24 15c-5.5 0-10.3 2.3-13.3 6.3l4.5 3.2c1-2.9 3.7-5.1 7-5.1z"
                  />
                </g>
              </svg>
              Google Reviews (coming soon)
            </button>
          </div>
        </div>
      </section>
    </>
  );
});

export default TestimonialsSection;
