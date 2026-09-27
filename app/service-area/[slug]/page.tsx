import { notFound } from "next/navigation";
import type { Metadata } from "next";
import subdivisions from "../subdivisions.json";
import ClientSubdivisionPage from "./ClientSubdivisionPage";
import { withCanonical } from "../../../lib/canonical-metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const subdivision = subdivisions.find((s) => s.slug === slug);
  if (!subdivision) {
    return { title: "Subdivision Not Found" };
  }
  return {
    ...withCanonical(`/service-area/${slug}`),
    title: `${subdivision.name} | Summerlin West Service Area`,
    description: `Homes and community details for ${subdivision.name} in Summerlin West.`,
  };
}

export default async function SubdivisionPage({ params }: PageProps) {
  const { slug } = await params;
  const subdivision = subdivisions.find((s) => s.slug === slug);
  if (!subdivision) {
    return notFound();
  }
  return <ClientSubdivisionPage subdivision={subdivision} />;
}
