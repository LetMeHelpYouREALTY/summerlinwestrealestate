'use client';
import dynamic from 'next/dynamic';

const TestimonialsSection = dynamic(() => import('./TestimonialsSection'), {
  ssr: false,
});

export default function TestimonialsSectionClient(props: unknown) {
  return <TestimonialsSection {...props} />;
}
