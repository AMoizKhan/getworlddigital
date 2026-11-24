import { ChevronRight, Code2, Compass, Rocket, Search } from "lucide-react";
import { Card, Reveal, Section } from "@/components/ui";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Discovery",
    description:
      "Understand your goals, audience, constraints, and success metrics.",
  },
  {
    number: "2",
    icon: Compass,
    title: "Strategy",
    description:
      "Define clear scope, system architecture, timeline, and delivery plan.",
  },
  {
    number: "3",
    icon: Code2,
    title: "Design & Build",
    description:
      "Iterate on UX, visual craft, and engineering in transparent sprints.",
  },
  {
    number: "4",
    icon: Rocket,
    title: "Delivery",
    description:
      "Launch smoothly, measure results, and scale for long-term growth.",
  },
];

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="Our Process"
      title="A smarter way to"
      highlight="move forward."
      subtitle="A simple, transparent execution workflow to turn your ideas into reliable digital products."
      tone="tinted"
    >
      <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((item, idx) => (
          <Reveal key={item.number} delay={idx * 80} className="relative">
            <li className="h-full list-none">
              <Card className="flex h-full flex-col p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f4fe0] text-sm font-bold text-white shadow-md shadow-blue-600/25 transition-transform duration-300 group-hover:scale-110">
                    {item.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef3ff] text-[#1f4fe0] transition-colors duration-300 group-hover:bg-[#e0ebff]">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0b1533] transition-colors group-hover:text-[#1f4fe0]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </Card>
            </li>

            {idx < steps.length - 1 ? (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1f4fe0] shadow-xs lg:flex"
              >
                <ChevronRight className="h-4 w-4" />
              </span>
            ) : null}
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
