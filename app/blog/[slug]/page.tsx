import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogLayout from "../../../components/ui/BlogLayout";
import { getBlogPostBySlug } from "../../../lib/blog-posts";
import { withCanonical } from "../../../lib/canonical-metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    ...withCanonical(`/blog/${slug}`),
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) return notFound();

  return <BlogLayout posts={[post]} currentPost={post} isPostPage={true} />;
}
