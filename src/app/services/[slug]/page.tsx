import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import {
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
      <section className="relative isolate overflow-hidden border-b border-slate-100 bg-[linear-gradient(105deg,#ffffff_0%,#f7f9ff_50%,#edf2ff_100%)] py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#dbe7ff]/60 blur-3xl"
        />
        <Container>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1f4fe0] transition-colors hover:text-[#1a43c4]"
          >
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Link>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f4fe0] text-white shadow-lg shadow-blue-600/25">
              <ServiceIcon slug={service.slug} className="h-7 w-7" />
            </div>
            <span className="inline-flex items-center rounded-full bg-[#e6eeff] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#1d4ed8]">
              Service Overview
            </span>
          </div>

          <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-[#0b1533] sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {service.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">
              Inquire About This Service
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="/portfolio" variant="secondary">
              View Case Studies
            </Button>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="Overview"
        title="What this engagement"
        highlight="includes."
        tone="white"
      >
        <Reveal>
          <Card interactive={false} className="p-7 sm:p-8">
            <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
              {service.overview}
            </p>
          </Card>
        </Reveal>
      </Section>

      <Section
        eyebrow="Benefits"
        title="Key outcomes &"
        highlight="advantages."
        tone="tinted"
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {service.benefits.map((benefit, idx) => (
            <Reveal key={benefit} delay={idx * 70}>
              <li className="list-none">
                <Card className="flex items-start gap-3.5 p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eef3ff] text-[#1f4fe0] transition-colors group-hover:bg-[#1f4fe0] group-hover:text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <span className="pt-1.5 text-sm font-semibold text-[#0b1533] sm:text-base">
                    {benefit}
                  </span>
                </Card>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Execution"
        title="Delivery"
        highlight="process."
        subtitle="How we execute this service transparently from discovery to launch."
        tone="white"
      >
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {service.process.map((item, idx) => (
            <Reveal key={item.step} delay={idx * 75} className="relative">
              <li className="h-full list-none">
                <Card className="flex h-full flex-col p-6">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1f4fe0] text-sm font-bold text-white shadow-md shadow-blue-600/20">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-[#0b1533]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </Card>
              </li>
              {idx < service.process.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1f4fe0] shadow-xs lg:flex"
                >
                  <ChevronRight className="h-4 w-4" />
                </span>
              ) : null}
            </Reveal>
          ))}
        </ol>
      </Section>

      <section className="border-b border-slate-100 bg-[#f6f9ff] py-16">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-[#dbe6ff] bg-[linear-gradient(115deg,#ffffff_0%,#f5f8ff_55%,#e8f0ff_100%)] p-8 text-center shadow-lg shadow-blue-900/[0.05] sm:p-12">
              <h2 className="text-2xl font-bold text-[#0b1533] sm:text-3xl">
                Interested in{" "}
                <span className="text-[#1f5bff]">{service.title}?</span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-600">
                Share your goals and we&apos;ll respond with a tailored
                approach, clear timeline, and next steps.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Button href="/contact">
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button href="/services" variant="secondary">
                  All Services
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section
        eyebrow="Explore More"
        title="Related"
        highlight="services."
        tone="white"
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {related.map((item, idx) => (
            <Reveal key={item.slug} delay={idx * 70}>
              <Card className="flex h-full flex-col p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef3ff] text-[#1f4fe0] transition-all duration-300 group-hover:bg-[#1f4fe0] group-hover:text-white">
                  <ServiceIcon slug={item.slug} className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#0b1533] group-hover:text-[#1f4fe0]">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  {item.shortDescription}
                </p>
                <Link
                  href={`/services/${item.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1f4fe0]"
                >
                  View service
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
