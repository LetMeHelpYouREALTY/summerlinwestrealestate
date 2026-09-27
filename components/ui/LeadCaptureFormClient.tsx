"use client";
import dynamic from "next/dynamic";
import type { LeadCaptureFormProps } from "./LeadCaptureForm";

const LeadCaptureForm = dynamic(() => import("./LeadCaptureForm"), {
  ssr: false,
});

export default function LeadCaptureFormClient(props: LeadCaptureFormProps) {
  return <LeadCaptureForm {...props} />;
}
