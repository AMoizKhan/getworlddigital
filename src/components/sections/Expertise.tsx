"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Layers,
  Monitor,
  Server,
  ShoppingBag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Reveal, Section } from "@/components/ui";

type TechCategory =
  | "All"
  | "Frontend"
  | "Backend & Data"
  | "Mobile & Cloud"
  | "CMS & Commerce";

type TechItem = {
  name: string;
  slug: string;
  image: string;
  category: Exclude<TechCategory, "All">;
};

const technologies: TechItem[] = [
  { name: "React", slug: "react", image: "/tech-transparent/react.png", category: "Frontend" },
  { name: "Next.js", slug: "nextjs", image: "/tech-transparent/nextjs.png", category: "Frontend" },
  { name: "Angular", slug: "angular", image: "/tech-transparent/angular.png", category: "Frontend" },
  { name: "JavaScript", slug: "javascript", image: "/tech-transparent/javascript.png", category: "Frontend" },
  { name: "HTML5", slug: "html5", image: "/tech-transparent/html5.png", category: "Frontend" },
  { name: "CSS3", slug: "css3", image: "/tech-transparent/css3.png", category: "Frontend" },
  { name: "Node.js", slug: "nodejs", image: "/tech-transparent/nodejs.png", category: "Backend & Data" },
  { name: "PHP", slug: "php", image: "/tech-transparent/php.png", category: "Backend & Data" },
  { name: "MySQL", slug: "mysql", image: "/tech-transparent/mysql.png", category: "Backend & Data" },
  { name: "Flutter", slug: "flutter", image: "/tech-transparent/flutter.png", category: "Mobile & Cloud" },
  { name: "AWS", slug: "aws", image: "/tech-transparent/aws.png", category: "Mobile & Cloud" },
  { name: "Azure", slug: "azure", image: "/tech-transparent/azure.png", category: "Mobile & Cloud" },
  { name: "GitHub", slug: "github", image: "/tech-transparent/github.png", category: "Mobile & Cloud" },
  { name: "Shopify", slug: "shopify", image: "/tech-transparent/shopify.png", category: "CMS & Commerce" },
  { name: "WooCommerce", slug: "woocommerce", image: "/tech-transparent/woocommerce.png", category: "CMS & Commerce" },
  { name: "WordPress", slug: "wordpress", image: "/tech-transparent/wordpress.png", category: "CMS & Commerce" },
];

const tabs: { id: TechCategory; label: string; icon: LucideIcon }[] = [
  { id: "All", label: "All Technologies", icon: Layers },
  { id: "Frontend", label: "Frontend", icon: Monitor },
  { id: "Backend & Data", label: "Backend & Data", icon: Server },
  { id: "Mobile & Cloud", label: "Mobile & Cloud", icon: Cloud },
  { id: "CMS & Commerce", label: "CMS & Commerce", icon: ShoppingBag },
];

type CapabilityCard = {
  code: string;
  category: Exclude<TechCategory, "All">;
  icon: LucideIcon;
  title: string;
  tagline: string;
  metric: string;
  items: string[];
};

const capabilities: CapabilityCard[] = [
  {
    code: "01",
    category: "Frontend",
    icon: Monitor,
    title: "Frontend Engineering",
    tagline: "Fast, accessible interfaces built for instant interaction and SEO.",
    metric: "99+ Core Web Vitals",
    items: ["React & Next.js", "Angular Apps", "JavaScript / ES6+", "HTML5 & CSS3"],
  },
  {
    code: "02",
    category: "Backend & Data",
    icon: Server,
    title: "Backend & Data",
    tagline: "Resilient APIs, structured databases, and enterprise-grade security.",
    metric: "99.9% API Reliability",
    items: ["Node.js APIs", "PHP Platforms", "MySQL Architecture", "Auth & Integrations"],
  },
  {
    code: "03",
    category: "Mobile & Cloud",
    icon: Cloud,
    title: "Mobile & Cloud Ops",
    tagline: "Cross-platform mobile apps backed by automated cloud infrastructure.",
    metric: "Multi-Cloud Ready",
    items: ["Flutter iOS & Android", "AWS Cloud", "Microsoft Azure", "GitHub CI/CD"],
  },
  {
    code: "04",
    category: "CMS & Commerce",
    icon: ShoppingBag,
    title: "CMS & E-Commerce",
    tagline: "High-converting storefronts and effortless content management.",
    metric: "Conversion-Focused",
    items: ["Shopify Storefronts", "WooCommerce", "WordPress Systems", "CRO & Analytics"],
  },
];

function buildLoop(items: TechItem[], minHalfCount = 10): TechItem[] {
  const repeats = Math.max(1, Math.ceil(minHalfCount / items.length));
  const half = Array.from({ length: repeats }).flatMap(() => items);
  return [...half, ...half];
}

