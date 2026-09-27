import type { Metadata } from "next";

/** Per-route canonical for use with root `metadataBase` (path must start with `/`). */
export function withCanonical(path: string): Metadata {
  const normalized =
    path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  return {
    alternates: {
      canonical: normalized,
    },
  };
}
