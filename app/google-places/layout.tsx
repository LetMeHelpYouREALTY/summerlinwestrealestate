import type { Metadata } from "next";
import { withCanonical } from "../../lib/canonical-metadata";

export const metadata: Metadata = withCanonical("/google-places");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
