"use client";
import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

const TestimonialsSection = dynamic(() => import("./TestimonialsSection"), {
  ssr: false,
});

type TestimonialsSectionProps = ComponentProps<typeof TestimonialsSection>;

export default function TestimonialsSectionClient(
  props: TestimonialsSectionProps,
) {
  return <TestimonialsSection {...props} />;
}
