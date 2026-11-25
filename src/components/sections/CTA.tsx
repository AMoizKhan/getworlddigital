"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { Button, Container, Reveal } from "@/components/ui";
import { services } from "@/data/services";

const perks = [
  "Scoped proposal & clear timeline within 24h",
  "Dedicated senior design & engineering pod",
  "No-obligation strategy discovery call",
];

export function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setService("");
    setSubmitted(false);
  };

  const inputClasses =
    "w-full rounded-xl border border-slate-200/90 bg-white px-4 py-2.5 text-sm text-[#0b1533] placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#1f4fe0] focus:ring-4 focus:ring-[#1f4fe0]/10";

  return (
    <section id="contact-banner" className="bg-transparent py-18 sm:py-22">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-[#dbe6ff]/90 bg-white shadow-2xl shadow-blue-900/[0.08]">
            {/* Crisp HD vector wave banner background */}
            <Image
              src="/home/cta-banner-hd.svg"
              alt=""
              fill
              unoptimized
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="-z-10 object-cover object-right"
            />
            {/* Crisp left-to-right readability veil so left copy stays razor sharp while right blue waves pop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-white/90 via-white/60 to-transparent"
            />

            <div className="grid items-center gap-10 p-7 sm:p-11 lg:grid-cols-12 lg:gap-12 lg:p-14">
              {/* Left side: Value prop & direct contact */}
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c9dbff] bg-white/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#1d4ed8] shadow-xs backdrop-blur-xs">
                  <Calendar className="h-3.5 w-3.5" />
                  Start Your Next Project
                </span>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0b1533] sm:text-4xl lg:text-[2.6rem]">
                  Let&apos;s build something that helps your business{" "}
                  <span className="text-[#1f5bff]">grow faster.</span>
                </h2>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                  Tell us about your goals and our senior team will prepare a
                  tailored roadmap with deliverables, timeline, and transparent
                  investment.
                </p>

                <ul className="mt-6 space-y-2.5 text-sm font-medium text-[#0b1533]">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1f4fe0]" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-slate-200/70 pt-6 text-sm">
                  <a
                    href="mailto:hello@getworlddigital.com"
                    className="group inline-flex items-center gap-2 font-semibold text-[#0b1533] transition-colors hover:text-[#1f4fe0]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e6eeff] text-[#1f4fe0] transition-colors group-hover:bg-[#1f4fe0] group-hover:text-white">
                      <Mail className="h-4 w-4" />
                    </span>
                    hello@getworlddigital.com
                  </a>
                  <a
                    href="tel:+15550102040"
                    className="group inline-flex items-center gap-2 font-semibold text-[#0b1533] transition-colors hover:text-[#1f4fe0]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e6eeff] text-[#1f4fe0] transition-colors group-hover:bg-[#1f4fe0] group-hover:text-white">
                      <Phone className="h-4 w-4" />
                    </span>
                    +1 (555) 010-2040
                  </a>
                </div>
              </div>

              {/* Right side: Working Quick Consultation Form Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/90 bg-white/95 p-6 shadow-xl shadow-blue-900/10 backdrop-blur-md sm:p-7">
                  {submitted ? (
                    <div className="flex flex-col items-center py-6 text-center">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f4fe0] text-white shadow-md shadow-blue-600/25">
                        <CheckCircle2 className="h-7 w-7" />
                      </div>
                      <h3 className="text-lg font-bold text-[#0b1533]">
                        Consultation Requested!
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        Thanks{name ? `, ${name}` : ""}! We&apos;ve received
                        your request and will reach out to{" "}
                        <span className="font-semibold text-[#0b1533]">
                          {email}
                        </span>{" "}
                        within one business day.
                      </p>
                      <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                        <Button
                          variant="secondary"
                          onClick={handleReset}
                          className="px-4 py-2 text-xs"
                        >
                          Send Another
                        </Button>
                        <Button
                          href="/contact"
                          variant="primary"
                          className="px-4 py-2 text-xs"
                        >
                          Full Project Brief
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-lg font-bold text-[#0b1533]">
                        Book a Free Consultation
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        Quick inquiry — takes less than 30 seconds.
                      </p>

                      <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                        <div>
                          <label htmlFor="cta-name" className="sr-only">
                            Your Name
                          </label>
                          <input
                            id="cta-name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your full name"
                            className={inputClasses}
                          />
                        </div>

                        <div>
                          <label htmlFor="cta-email" className="sr-only">
                            Work Email
                          </label>
                          <input
                            id="cta-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Work email address"
                            className={inputClasses}
                          />
                        </div>

                        <div>
                          <label htmlFor="cta-service" className="sr-only">
                            Service Needed
                          </label>
                          <select
                            id="cta-service"
                            required
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className={inputClasses}
                          >
                            <option value="" disabled>
                              What do you need help with?
                            </option>
                            {services.map((item) => (
                              <option key={item.slug} value={item.slug}>
                                {item.title}
                              </option>
                            ))}
                            <option value="custom">Custom Project / Other</option>
                          </select>
                        </div>

                        <Button type="submit" className="w-full py-3">
                          Request Consultation
                          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Button>
                      </form>

                      <p className="mt-4 text-center text-xs text-slate-500">
                        Have detailed requirements?{" "}
                        <Link
                          href="/contact"
                          className="font-semibold text-[#1f4fe0] hover:underline"
                        >
                          Open full contact page
                        </Link>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
