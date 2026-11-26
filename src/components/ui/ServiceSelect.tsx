"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { ServiceIcon } from "./ServiceIcon";

type ServiceSelectProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  otherLabel?: string;
  otherValue?: string;
  hasError?: boolean;
};

export function ServiceSelect({
  id,
  value,
  onChange,
  placeholder = "Select a service",
  otherLabel = "Other / Custom Solution",
  otherValue = "other",
  hasError = false,
}: ServiceSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const selectedService = services.find((item) => item.slug === value);
  const isOtherSelected = value === otherValue;

  const displayLabel = selectedService
    ? selectedService.title
    : isOtherSelected
      ? otherLabel
      : placeholder;

  const selectOption = (nextVal: string) => {
    onChange(nextVal);
    setOpen(false);
  };

  const listboxId = `${id ?? "service"}-listbox`;

  return (
    <div ref={containerRef} className="relative">
      <button
        id={id}
        type="button"
        role="combobox"
        aria-controls={listboxId}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-invalid={hasError}
        onClick={() => setOpen((prev) => !prev)}
        className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border bg-white px-4 py-2.5 text-left text-sm outline-none transition-all duration-200 ${
          hasError
            ? "border-rose-400 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10"
            : open
              ? "border-[#0d57b8] ring-4 ring-[#0d57b8]/12"
              : "border-slate-200 hover:border-[#0d57b8]/50 focus:border-[#0d57b8] focus:ring-4 focus:ring-[#0d57b8]/12"
        }`}
      >
        <span className="flex min-w-0 items-center gap-2.5">
          {selectedService ? (
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#eef5ff] text-[#0d57b8]">
              <ServiceIcon slug={selectedService.slug} className="h-3.5 w-3.5" />
            </span>
          ) : isOtherSelected ? (
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#fff3e0] text-[#f57c00]">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
          ) : null}
          <span
            className={`truncate ${
              selectedService || isOtherSelected
                ? "font-medium text-[#071a38]"
                : "text-slate-400"
            }`}
          >
            {displayLabel}
          </span>
        </span>

        <ChevronDown
          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
            open ? "rotate-180 text-[#0d57b8]" : ""
          }`}
        />
      </button>

      {open ? (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-2 max-h-64 overflow-y-auto rounded-2xl border border-slate-200/90 bg-white p-1.5 shadow-2xl shadow-[#071a38]/12"
        >
          {services.map((item) => {
            const active = value === item.slug;
            return (
              <li key={item.slug} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => selectOption(item.slug)}
                  className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors duration-150 ${
                    active
                      ? "bg-[#eef5ff] font-semibold text-[#0d57b8]"
                      : "text-[#071a38] hover:bg-[#f5f9ff]"
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                        active
                          ? "border-[#0d57b8] bg-[#0d57b8] text-white"
                          : "border-[#d8e6fb] bg-white text-[#0d57b8]"
                      }`}
                    >
                      <ServiceIcon slug={item.slug} className="h-3.5 w-3.5" />
                    </span>
                    <span className="truncate">{item.title}</span>
                  </span>
                  {active ? (
                    <Check className="h-4 w-4 shrink-0 text-[#f57c00]" />
                  ) : null}
                </button>
              </li>
            );
          })}

          <li
            role="option"
            aria-selected={isOtherSelected}
            className="mt-1 border-t border-slate-100 pt-1"
          >
            <button
              type="button"
              onClick={() => selectOption(otherValue)}
              className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors duration-150 ${
                isOtherSelected
                  ? "bg-[#fff4e6] font-semibold text-[#e06d00]"
                  : "text-[#071a38] hover:bg-[#fff8f0]"
              }`}
            >
              <span className="flex min-w-0 items-center gap-2.5">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                    isOtherSelected
                      ? "border-[#f57c00] bg-[#f57c00] text-white"
                      : "border-[#ffdcb3] bg-white text-[#f57c00]"
                  }`}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <span className="truncate">{otherLabel}</span>
              </span>
              {isOtherSelected ? (
                <Check className="h-4 w-4 shrink-0 text-[#f57c00]" />
              ) : null}
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
