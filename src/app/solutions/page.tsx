import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  Button,
  Card,
  Container,
  Reveal,
  Section,
  SolutionIcon,
} from "@/components/ui";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore GetWorldDigital business solutions — Managed IT Services, AI Automation, SEO & PPC, and Front-Desk Solutions.",
};

const pillars = [
  {
    icon: ShieldCheck,
    title: "Proactive Reliability",
    description:
      "We monitor, secure, and optimize your systems continuously so your team stays focused on growth.",
  },
  {
    icon: Cpu,
    title: "Built Around Your Stack",
    description:
      "Seamless integration with your existing CRM, cloud, email, and calendar tools—no disruptive rip-and-replace.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Business ROI",
    description:
      "Every managed solution is tracked against concrete metrics—hours saved, faster response times, and lower CPL.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-transparent py-16 sm:py-22">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dbe6ff] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#0d57b8]">
              <Sparkles className="h-3.5 w-3.5" />
              Business Solutions
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#071a38] sm:text-5xl">
              Practical solutions engineered for{" "}
              <span className="text-[#f57c00]">modern operations.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Streamline daily operations, automate repetitive workflows,
              protect your infrastructure, and capture high-intent demand with
              turnkey solutions managed by senior specialists.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button href="/contact">
                Book a Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="/services" variant="secondary">
                View Core Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 4 Solutions Showcase Grid */}
      <Section
        eyebrow="Managed & Turnkey"
        title="Solutions tailored to"
        highlight="how you operate."
        subtitle="Select any solution to inspect the challenges it solves, core capabilities, implementation steps, and FAQs."
        tone="white"
      >
        <div className="grid gap-7 lg:grid-cols-2">
          {solutions.map((solution, idx) => (
            <Reveal key={solution.slug} delay={idx * 80} className="h-full">
              <Card className="flex h-full flex-col overflow-hidden rounded-3xl p-0">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 z-20 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#0d57b8] via-[#f57c00] to-[#ff9800] transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                {/* Top Thumbnail */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-slate-100 bg-white">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute bottom-3.5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-white/95 text-[#0d57b8] shadow-md shadow-blue-900/15 backdrop-blur-sm transition-all duration-300 group-hover:-rotate-3 group-hover:scale-110 group-hover:border-[#0d57b8] group-hover:bg-[#0d57b8] group-hover:text-white">
                    <SolutionIcon slug={solution.slug} className="h-6 w-6" />
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h2 className="text-xl font-bold text-[#071a38] transition-colors group-hover:text-[#0d57b8]">
                    {solution.title}
                  </h2>
                  <p className="mt-1 text-xs font-semibold text-[#0d57b8]">
                    {solution.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {solution.shortDescription}
                  </p>

                  {/* 3 Mini KPIs */}
                  <div className="mt-5 grid grid-cols-3 gap-2.5 rounded-2xl border border-slate-100 bg-white p-3">
                    {solution.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <p className="text-base font-extrabold text-[#f57c00] tabular-nums sm:text-lg">
                          {m.value}
                        </p>
                        <p className="mt-0.5 text-[10px] font-medium leading-tight text-slate-500 sm:text-[11px]">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <ul className="mt-5 flex-1 space-y-2 border-t border-slate-100 pt-4">
                    {solution.benefits.slice(0, 3).map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-xs font-medium text-slate-700 sm:text-sm"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0d57b8]" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <Link
                      href={`/solutions/${solution.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d57b8] transition-colors hover:text-[#09438f]"
                    >
                      Explore {solution.title}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-300 group-hover:border-[#0d57b8] group-hover:bg-[#0d57b8] group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why Our Solutions */}
      <Section
        eyebrow="Why Partner With Us"
        title="Designed for clarity,"
        highlight="reliability & scale."
        align="center"
        tone="white"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <Reveal key={pillar.title} delay={idx * 80} className="h-full">
              <Card className="flex h-full flex-col rounded-3xl p-7 text-left">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#dbe6ff] bg-white text-[#0d57b8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0d57b8] group-hover:text-white">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[#071a38]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="relative isolate mt-12 overflow-hidden rounded-3xl border border-[#dbe6ff] bg-white p-8 shadow-xl shadow-blue-900/[0.06] sm:p-12">
            <Image
              src="/home/cta-banner-theme.svg"
              alt=""
              fill
              unoptimized
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="-z-10 object-cover object-right"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/75 to-transparent"
            />
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-xl text-left">
                <h3 className="text-2xl font-bold text-[#071a38] sm:text-3xl">
                  Not sure which solution delivers the fastest ROI?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Book a free 20-minute workflow &amp; IT review—we&apos;ll
                  pinpoint your highest-leverage opportunities.
                </p>
              </div>
              <Button href="/contact">
                Book a Free Review
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
