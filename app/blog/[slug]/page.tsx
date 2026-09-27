import { notFound } from "next/navigation";
import BlogLayout from "../../../components/ui/BlogLayout";
import { getBlogPostBySlug } from "../../../lib/blog-posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) return notFound();

  return <BlogLayout posts={[post]} currentPost={post} isPostPage={true} />;
}
