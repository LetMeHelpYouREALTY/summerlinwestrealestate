export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  content?: string;
  alt?: string;
  publishedAt?: string;
  author?: string;
}

export interface BlogLayoutProps {
  posts: BlogPost[];
  children?: React.ReactNode;
}
