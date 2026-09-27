const DEFAULT_SITE_URL = "https://www.summerlinwestrealestate.com";

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/+$/, "");
}

/** Canonical public site origin (www). Override with NEXT_PUBLIC_SITE_URL in env. */
export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL,
);

/** Absolute URL for a site path (or homepage when path is `/` or empty). */
export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") {
    return SITE_URL;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
