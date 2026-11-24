import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(100deg,#ffffff_0%,#f7f9ff_45%,#edf2ff_100%)] font-sans">
      {/* Decorative background: soft diagonal blue bands (top-right) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-[18%] -top-[40%] h-[140%] w-[55%] -rotate-[32deg] bg-gradient-to-b from-[#dfe8ff] via-[#e9efff]/80 to-transparent" />
        <div className="absolute -right-[6%] -top-[35%] h-[120%] w-[22%] -rotate-[32deg] bg-gradient-to-b from-[#d3e0ff]/70 via-[#e3ebff]/50 to-transparent" />
        <div className="absolute -left-40 bottom-[-30%] h-[420px] w-[420px] rounded-full bg-[#eef3ff] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white/70" />
      </div>

      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* Copy */}
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full bg-[#e6eeff] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1d4ed8] sm:text-xs">
              Digital solutions that move business forward
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[#0b1533] sm:text-5xl lg:text-[3.4rem]">
              Technology that helps your business work smarter and{" "}
              <span className="text-[#1f5bff]">grow faster.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              We bring together intelligent automation, managed IT, digital
              marketing and custom digital experiences to help businesses
              operate with confidence.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1f4fe0] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-[#1a43c4]"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white py-2 pl-2 pr-6 text-sm font-semibold text-[#0b1533] transition hover:border-slate-400 hover:bg-slate-50"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0b1533]">
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                Talk to Our Team
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <Image
              src="/home/hero-laptop.png"
              alt="Laptop displaying the Get World Digital business dashboard"
              width={1376}
              height={768}
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full scale-110 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] lg:origin-left lg:scale-125"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
