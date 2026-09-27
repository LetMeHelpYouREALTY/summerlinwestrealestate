"use client";
import dynamic from "next/dynamic";
import type { VistasListingFormProps } from "./VistasListingForm";

const VistasListingForm = dynamic(() => import("./VistasListingForm"), {
  ssr: false,
});

export default function VistasListingFormClient(props: VistasListingFormProps) {
  return <VistasListingForm {...props} />;
}
