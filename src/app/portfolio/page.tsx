import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import { Container, Section } from "@/components/ui";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Filterable projects and case studies from GetWorldDigital.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-transparent py-16 sm:py-20">
        <Container>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e6eeff] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#0d57b8]">
            <Briefcase className="h-3.5 w-3.5" />
            Portfolio
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-[#071a38] sm:text-5xl">
            Projects &amp;{" "}
            <span className="text-[#f57c00]">case studies.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore outcomes we&apos;ve delivered across industries. Filter by
            sector to find work relevant to your business.
          </p>
        </Container>
      </section>

      <Section
        eyebrow="Browse Work"
        title="Filter by"
        highlight="industry."
        subtitle="Explore our web, mobile, e-commerce, and CRM project showcases across industries."
        tone="white"
      >
        <PortfolioGrid />
      </Section>
    </>
  );
}
