"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import {
  Check,
  Cloud,
  Layers,
  Monitor,
  Server,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { Card, Reveal, Section } from "@/components/ui";

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

const capabilities = [
  {
    icon: Monitor,
    title: "Frontend",
    items: ["React & Next.js", "Angular", "JavaScript / ES6+", "HTML5 & CSS3"],
  },
  {
    icon: Server,
    title: "Backend & Data",
    items: ["Node.js APIs", "PHP Systems", "MySQL Databases", "Auth & Security"],
  },
  {
    icon: Cloud,
    title: "Mobile & Cloud",
    items: ["Flutter Apps", "AWS Infrastructure", "Microsoft Azure", "GitHub CI/CD"],
  },
  {
    icon: ShoppingBag,
    title: "CMS & Commerce",
    items: ["Shopify Stores", "WooCommerce", "WordPress", "Conversion Optimization"],
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
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
      <div
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
        className={reverse ? "animate-marquee-reverse" : "animate-marquee-slow"}
      >
        {track.map((tech, idx) => (
          <div
            key={`${tech.slug}-${idx}`}
            className="w-40 shrink-0 pr-5 sm:w-44"
          >
            <div className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200/75 bg-white/85 px-4 py-5 shadow-xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1f4fe0]/40 hover:bg-white hover:shadow-lg hover:shadow-blue-600/10">
              <div className="relative flex h-14 w-14 items-center justify-center bg-transparent">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  width={110}
                  height={110}
                  className="h-13 w-13 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="mt-3 text-sm font-bold text-[#0b1533] transition-colors group-hover:text-[#1f4fe0]">
                {tech.name}
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                {tech.category}
              </p>
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
                className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#1f4fe0] text-white shadow-md shadow-blue-600/25"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-[#1f4fe0]/40 hover:text-[#1f4fe0]"
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
      <div key={activeTab} className="mb-12 space-y-3">
        {activeTab === "All" ? (
          <>
            <TechMarqueeRow items={rowOne} duration={36} />
            <TechMarqueeRow items={rowTwo} reverse duration={40} />
          </>
        ) : (
          <TechMarqueeRow items={filtered} duration={28} />
        )}
      </div>

      {/* Capability Summary Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((group, idx) => (
          <Reveal key={group.title} delay={idx * 75}>
            <Card className="h-full bg-white p-6 text-left">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dbe6ff] bg-white text-[#1f4fe0] transition-all duration-300 group-hover:scale-110 group-hover:border-[#1f4fe0] group-hover:bg-[#1f4fe0] group-hover:text-white">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#0b1533]">
                  {group.title}
                </h3>
              </div>

              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200/70 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-200 group-hover:border-[#1f4fe0]/30"
                  >
                    <Check className="h-4 w-4 shrink-0 text-[#1f4fe0]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
