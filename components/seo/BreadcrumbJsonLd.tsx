"use client";

import { usePathname } from "next/navigation";
import { buildBreadcrumbListJsonLd } from "../../lib/breadcrumb-schema";

function breadcrumbItemsFromPathname(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const items = [{ name: "Home", path: "/" }];

  let currentPath = "";
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const name = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    items.push({ name, path: currentPath });
  }

  return items;
}

export default function BreadcrumbJsonLd() {
  const pathname = usePathname();
  const schema = buildBreadcrumbListJsonLd(
    breadcrumbItemsFromPathname(pathname),
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
