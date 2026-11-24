"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Reveal, Section } from "@/components/ui";
import { faqs } from "@/data/testimonials";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Frequently asked"
      highlight="questions."
      subtitle="Clear answers about our services, timelines, and how we partner with your team."
      align="center"
      tone="tinted"
    >
      <div className="mx-auto max-w-3xl space-y-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openId === faq.id;
          return (
            <Reveal key={faq.id} delay={idx * 55}>
              <div
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#1f4fe0]/40 shadow-lg shadow-blue-600/[0.06]"
                    : "border-slate-200/80 shadow-xs hover:border-[#1f4fe0]/25"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="flex items-center gap-3 text-base font-semibold text-[#0b1533]">
                    <HelpCircle
                      className={`h-5 w-5 shrink-0 transition-colors duration-200 ${
                        isOpen ? "text-[#1f4fe0]" : "text-slate-400"
                      }`}
                    />
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#1f4fe0] text-white"
                        : "bg-[#eef3ff] text-[#1f4fe0]"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-6 pb-5 pt-4 pl-14 text-sm leading-relaxed text-slate-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
