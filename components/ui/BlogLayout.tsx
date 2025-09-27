'use client';

import type React from 'react';
import type { BlogPost } from '../../types/blog';

type BlogLayoutProps = {
  posts?: BlogPost[];
  currentPost?: BlogPost;
  relatedPosts?: BlogPost[];
  isPostPage?: boolean;
  children?: React.ReactNode;
};

export default function BlogLayout({
  posts,
  currentPost,
  relatedPosts,
  isPostPage,
  children,
}: BlogLayoutProps) {
  if (children) return <div>{children}</div>;
  if (isPostPage && currentPost) {
    return (
      <article>
        <h1>{currentPost.title}</h1>
        <div>{currentPost.content}</div>
      </article>
    );
  }
  if (posts) {
    return (
      <div>
        <h1>Blog Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  return <div>No blog content.</div>;
}
