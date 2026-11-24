import Link from "next/link";
import { ArrowRight, CheckCircle2, ImagePlus, Sparkles } from "lucide-react";
import { Button, Card, Reveal, Section } from "@/components/ui";
import { getFeaturedProjects } from "@/data/projects";

export function Portfolio() {
  const featured = getFeaturedProjects();

  return (
    <Section
      id="portfolio"
      eyebrow="Selected Work"
      title="Featured"
      highlight="case studies."
      subtitle="Real digital transformations and measurable client results across industries."
      tone="white"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((project, idx) => (
          <Reveal key={project.slug} delay={idx * 80}>
            <Card className="flex h-full flex-col p-6">
              {/* Upload-ready visual frame — kept empty for your own project image */}
              <div className="relative mb-5 flex aspect-[16/9] w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-[#c5d7fb] bg-[radial-gradient(#dbe7ff_1px,transparent_1px)] bg-[#f7faff] [background-size:18px_18px] p-6 text-center transition-colors duration-300 group-hover:border-[#1f4fe0]/60 group-hover:bg-[#f0f5ff]">
                <div className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#1f4fe0] shadow-sm shadow-blue-900/5 transition-transform duration-300 group-hover:scale-110">
                  <ImagePlus className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0b1533]">
                  {project.client} · Project Media
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Ready for your uploaded project screenshot
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-[#e6eeff] px-3 py-0.5 text-xs font-semibold text-[#1d4ed8]">
                  {project.industry}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {project.client}
                </span>
              </div>

              <h3 className="mt-3 text-xl font-bold text-[#0b1533] transition-colors group-hover:text-[#1f4fe0]">
                {project.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {project.summary}
              </p>

              <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                {project.results.slice(0, 2).map((result) => (
                  <li
                    key={result}
                    className="flex items-start gap-2 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1f4fe0]" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={180}>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200/80 bg-[#f6f9ff] px-6 py-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e6eeff] text-[#1f4fe0]">
              <Sparkles className="h-4 w-4" />
            </span>
            <p>
              Looking for a specific industry?{" "}
              <Link
                href="/portfolio"
                className="font-semibold text-[#1f4fe0] hover:underline"
              >
                Browse the full portfolio
              </Link>
              .
            </p>
          </div>
          <Button href="/portfolio" variant="primary" className="py-2.5">
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
