import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cpu,
  ImagePlus,
  Layers,
  Route,
  Sparkles,
} from "lucide-react";
import {
  AccordionList,
  Button,
  Card,
  Container,
  Reveal,
  Section,
  ServiceIcon,
} from "@/components/ui";
import {
  getAllServiceSlugs,
  getServiceBySlug,
  services,
} from "@/data/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const related = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

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
              href="/services"
              className="transition-colors hover:text-[#0d57b8]"
            >
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-semibold text-[#071a38]">{service.title}</span>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d57b8] text-white shadow-lg shadow-blue-600/25">
                  <ServiceIcon slug={service.slug} className="h-6 w-6" />
                </div>
                <span className="inline-flex items-center rounded-full border border-[#dbe6ff] bg-white px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#0d57b8]">
                  Core Service
                </span>
              </div>

              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#071a38] sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-3 text-base font-semibold text-[#0d57b8] sm:text-lg">
                {service.tagline}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                {service.overview}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact">
                  Start This Project
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button href="#roadmap" variant="secondary">
                  View Roadmap
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-xl shadow-blue-900/[0.06] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={service.image}
                    alt={`${service.title} workflow preview`}
                    fill
                    unoptimized={service.image.endsWith(".svg")}
                    loading="eager"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3-KPI Impact Band */}
          <div className="mt-14 rounded-3xl border border-slate-200/80 bg-white px-6 py-7 shadow-md shadow-blue-900/[0.04]">
            <dl className="grid grid-cols-1 divide-y divide-slate-200/70 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {service.metrics.map((metric) => (
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

      {/* Deliverables Grid */}
      <Section
        eyebrow="What's Included"
        title="Scope &"
        highlight="key deliverables."
        subtitle="Everything needed to take your automation or product from discovery to a reliable live launch."
        align="center"
        tone="white"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.deliverables.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 65} className="h-full">
              <Card className="flex h-full flex-col rounded-3xl p-6 text-left">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#0d57b8] via-[#f57c00] to-[#ff9800] transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dbe6ff] bg-white text-[#0d57b8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0d57b8] group-hover:text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs font-bold tracking-widest text-slate-300 transition-colors group-hover:text-[#f57c00]">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#071a38] transition-colors group-hover:text-[#0d57b8]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Implementation Path & Roadmap */}
      <Section
        id="roadmap"
        eyebrow="Execution Path & Roadmap"
        title="Your step-by-step"
        highlight="delivery roadmap."
        subtitle="A clear, structured path from initial audit to production rollout with verified milestones at every phase."
        tone="white"
      >
        <div className="relative">
          {/* Desktop horizontal connecting path line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-8 right-8 top-11 hidden h-0.5 bg-gradient-to-r from-[#0d57b8]/25 via-[#f57c00]/50 to-[#0d57b8]/25 lg:block"
          />

          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 80} className="h-full">
                <li className="group relative flex h-full list-none flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-md shadow-blue-900/[0.04] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#0d57b8]/40 hover:shadow-xl hover:shadow-blue-600/10">
                  {/* Top path node & duration pill */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0d57b8] text-sm font-extrabold text-white shadow-md shadow-blue-600/25 transition-transform duration-300 group-hover:scale-110">
                      0{item.step}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#dbe6ff] bg-white px-3 py-1 text-[11px] font-semibold text-[#0d57b8]">
                      <Clock className="h-3 w-3" />
                      {item.duration}
                    </span>
                  </div>

                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.09em] text-slate-400">
                    {item.phase}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-[#071a38] transition-colors group-hover:text-[#0d57b8]">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>

                  {/* Milestone output pill */}
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="flex items-start gap-2 text-xs font-semibold text-[#071a38]">
                      <Route className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#f57c00]" />
                      <span>{item.milestone}</span>
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* Benefits & Stack Split */}
      <Section
        eyebrow="Why It Works"
        title="Business outcomes &"
        highlight="technology stack."
        tone="white"
      >
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {service.benefits.map((benefit, idx) => (
              <Reveal key={benefit} delay={idx * 65} className="h-full">
                <Card className="flex h-full items-start gap-3.5 rounded-2xl p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#dbe6ff] bg-white text-[#0d57b8] transition-colors group-hover:bg-[#0d57b8] group-hover:text-white">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <span className="pt-1 text-sm font-semibold leading-snug text-[#071a38]">
                    {benefit}
                  </span>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="lg:col-span-5">
            <Card
              interactive={false}
              className="flex h-full flex-col justify-between rounded-3xl p-7"
            >
              <div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-[#071a38]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eef3ff] text-[#0d57b8]">
                    <Cpu className="h-4 w-4" />
                  </span>
                  Core Tools &amp; Technologies
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Proven APIs, AI models, and cloud integrations selected for
                  speed, security, and maintainability.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#dbe6ff] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#071a38]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0d57b8] hover:underline"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Compare all services
                </Link>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Portfolio Showcase Slot (Ready for User's Own Uploads Later) */}
      <Section
        eyebrow="Project Showcase"
        title={`${service.title}`}
        highlight="portfolio."
        subtitle="Dedicated showcase space ready for your live client screenshots and case studies."
        tone="white"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2].map((slot) => (
            <Reveal key={slot} delay={slot * 75}>
              <Card className="flex flex-col rounded-3xl p-6">
                <div className="flex aspect-[16/9] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#c5d7fb] bg-white p-6 text-center transition-colors duration-300 group-hover:border-[#0d57b8]/60">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#dbe6ff] bg-white text-[#0d57b8] shadow-xs transition-transform duration-300 group-hover:scale-110">
                    <ImagePlus className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-bold text-[#071a38]">
                    {service.title} — Case Study #{slot}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Upload your portfolio image later at{" "}
                    <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-[#0d57b8]">
                      {service.portfolioPath}
                    </code>
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/portfolio" variant="secondary">
            Browse Main Portfolio
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </Section>

      {/* Service FAQs */}
      <Section
        eyebrow="Common Questions"
        title="Frequently asked"
        highlight="about this service."
        align="center"
        tone="white"
      >
        <AccordionList items={service.faqs} />
      </Section>

      {/* HD Wave CTA Banner */}
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
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c9dbff] bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#0d57b8]">
                <Layers className="h-3.5 w-3.5" />
                Ready to Automate?
              </span>
              <h2 className="mt-4 text-2xl font-bold text-[#071a38] sm:text-4xl">
                Let&apos;s plan your{" "}
                <span className="text-[#f57c00]">{service.title}</span> roadmap.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Share your goals and we&apos;ll send back a clear scope,
                timeline, and tailored implementation plan within 24 hours.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact">
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button href="/services" variant="secondary">
                  View All Services
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Related Services */}
      <Section
        eyebrow="Explore More"
        title="Related"
        highlight="services."
        tone="white"
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {related.map((item, idx) => (
            <Reveal key={item.slug} delay={idx * 70} className="h-full">
              <Card className="flex h-full flex-col overflow-hidden rounded-3xl p-0">
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-100 bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized={item.image.endsWith(".svg")}
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-[#0d57b8] shadow-sm transition-all duration-300 group-hover:bg-[#0d57b8] group-hover:text-white">
                    <ServiceIcon slug={item.slug} className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold text-[#071a38] group-hover:text-[#0d57b8]">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-slate-600">
                    {item.shortDescription}
                  </p>
                  <Link
                    href={`/services/${item.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d57b8]"
                  >
                    Explore service
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
