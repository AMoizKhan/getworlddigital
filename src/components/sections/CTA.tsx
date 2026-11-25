import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Button, Container, Reveal } from "@/components/ui";

const perks = [
  "Scoped proposal & clear timeline",
  "Dedicated senior product team",
  "No-obligation discovery call",
];

export function CTA() {
  return (
    <section className="border-b border-slate-100 bg-white py-18 sm:py-22">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 text-center shadow-xl shadow-slate-900/[0.04] sm:p-14">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dbe6ff] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#1d4ed8]">
              <Calendar className="h-3.5 w-3.5" />
              Start Your Next Project
            </span>

            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-[#0b1533] sm:text-4xl">
              Ready to build something that helps your business{" "}
              <span className="text-[#1f5bff]">grow faster?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Tell us about your goals and we&apos;ll prepare a clear roadmap
              with deliverables, timeline, and transparent investment.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <Button href="/contact" variant="primary">
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="/portfolio" variant="secondary">
                See Our Work
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600 sm:text-sm">
              {perks.map((perk) => (
                <li key={perk} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#1f4fe0]" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
