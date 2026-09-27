import type { Metadata } from "next";
import JsonLd from "../components/seo/JsonLd";
import {
  buildFaqPageJsonLd,
  summerlinWestHomeFaqs,
} from "../lib/site-faq";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Summerlin West Homes | Dr. Jan Duffy REALTOR",
  description:
    "Browse Summerlin West homes for sale with Dr. Jan Duffy, REALTOR®. Village guides, MLS search, and local market help across Las Vegas’s west-side communities.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Summerlin West Homes | Dr. Jan Duffy REALTOR",
    description:
      "Browse Summerlin West homes for sale with Dr. Jan Duffy, REALTOR®. Village guides, MLS search, and local market help across Las Vegas’s west-side communities.",
    url: "https://summerlinwestrealestate.com",
  },
  twitter: {
    title: "Summerlin West Homes | Dr. Jan Duffy REALTOR",
    description:
      "Browse Summerlin West homes for sale with Dr. Jan Duffy, REALTOR®. Village guides, MLS search, and local market help across Las Vegas’s west-side communities.",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={buildFaqPageJsonLd(summerlinWestHomeFaqs)} />
      <HomePageClient />
    </>
  );
}
