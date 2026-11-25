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
  { name: "React", slug: "react", image: "/tech/react.webp", category: "Frontend" },
  { name: "Next.js", slug: "nextjs", image: "/tech/nextjs.webp", category: "Frontend" },
  { name: "Angular", slug: "angular", image: "/tech/angular.webp", category: "Frontend" },
  { name: "JavaScript", slug: "javascript", image: "/tech/javascript.webp", category: "Frontend" },
  { name: "HTML5", slug: "html5", image: "/tech/html5.webp", category: "Frontend" },
  { name: "CSS3", slug: "css3", image: "/tech/css3.webp", category: "Frontend" },
  { name: "Node.js", slug: "nodejs", image: "/tech/nodejs.webp", category: "Backend & Data" },
  { name: "PHP", slug: "php", image: "/tech/php.webp", category: "Backend & Data" },
  { name: "MySQL", slug: "mysql", image: "/tech/mysql.webp", category: "Backend & Data" },
  { name: "Flutter", slug: "flutter", image: "/tech/flutter.webp", category: "Mobile & Cloud" },
  { name: "AWS", slug: "aws", image: "/tech/aws.webp", category: "Mobile & Cloud" },
  { name: "Azure", slug: "azure", image: "/tech/azure.webp", category: "Mobile & Cloud" },
  { name: "GitHub", slug: "github", image: "/tech/github.webp", category: "Mobile & Cloud" },
  { name: "Shopify", slug: "shopify", image: "/tech/shopify.webp", category: "CMS & Commerce" },
  { name: "WooCommerce", slug: "woocommerce", image: "/tech/woocommerce.webp", category: "CMS & Commerce" },
  { name: "WordPress", slug: "wordpress", image: "/tech/wordpress.webp", category: "CMS & Commerce" },
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

export function Expertise() {
  const [activeTab, setActiveTab] = useState<TechCategory>("All");

  const filtered =
    activeTab === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === activeTab);

  // Ensure half-track always has at least 10 items so the continuous marquee never shows a gap
  const repeatCount = Math.max(1, Math.ceil(10 / filtered.length));
  const halfTrack: TechItem[] = Array.from({ length: repeatCount }).flatMap(
    () => filtered
  );
  const marqueeTrack = [...halfTrack, ...halfTrack];
  const durationSeconds = activeTab === "All" ? 48 : 34;

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

      {/* Continuous Slow Infinite Marquee on Pure White */}
      <div className="relative mb-12 overflow-hidden bg-white py-3">
        {/* Soft pure-white fade masks on left and right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white via-white/90 to-transparent sm:w-24"
        />

        <div
          key={activeTab}
          style={
            {
              "--marquee-duration": `${durationSeconds}s`,
            } as CSSProperties
          }
          className="animate-marquee-slow gap-5"
        >
          {marqueeTrack.map((tech, idx) => (
            <div
              key={`${tech.slug}-${idx}`}
              className="group flex w-40 shrink-0 flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-5 py-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#1f4fe0]/40 hover:shadow-lg hover:shadow-blue-600/[0.08] sm:w-44"
            >
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  width={120}
                  height={120}
                  className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="mt-3 text-sm font-bold text-[#0b1533] transition-colors group-hover:text-[#1f4fe0]">
                {tech.name}
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                {tech.category}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Capability Summary Grid — Pure White Cards */}
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
