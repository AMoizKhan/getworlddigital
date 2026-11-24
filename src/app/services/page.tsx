import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { Button, Card, Container, Reveal, Section, ServiceIcon } from "@/components/ui";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore GetWorldDigital services — web, mobile, design, marketing, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-slate-100 bg-[linear-gradient(105deg,#ffffff_0%,#f7f9ff_50%,#edf2ff_100%)] py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#dbe7ff]/60 blur-3xl"
        />
        <Container>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e6eeff] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#1d4ed8]">
            <Layers className="h-3.5 w-3.5" />
            Services &amp; Solutions
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-[#0b1533] sm:text-5xl">
            Digital capabilities built to{" "}
            <span className="text-[#1f5bff]">accelerate growth.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore our end-to-end offerings across product engineering, UI/UX
            design, e-commerce, branding, and performance marketing.
          </p>
        </Container>
      </section>

      <Section
        id="solutions"
        eyebrow="What We Offer"
        title="Full-spectrum"
        highlight="digital services."
        subtitle="Select any service to view deliverables, key benefits, and our execution process."
        tone="white"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <Reveal key={service.slug} delay={idx * 70}>
              <Card className="flex h-full flex-col p-7">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#1f4fe0] to-[#3b82f6] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3ff] text-[#1f4fe0] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1f4fe0] group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/25">
                  <ServiceIcon slug={service.slug} className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-bold text-[#0b1533] transition-colors group-hover:text-[#1f4fe0]">
                  {service.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {service.shortDescription}
                </p>
                <ul className="mt-4 flex-1 space-y-1.5 border-t border-slate-100 pt-4">
                  {service.benefits.slice(0, 2).map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-xs text-slate-600"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1f4fe0]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1f4fe0] transition-colors hover:text-[#1a43c4]"
                >
                  View details
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#dbe6ff] bg-[#f6f9ff] p-7 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-bold text-[#0b1533]">
                Need a custom combination of services?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Tell us your goals and we&apos;ll tailor a dedicated delivery
                roadmap.
              </p>
            </div>
            <Button href="/contact">
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
