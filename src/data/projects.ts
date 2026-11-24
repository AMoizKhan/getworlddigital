export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
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
    summary:
      "Rebuilt a legacy storefront into a fast, conversion-focused e-commerce platform with streamlined checkout.",
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
    title: "Fintech Mobile App",
    client: "PulsePay",
    industry: "Finance",
    summary:
      "Designed and launched a cross-platform mobile app for personal finance tracking and payments.",
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
    title: "Healthcare Patient Portal",
    client: "CareBridge Clinics",
    industry: "Healthcare",
    summary:
      "Built a secure patient portal for appointments, records access, and messaging with care teams.",
    services: ["Web Development", "UI/UX Design"],
    results: [
      "60% fewer phone booking calls",
      "Improved patient satisfaction scores",
      "HIPAA-aligned architecture",
    ],
    featured: true,
  },
  {
    slug: "saas-marketing-site",
    title: "SaaS Marketing Site & Lead Engine",
    client: "Stackflow CRM",
    industry: "Technology",
    summary:
      "Launched a high-converting marketing site with SEO content hubs and integrated lead capture.",
    services: ["Web Development", "Digital Marketing", "UI/UX Design"],
    results: [
      "2.4× organic traffic in 6 months",
      "180% increase in demo requests",
      "Top-3 rankings for key product terms",
    ],
    featured: true,
  },
  {
    slug: "hospitality-brand-refresh",
    title: "Hospitality Brand Refresh",
    client: "Harbor & Pine Hotels",
    industry: "Hospitality",
    summary:
      "Delivered a full brand identity refresh and booking-focused website redesign across properties.",
    services: ["Branding & Identity", "Web Development"],
    results: [
      "Unified brand across 12 locations",
      "22% lift in direct bookings",
      "Consistent guest experience online",
    ],
    featured: false,
  },
  {
    slug: "education-lms-platform",
    title: "Education LMS Platform",
    client: "LearnPath Academy",
    industry: "Education",
    summary:
      "Developed a learning management platform with course delivery, progress tracking, and assessments.",
    services: ["Web Development", "UI/UX Design"],
    results: [
      "10K+ enrolled learners",
      "Course completion rate up 31%",
      "Admin tooling cut ops time by half",
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
