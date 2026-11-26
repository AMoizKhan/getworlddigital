import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { HeaderScrollShell } from "./HeaderScrollShell";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { NavLinks, type NavItem } from "./NavLinks";

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    footerLabel: "Explore all services",
    children: services.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
      description: service.tagline,
      slug: service.slug,
      kind: "service",
    })),
  },
  {
    href: "/solutions",
    label: "Solutions",
    footerLabel: "Explore all solutions",
    children: solutions.map((solution) => ({
      label: solution.title,
      href: `/solutions/${solution.slug}`,
      description: solution.tagline,
      slug: solution.slug,
      kind: "solution",
    })),
  },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <HeaderScrollShell>
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <div className="flex h-full items-center">
          <Logo />
        </div>

        <NavLinks items={navItems} />

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-full bg-[#0d57b8] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:bg-[#09438f] sm:inline-flex"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <MobileNav items={navItems} />
        </div>
      </Container>
    </HeaderScrollShell>
  );
}
