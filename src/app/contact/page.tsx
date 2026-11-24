import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { Card, Container, Reveal, Section } from "@/components/ui";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact GetWorldDigital — location details and lead inquiry form.",
};

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    detail: "hello@getworlddigital.com",
    sub: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+1 (555) 010-2040",
    sub: "Mon–Fri, 9:00 AM – 6:00 PM",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "100 Digital Avenue, Suite 200",
    sub: "Business District",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-slate-100 bg-[linear-gradient(105deg,#ffffff_0%,#f7f9ff_50%,#edf2ff_100%)] py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#dbe7ff]/60 blur-3xl"
        />
        <Container>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e6eeff] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#1d4ed8]">
            <MessageSquare className="h-3.5 w-3.5" />
            Contact Us
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-[#0b1533] sm:text-5xl">
            Let&apos;s talk about your{" "}
            <span className="text-[#1f5bff]">next project.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Reach out directly or share a quick project brief below to book a
            consultation with our team.
          </p>
        </Container>
      </section>

      <Section
        eyebrow="Get in Touch"
        title="Contact details &"
        highlight="inquiry form."
        subtitle="Tell us what you are building and how we can help move it forward."
        tone="white"
      >
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {contactCards.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 70}>
                <Card className="flex items-start gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef3ff] text-[#1f4fe0] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1f4fe0] group-hover:text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0b1533]">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-slate-700">
                      {item.detail}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">{item.sub}</p>
                  </div>
                </Card>
              </Reveal>
            ))}

            <Reveal delay={220}>
              <Card
                interactive={false}
                className="border-[#dbe6ff] bg-[#f6f9ff] p-6"
              >
                <div className="flex items-center gap-2.5 text-sm font-bold text-[#0b1533]">
                  <Clock className="h-4 w-4 text-[#1f4fe0]" />
                  Fast Discovery Turnaround
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Every inquiry is reviewed directly by a senior strategist so
                  you receive thoughtful next steps—not an automated script.
                </p>
              </Card>
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:col-span-3">
            <Card interactive={false} className="p-7 sm:p-8">
              <h2 className="text-xl font-bold text-[#0b1533]">
                Send a Project Inquiry
              </h2>
              <p className="mt-1.5 text-sm text-slate-600">
                Share a few details and we&apos;ll follow up to schedule your
                consultation.
              </p>
              <ContactForm />
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
