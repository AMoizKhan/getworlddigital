import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import {
  AccordionList,
  Button,
  Card,
  Container,
  Reveal,
  Section,
  SolutionIcon,
} from "@/components/ui";
import {
  getAllSolutionSlugs,
  getSolutionBySlug,
  solutions,
} from "@/data/solutions";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return { title: "Solution Not Found" };
  }

  return {
    title: solution.title,
    description: solution.shortDescription,
  };
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const otherSolutions = solutions.filter((item) => item.slug !== solution.slug);

  return (
    <>
      {/* Split Hero */}
      <section className="relative isolate overflow-hidden bg-transparent py-14 sm:py-20">
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm"
          >
            <Link href="/" className="transition-colors hover:text-[#0d57b8]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link
              href="/solutions"
              className="transition-colors hover:text-[#0d57b8]"
            >
              Solutions
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-semibold text-[#071a38]">
              {solution.title}
            </span>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d57b8] text-white shadow-lg shadow-blue-600/25">
                  <SolutionIcon slug={solution.slug} className="h-6 w-6" />
                </div>
                <span className="inline-flex items-center rounded-full border border-[#dbe6ff] bg-white px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#0d57b8]">
                  Managed Solution
                </span>
              </div>

              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#071a38] sm:text-5xl">
                {solution.title}
              </h1>
              <p className="mt-3 text-base font-semibold text-[#0d57b8] sm:text-lg">
                {solution.tagline}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                {solution.overview}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact">
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button href="/solutions" variant="secondary">
                  All Solutions
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-xl shadow-blue-900/[0.06] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={solution.image}
                    alt={`${solution.title} showcase`}
                    fill
                    loading="eager"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3-KPI Impact Strip */}
          <div className="mt-14 rounded-3xl border border-slate-200/80 bg-white px-6 py-7 shadow-md shadow-blue-900/[0.04]">
            <dl className="grid grid-cols-1 divide-y divide-slate-200/70 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {solution.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col items-center py-4 text-center sm:px-6 sm:py-1"
                >
                  <dd className="text-3xl font-extrabold tracking-tight text-[#f57c00] tabular-nums sm:text-4xl">
                    {metric.value}
                  </dd>
                  <dt className="mt-1.5 text-sm font-semibold text-[#071a38]">
                    {metric.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Challenges We Solve */}
      <Section
        eyebrow="Problems We Solve"
        title="Turning friction into"
        highlight="reliable momentum."
        subtitle="See how we replace common operational bottlenecks with clean, dependable systems."
        tone="white"
      >
        <div className="space-y-4">
          {solution.challenges.map((entry, idx) => (
            <Reveal key={entry.problem} delay={idx * 75}>
              <Card className="rounded-3xl p-6 sm:p-7">
                <div className="grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                      <AlertCircle className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400">
                        Common Bottleneck
                      </p>
                      <p className="mt-1 text-sm font-medium leading-relaxed text-slate-600">
                        {entry.problem}
                      </p>
                    </div>
                  </div>

                  <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-[#eef3ff] text-[#0d57b8] md:flex">
                    <ArrowRight className="h-4 w-4" />
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eef3ff] text-[#0d57b8]">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#0d57b8]">
                        Our Solution
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-relaxed text-[#071a38]">
                        {entry.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Core Capabilities */}
      <Section
        eyebrow="Capabilities"
        title="What's included in"
        highlight={`${solution.title}.`}
        subtitle="Comprehensive modules tailored to your team size, tools, and compliance requirements."
        align="center"
        tone="white"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solution.capabilities.map((cap, idx) => (
            <Reveal key={cap.title} delay={idx * 65} className="h-full">
              <Card className="flex h-full flex-col rounded-3xl p-6 text-left">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#0d57b8] via-[#f57c00] to-[#ff9800] transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dbe6ff] bg-white text-[#0d57b8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0d57b8] group-hover:text-white">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-xs font-bold tracking-widest text-slate-300 transition-colors group-hover:text-[#f57c00]">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#071a38] transition-colors group-hover:text-[#0d57b8]">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {cap.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Key Benefits */}
      <Section
        eyebrow="Key Outcomes"
        title="Measurable impact for"
        highlight="your team."
        tone="white"
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {solution.benefits.map((benefit, idx) => (
            <Reveal key={benefit} delay={idx * 65}>
              <li className="list-none">
                <Card className="flex items-start gap-3.5 rounded-2xl p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#dbe6ff] bg-white text-[#0d57b8] transition-colors group-hover:bg-[#0d57b8] group-hover:text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <span className="pt-1 text-sm font-semibold text-[#071a38] sm:text-base">
                    {benefit}
                  </span>
                </Card>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 4-Step Rollout Flow */}
      <Section
        eyebrow="Implementation"
        title="Smooth rollout in"
        highlight="four clear steps."
        subtitle="Designed for rapid value with zero disruption to your day-to-day business."
        tone="white"
      >
        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solution.process.map((item, idx) => (
            <Reveal key={item.step} delay={idx * 75}>
              <li className="group flex list-none flex-col items-center text-center">
                <div className="relative flex h-[62px] w-full items-start justify-center overflow-hidden">
                  <span className="select-none text-[5.5rem] font-black leading-[0.82] tracking-tighter text-slate-300/90 tabular-nums transition-all duration-500 group-hover:-translate-y-1 group-hover:text-[#f57c00]">
                    0{item.step}
                  </span>
                </div>
                <div className="relative mt-1 h-[2px] w-full bg-slate-200/70">
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-1/2 h-full w-0 -translate-x-1/2 rounded-full bg-[#f57c00] transition-all duration-500 group-hover:w-16"
                  />
                </div>
                <h3 className="mt-5 text-base font-bold text-[#071a38] transition-colors group-hover:text-[#0d57b8]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[230px] text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Solution FAQs */}
      <Section
        eyebrow="FAQ"
        title="Common questions about"
        highlight={`${solution.title}.`}
        align="center"
        tone="white"
      >
        <AccordionList items={solution.faqs} />
      </Section>

      {/* HD Wave Consultation Banner */}
      <section className="bg-transparent py-14">
        <Container>
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-3xl border border-[#dbe6ff] bg-white p-8 text-center shadow-xl shadow-blue-900/[0.06] sm:p-14">
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
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-white/90 via-white/70 to-transparent"
              />
              <h2 className="text-2xl font-bold text-[#071a38] sm:text-4xl">
                Ready to modernize with{" "}
                <span className="text-[#f57c00]">{solution.title}?</span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Book a free consultation with our specialists to review your
                current setup and receive an actionable rollout plan.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact">
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button href="/solutions" variant="secondary">
                  Explore All Solutions
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Other Solutions */}
      <Section
        eyebrow="More Solutions"
        title="Explore other"
        highlight="solutions."
        tone="white"
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {otherSolutions.map((item, idx) => (
            <Reveal key={item.slug} delay={idx * 70} className="h-full">
              <Card className="flex h-full flex-col rounded-3xl p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#dbe6ff] bg-white text-[#0d57b8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0d57b8] group-hover:text-white">
                  <SolutionIcon slug={item.slug} className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#071a38] transition-colors group-hover:text-[#0d57b8]">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.shortDescription}
                </p>
                <Link
                  href={`/solutions/${item.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d57b8]"
                >
                  View solution
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
