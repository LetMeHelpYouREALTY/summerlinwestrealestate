"use client";
import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

const LeadCaptureForm = dynamic(() => import("./LeadCaptureForm"), {
  ssr: false,
});

type LeadCaptureFormClientProps = ComponentProps<typeof LeadCaptureForm>;

export default function LeadCaptureFormClient(
  props: LeadCaptureFormClientProps,
) {
  return <LeadCaptureForm {...props} />;
}
