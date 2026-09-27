"use client";
import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

const VistasListingForm = dynamic(() => import("./VistasListingForm"), {
  ssr: false,
});

type VistasListingFormProps = ComponentProps<typeof VistasListingForm>;

export default function VistasListingFormClient(props: VistasListingFormProps) {
  return <VistasListingForm {...props} />;
}
