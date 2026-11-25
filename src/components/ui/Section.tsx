import { type ReactNode } from "react";
import { Container } from "./Container";

type SectionTone = "white" | "tinted" | "gradient";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: SectionTone;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "left",
  children,
  className = "",
}: SectionProps) {
  const isCentered = align === "center";

  return (
    <section
      id={id}
      className={`relative bg-transparent py-18 sm:py-22 ${className}`}
    >
      <Container>
        <div
          className={`mb-12 ${
            isCentered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"
          }`}
        >
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full border border-[#dbe6ff] bg-white px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#1d4ed8]">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0b1533] sm:text-4xl">
            {title}{" "}
            {highlight ? (
              <span className="text-[#1f5bff]">{highlight}</span>
            ) : null}
          </h2>
          {subtitle ? (
            <p className="mt-3.5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
