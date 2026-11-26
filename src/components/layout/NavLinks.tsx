"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ServiceIcon, SolutionIcon } from "@/components/ui";

export type NavChildItem = {
  label: string;
  href: string;
  description: string;
  slug: string;
  kind: "service" | "solution";
};

export type NavItem = {
  label: string;
  href: string;
  footerLabel?: string;
  children?: NavChildItem[];
};

export function NavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMenu = () => {
    setOpenMenu(null);
    if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <nav className="hidden h-full items-center gap-9 lg:flex" aria-label="Primary">
      {items.map((item) => {
        const active = isActive(item.href);
        const isOpen = openMenu === item.label;
        const linkClasses = `relative flex h-full items-center gap-1 text-sm font-medium transition-colors ${
          active || isOpen
            ? "text-[#0d57b8]"
            : "text-[#071a38] hover:text-[#0d57b8]"
        }`;
        const underline = active ? (
          <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[#0d57b8]" />
        ) : null;

        if (!item.children) {
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className={linkClasses}
            >
              {item.label}
              {underline}
            </Link>
          );
        }

        const isWide = item.children.length > 5;

        return (
          <div
            key={item.label}
            className="relative flex h-full items-center"
            onMouseEnter={() => setOpenMenu(item.label)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link
              href={item.href}
              onClick={closeMenu}
              aria-expanded={isOpen}
              className={linkClasses}
            >
              {item.label}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
              {underline}
            </Link>

            <div
              className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 transition-all duration-200 ease-out ${
                isWide ? "w-[620px]" : "w-84"
              } ${
                isOpen
                  ? "pointer-events-auto visible translate-y-0 opacity-100"
                  : "pointer-events-none invisible translate-y-1.5 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-2xl shadow-blue-900/12">
                <ul
                  className={
                    isWide ? "grid grid-cols-2 gap-1" : "space-y-0.5"
                  }
                >
                  {item.children.map((child) => {
                    const childActive = pathname === child.href;
                    return (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={closeMenu}
                          className={`group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200 ${
                            childActive
                              ? "bg-[#eef3ff] text-[#0d57b8]"
                              : "hover:bg-[#f5f8ff]"
                          }`}
                        >
                          <span
                            className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors duration-200 ${
                              childActive
                                ? "border-[#0d57b8] bg-[#0d57b8] text-white"
                                : "border-[#dbe6ff] bg-white text-[#0d57b8] group-hover/item:border-[#0d57b8] group-hover/item:bg-[#0d57b8] group-hover/item:text-white"
                            }`}
                          >
                            {child.kind === "service" ? (
                              <ServiceIcon slug={child.slug} className="h-4 w-4" />
                            ) : (
                              <SolutionIcon slug={child.slug} className="h-4 w-4" />
                            )}
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold leading-snug text-[#071a38] transition-colors group-hover/item:text-[#0d57b8]">
                              {child.label}
                            </span>
                            <span className="mt-0.5 block truncate text-xs text-slate-500">
                              {child.description}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {item.footerLabel ? (
                  <div className="mt-2 border-t border-slate-100 pt-2">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="group/all flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-[#0d57b8] transition-colors hover:bg-[#eef3ff]"
                    >
                      <span>{item.footerLabel}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/all:translate-x-0.5" />
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
