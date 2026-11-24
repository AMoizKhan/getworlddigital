export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "Northline Apparel",
    quote:
      "GetWorldDigital rebuilt our entire storefront and the results spoke for themselves—faster site, higher conversions, and a team that actually listened.",
    rating: 5,
  },
  {
    id: "t2",
    name: "James Okonkwo",
    role: "Product Lead",
    company: "PulsePay",
    quote:
      "From prototype to App Store launch, they moved with clarity and discipline. Our users love the experience they designed.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Priya Raman",
    role: "Marketing Director",
    company: "Stackflow CRM",
    quote:
      "Their blend of design, development, and growth marketing helped us turn our website into a real lead engine.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Daniel Torres",
    role: "Operations Manager",
    company: "CareBridge Clinics",
    quote:
      "The patient portal they delivered reduced call volume and made care coordination smoother for our staff and patients.",
    rating: 4,
  },
];

export const faqs: FAQItem[] = [
  {
    id: "faq1",
    question: "What services does GetWorldDigital offer?",
    answer:
      "We offer web development, mobile apps, UI/UX design, digital marketing, e-commerce solutions, and branding. Each engagement is scoped to your goals and timeline.",
  },
  {
    id: "faq2",
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope. A marketing website often takes 4–8 weeks; custom apps and platforms usually range from 8–16+ weeks. We share a clear timeline after discovery.",
  },
  {
    id: "faq3",
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes. We partner with early-stage startups, growing SMBs, and established enterprises across multiple industries.",
  },
  {
    id: "faq4",
    question: "How do we get started?",
    answer:
      "Reach out via our contact form or Get a Quote CTA. We'll schedule a discovery call, understand your needs, and propose a tailored plan.",
  },
  {
    id: "faq5",
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely. We offer maintenance, performance monitoring, feature iterations, and marketing support retainers after go-live.",
  },
];
