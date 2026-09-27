import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site-url";

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
