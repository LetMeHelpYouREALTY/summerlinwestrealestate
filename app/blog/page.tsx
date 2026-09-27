import Link from "next/link";
import styles from "./blog.module.css";
import BlogLayout from "../../components/ui/BlogLayout";
import { getBlogPostsForIndex } from "../../lib/blog-posts";
import type { Metadata } from "next";
import { withCanonical } from "../../lib/canonical-metadata";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  ...withCanonical("/blog"),
  title: "Summerlin West Real Estate Blog | Market Insights",
  description:
    "Local market insights, neighborhood updates, and real estate news for Summerlin West from Dr. Jan Duffy, REALTOR®.",
};

export default async function BlogIndexPage() {
  const posts = await getBlogPostsForIndex();

  return (
    <div className={`${styles.container} ${styles.blogContainer}`}>
      <BlogLayout posts={posts} />
      <section className={`${styles.sectionCard} ${styles.calloutSection}`}>
        <h2>Meet Your Summerlin West Real Estate Expert</h2>
        <p>
          <strong>Dr. Jan Duffy, REALTOR®</strong> has helped families discover
          luxury living at the gateway to Red Rock Canyon since 2015. As a
          longtime resident and doctorate-level educator, she brings analytical
          precision and deep local knowledge to every transaction. Specializing
          in <strong>The Ridges, Red Rock Country Club, The Vistas, and The Paseos</strong>,
          Dr. Duffy is your go-to resource for buying or selling in Summerlin
          West.
        </p>
        <p className={styles.calloutHighlight}>
          Ready to make your move in Summerlin West?
        </p>
        <p>
          <strong>
            Contact Dr. Jan Duffy today for your complimentary market
            consultation and discover your dream home or get top dollar for your
            property.
          </strong>
        </p>
        <p>
          <Link href="/contact">Contact Dr. Jan Duffy &rarr;</Link>
        </p>
      </section>
    </div>
  );
}
