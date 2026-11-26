"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { ServiceIcon, SolutionIcon } from "@/components/ui";
import { type NavItem } from "./NavLinks";

export function MobileNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleGroup = (label: string) => {
    setExpanded((current) => (current === label ? null : label));
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white text-[#071a38] transition-colors hover:border-[#0d57b8] hover:text-[#0d57b8]"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open ? (
        <div className="fixed inset-x-0 top-[76px] z-50 max-h-[calc(100vh-76px)] overflow-y-auto border-t border-slate-200/80 bg-white/98 px-4 pb-6 pt-4 shadow-2xl shadow-blue-900/10 backdrop-blur-lg sm:px-6">
          <nav aria-label="Mobile navigation" className="space-y-1.5">
            {items.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      active
                        ? "bg-[#eef3ff] text-[#0d57b8]"
                        : "text-[#071a38] hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              const isExpanded = expanded === item.label;
              return (
                <div
                  key={item.label}
                  className="overflow-hidden rounded-xl border border-slate-100 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => toggleGroup(item.label)}
                    aria-expanded={isExpanded}
                    className={`flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left text-sm font-semibold transition-colors ${
                      active ? "text-[#0d57b8]" : "text-[#071a38]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                        isExpanded ? "rotate-180 text-[#0d57b8]" : ""
                      }`}
                    />
                  </button>

                  {isExpanded ? (
                    <div className="space-y-1 border-t border-slate-100 px-2 pb-2.5 pt-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                            pathname === child.href
                              ? "bg-[#eef3ff] font-semibold text-[#0d57b8]"
                              : "text-slate-700 hover:bg-[#f5f8ff]"
                          }`}
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#dbe6ff] bg-white text-[#0d57b8]">
                            {child.kind === "service" ? (
                              <ServiceIcon slug={child.slug} className="h-4 w-4" />
                            ) : (
                              <SolutionIcon slug={child.slug} className="h-4 w-4" />
                            )}
                          </span>
                          <span className="min-w-0">
                            <span className="block font-semibold text-[#071a38]">
                              {child.label}
                            </span>
                            <span className="block truncate text-xs text-slate-500">
                              {child.description}
                            </span>
                          </span>
                        </Link>
                      ))}
                      {item.footerLabel ? (
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-[#0d57b8] hover:bg-[#eef3ff]"
                        >
                          <span>{item.footerLabel}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="mt-5 border-t border-slate-100 pt-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0d57b8] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:bg-[#09438f]"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
