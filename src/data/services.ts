export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "Custom, high-performance websites and web applications built for scale.",
    overview:
      "We design and develop responsive, SEO-friendly websites and web apps tailored to your business goals—from marketing sites to complex platforms.",
    benefits: [
      "Responsive, mobile-first builds",
      "Performance and Core Web Vitals focus",
      "Scalable architecture and clean code",
      "CMS and third-party integrations",
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Define goals, audience, and technical requirements.",
      },
      {
        step: 2,
        title: "Design & Architecture",
        description: "Wireframes, UI structure, and technical blueprint.",
      },
      {
        step: 3,
        title: "Development",
        description: "Iterative build with reviews and quality checks.",
      },
      {
        step: 4,
        title: "Launch & Support",
        description: "Deploy, monitor, and optimize post-launch.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription:
      "Native and cross-platform mobile apps for iOS and Android.",
    overview:
      "We build intuitive mobile experiences that engage users and drive retention across iOS and Android platforms.",
    benefits: [
      "Cross-platform or native options",
      "Intuitive UX and smooth performance",
      "API and backend integration",
      "App store submission support",
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Map user journeys and feature priorities.",
      },
      {
        step: 2,
        title: "Prototyping",
        description: "Interactive prototypes for early validation.",
      },
      {
        step: 3,
        title: "Build",
        description: "Agile sprints with continuous testing.",
      },
      {
        step: 4,
        title: "Release",
        description: "Store launch, analytics, and iteration.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "User-centered interfaces that convert visitors into customers.",
    overview:
      "Our design process blends research, usability, and visual clarity to create digital products people love to use.",
    benefits: [
      "User research and journey mapping",
      "Wireframes and high-fidelity mockups",
      "Design systems and component libraries",
      "Usability testing and iteration",
    ],
    process: [
      {
        step: 1,
        title: "Research",
        description: "Understand users, competitors, and constraints.",
      },
      {
        step: 2,
        title: "Wireframing",
        description: "Structure information architecture and flows.",
      },
      {
        step: 3,
        title: "Visual Design",
        description: "Craft polished, brand-aligned interfaces.",
      },
      {
        step: 4,
        title: "Handoff",
        description: "Deliver specs and assets for development.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription:
      "Data-driven campaigns that grow traffic, leads, and revenue.",
    overview:
      "We plan and execute marketing strategies across SEO, paid media, content, and social to maximize ROI.",
    benefits: [
      "SEO and content strategy",
      "Paid ads (search & social)",
      "Analytics and conversion tracking",
      "Funnel optimization",
    ],
    process: [
      {
        step: 1,
        title: "Audit",
        description: "Assess current channels and performance gaps.",
      },
      {
        step: 2,
        title: "Strategy",
        description: "Define KPIs, audiences, and channel mix.",
      },
      {
        step: 3,
        title: "Execution",
        description: "Launch campaigns and content calendars.",
      },
      {
        step: 4,
        title: "Optimize",
        description: "Measure results and continuously improve.",
      },
    ],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    shortDescription:
      "Online stores engineered for conversion and seamless checkout.",
    overview:
      "From storefront design to payment integrations, we deliver e-commerce experiences that sell.",
    benefits: [
      "Custom storefronts and themes",
      "Payment and shipping integrations",
      "Inventory and order workflows",
      "Conversion rate optimization",
    ],
    process: [
      {
        step: 1,
        title: "Planning",
        description: "Catalog structure, payments, and logistics.",
      },
      {
        step: 2,
        title: "Store Build",
        description: "Theme, products, and checkout setup.",
      },
      {
        step: 3,
        title: "Integrations",
        description: "Gateways, ERP, and marketing tools.",
      },
      {
        step: 4,
        title: "Go Live",
        description: "Launch, train staff, and monitor sales.",
      },
    ],
  },
  {
    slug: "branding-identity",
    title: "Branding & Identity",
    shortDescription:
      "Memorable brand systems that communicate who you are.",
    overview:
      "We craft logos, visual identity, and brand guidelines that create consistency across every touchpoint.",
    benefits: [
      "Logo and visual identity",
      "Brand guidelines and voice",
      "Marketing collateral templates",
      "Consistent multi-channel presence",
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Clarify positioning, values, and audience.",
      },
      {
        step: 2,
        title: "Concepts",
        description: "Explore direction options and mood boards.",
      },
      {
        step: 3,
        title: "Refinement",
        description: "Finalize mark, palette structure, and type.",
      },
      {
        step: 4,
        title: "Guidelines",
        description: "Document usage rules for your team.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
