"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { Button, Container, Reveal, ServiceSelect, useToast } from "@/components/ui";

const perks = [
  "Scoped proposal & clear timeline within 24h",
  "Dedicated senior AI & engineering pod",
  "No-obligation strategy discovery call",
];

type BannerErrors = {
  name?: string;
  email?: string;
  service?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function CTA() {
  const toast = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<BannerErrors>({});

  const validate = (): BannerErrors => {
    const next: BannerErrors = {};
    if (name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }
    if (!EMAIL_RE.test(email.trim())) {
      next.email = "Please enter a valid work email.";
    }
    if (!service) {
      next.service = "Please choose a service.";
    }
    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErr = Object.values(validationErrors)[0];
      toast.warning("Please complete the form", firstErr);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          service,
          source: "home-banner",
        }),
      });

      const data = (await res.json()) as {
        ok: boolean;
        message?: string;
        error?: string;
        fieldErrors?: BannerErrors;
      };

      if (!res.ok || !data.ok) {
        if (data.fieldErrors) {
          setErrors(data.fieldErrors);
          toast.warning(
            "Validation Error",
            Object.values(data.fieldErrors)[0] ?? data.error
          );
        } else {
          toast.error(
            "Request Failed",
            data.error ?? "Unable to submit right now. Please try again."
          );
        }
        return;
      }

      setSubmitted(true);
      toast.success(
        "Consultation Requested!",
        `Thanks ${name.trim()}! We'll reach out to ${email.trim()} shortly.`
      );
    } catch {
      toast.error(
        "Network Error",
        "Could not submit your request. Please call +1 713 659 9748 or try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setService("");
    setErrors({});
    setSubmitted(false);
  };

  const getInputClasses = (hasError?: string) =>
    `w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-[#071a38] placeholder:text-slate-400 outline-none transition-all duration-200 ${
      hasError
        ? "border-rose-400 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10"
        : "border-slate-200/90 focus:border-[#0d57b8] focus:ring-4 focus:ring-[#0d57b8]/10"
    }`;

  return (
    <section id="contact-banner" className="bg-transparent py-18 sm:py-22">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-[#dbe6ff]/90 bg-white shadow-2xl shadow-blue-900/[0.08]">
            {/* Crisp HD vector wave banner background */}
            <Image
              src="/home/cta-banner-theme.svg"
              alt=""
              fill
              unoptimized
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="-z-10 object-cover object-right"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-white/90 via-white/60 to-transparent"
            />

            <div className="grid items-center gap-10 p-7 sm:p-11 lg:grid-cols-12 lg:gap-12 lg:p-14">
              {/* Left side: Value prop & direct contact */}
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c9dbff] bg-white/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#0d57b8] shadow-xs backdrop-blur-xs">
                  <Calendar className="h-3.5 w-3.5" />
                  Get In Touch
                </span>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071a38] sm:text-4xl lg:text-[2.6rem]">
                  Let&apos;s build something that helps your business{" "}
                  <span className="text-[#f57c00]">grow faster.</span>
                </h2>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                  Tell us about your goals and our senior team will prepare a
                  tailored roadmap with deliverables, timeline, and transparent
                  investment.
                </p>

                <ul className="mt-6 space-y-2.5 text-sm font-medium text-[#071a38]">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0d57b8]" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-slate-200/70 pt-6 text-sm">
                  <a
                    href="mailto:info@getworlddigital.com"
                    className="group inline-flex items-center gap-2 font-semibold text-[#071a38] transition-colors hover:text-[#0d57b8]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e6eeff] text-[#0d57b8] transition-colors group-hover:bg-[#0d57b8] group-hover:text-white">
                      <Mail className="h-4 w-4" />
                    </span>
                    info@getworlddigital.com
                  </a>
                  <a
                    href="tel:+17136599748"
                    className="group inline-flex items-center gap-2 font-semibold text-[#071a38] transition-colors hover:text-[#0d57b8]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e6eeff] text-[#0d57b8] transition-colors group-hover:bg-[#0d57b8] group-hover:text-white">
                      <Phone className="h-4 w-4" />
                    </span>
                    +1 713 659 9748
                  </a>
                </div>
              </div>

              {/* Right side: Working Quick Consultation Form Card with Toast Validation */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/90 bg-white/95 p-6 shadow-xl shadow-blue-900/10 backdrop-blur-md sm:p-7">
                  {submitted ? (
                    <div className="flex flex-col items-center py-6 text-center">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md shadow-emerald-500/25">
                        <CheckCircle2 className="h-7 w-7" />
                      </div>
                      <h3 className="text-lg font-bold text-[#071a38]">
                        Consultation Requested!
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        Thanks{name ? `, ${name}` : ""}! We&apos;ve received
                        your request and will reach out to{" "}
                        <span className="font-semibold text-[#071a38]">
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
                      <h3 className="text-lg font-bold text-[#071a38]">
                        Book a Free Consultation
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        Quick inquiry — takes less than 30 seconds.
                      </p>

                      <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="mt-5 space-y-3.5"
                      >
                        <div>
                          <label htmlFor="cta-name" className="sr-only">
                            Your Name
                          </label>
                          <input
                            id="cta-name"
                            type="text"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                              if (errors.name)
                                setErrors((p) => ({ ...p, name: undefined }));
                            }}
                            placeholder="Your full name"
                            aria-invalid={Boolean(errors.name)}
                            className={getInputClasses(errors.name)}
                          />
                          {errors.name ? (
                            <p className="mt-1 text-xs font-medium text-rose-600">
                              {errors.name}
                            </p>
                          ) : null}
                        </div>

                        <div>
                          <label htmlFor="cta-email" className="sr-only">
                            Work Email
                          </label>
                          <input
                            id="cta-email"
                            type="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              if (errors.email)
                                setErrors((p) => ({ ...p, email: undefined }));
                            }}
                            placeholder="Work email address"
                            aria-invalid={Boolean(errors.email)}
                            className={getInputClasses(errors.email)}
                          />
                          {errors.email ? (
                            <p className="mt-1 text-xs font-medium text-rose-600">
                              {errors.email}
                            </p>
                          ) : null}
                        </div>

                        <div>
                          <label htmlFor="cta-service" className="sr-only">
                            Service Needed
                          </label>
                          <ServiceSelect
                            id="cta-service"
                            value={service}
                            onChange={(val) => {
                              setService(val);
                              if (errors.service)
                                setErrors((p) => ({
                                  ...p,
                                  service: undefined,
                                }));
                            }}
                            placeholder="What do you need help with?"
                            otherLabel="Custom Project / Other"
                            otherValue="custom"
                            hasError={Boolean(errors.service)}
                          />
                          {errors.service ? (
                            <p className="mt-1 text-xs font-medium text-rose-600">
                              {errors.service}
                            </p>
                          ) : null}
                        </div>

                        <Button
                          type="submit"
                          className={`w-full py-3 ${
                            submitting ? "pointer-events-none opacity-80" : ""
                          }`}
                        >
                          {submitting ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Request Consultation
                              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </>
                          )}
                        </Button>
                      </form>

                      <p className="mt-4 text-center text-xs text-slate-500">
                        Have detailed requirements?{" "}
                        <Link
                          href="/contact"
                          className="font-semibold text-[#0d57b8] hover:underline"
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
