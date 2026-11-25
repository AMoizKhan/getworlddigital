import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import {
  Button,
  Card,
  Container,
  Reveal,
  Section,
  ServiceIcon,
} from "@/components/ui";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore GetWorldDigital services — web, mobile, UI/UX, CRM, marketing, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-transparent py-16 sm:py-20">
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
            Explore our end-to-end offerings across web &amp; mobile
            engineering, UI/UX design, e-commerce, CRM dashboards, and
            performance marketing.
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
              <Card className="flex h-full flex-col overflow-hidden p-0">
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-100 bg-white">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-white/95 text-[#1f4fe0] shadow-md shadow-blue-900/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#1f4fe0] group-hover:bg-[#1f4fe0] group-hover:text-white">
                    <ServiceIcon slug={service.slug} className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-bold text-[#0b1533] transition-colors group-hover:text-[#1f4fe0]">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs sm:flex-row sm:items-center">
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
