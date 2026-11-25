"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Card } from "@/components/ui";
import { industries, projects } from "@/data/projects";

export function PortfolioGrid() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const filteredProjects =
    selectedIndustry === "All"
      ? projects
      : projects.filter((project) => project.industry === selectedIndustry);

  const availableIndustries = industries.filter((ind) =>
    projects.some((project) => project.industry === ind)
  );

  return (
    <div className="space-y-10">
      {/* Interactive filter pills */}
      <div className="flex flex-wrap items-center gap-2.5">
        {["All", ...availableIndustries].map((industry) => {
          const active = selectedIndustry === industry;
          return (
            <button
              key={industry}
              type="button"
              onClick={() => setSelectedIndustry(industry)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                active
                  ? "bg-[#1f4fe0] text-white shadow-md shadow-blue-600/25"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-[#1f4fe0]/40 hover:bg-[#f5f8ff] hover:text-[#1f4fe0]"
              }`}
            >
              {industry}
            </button>
          );
        })}
      </div>

      {/* Case studies grid with clean extracted thumbnails */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card
            key={project.slug}
            className="flex h-full flex-col overflow-hidden p-0"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-100 bg-white">
              <Image
                src={project.image}
                alt={`${project.title} — ${project.client}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1533]/18 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#1d4ed8] shadow-sm backdrop-blur-sm">
                  {project.industry}
                </span>
                {project.featured ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#1f4fe0] px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                    <Sparkles className="h-3 w-3" />
                    Featured
                  </span>
                ) : null}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                {project.client}
              </p>

              <h2 className="mt-1.5 text-xl font-bold text-[#0b1533] transition-colors group-hover:text-[#1f4fe0]">
                {project.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {project.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-lg border border-slate-200/80 bg-white px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
                  Key Results
                </p>
                <ul className="mt-2.5 space-y-1.5">
                  {project.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-start gap-2 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1f4fe0]" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
