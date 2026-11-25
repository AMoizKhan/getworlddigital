import Image from "next/image";
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
      subtitle="From strategy to execution, we deliver modern web, mobile, CRM, and growth solutions that create real impact."
      align="center"
      tone="white"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <Reveal key={service.slug} delay={idx * 70}>
            <Card className="flex h-full flex-col overflow-hidden p-0">
              {/* Thumbnail header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-100 bg-white">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1533]/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-white/95 text-[#1f4fe0] shadow-md shadow-blue-900/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#1f4fe0] group-hover:bg-[#1f4fe0] group-hover:text-white">
                  <ServiceIcon slug={service.slug} className="h-5 w-5" />
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-[#0b1533] transition-colors duration-200 group-hover:text-[#1f4fe0]">
                  {service.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.shortDescription}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1f4fe0] transition-colors hover:text-[#1a43c4]"
                  >
                    Explore service
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
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
