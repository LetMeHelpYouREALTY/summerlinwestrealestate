import { BlogPost } from "../../types/blog";
import Link from "next/link";
import Image from "next/image";
import Parser from "rss-parser";
import styles from "./blog.module.css";
import BlogLayout from '../../components/ui/BlogLayout';

export const dynamic = "force-dynamic";

const HYPERLOCAL_KEYWORDS = [
  "summerlin",
  "summerlin west",
  "the vistas",
  "stonebridge",
  "redpoint",
  "reverence",
  "downtown summerlin",
  // Add more neighborhoods as needed
];

const NEIGHBORHOODS = [
  "The Vistas",
  "Stonebridge",
  "Redpoint",
  "Reverence",
  "Downtown Summerlin",
  "The Paseos",
  "Redpoint Square",
];

const LOCAL_MARKET_INSIGHTS = [
  "Did you know? Summerlin West homes sell 20% faster than the Las Vegas average!",
  "Fun fact: The Vistas Park hosts free summer concerts for residents.",
  "Stonebridge features some of the newest luxury homes in Summerlin West.",
  "Redpoint is known for its modern architecture and walkable amenities.",
  "Reverence offers stunning mountain views and exclusive gated living.",
  "Downtown Summerlin has over 125 shops and restaurants just minutes away!",
  "The Paseos features top-rated schools and beautiful parks.",
];

const LOCAL_EVENTS = [
  "Check out the Summerlin Farmers Market this Saturday at Downtown Summerlin!",
  "Join us for Movies in the Park at The Vistas this Friday night.",
  "Don&apos;t miss the Summerlin Art Festival coming up next month!",
  "Explore the new trails opening in Stonebridge this weekend.",
  "Sign up for the Summerlin West Community Garage Sale!",
];

function isHyperlocal(post: BlogPost & { contentSnippet?: string; content?: string }) {
  const text =
    `${post.title} ${post.contentSnippet || ""} ${post.content || ""}`.toLowerCase();
  return HYPERLOCAL_KEYWORDS.some((kw) => text.includes(kw));
}

const LOCAL_INTRO =
  "This update is brought to you by your Summerlin West real estate experts. Here&apos;s how this news impacts our local market:";
const LOCAL_CTA =
  "If you have questions about how this affects your home or your plans in Summerlin West, contact us for a hyperlocal perspective!";

function getRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function fetchRssPosts() {
  const parser = new Parser();
  const feed = await parser.parseURL(
    "https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18",
  );
  return feed.items || [];
}

type RssFeedItem = {
  id?: string;
  guid?: string;
  slug?: string;
  title?: string;
  excerpt?: string;
  contentSnippet?: string;
  content?: string;
  image?: string;
  alt?: string;
  publishedAt?: string;
  isoDate?: string;
  author?: string;
  date?: string;
  pubDate?: string;
};

const formatPost = (post: unknown): BlogPost => {
  const item = post as RssFeedItem;
  const title = item.title ?? "Untitled";
  return {
    id: item.id || item.guid || item.slug || title,
    title,
    slug: item.slug || item.id || item.guid || "",
    excerpt: item.excerpt || item.contentSnippet || "",
    content: item.content || "",
    image: item.image || "",
    alt: item.alt || `Image for ${title}`,
    publishedAt: item.publishedAt || item.isoDate || "",
    author: item.author || "",
    date: item.date || item.pubDate || "",
  };
};

const chunkArray = <T,>(arr: T[], chunkSize = 3): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

export default async function BlogIndexPage() {
  const posts = (await fetchRssPosts()).map(formatPost).filter(
    (post) => isHyperlocal(post) || true // Show all, but localize generics
  );

  return (
    <div className={`${styles.container} ${styles.blogContainer}`}>
      <BlogLayout posts={posts} />
      {/* Dr. Jan Duffy Callout Section */}
      <section className={`${styles.sectionCard} ${styles.calloutSection}`}>
        <h2>Meet Your Summerlin West Real Estate Expert</h2>
        <p>
          <strong>Dr. Jan Duffy, REALTOR®</strong> has helped families discover luxury living at the gateway to Red Rock Canyon since 2015. As a longtime resident and doctorate-level educator, she brings analytical precision and deep local knowledge to every transaction. Specializing in <strong>The Ridges, Red Rock Country Club, The Vistas, and The Paseos</strong>, Dr. Duffy is your go-to resource for buying or selling in Summerlin West.
        </p>
        <p className={styles.calloutHighlight}>
          Ready to make your move in Summerlin West?
        </p>
        <p>
          <strong>
            Contact Dr. Jan Duffy today for your complimentary market consultation and discover your dream home or get top dollar for your property.
          </strong>
        </p>
        <p>
          <Link href="/contact">Contact Dr. Jan Duffy &rarr;</Link>
        </p>
      </section>
    </div>
  );
}
