import Image from "next/image";
import { type CSSProperties } from "react";
import { ArrowRight, Star } from "lucide-react";
import { Button, Container, Reveal } from "@/components/ui";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-transparent py-18 sm:py-22"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-[#dbe6ff] bg-white px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#1d4ed8]">
              Client Stories
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0b1533] sm:text-4xl lg:text-[2.6rem]">
              What Our <span className="text-[#1f5bff]">Clients</span> Say
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Real stories from real partners. Our clients share their
              experiences and how our digital solutions made a measurable impact
              on their growth.
            </p>
          </div>
        </Reveal>
      </Container>

      {/* Continuous Slow Smooth Horizontal Marquee */}
      <div className="relative mt-12 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div
          style={{ "--marquee-duration": "56s" } as CSSProperties}
          className="animate-marquee-slow"
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[330px] shrink-0 pr-6 sm:w-[390px]"
            >
              <article className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-lg shadow-blue-900/[0.04] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#1f4fe0]/35 hover:shadow-xl hover:shadow-blue-600/10">
                <div>
                  {/* Signature blue double quote + star rating */}
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      aria-hidden="true"
                      className="select-none font-serif text-5xl font-bold leading-none text-[#7ba4f7] transition-colors duration-300 group-hover:text-[#1f4fe0]"
                    >
                      &ldquo;
                    </span>
                    <div
                      className="flex gap-1"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {Array.from({ length: item.rating }).map((_, sIdx) => (
                        <Star
                          key={`${item.id}-${idx}-s-${sIdx}`}
                          className="h-4 w-4 fill-[#1f5bff] text-[#1f5bff]"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Client human portrait & meta */}
                <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-5">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-[#dbe6ff] transition-transform duration-300 group-hover:scale-105 group-hover:ring-[#1f4fe0]/50">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-[#0b1533]">
                      {item.name}
                    </p>
                    <p className="truncate text-xs font-medium text-slate-500">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <Container>
        <Reveal delay={120}>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="primary">
              Start Your Success Story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
