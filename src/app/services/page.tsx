import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
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
    "Explore GetWorldDigital services — AI Chatbots, AI Voice Receptionists, Lead Generation & Follow-up, Appointment Booking, Customer Support, Email & WhatsApp, CRM Automation, Custom AI Automation, and Mobile Applications.",
};

const engagementModels = [
  {
    icon: Target,
    title: "Fixed-Scope Delivery",
    description:
      "Clear milestones, defined deliverables, and predictable budgets for launches and redesigns.",
    badge: "Best for Launches",
  },
  {
    icon: Users,
    title: "Dedicated Product Pod",
    description:
      "Embedded senior engineers and designers iterating weekly alongside your internal leadership.",
    badge: "Best for Scaling",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Growth & Care",
    description:
      "Continuous performance optimization, SEO/marketing campaigns, and proactive technical support.",
    badge: "Best for Retention",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-transparent py-16 sm:py-22">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dbe6ff] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#0d57b8]">
              <Layers className="h-3.5 w-3.5" />
              Services &amp; Capabilities
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#071a38] sm:text-5xl">
              Digital services built to{" "}
              <span className="text-[#f57c00]">accelerate growth.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              From high-converting web platforms and mobile apps to custom CRM
              systems and growth marketing, we pair senior strategy with clean
              execution across every stage of your digital roadmap.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button href="/contact">
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="/solutions" variant="secondary">
                Explore Managed Solutions
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <Section
        id="solutions"
        eyebrow="What We Build"
        title="Full-spectrum"
        highlight="digital services."
        subtitle="Select any service below to explore deliverables, tech stack, key outcomes, and our delivery workflow."
        tone="white"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <Reveal key={service.slug} delay={idx * 70} className="h-full">
              <Card className="flex h-full flex-col overflow-hidden rounded-3xl p-0">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 z-20 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#0d57b8] via-[#f57c00] to-[#ff9800] transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-100 bg-white">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized={service.image.endsWith(".svg")}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  />
                  {service.metrics[0] ? (
                    <span className="absolute right-3.5 top-3.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#0d57b8] shadow-sm backdrop-blur-sm">
                      {service.metrics[0].value} · {service.metrics[0].label}
                    </span>
                  ) : null}
                  <div className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-white/95 text-[#0d57b8] shadow-md shadow-blue-900/10 backdrop-blur-sm transition-all duration-300 group-hover:-rotate-3 group-hover:scale-110 group-hover:border-[#0d57b8] group-hover:bg-[#0d57b8] group-hover:text-white">
                    <ServiceIcon slug={service.slug} className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-bold text-[#071a38] transition-colors group-hover:text-[#0d57b8]">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.shortDescription}
                  </p>

                  <ul className="mt-4 flex-1 space-y-2 border-t border-slate-100 pt-4">
                    {service.benefits.slice(0, 3).map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-xs font-medium text-slate-600"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0d57b8]" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d57b8] transition-colors hover:text-[#09438f]"
                    >
                      Explore service
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-300 group-hover:border-[#0d57b8] group-hover:bg-[#0d57b8] group-hover:text-white">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Engagement Models */}
      <Section
        eyebrow="How We Engage"
        title="Flexible ways to"
        highlight="work together."
        subtitle="Choose the delivery structure that best fits your timeline, internal team, and growth stage."
        align="center"
        tone="white"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {engagementModels.map((model, idx) => (
            <Reveal key={model.title} delay={idx * 80} className="h-full">
              <Card className="flex h-full flex-col rounded-3xl p-7 text-left">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#dbe6ff] bg-white text-[#0d57b8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0d57b8] group-hover:text-white">
                    <model.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-[#eef3ff] px-3 py-1 text-[11px] font-semibold text-[#0d57b8]">
                    {model.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#071a38]">
                  {model.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {model.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Consultation CTA Banner */}
        <Reveal delay={180}>
          <div className="relative isolate mt-12 overflow-hidden rounded-3xl border border-[#dbe6ff] bg-white p-8 shadow-xl shadow-blue-900/[0.06] sm:p-11">
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
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c9dbff] bg-white px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0d57b8]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Custom Roadmap
                </span>
                <h3 className="mt-3 text-2xl font-bold text-[#071a38] sm:text-3xl">
                  Need a tailored combination of services?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Share your goals and our senior team will map out the right
                  architecture, scope, and timeline.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact">
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button href="/portfolio" variant="secondary">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
