import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Handshake,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import { Button, Card, Reveal, Section } from "@/components/ui";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Modern architectures and smart automation built for tomorrow.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    description: "Clear milestones, honest communication, and zero surprises.",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    description: "High craft across every pixel, API endpoint, and campaign.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We stay invested in your outcomes well beyond launch day.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Us"
      title="Built around strategy,"
      highlight="craft & growth."
      subtitle="GetWorldDigital is a full-service digital agency combining design, engineering, and marketing to help ambitious businesses scale with confidence."
      tone="tinted"
    >
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Visual column */}
        <Reveal className="lg:col-span-6">
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-lg shadow-blue-900/[0.05] transition-all duration-500 hover:shadow-xl hover:shadow-blue-600/10">
            <div className="relative overflow-hidden rounded-2xl bg-white">
              <Image
                src="/home/about-agency.svg"
                alt="GetWorldDigital collaborative digital workspace and analytics overview"
                width={800}
                height={560}
                className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </Reveal>

        {/* Copy + core values */}
        <div className="space-y-6 lg:col-span-6">
          <Reveal delay={80}>
            <div className="space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Whether you are launching a new digital product or modernizing an
                existing platform, our cross-functional team works alongside you
                from discovery through delivery and continuous optimization.
              </p>
              <p>
                We focus on clean execution, measurable performance, and systems
                your team can rely on as your business grows.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value, idx) => (
              <Reveal key={value.title} delay={120 + idx * 65}>
                <Card className="h-full p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef3ff] text-[#0d57b8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0d57b8] group-hover:text-white">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#071a38]">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <div className="pt-1">
              <Button href="/about" variant="secondary">
                Learn More About Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
