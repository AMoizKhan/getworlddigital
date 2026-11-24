"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export function NavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="hidden h-full items-center gap-9 lg:flex" aria-label="Primary">
      {items.map((item) => {
        const active = isActive(item.href);
        const linkClasses = `relative flex h-full items-center gap-1 text-sm font-medium transition-colors ${
          active ? "text-[#1f4fe0]" : "text-[#0b1533] hover:text-[#1f4fe0]"
        }`;
        const underline = active ? (
          <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[#1f4fe0]" />
        ) : null;

        if (!item.children) {
          return (
            <Link key={item.label} href={item.href} className={linkClasses}>
              {item.label}
              {underline}
            </Link>
          );
        }

        return (
          <div key={item.label} className="group relative flex h-full items-center">
            <Link href={item.href} className={linkClasses}>
              {item.label}
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              {underline}
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="rounded-2xl border border-slate-200/80 bg-white p-2 shadow-xl shadow-slate-900/5">
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link
                      href={child.href}
                      className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-[#eef3ff] hover:text-[#1f4fe0]"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
