import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
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
      subtitle="Real digital transformations and measurable client results across web, mobile, and CRM systems."
      tone="white"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((project, idx) => (
          <Reveal key={project.slug} delay={idx * 80}>
            <Card className="flex h-full flex-col overflow-hidden p-0">
              {/* Extracted project thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-100 bg-white">
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.client}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1533]/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#1d4ed8] shadow-sm backdrop-blur-sm">
                    {project.industry}
                  </span>
                </div>
                <Link
                  href="/portfolio"
                  aria-label={`View ${project.title}`}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#0b1533] opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-[#1f4fe0] hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                  {project.client}
                </p>

                <h3 className="mt-1.5 text-xl font-bold text-[#0b1533] transition-colors group-hover:text-[#1f4fe0]">
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
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={180}>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white px-6 py-5 shadow-xs sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#dbe6ff] bg-white text-[#1f4fe0]">
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
