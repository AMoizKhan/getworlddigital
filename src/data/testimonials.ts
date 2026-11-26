export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
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
    name: "Emily Carter",
    role: "VP of Operations",
    company: "Northline Commerce",
    avatar: "/testimonials/client-1.webp",
    quote:
      "GetWorldDigital rebuilt our entire e-commerce storefront and the results were immediate—faster page loads, smoother checkout, and a 42% jump in conversions.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Marcus Grant",
    role: "Co-Founder",
    company: "Swappo Technologies",
    avatar: "/testimonials/client-2.webp",
    quote:
      "From interactive prototype to iOS and Android launch, their team moved with clarity and precision. Our users love how clean and intuitive the mobile app feels.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Ananya Patel",
    role: "Director of Digital",
    company: "Enduring Hearts Care",
    avatar: "/testimonials/client-3.webp",
    quote:
      "They understood our patients and care staff from day one. The new web platform streamlined intake referrals and cut incoming phone requests by more than half.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Carlos Mendez",
    role: "Head of Product",
    company: "MetroSync Systems",
    avatar: "/testimonials/client-4.webp",
    quote:
      "Our real-time operations CRM dashboard used to be fragmented across four tools. GetWorldDigital unified everything into one fast, reliable command center.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Kevin Lin",
    role: "Engineering Manager",
    company: "Zumic Live",
    avatar: "/testimonials/client-5.webp",
    quote:
      "Clean code, weekly demos, and zero surprises. Partnering with their senior engineers helped us launch our new event ticketing platform weeks ahead of schedule.",
    rating: 5,
  },
  {
    id: "t6",
    name: "Rachel Brooks",
    role: "Marketing Director",
    company: "Deembase Advisory",
    avatar: "/testimonials/client-6.webp",
    quote:
      "Their blend of modern UI/UX design and performance SEO turned our corporate website into our highest-performing consultation booking channel.",
    rating: 5,
  },
  {
    id: "t7",
    name: "Omar Al-Mansoor",
    role: "Managing Partner",
    company: "Horizon Logistics",
    avatar: "/testimonials/client-7.webp",
    quote:
      "The custom vendor and invoice management portal they engineered saved our finance team dozens of hours every single week. Truly a dependable long-term partner.",
    rating: 5,
  },
  {
    id: "t8",
    name: "Claire Bennett",
    role: "Chief Growth Officer",
    company: "Harbor & Pine Group",
    avatar: "/testimonials/client-8.webp",
    quote:
      "Rarely do you find an agency equally strong in strategy, visual craft, and full-stack delivery. Every milestone was transparent and focused on real ROI.",
    rating: 5,
  },
];

export const faqs: FAQItem[] = [
  {
    id: "faq1",
    question: "What services does GetWorldDigital offer?",
    answer:
      "We specialize in AI Chatbots, AI Voice Receptionists, Lead Generation & Follow-up, Appointment Booking Automation, Customer Support Automation, Email & WhatsApp Automation, CRM Automation, Custom AI Automation, and Mobile Applications.",
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
      "Reach out via our contact form or Book a Consultation CTA. We'll schedule a discovery call, understand your needs, and propose a tailored plan.",
  },
  {
    id: "faq5",
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely. We offer maintenance, performance monitoring, feature iterations, and marketing support retainers after go-live.",
  },
];
