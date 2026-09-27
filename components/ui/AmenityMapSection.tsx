"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { COMMUNITY } from "../../lib/community-config";
import styles from "./AmenityMapSection.module.css";

const CommunityAmenityMap = dynamic(
  () => import("./CommunityAmenityMap"),
  {
    ssr: false,
    loading: () => (
      <div className={styles.mapSkeleton} aria-hidden="true">
        Loading amenity map…
      </div>
    ),
  },
);

type AmenityMapSectionProps = {
  heading?: string;
  intro?: string;
  showViewAllLink?: boolean;
  compact?: boolean;
};

export default function AmenityMapSection({
  heading = `Life Near ${COMMUNITY.name}`,
  intro = `Explore restaurants, trails, golf, healthcare, and everyday services around ${COMMUNITY.name} — Red Rock views with Downtown Summerlin minutes away.`,
  showViewAllLink = true,
  compact = false,
}: AmenityMapSectionProps) {
  return (
    <section
      className={styles.section}
      aria-labelledby="nearby-amenities-heading"
    >
      <div className={styles.header}>
        <h2 id="nearby-amenities-heading">{heading}</h2>
        <p>{intro}</p>
        {showViewAllLink ? (
          <p>
            <Link href="/amenities" className={styles.viewAllLink}>
              View the full Nearby Amenities guide →
            </Link>
          </p>
        ) : null}
      </div>
      <CommunityAmenityMap showStaticList={!compact} />
    </section>
  );
}
