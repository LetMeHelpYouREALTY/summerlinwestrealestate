"use client";
import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

const VistasListingForm = dynamic(() => import("./VistasListingForm"), {
  ssr: false,
});

type VistasListingFormClientProps = ComponentProps<typeof VistasListingForm>;

export default function VistasListingFormClient(
  props: VistasListingFormClientProps,
) {
  return <VistasListingForm {...props} />;
}
