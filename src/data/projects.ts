export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  image: string;
  summary: string;
  services: string[];
  results: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "retail-ecommerce-rebuild",
    title: "Retail E-Commerce Rebuild",
    client: "Northline Apparel",
    industry: "Retail",
    image: "/portfolio/retail-ecommerce.webp",
    summary:
      "Rebuilt a legacy storefront into a fast, conversion-focused e-commerce platform with streamlined checkout across desktop, tablet, and mobile.",
    services: ["E-Commerce Solutions", "UI/UX Design", "Web Development"],
    results: [
      "42% increase in conversion rate",
      "3.1s → 1.4s average page load",
      "28% reduction in cart abandonment",
    ],
    featured: true,
  },
  {
    slug: "fintech-mobile-app",
    title: "Marketplace & Community Mobile App",
    client: "Swappo",
    industry: "Finance",
    image: "/portfolio/mobile-app.webp",
    summary:
      "Designed and launched a cross-platform mobile app featuring peer-to-peer swaps, real-time messaging, map discovery, and instant listings.",
    services: ["Mobile App Development", "UI/UX Design"],
    results: [
      "50K+ downloads in first quarter",
      "4.8★ average app store rating",
      "35% month-over-month active users",
    ],
    featured: true,
  },
  {
    slug: "healthcare-patient-portal",
    title: "Healthcare Care & Intake Platform",
    client: "Enduring Hearts Healthcare",
    industry: "Healthcare",
    image: "/portfolio/healthcare-portal.webp",
    summary:
      "Built an accessible, compassionate healthcare web platform with streamlined care intake, referral forms, and service discovery.",
    services: ["Web Development", "UI/UX Design"],
    results: [
      "60% fewer phone booking calls",
      "Improved patient satisfaction scores",
      "Accessible, compliance-aligned UX",
    ],
    featured: true,
  },
  {
    slug: "saas-marketing-site",
    title: "AI Mobility & Operations CRM Dashboard",
    client: "MetroSync Control",
    industry: "Technology",
    image: "/portfolio/crm-analytics.webp",
    summary:
      "Engineered a real-time CRM and telemetry operations dashboard with predictive analytics, incident alerts, and automated scheduling.",
    services: ["Web Development", "UI/UX Design", "CRM Systems"],
    results: [
      "94% real-time prediction accuracy",
      "45% faster incident response times",
      "Unified multi-region analytics hub",
    ],
    featured: true,
  },
  {
    slug: "hospitality-brand-refresh",
    title: "Live Events & Ticketing Web Platform",
    client: "Zumic Events",
    industry: "Hospitality",
    image: "/portfolio/web-events.webp",
    summary:
      "Delivered a modern event discovery and ticketing web application with instant location filtering, scheduling, and responsive booking flows.",
    services: ["Branding & Identity", "Web Development"],
    results: [
      "Unified event discovery across regions",
      "22% lift in direct ticket conversions",
      "Consistent guest experience online",
    ],
    featured: false,
  },
  {
    slug: "education-lms-platform",
    title: "Talent Advisory & Recruitment Portal",
    client: "Deembase",
    industry: "Education",
    image: "/portfolio/web-recruitment.webp",
    summary:
      "Developed a clean B2B advisory portal with meeting scheduling, client dashboards, and streamlined recruitment workflow tooling.",
    services: ["Web Development", "UI/UX Design"],
    results: [
      "2.4× qualified consultation bookings",
      "40% reduction in onboarding friction",
      "Modern bilingual web architecture",
    ],
    featured: false,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const industries = [
  "Retail",
  "Finance",
  "Healthcare",
  "Technology",
  "Hospitality",
  "Education",
  "Manufacturing",
  "Real Estate",
] as const;
