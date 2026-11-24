import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Cpu,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { Card, Reveal, Section } from "@/components/ui";
import { industries } from "@/data/projects";

const industryIcons: Record<string, LucideIcon> = {
  Retail: ShoppingBag,
  Finance: Landmark,
  Healthcare: HeartPulse,
  Technology: Cpu,
  Hospitality: Hotel,
  Education: GraduationCap,
  Manufacturing: Factory,
  "Real Estate": Building2,
};

export function Industries() {
  return (
    <Section
      id="industries"
      eyebrow="Industries"
      title="Sectors we help"
      highlight="modernize."
      subtitle="Tailored digital products and growth systems designed for the workflows of your industry."
      align="center"
      tone="tinted"
    >
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {industries.map((industry, idx) => {
          const Icon = industryIcons[industry] ?? Building2;
          return (
            <Reveal key={industry} delay={idx * 55}>
              <Link href="/portfolio" className="block h-full">
                <Card className="flex h-full items-center justify-between gap-3 p-5">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef3ff] text-[#1f4fe0] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1f4fe0] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-bold text-[#0b1533] transition-colors group-hover:text-[#1f4fe0]">
                      {industry}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1f4fe0]" />
                </Card>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
