import Image from "next/image";
import { BarChart3, LayoutDashboard, Target, Users } from "lucide-react";
import { Card, Reveal, Section } from "@/components/ui";

const usps = [
  {
    icon: Target,
    title: "Strategy-First Delivery",
    description:
      "Every build starts with clear goals, success metrics, and a practical roadmap.",
  },
  {
    icon: Users,
    title: "Cross-Disciplinary Team",
    description:
      "Designers, engineers, and marketers collaborate in one accountable pod.",
  },
  {
    icon: LayoutDashboard,
    title: "Transparent Process",
    description:
      "Weekly demos, shared boards, and no surprises on scope or timeline.",
  },
  {
    icon: BarChart3,
    title: "Outcomes Over Outputs",
    description:
      "We optimize for conversions, retention, and ROI—not just shippable screens.",
  },
];

export function WhyChooseUs() {
  return (
    <Section
      id="why-choose-us"
      eyebrow="Why Choose Us"
      title="A partner focused on"
      highlight="real outcomes."
      subtitle="We combine senior execution with full transparency so every milestone translates into business momentum."
      tone="tinted"
    >
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* USP cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {usps.map((usp, idx) => (
            <Reveal key={usp.title} delay={idx * 75}>
              <Card className="flex h-full flex-col p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef3ff] text-[#1f4fe0] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1f4fe0] group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/20">
                  <usp.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#0b1533] transition-colors group-hover:text-[#1f4fe0]">
                  {usp.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {usp.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Visual column */}
        <Reveal delay={160} className="lg:col-span-5">
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-lg shadow-blue-900/[0.05] transition-all duration-500 hover:shadow-xl hover:shadow-blue-600/10">
            <div className="overflow-hidden rounded-2xl bg-white">
              <Image
                src="/home/why-choose-us.svg"
                alt="Outcome-driven roadmap and client impact dashboard"
                width={760}
                height={560}
                className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
