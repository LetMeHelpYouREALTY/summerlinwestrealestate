import { BlogPost } from "../../types/blog";
import Link from "next/link";
import styles from "./blog.module.css";
import BlogLayout from "../../components/ui/BlogLayout";
import { getBlogPostsForIndex } from "../../lib/blog-posts";

export const dynamic = "force-dynamic";

const HYPERLOCAL_KEYWORDS = [
  "summerlin",
  "summerlin west",
  "the vistas",
  "stonebridge",
  "redpoint",
  "reverence",
  "downtown summerlin",
];

function isHyperlocal(
  post: BlogPost & { contentSnippet?: string; content?: string },
) {
  const text =
    `${post.title} ${post.excerpt || ""} ${post.content || ""}`.toLowerCase();
  return HYPERLOCAL_KEYWORDS.some((kw) => text.includes(kw));
}

export default async function BlogIndexPage() {
  const posts = (await getBlogPostsForIndex()).filter(
    (post) => isHyperlocal(post) || true,
  );

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
          in{" "}
          <strong>
            The Ridges, Red Rock Country Club, The Vistas, and The Paseos
          </strong>
          , Dr. Duffy is your go-to resource for buying or selling in Summerlin
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
