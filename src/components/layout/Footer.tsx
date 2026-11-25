import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui";
import { services } from "@/data/services";
import { Logo } from "./Logo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white font-sans">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-slate-600">
            Intelligent automation, modern web &amp; mobile engineering, and
            growth marketing built to help ambitious businesses scale with
            confidence.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-[#0b1533]">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-1 text-sm text-slate-600 transition-colors hover:text-[#1f4fe0]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-[#0b1533]">
            Services
          </h3>
          <ul className="space-y-2.5">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group inline-flex items-center gap-1 text-sm text-slate-600 transition-colors hover:text-[#1f4fe0]"
                >
                  <span>{service.title}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-[#0b1533]">
            Contact
          </h3>
          <ul className="space-y-3.5 text-sm text-slate-600">
            <li className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e6eeff] text-[#1f4fe0]">
                <Mail className="h-4 w-4" />
              </span>
              <span className="pt-1">hello@getworlddigital.com</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e6eeff] text-[#1f4fe0]">
                <Phone className="h-4 w-4" />
              </span>
              <span className="pt-1">+1 (555) 010-2040</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e6eeff] text-[#1f4fe0]">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="pt-1">100 Digital Avenue, Suite 200</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-slate-200/70 bg-white/60">
        <Container className="flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 GetWorldDigital. All rights reserved.</p>
          <p className="text-slate-500">
            Digital Solutions · Strategy · Engineering · Growth
          </p>
        </Container>
      </div>
    </footer>
  );
}
