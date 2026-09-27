import { absoluteUrl } from "./site-url";

export type BreadcrumbSchemaItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbListJsonLd(items: BreadcrumbSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
