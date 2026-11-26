import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Compass, Eye, Sparkles, Users } from "lucide-react";
import { Button, Card, Container, Reveal, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GetWorldDigital — our mission, vision, and team overview.",
};

const team = [
  { name: "Alex Rivera", role: "Founder & Strategy", initials: "AR" },
  { name: "Morgan Lee", role: "Head of Design", initials: "ML" },
  { name: "Jordan Blake", role: "Engineering Lead", initials: "JB" },
  { name: "Casey Nguyen", role: "Growth Marketing", initials: "CN" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-transparent py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e6eeff] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#0d57b8]">
                <Sparkles className="h-3.5 w-3.5" />
                About Us
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#071a38] sm:text-5xl">
                Building digital experiences that move businesses{" "}
                <span className="text-[#f57c00]">forward.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                We bring strategy, design, modern engineering, and growth
                marketing together under one roof so ambitious teams can ship
                faster and scale with confidence.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/contact">
                  Work With Us
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button href="/services" variant="secondary">
                  Explore Services
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-lg shadow-blue-900/[0.05]">
                <div className="overflow-hidden rounded-2xl bg-white">
                  <Image
                    src="/home/about-agency.svg"
                    alt="GetWorldDigital team workflow and growth overview"
                    width={800}
                    height={560}
                    loading="eager"
                    className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="Purpose & Direction"
        title="Mission &"
        highlight="Vision."
        subtitle="What guides every product we design, engineer, and grow for clients worldwide."
        tone="white"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3ff] text-[#0d57b8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0d57b8] group-hover:text-white">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#071a38]">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Help organizations launch and scale digital products that create
                measurable business impact through craft, clarity, and
                collaboration.
              </p>
            </Card>
          </Reveal>

          <Reveal delay={90}>
            <Card className="h-full p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3ff] text-[#0d57b8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0d57b8] group-hover:text-white">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#071a38]">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Become the trusted digital partner for ambitious brands that
                want strategy, design, engineering, and growth in one
                accountable team.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Leadership"
        title="Meet the"
        highlight="core team."
        subtitle="Senior strategists, designers, engineers, and marketers focused on your outcomes."
        align="center"
        tone="tinted"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, idx) => (
            <Reveal key={member.name} delay={idx * 75}>
              <Card className="h-full p-7 text-center">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#1668d4] to-[#0d57b8] text-lg font-bold text-white shadow-md shadow-blue-600/20 transition-transform duration-300 group-hover:scale-105">
                  {member.initials}
                </div>
                <p className="text-base font-bold text-[#071a38]">
                  {member.name}
                </p>
                <p className="mt-1 text-sm font-medium text-[#0d57b8]">
                  {member.role}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#eef3ff] px-3 py-1 text-xs font-medium text-slate-600">
                  <Users className="h-3.5 w-3.5 text-[#0d57b8]" />
                  Delivery Lead
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <div className="mt-10 flex justify-center">
            <Button href="/contact">
              Work With Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
