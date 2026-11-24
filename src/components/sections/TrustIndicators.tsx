import { Award, Briefcase, Clock, ShieldCheck, Users } from "lucide-react";
import { Card, Container, Reveal } from "@/components/ui";

const metrics = [
  {
    icon: Clock,
    label: "Years Experience",
    value: "10+",
    detail: "Delivering modern digital products",
  },
  {
    icon: Briefcase,
    label: "Projects Delivered",
    value: "250+",
    detail: "Websites, apps, and growth systems",
  },
  {
    icon: Users,
    label: "Happy Clients",
    value: "120+",
    detail: "Long-term global partnerships",
  },
  {
    icon: Award,
    label: "Industry Awards",
    value: "15",
    detail: "Recognized for design & engineering",
  },
];

export function TrustIndicators() {
  return (
    <section className="relative border-b border-slate-100 bg-white py-14 sm:py-18">
      <Container>
        <Reveal>
          <div className="mb-10 flex flex-col items-center text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              <ShieldCheck className="h-4 w-4 text-[#1f4fe0]" />
              A practical technology partner for modern businesses
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0b1533] sm:text-3xl">
              Trusted by growing brands{" "}
              <span className="text-[#1f5bff]">worldwide</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, idx) => (
            <Reveal key={metric.label} delay={idx * 75}>
              <Card className="h-full text-center">
                <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-[#1f4fe0] via-[#1f5bff] to-[#60a5fa] transition-transform duration-300 group-hover:scale-x-100" />
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3ff] text-[#1f4fe0] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1f4fe0] group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/25">
                  <metric.icon className="h-5 w-5" />
                </div>
                <p className="text-3xl font-extrabold tracking-tight text-[#0b1533] transition-colors duration-300 group-hover:text-[#1f4fe0]">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0b1533]">
                  {metric.label}
                </p>
                <p className="mt-1 text-xs text-slate-500">{metric.detail}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
