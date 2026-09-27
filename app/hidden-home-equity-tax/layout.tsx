import type { Metadata } from "next";
import { withCanonical } from "../../lib/canonical-metadata";

export const metadata: Metadata = withCanonical("/hidden-home-equity-tax");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
