import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import NeighborhoodHero from "../../../components/ui/NeighborhoodHero";

const communities = [
  {
    name: "The Vistas",
    description:
      "Luxury homes with stunning mountain views and gated communities for ultimate privacy and exclusivity.",
    priceRange: "$950K - $2.5M",
    minPrice: 950000,
    maxPrice: 2500000,
    features: [
      "Mountain Views",
      "Luxury Homes",
      "Gated Community",
      "Golf Course",
    ],
    homeTypes: "Single Family, Custom Estates",
    image: "/images/communities/the-vistas.png",
    slug: "the-vistas",
    highlighted: true,
    yearBuilt: "2018-Present",
    schools: ["Top-Rated Elementary", "Award-Winning High School"],
    amenities: ["Private Golf Course", "Community Center", "Walking Trails"],
  },
  {
    name: "The Paseos",
    description:
      "Single-family homes and townhomes with community pools, parks, and trail connections.",
    priceRange: "$750K - $1.5M",
    minPrice: 750000,
    maxPrice: 1500000,
    features: [
      "Community Pool",
      "Parks Nearby",
      "Walking Trails",
      "Townhomes & Houses",
    ],
    homeTypes: "Single Family, Townhomes",
    image: "/images/communities/the-paseos.png",
    slug: "the-paseos",
    highlighted: true,
    yearBuilt: "2019-Present",
    schools: ["Highly Rated Elementary", "Prestigious Middle School"],
    amenities: ["Community Pools", "Playgrounds", "Sports Courts"],
  },
  {
    name: "Stonebridge",
    description:
      "Modern homes with resort-style amenities, perfectly positioned near Red Rock Canyon.",
    priceRange: "$650K - $1.2M",
    minPrice: 650000,
    maxPrice: 1200000,
    features: [
      "Resort Amenities",
      "New Construction",
      "Walking Trails",
      "Fitness Center",
    ],
    homeTypes: "Single Family, Patio Homes",
    image: "/images/communities/stonebridge.png",
    slug: "stonebridge",
    highlighted: true,
    yearBuilt: "2020-Present",
    schools: ["Top Elementary", "High-Performing Middle School"],
    amenities: ["Resort Pool", "Fitness Center", "Tennis Courts"],
  },
  {
    name: "Redpoint",
    description:
      "New construction with contemporary design and cutting-edge smart home technology.",
    priceRange: "$750K - $1.8M",
    minPrice: 750000,
    maxPrice: 1800000,
    features: [
      "New Construction",
      "Contemporary",
      "Builder Incentives",
      "Smart Homes",
    ],
    homeTypes: "Single Family, Modern Design",
    image: "/images/communities/redpoint.png",
    slug: "redpoint",
    highlighted: false,
    yearBuilt: "2021-Present",
    schools: ["Modern Elementary", "STEM-Focused High School"],
    amenities: ["Modern Clubhouse", "Co-working Spaces", "Dog Parks"],
  },
  {
    name: "Redpoint Square",
    description:
      "Urban-style living in Summerlin West with walkable access to downtown entertainment.",
    priceRange: "$600K - $1.1M",
    minPrice: 600000,
    maxPrice: 1100000,
    features: [
      "Urban Style",
      "Walkable",
      "Downtown Access",
      "Transit Friendly",
    ],
    homeTypes: "Condos, Townhomes, Lofts",
    image: "/images/communities/redpoint-square.png",
    slug: "redpoint-square",
    highlighted: false,
    yearBuilt: "2020-Present",
    schools: ["Urban Elementary", "Arts-Focused Middle School"],
    amenities: ["Rooftop Terraces", "Retail Shops", "Cafes"],
  },
  {
    name: "Reverence",
    description:
      "Luxury estates with unmatched privacy, elegant architecture, and panoramic city views.",
    priceRange: "$1.2M - $3M+",
    minPrice: 1200000,
    maxPrice: 3000000,
    features: ["Luxury Estates", "Privacy", "Elegant Design", "City Views"],
    homeTypes: "Custom Estates, Luxury Homes",
    image: "/images/communities/reverence.png",
    slug: "reverence",
    highlighted: true,
    yearBuilt: "2017-Present",
    schools: ["Elite Private School", "International Baccalaureate"],
    amenities: ["Private Club", "Concierge Services", "Wine Cellar"],
  },
];

export async function generateMetadata({ params }: unknown) {
  const community = communities.find((c) => c.slug === params.slug);
  if (!community) {
    return {
      title: "Community Not Found | Summerlin West Real Estate",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: `${community.name} | Summerlin West Real Estate`,
    description: community.description,
    openGraph: {
      title: `${community.name} | Summerlin West Real Estate`,
      description: community.description,
    },
  };
}

export default async function Page({ params }: unknown) {
  const { slug } = params;
  const community = communities.find((c) => c.slug === slug);
  if (!community) {
    redirect(
      "https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy",
    );
  }
  return (
    <div className={styles.page}>
      <main>
        <NeighborhoodHero 
          neighborhood={{ name: community.name }}
          marketData={{
            medianPrice: community.minPrice,
            priceChange: 0,
            daysOnMarket: 14,
            marketTrend: "flat"
          }}
        />
        <section className={styles.sectionCard}>
          <h1>{community.name}</h1>
          <Image
            src={community.image}
            alt={`${community.name} neighborhood homes in Summerlin West`}
            width={400}
            height={220}
            className={styles.communityImage}
          />
          <p>{community.description}</p>
          <ul>
            <li>
              <strong>Price Range:</strong> {community.priceRange}
            </li>
            <li>
              <strong>Home Types:</strong> {community.homeTypes}
            </li>
            <li>
              <strong>Year Built:</strong> {community.yearBuilt}
            </li>
            <li>
              <strong>Schools:</strong> {community.schools.join(", ")}
            </li>
            <li>
              <strong>Amenities:</strong> {community.amenities.join(", ")}
            </li>
            <li>
              <strong>Features:</strong> {community.features.join(", ")}
            </li>
          </ul>
          <Link href="/communities" className={styles.ctaBtn}>
            Back to All Communities
          </Link>
        </section>
      </main>
    </div>
  );
}
