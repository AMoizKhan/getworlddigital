import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, Card, Reveal, Section, ServiceIcon } from "@/components/ui";
import { services } from "@/data/services";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Our Services"
      title="Solutions built around"
      highlight="your business."
      subtitle="From strategy to execution, we deliver modern digital solutions that create real, measurable impact."
      align="center"
      tone="white"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <Reveal key={service.slug} delay={idx * 70}>
            <Card className="flex h-full flex-col p-7">
              {/* Animated top highlight bar */}
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#1f4fe0] to-[#3b82f6] transition-transform duration-300 ease-out group-hover:scale-x-100" />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3ff] text-[#1f4fe0] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1f4fe0] group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/25">
                <ServiceIcon slug={service.slug} className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-bold text-[#0b1533] transition-colors duration-200 group-hover:text-[#1f4fe0]">
                {service.title}
              </h3>

              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                {service.shortDescription}
              </p>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1f4fe0] transition-colors hover:text-[#1a43c4]"
                >
                  Explore service
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-10 flex justify-center">
          <Button href="/services" variant="secondary">
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