function TechMarqueeRow({
  items,
  reverse = false,
  duration = 36,
}: {
  items: TechItem[];
  reverse?: boolean;
  duration?: number;
}) {
  const track = buildLoop(items, 10);

  return (
    <div className="relative overflow-hidden py-2.5 [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
      <div
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
        className={reverse ? "animate-marquee-reverse" : "animate-marquee-slow"}
      >
        {track.map((tech, idx) => (
          <div
            key={`${tech.slug}-${idx}`}
            className="w-40 shrink-0 pr-5 sm:w-44"
          >
            <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-4 py-5 shadow-sm shadow-blue-900/[0.03] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#0d57b8]/40 hover:shadow-xl hover:shadow-blue-600/10">
              <div className="relative flex h-14 w-14 items-center justify-center bg-transparent">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  width={110}
                  height={110}
                  className="h-13 w-13 object-contain transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-115"
                />
              </div>
              <p className="mt-3 text-sm font-bold text-[#071a38] transition-colors duration-200 group-hover:text-[#0d57b8]">
                {tech.name}
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                {tech.category}
              </p>
              <span
                aria-hidden="true"
                className="absolute inset-x-6 bottom-0 h-[2.5px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-[#0d57b8] to-[#f57c00] transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Expertise() {
  const [activeTab, setActiveTab] = useState<TechCategory>("All");

  const filtered =
    activeTab === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === activeTab);

  const rowOne = technologies.slice(0, 8);
  const rowTwo = technologies.slice(8);

  return (
    <Section
      id="expertise"
      eyebrow="Technologies & Stack"
      title="Modern languages &"
      highlight="core capabilities."
      subtitle="Battle-tested languages, frameworks, cloud platforms, and commerce tools engineered to scale."
      align="center"
      tone="white"
    >
      {/* Interactive Category Tabs */}
      <Reveal>
        <div
          role="tablist"
          aria-label="Technology categories"
          className="mb-10 flex flex-wrap items-center justify-center gap-2.5"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 active:scale-[0.97] ${
                  isActive
                    ? "bg-[#0d57b8] text-white shadow-md shadow-blue-600/25"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-[#0d57b8]/40 hover:text-[#0d57b8]"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Continuous Slow Moving Transparent Tech Logos */}
      <div key={activeTab} className="mb-14 space-y-3">
        {activeTab === "All" ? (
          <>
            <TechMarqueeRow items={rowOne} duration={36} />
            <TechMarqueeRow items={rowTwo} reverse duration={40} />
          </>
        ) : (
          <TechMarqueeRow items={filtered} duration={28} />
        )}
      </div>

      {/* Professional Animated Capability Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((group, idx) => {
          const isSelected = activeTab === group.category;
          const groupLogos = technologies
            .filter((t) => t.category === group.category)
            .slice(0, 4);

          return (
            <Reveal key={group.title} delay={idx * 85} className="h-full">
              <div
                role="button"
                tabIndex={0}
                onClick={() =>
                  setActiveTab(isSelected ? "All" : group.category)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveTab(isSelected ? "All" : group.category);
                  }
                }}
                className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border bg-white p-6 text-left transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/[0.11] ${
                  isSelected
                    ? "-translate-y-1 border-[#0d57b8]/60 shadow-xl shadow-blue-600/[0.12] ring-2 ring-[#0d57b8]/15"
                    : "border-slate-200/80 shadow-md shadow-blue-900/[0.04] hover:border-[#0d57b8]/40"
                }`}
              >
                {/* Animated top gradient bar */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-[#0d57b8] via-[#f57c00] to-[#ff9800] transition-transform duration-500 ease-out ${
                    isSelected
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />

                {/* Soft ambient top-right hover glow */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#dbe7ff]/45 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Header row: animated icon + step badge */}
                <div className="relative flex items-start justify-between gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ease-out group-hover:-rotate-3 group-hover:scale-110 ${
                      isSelected
                        ? "bg-[#0d57b8] text-white shadow-lg shadow-blue-600/25"
                        : "border border-[#dbe6ff] bg-white text-[#0d57b8] shadow-xs group-hover:border-[#0d57b8] group-hover:bg-[#0d57b8] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/25"
                    }`}
                  >
                    <group.icon className="h-5 w-5" />
                  </div>

                  <span className="font-mono text-xs font-bold tracking-widest text-slate-300 transition-colors duration-300 group-hover:text-[#f57c00]">
                    {group.code}
                  </span>
                </div>

                {/* Title & executive tagline */}
                <h3
                  className={`mt-5 text-lg font-bold tracking-tight transition-colors duration-300 ${
                    isSelected
                      ? "text-[#0d57b8]"
                      : "text-[#071a38] group-hover:text-[#0d57b8]"
                  }`}
                >
                  {group.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {group.tagline}
                </p>

                {/* Live transparent mini tech logo stack that fans on hover */}
                <div className="mt-4 flex items-center gap-1.5">
                  {groupLogos.map((logo, lIdx) => (
                    <span
                      key={logo.slug}
                      style={{ transitionDelay: `${lIdx * 40}ms` }}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200/80 bg-white p-1.5 shadow-2xs transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-[#c8dcff] group-hover:shadow-sm"
                      title={logo.name}
                    >
                      <Image
                        src={logo.image}
                        alt={logo.name}
                        width={24}
                        height={24}
                        className="h-5 w-5 object-contain"
                      />
                    </span>
                  ))}
                </div>

                {/* Capability items with subtle staggered hover shift */}
                <ul className="mt-5 flex-1 space-y-2 border-t border-slate-100 pt-4">
                  {group.items.map((item, iIdx) => (
                    <li
                      key={item}
                      style={{ transitionDelay: `${iIdx * 35}ms` }}
                      className="flex items-center gap-2.5 text-[13px] font-medium text-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-[#071a38]"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#f57c00] transition-transform duration-300 group-hover:scale-110" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer metric + interactive filter cue */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0d57b8]">
                    <Sparkles className="h-3.5 w-3.5" />
                    {group.metric}
                  </span>
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 ${
                      isSelected
                        ? "border-[#0d57b8] bg-[#0d57b8] text-white"
                        : "border-slate-200 bg-white text-slate-400 group-hover:border-[#0d57b8] group-hover:bg-[#0d57b8] group-hover:text-white"
                    }`}
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
