"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

type FAQEntry = {
  question: string;
  answer: string;
};

export function AccordionList({ items }: { items: FAQEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3.5">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
              isOpen
                ? "border-[#0d57b8]/40 shadow-lg shadow-blue-600/[0.06]"
                : "border-slate-200/80 shadow-xs hover:border-[#0d57b8]/25"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="flex items-center gap-3 text-base font-semibold text-[#071a38]">
                <HelpCircle
                  className={`h-5 w-5 shrink-0 transition-colors duration-200 ${
                    isOpen ? "text-[#0d57b8]" : "text-slate-400"
                  }`}
                />
                {item.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 bg-[#0d57b8] text-white"
                    : "bg-[#eef3ff] text-[#0d57b8]"
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
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
