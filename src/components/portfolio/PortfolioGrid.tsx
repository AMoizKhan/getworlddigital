"use client";

import { useState } from "react";
import { CheckCircle2, ImagePlus, Sparkles } from "lucide-react";
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

      {/* Case studies grid — NO generated images, clean upload-ready frames */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card key={project.slug} className="flex h-full flex-col p-6">
            <div className="relative mb-5 flex aspect-[16/9] w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-[#c5d7fb] bg-[radial-gradient(#dbe7ff_1px,transparent_1px)] bg-[#f7faff] [background-size:18px_18px] p-6 text-center transition-colors duration-300 group-hover:border-[#1f4fe0]/60 group-hover:bg-[#f0f5ff]">
              <div className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#1f4fe0] shadow-sm shadow-blue-900/5 transition-transform duration-300 group-hover:scale-110">
                <ImagePlus className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0b1533]">
                {project.client} · Case Study Media
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Ready for your uploaded project image
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-[#e6eeff] px-3 py-0.5 text-xs font-semibold text-[#1d4ed8]">
                {project.industry}
              </span>
              <span className="text-xs font-medium text-slate-500">
                {project.client}
              </span>
              {project.featured ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#eef3ff] px-2.5 py-0.5 text-xs font-semibold text-[#1f4fe0]">
                  <Sparkles className="h-3 w-3" />
                  Featured
                </span>
              ) : null}
            </div>

            <h2 className="mt-3 text-xl font-bold text-[#0b1533] transition-colors group-hover:text-[#1f4fe0]">
              {project.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {project.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="rounded-lg border border-slate-200/80 bg-[#f8faff] px-2.5 py-1 text-xs font-medium text-slate-700"
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
          </Card>
        ))}
      </div>
    </div>
  );
}
