"use client";

import { useState } from "react";
import { Code2, Compass, Palette, Rocket, Search } from "lucide-react";
import { Container, Reveal } from "@/components/ui";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "Understand your business goals, audience, constraints, and key success metrics.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Strategy",
    description:
      "Define clear scope, system architecture, milestones, and a practical delivery plan.",
  },
  {
    number: "03",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Craft intuitive user flows, interactive prototypes, and clean visual systems.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Development",
    description:
      "Engineer fast, scalable web, mobile, and CRM solutions in transparent sprints.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "Deploy smoothly, track performance, and optimize continuously for long-term growth.",
  },
];

export function Process() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-transparent py-20 sm:py-24"
    >
      <Container>
        {/* Minimal editorial header matching reference */}
        <Reveal>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Our Process
            </p>
            <div
              aria-hidden="true"
              className="mt-3 h-0.5 w-8 rounded-full bg-[#0d57b8]"
            />
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#071a38] sm:text-4xl lg:text-[2.75rem]">
              A smarter way
              <br />
              to <span className="text-[#f57c00]">move forward.</span>
            </h2>
          </div>
        </Reveal>

        {/* Minimal 5-step horizontal flow with oversized clipped numerals */}
        <Reveal delay={90}>
          <ol className="mt-14 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-5 lg:gap-x-6">
            {steps.map((step, idx) => {
              const isActive = activeIndex === idx;
              const Icon = step.icon;

              return (
                <li
                  key={step.number}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className="group relative flex cursor-pointer flex-col items-center text-center"
                >
                  {/* Oversized bottom-clipped numeral */}
                  <div className="relative flex h-[62px] w-full items-start justify-center overflow-hidden sm:h-[70px]">
                    <span
                      className={`select-none text-[5.5rem] font-black leading-[0.82] tracking-tighter tabular-nums transition-all duration-500 ease-out sm:text-[6.25rem] ${
                        isActive
                          ? "-translate-y-1 text-[#0d57b8]"
                          : "translate-y-2 text-slate-300/90 group-hover:translate-y-0 group-hover:text-[#0d57b8]/80"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Thin animated progress baseline connecting the step flow */}
                  <div className="relative mt-1 h-[2px] w-full bg-slate-200/70">
                    <span
                      aria-hidden="true"
                      className={`absolute inset-y-0 left-1/2 h-full -translate-x-1/2 rounded-full bg-[#f57c00] transition-all duration-500 ease-out ${
                        isActive ? "w-16 opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </div>

                  {/* Step icon + title + concise description */}
                  <div className="mt-5 flex flex-col items-center px-2">
                    <div className="flex items-center gap-1.5">
                      <Icon
                        className={`h-4 w-4 transition-colors duration-300 ${
                          isActive
                            ? "text-[#f57c00]"
                            : "text-slate-400 group-hover:text-[#f57c00]"
                        }`}
                      />
                      <h3
                        className={`text-base font-bold transition-colors duration-300 ${
                          isActive
                            ? "text-[#0d57b8]"
                            : "text-[#071a38] group-hover:text-[#0d57b8]"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-2.5 max-w-[220px] text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
