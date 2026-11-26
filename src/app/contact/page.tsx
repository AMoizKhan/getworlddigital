import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { Card, Container, Reveal, Section } from "@/components/ui";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Get World Digital — info@getworlddigital.com, +1 713 659 9748, interactive map, and project inquiry form.",
};

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps?cid=9007785866387238106&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF";

const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?cid=9007785866387238106&output=embed";

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-transparent py-16 sm:py-20">
        <Container>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dbe6ff] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#0d57b8]">
            <MessageSquare className="h-3.5 w-3.5" />
            Get In Touch
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-[#071a38] sm:text-5xl">
            Let&apos;s talk about your{" "}
            <span className="text-[#f57c00]">next project.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Reach us directly by email or phone, explore our location on Google
            Maps, or send a quick project brief below to book your consultation.
          </p>
        </Container>
      </section>

      <Section
        eyebrow="Direct Contact"
        title="Get in touch &"
        highlight="inquiry form."
        subtitle="Tell us what you want to automate or build and we'll respond with a tailored plan."
        tone="white"
      >
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Details Column */}
          <div className="space-y-4 lg:col-span-2">
            <Reveal delay={0}>
              <a href="mailto:info@getworlddigital.com" className="block">
                <Card className="flex items-start gap-4 rounded-2xl p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#dbe6ff] bg-white text-[#0d57b8] transition-all duration-300 group-hover:scale-110 group-hover:border-[#0d57b8] group-hover:bg-[#0d57b8] group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#071a38]">Email</p>
                    <p className="mt-0.5 break-all text-sm font-semibold text-[#0d57b8]">
                      info@getworlddigital.com
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      We respond within 24 hours
                    </p>
                  </div>
                </Card>
              </a>
            </Reveal>

            <Reveal delay={70}>
              <a href="tel:+17136599748" className="block">
                <Card className="flex items-start gap-4 rounded-2xl p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#dbe6ff] bg-white text-[#0d57b8] transition-all duration-300 group-hover:scale-110 group-hover:border-[#0d57b8] group-hover:bg-[#0d57b8] group-hover:text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#071a38]">Phone</p>
                    <p className="mt-0.5 text-sm font-semibold text-[#0d57b8]">
                      +1 713 659 9748
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Mon–Fri, 9:00 AM – 6:00 PM CST
                    </p>
                  </div>
                </Card>
              </a>
            </Reveal>

            <Reveal delay={140}>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="flex items-start gap-4 rounded-2xl p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#dbe6ff] bg-white text-[#0d57b8] transition-all duration-300 group-hover:scale-110 group-hover:border-[#0d57b8] group-hover:bg-[#0d57b8] group-hover:text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-[#071a38]">
                      Our Location
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-slate-700">
                      Get World Digital
                    </p>
                    <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#0d57b8]">
                      Open in Google Maps
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Card>
              </a>
            </Reveal>

            <Reveal delay={210}>
              <Card
                interactive={false}
                className="rounded-2xl border-slate-200/80 bg-white p-6"
              >
                <div className="flex items-center gap-2.5 text-sm font-bold text-[#071a38]">
                  <Clock className="h-4 w-4 text-[#0d57b8]" />
                  Fast Discovery Turnaround
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Every inquiry is reviewed directly by a senior automation
                  strategist so you receive actionable next steps—not an
                  automated script.
                </p>
              </Card>
            </Reveal>
          </div>

          {/* Inquiry Form Column */}
          <Reveal delay={100} className="lg:col-span-3">
            <Card interactive={false} className="rounded-3xl p-7 sm:p-8">
              <h2 className="text-xl font-bold text-[#071a38]">
                Send a Project Inquiry
              </h2>
              <p className="mt-1.5 text-sm text-slate-600">
                Share a few details and we&apos;ll follow up to schedule your
                free consultation.
              </p>
              <ContactForm />
            </Card>
          </Reveal>
        </div>

        {/* Integrated Interactive Google Map */}
        <Reveal delay={140}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-blue-900/[0.05]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-6 py-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eef3ff] text-[#0d57b8]">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#071a38]">
                    Find Get World Digital on Google Maps
                  </h3>
                  <p className="text-xs text-slate-500">
                    Interactive location map &amp; directions
                  </p>
                </div>
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#dbe6ff] bg-white px-4 py-2 text-xs font-semibold text-[#0d57b8] transition-colors hover:bg-[#eef3ff]"
              >
                Open Full Map
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="relative h-[360px] w-full sm:h-[420px]">
              <iframe
                title="Get World Digital Google Map Location"
                src={GOOGLE_MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
