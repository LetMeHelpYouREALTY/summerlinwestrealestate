"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildBreadcrumbListJsonLd } from "../../lib/breadcrumb-schema";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function BreadcrumbsClient() {
  const pathname = usePathname();

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

    let currentPath = "";
    segments.forEach((segment) => {
      currentPath += `/${segment}`;
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      breadcrumbs.push({ label, href: currentPath });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  const breadcrumbSchema = buildBreadcrumbListJsonLd(
    breadcrumbs.map((item) => ({ name: item.label, path: item.href })),
  );

  if (breadcrumbs.length <= 1) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <ol className="breadcrumb-list">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="breadcrumb-item">
              {index === breadcrumbs.length - 1 ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <>
                  <Link href={item.href}>{item.label}</Link>
                  <span aria-hidden="true"> / </span>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
