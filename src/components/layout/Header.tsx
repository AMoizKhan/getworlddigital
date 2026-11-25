import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { Container } from "@/components/ui";
import { services } from "@/data/services";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

const navItems = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: services.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  {
    href: "/services#solutions",
    label: "Solutions",
    children: [
      { label: "Managed IT Services", href: "/services" },
      { label: "AI Automation", href: "/services" },
      { label: "SEO & PPC", href: "/services" },
      { label: "Front-Desk Solutions", href: "/services" },
    ],
  },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/75 font-sans backdrop-blur-md">
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <div className="flex h-full items-center gap-8">
          <Logo />
          <span className="hidden h-8 w-px bg-slate-200 lg:block" aria-hidden="true" />
        </div>

        <NavLinks items={navItems} />

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-full bg-[#1f4fe0] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:bg-[#1a43c4] sm:inline-flex"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            className="inline-flex rounded-full border border-slate-300 p-2 text-[#0b1533] lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </header>
  );
}
