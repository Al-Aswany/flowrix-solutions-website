import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/seo";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  light?: boolean;
};

export function Breadcrumbs({ items, light = false }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? (
                <span className={light ? "text-white/25" : "text-black/25"} aria-hidden="true">
                  /
                </span>
              ) : null}
              {isLast ? (
                <span className={light ? "text-white/55" : "text-[#087a68]"} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className={`transition ${
                    light
                      ? "text-white/35 hover:text-white/70"
                      : "text-[#65726e] hover:text-[#0a1714]"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
