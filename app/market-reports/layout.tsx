import type { Metadata } from "next";
import { withCanonical } from "../../lib/canonical-metadata";

export const metadata: Metadata = withCanonical("/market-reports");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
