import Image from "next/image";
import { Check, Monitor, Rocket, Server, Smartphone } from "lucide-react";
import { Card, Reveal, Section } from "@/components/ui";

const capabilities = [
  {
    icon: Monitor,
    title: "Frontend",
    items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Accessibility"],
  },
  {
    icon: Server,
    title: "Backend & Data",
    items: ["Node.js APIs", "Databases", "Auth & Security", "Integrations"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: [
      "React Native",
      "iOS / Android",
      "App Store Ops",
      "Push & Analytics",
    ],
  },
  {
    icon: Rocket,
    title: "Growth",
    items: ["SEO", "Paid Media", "Content", "Conversion Optimization"],
  },
];

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Technical Expertise"
      title="Modern technologies &"
      highlight="core capabilities."
      subtitle="Battle-tested frameworks, reliable cloud infrastructure, and growth systems engineered to scale."
      align="center"
      tone="white"
    >
      <Reveal>
        <div className="group mb-10 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-md shadow-blue-900/[0.04] transition-all duration-500 hover:shadow-xl hover:shadow-blue-600/10">
          <div className="overflow-hidden rounded-2xl bg-[#f5f8ff]">
            <Image
              src="/home/expertise-platform.svg"
              alt="Full-stack web, mobile, cloud, and growth architecture overview"
              width={900}
              height={420}
              className="mx-auto h-auto max-h-[340px] w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            />
          </div>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((group, idx) => (
          <Reveal key={group.title} delay={idx * 75}>
            <Card className="h-full p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef3ff] text-[#1f4fe0] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1f4fe0] group-hover:text-white">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#0b1533]">
                  {group.title}
                </h3>
              </div>

              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-[#f8faff] px-3.5 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-200 group-hover:border-[#dbe6ff] group-hover:bg-[#eef3ff]/70"
                  >
                    <Check className="h-4 w-4 shrink-0 text-[#1f4fe0]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
