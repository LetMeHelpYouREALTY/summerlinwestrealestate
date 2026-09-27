"use client";
import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

const LeadCaptureForm = dynamic(() => import("./LeadCaptureForm"), {
  ssr: false,
});

type LeadCaptureFormProps = ComponentProps<typeof LeadCaptureForm>;

export default function LeadCaptureFormClient(props: LeadCaptureFormProps) {
  return <LeadCaptureForm {...props} />;
}
