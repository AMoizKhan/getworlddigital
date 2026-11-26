import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Cpu,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { Reveal, Section } from "@/components/ui";

type IndustryItem = {
  code: string;
  name: string;
  image: string;
  icon: LucideIcon;
  description: string;
  tag: string;
};

const industryList: IndustryItem[] = [
  {
    code: "01",
    name: "Retail",
    image: "/industries/retail.webp",
    icon: ShoppingBag,
    description:
      "Omnichannel storefronts, checkout optimization, and smart inventory systems.",
    tag: "E-Commerce & POS",
  },
  {
    code: "02",
    name: "Finance",
    image: "/industries/finance.webp",
    icon: Landmark,
    description:
      "Secure fintech apps, payment portals, and real-time portfolio analytics.",
    tag: "Fintech & Advisory",
  },
  {
    code: "03",
    name: "Healthcare",
    image: "/industries/healthcare.webp",
    icon: HeartPulse,
    description:
      "Accessible patient portals, digital intake flows, and telehealth platforms.",
    tag: "Care & Portals",
  },
  {
    code: "04",
    name: "Technology",
    image: "/industries/technology.webp",
    icon: Cpu,
    description:
      "High-converting SaaS web apps, developer portals, and scalable cloud APIs.",
    tag: "SaaS & Cloud",
  },
  {
    code: "05",
    name: "Hospitality",
    image: "/industries/hospitality.webp",
    icon: Hotel,
    description:
      "Direct booking experiences, guest mobile apps, and multi-property brands.",
    tag: "Booking & Brand",
  },
  {
    code: "06",
    name: "Education",
    image: "/industries/education.webp",
    icon: GraduationCap,
    description:
      "Interactive learning platforms, course portals, and enrollment funnels.",
    tag: "EdTech & LMS",
  },
  {
    code: "07",
    name: "Manufacturing",
    image: "/industries/manufacturing.webp",
    icon: Factory,
    description:
      "Operations CRM dashboards, dealer portals, and supply-chain automation.",
    tag: "Operations & CRM",
  },
  {
    code: "08",
    name: "Real Estate",
    image: "/industries/real-estate.webp",
    icon: Building2,
    description:
      "Property discovery platforms, lead capture systems, and virtual showcases.",
    tag: "Listings & Leads",
  },
];

export function Industries() {
  return (
    <Section
      id="industries"
      eyebrow="Industries"
      title="Sectors we help"
      highlight="modernize."
      subtitle="Tailored digital products, workflows, and growth systems crafted for the unique demands of your industry."
      align="center"
      tone="white"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {industryList.map((industry, idx) => {
          const Icon = industry.icon;
          return (
            <Reveal key={industry.name} delay={idx * 65} className="h-full">
              <Link
                href="/portfolio"
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white text-left shadow-md shadow-blue-900/[0.04] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#0d57b8]/40 hover:shadow-2xl hover:shadow-blue-600/[0.11]"
              >
                {/* Top animated royal-blue accent bar */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 z-20 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#0d57b8] via-[#f57c00] to-[#ff9800] transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                {/* Editorial industry photo header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                  <Image
                    src={industry.image}
                    alt={`${industry.name} digital solutions`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Subtle gradient polish on hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071a38]/35 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                  {/* Sector index pill top-right */}
                  <span className="absolute right-3.5 top-3.5 rounded-full bg-white/90 px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#071a38] shadow-xs backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#0d57b8] group-hover:text-white">
                    {industry.code}
                  </span>

                  {/* Floating Lucide icon badge bottom-left */}
                  <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/80 bg-white/95 text-[#0d57b8] shadow-md shadow-blue-900/15 backdrop-blur-sm transition-all duration-300 ease-out group-hover:-rotate-3 group-hover:scale-110 group-hover:border-[#0d57b8] group-hover:bg-[#0d57b8] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Crisp pure-white content body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold tracking-tight text-[#071a38] transition-colors duration-300 group-hover:text-[#0d57b8]">
                    {industry.name}
                  </h3>

                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                    {industry.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3.5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#0d57b8]">
                      {industry.tag}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-300 group-hover:border-[#0d57b8] group-hover:bg-[#0d57b8] group-hover:text-white">
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
