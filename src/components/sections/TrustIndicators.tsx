import {
  Award,
  Briefcase,
  Building2,
  Clock,
  Cpu,
  Globe,
  HeartPulse,
  Layers,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Container, Reveal } from "@/components/ui";

const partners = [
  { name: "Northline", icon: Layers },
  { name: "Swappo", icon: Sparkles },
  { name: "Enduring Hearts", icon: HeartPulse },
  { name: "MetroSync", icon: Cpu },
  { name: "Zumic", icon: Globe },
  { name: "Deembase", icon: Building2 },
];

const metrics = [
  {
    icon: Clock,
    number: "10",
    suffix: "+",
    label: "Years Experience",
    detail: "Shipping scalable digital systems",
  },
  {
    icon: Briefcase,
    number: "250",
    suffix: "+",
    label: "Projects Delivered",
    detail: "Across web, mobile & CRM",
  },
  {
    icon: Users,
    number: "120",
    suffix: "+",
    label: "Global Clients",
    detail: "Startups to enterprise teams",
  },
  {
    icon: Award,
    number: "15",
    suffix: "",
    label: "Industry Awards",
    detail: "Recognized craft & reliability",
  },
];

export function TrustIndicators() {
  return (
    <section
      aria-label="Trust and impact metrics"
      className="relative bg-transparent"
    >
      {/* Partner Trust Strip */}
      <div className="bg-transparent py-8">
        <Container>
          <Reveal>
            <div className="flex items-center justify-center gap-4">
              <span
                aria-hidden="true"
                className="hidden h-px w-16 bg-gradient-to-r from-transparent to-slate-200 sm:block"
              />
              <p className="inline-flex items-center gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                <ShieldCheck className="h-3.5 w-3.5 text-[#1f4fe0]" />
                A practical technology partner for modern businesses
              </p>
              <span
                aria-hidden="true"
                className="hidden h-px w-16 bg-gradient-to-l from-transparent to-slate-200 sm:block"
              />
            </div>

            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-9 gap-y-4 sm:gap-x-12">
              {partners.map((partner) => (
                <li
                  key={partner.name}
                  className="group flex items-center gap-2 text-slate-400 transition-colors duration-300 hover:text-[#0b1533]"
                >
                  <partner.icon className="h-4 w-4 transition-colors duration-300 group-hover:text-[#1f4fe0]" />
                  <span className="text-sm font-semibold tracking-tight sm:text-[15px]">
                    {partner.name}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </div>

      {/* Editorial Borderless Metrics Band (No Cards) */}
      <div className="py-10 sm:py-12">
        <Container>
          <Reveal delay={80}>
            <dl className="grid grid-cols-2 divide-y divide-slate-200/70 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="group relative flex flex-col items-center px-4 py-6 text-center transition-colors duration-300 sm:px-6 sm:py-2"
                >
                  <dd className="text-3xl font-extrabold tracking-tight text-[#0b1533] tabular-nums transition-transform duration-300 ease-out group-hover:-translate-y-0.5 sm:text-4xl lg:text-[2.75rem]">
                    {metric.number}
                    {metric.suffix ? (
                      <span className="text-[#1f5bff]">{metric.suffix}</span>
                    ) : null}
                  </dd>

                  <dt className="mt-2.5 flex items-center gap-1.5 text-sm font-semibold text-[#0b1533]">
                    <metric.icon className="h-4 w-4 text-[#1f4fe0] transition-transform duration-300 group-hover:scale-110" />
                    <span>{metric.label}</span>
                  </dt>

                  <p className="mt-1 text-xs text-slate-500">{metric.detail}</p>

                  {/* Subtle bottom accent hairline on hover */}
                  <span
                    aria-hidden="true"
                    className="mt-3 h-0.5 w-8 origin-center scale-x-0 rounded-full bg-[#1f4fe0] transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
