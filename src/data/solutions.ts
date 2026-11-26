export type Solution = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  shortDescription: string;
  overview: string;
  metrics: { value: string; label: string }[];
  challenges: { problem: string; solution: string }[];
  capabilities: { title: string; description: string }[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "managed-it-services",
    title: "Managed IT Services",
    tagline: "Proactive infrastructure, cloud security & reliable IT operations",
    image: "/portfolio/crm-analytics.webp",
    shortDescription:
      "Reliable, proactive IT management, cloud infrastructure, and cybersecurity that keep your business running smoothly.",
    overview:
      "Stop reacting to downtime and fragmented tech stacks. Our Managed IT Services deliver 24/7 infrastructure monitoring, endpoint security, cloud administration across AWS and Azure, and responsive helpdesk support—giving modern businesses enterprise-grade stability at a predictable monthly cost.",
    metrics: [
      { value: "99.95%", label: "Infrastructure Uptime" },
      { value: "<15 min", label: "Avg. Priority Response" },
      { value: "24/7", label: "Monitoring & Patching" },
    ],
    challenges: [
      {
        problem: "Unexpected downtime and slow ticket resolutions stall team productivity.",
        solution:
          "Proactive 24/7 monitoring catches bottlenecks early, backed by fast SLA-driven support.",
      },
      {
        problem: "Growing cybersecurity threats and unpatched devices expose company data.",
        solution:
          "Automated endpoint patching, zero-trust access controls, and continuous threat detection.",
      },
      {
        problem: "Unpredictable cloud spend across AWS, Azure, and SaaS licenses.",
        solution:
          "Right-sized cloud architecture, license governance, and clear monthly cost optimization.",
      },
    ],
    capabilities: [
      {
        title: "24/7 Network & Server Monitoring",
        description:
          "Real-time telemetry across servers, cloud workloads, and business-critical apps to prevent outages.",
      },
      {
        title: "Cloud Infrastructure (AWS & Azure)",
        description:
          "Architecture, migrations, automated scaling, and cost governance for resilient cloud environments.",
      },
      {
        title: "Cybersecurity & Endpoint Protection",
        description:
          "MFA enforcement, EDR protection, vulnerability patching, and employee security hygiene.",
      },
      {
        title: "Responsive IT Helpdesk",
        description:
          "Friendly, knowledgeable engineers resolving workstation, email, and access issues rapidly.",
      },
      {
        title: "Backup & Disaster Recovery",
        description:
          "Automated encrypted backups with tested recovery drills so critical data is never at risk.",
      },
      {
        title: "Onboarding & Device Lifecycle",
        description:
          "Streamlined employee laptop provisioning, Microsoft 365 / Google Workspace setup, and offboarding.",
      },
    ],
    benefits: [
      "Predictable monthly IT operating budget with zero surprise bills",
      "Proactive maintenance that stops outages before teams notice",
      "Hardened security posture across cloud and remote endpoints",
      "Strategic vCIO roadmap aligned with business expansion",
    ],
    process: [
      {
        step: 1,
        title: "IT Health Audit",
        description: "Assess networks, cloud workloads, security gaps, and endpoints.",
      },
      {
        step: 2,
        title: "Stabilize & Secure",
        description: "Deploy monitoring, encrypted backups, and security baselines.",
      },
      {
        step: 3,
        title: "Managed Operations",
        description: "24/7 monitoring, automated patching, and fast helpdesk SLAs.",
      },
      {
        step: 4,
        title: "Quarterly Reviews",
        description: "Optimize cloud costs, security posture, and tech roadmaps.",
      },
    ],
    faqs: [
      {
        question: "Can you work alongside our existing internal IT staff?",
        answer:
          "Yes. We support both co-managed IT (handling 24/7 monitoring, cloud, and escalations for your internal lead) and fully managed IT for growing teams.",
      },
      {
        question: "Do you support remote and hybrid workforces?",
        answer:
          "Completely. We manage cloud identities, secure VPN/zero-trust access, and remote device provisioning regardless of where your staff works.",
      },
      {
        question: "How fast is onboarding onto Managed IT?",
        answer:
          "Most organizations complete their security baseline, monitoring rollout, and helpdesk transition within 2–3 weeks with zero disruption.",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    tagline: "Intelligent workflows & AI agents that eliminate repetitive busywork",
    image: "/services/ui-ux-design.webp",
    shortDescription:
      "Automate repetitive workflows, connect business tools, and deploy practical AI assistants that unlock faster growth.",
    overview:
      "Modern teams lose thousands of hours every year copying data between CRMs, triaging repetitive inquiries, and compiling manual reports. We design practical, reliable AI & workflow automations tailored to your actual operations—connecting your CRM, email, forms, and databases so work flows automatically with human-in-the-loop control.",
    metrics: [
      { value: "70%", label: "Less Manual Data Entry" },
      { value: "10×", label: "Faster Lead Follow-Up" },
      { value: "24/7", label: "Automated Workflow Execution" },
    ],
    challenges: [
      {
        problem: "Leads sit waiting in inboxes while staff manually enter CRM records.",
        solution:
          "Instant AI qualification, CRM enrichment, and automated personalized follow-ups in seconds.",
      },
      {
        problem: "Disconnected tools force teams into error-prone copy-pasting.",
        solution:
          "Automated API pipelines syncing CRM, invoicing, Slack, email, and spreadsheets reliably.",
      },
      {
        problem: "Support teams answer the same routine questions dozens of times a day.",
        solution:
          "Knowledge-grounded AI assistants that resolve tier-1 queries and escalate complex cases cleanly.",
      },
    ],
    capabilities: [
      {
        title: "AI Customer & Lead Assistants",
        description:
          "Brand-trained AI chat and intake agents that answer questions, qualify leads, and book meetings 24/7.",
      },
      {
        title: "CRM & Sales Pipeline Automation",
        description:
          "Auto-capture leads, enrich contacts, trigger follow-up sequences, and keep deal stages spotless.",
      },
      {
        title: "Document & Data Extraction",
        description:
          "Extract structured fields from invoices, PDFs, intake forms, and emails directly into your database.",
      },
      {
        title: "Cross-App Workflow Orchestration",
        description:
          "Connect web apps, Slack, Microsoft 365, HubSpot, Shopify, and accounting tools via resilient APIs.",
      },
      {
        title: "Automated Executive Reporting",
        description:
          "Scheduled daily and weekly KPI digests generated automatically from live business metrics.",
      },
      {
        title: "Guardrails & Human-in-the-Loop",
        description:
          "Approval checkpoints, audit logging, and strict data privacy controls so AI stays accurate and safe.",
      },
    ],
    benefits: [
      "Reclaim 15–30+ team hours per week from manual busywork",
      "Respond to every inbound lead in under 60 seconds",
      "Eliminate human copy-paste errors across CRM and billing",
      "Practical, measurable ROI without bloated enterprise software",
    ],
    process: [
      {
        step: 1,
        title: "Workflow Audit",
        description: "Identify highest-ROI repetitive tasks and tool bottlenecks.",
      },
      {
        step: 2,
        title: "Automation Blueprint",
        description: "Design triggers, AI prompts, guardrails, and API data flows.",
      },
      {
        step: 3,
        title: "Build & Test",
        description: "Engineer, stress-test edge cases, and validate accuracy.",
      },
      {
        step: 4,
        title: "Deploy & Monitor",
        description: "Launch live with error alerts, team training, and tuning.",
      },
    ],
    faqs: [
      {
        question: "Do we need to replace our existing CRM or tools?",
        answer:
          "No. We build automations directly around the tools your team already uses—HubSpot, Salesforce, Google Workspace, Slack, Shopify, or custom databases.",
      },
      {
        question: "How do you keep AI responses accurate and on-brand?",
        answer:
          "We ground assistants strictly in your verified company documentation, add confidence thresholds, and route sensitive requests to human team members.",
      },
      {
        question: "How quickly can a first automation go live?",
        answer:
          "Focused high-impact workflows (such as automated lead triage or invoice syncing) typically launch in 2–4 weeks.",
      },
    ],
  },
  {
    slug: "seo-ppc",
    title: "SEO & PPC",
    tagline: "High-intent search visibility & precision paid acquisition",
    image: "/services/digital-marketing.webp",
    shortDescription:
      "Get found by ready-to-buy customers and turn targeted search traffic into predictable, measurable revenue.",
    overview:
      "Ranking for the wrong keywords or overspending on broad ad clicks burns budget fast. Our SEO & PPC specialists combine technical search engineering, high-intent content, and tightly managed Google & Meta ad campaigns—paired with conversion-engineered landing pages so every dollar works harder.",
    metrics: [
      { value: "2.8×", label: "Organic Traffic Growth" },
      { value: "-34%", label: "Lower Cost Per Lead" },
      { value: "Top 3", label: "High-Intent Keyword Gains" },
    ],
    challenges: [
      {
        problem: "Competitors outrank you for high-value commercial search terms.",
        solution:
          "Technical SEO fixes, targeted service pages, and authority content built for buyer intent.",
      },
      {
        problem: "Paid ad budgets leak on irrelevant clicks with weak conversion rates.",
        solution:
          "Negative keyword sculpting, exact-match ad groups, and dedicated high-converting landing pages.",
      },
      {
        problem: "Unclear attribution makes it impossible to tell which ads drive real revenue.",
        solution:
          "Full-funnel GA4, call, form, and CRM attribution tracking down to closed deals.",
      },
    ],
    capabilities: [
      {
        title: "Technical SEO & Site Health",
        description:
          "Crawlability, Core Web Vitals, schema markup, internal linking, and indexation fixes.",
      },
      {
        title: "Local & National Search SEO",
        description:
          "Dominate Google Business Profile, regional service queries, and competitive industry keywords.",
      },
      {
        title: "Google Search & Shopping Ads",
        description:
          "High-intent search campaigns structured for quality score, low CPC, and maximum lead volume.",
      },
      {
        title: "Paid Social & Retargeting",
        description:
          "Precision LinkedIn and Meta retargeting that brings high-value prospects back to convert.",
      },
      {
        title: "Dedicated CRO Landing Pages",
        description:
          "Fast, message-matched campaign landing pages A/B tested to maximize form & call conversions.",
      },
      {
        title: "Live Attribution & ROI Reporting",
        description:
          "Crystal-clear monthly reporting tracking rankings, CPL, conversion rates, and revenue ROI.",
      },
    ],
    benefits: [
      "Capture immediate demand via PPC while compounding long-term SEO",
      "Eliminate wasted ad spend with strict intent targeting",
      "Message-matched landing pages engineered for higher conversion",
      "Clear, jargon-free reporting tied to qualified leads and sales",
    ],
    process: [
      {
        step: 1,
        title: "Search & Ad Audit",
        description: "Audit technical SEO, keyword gaps, competitors, and ad history.",
      },
      {
        step: 2,
        title: "Campaign Architecture",
        description: "Build keyword clusters, ad creatives, tracking, and landing pages.",
      },
      {
        step: 3,
        title: "Launch & Optimize",
        description: "Weekly bid tuning, search-term pruning, and content publishing.",
      },
      {
        step: 4,
        title: "Scale Winners",
        description: "Expand top-converting keywords and audiences for steady growth.",
      },
    ],
    faqs: [
      {
        question: "Should we invest in SEO, PPC, or both?",
        answer:
          "Combining both delivers the strongest pipeline: PPC generates qualified leads immediately while revealing your highest-converting keywords to fuel long-term organic SEO.",
      },
      {
        question: "Is there a minimum ad spend required?",
        answer:
          "We tailor campaign scope to your market competitiveness and focus on lean, high-intent targeting before scaling budgets based on proven return.",
      },
      {
        question: "How often do you optimize active PPC campaigns?",
        answer:
          "We review search terms, conversion rates, and bids weekly to eliminate wasted spend and steadily reduce your cost per lead.",
      },
    ],
  },
  {
    slug: "front-desk-solutions",
    title: "Front-Desk Solutions",
    tagline: "Smart client reception, scheduling & omnichannel support systems",
    image: "/portfolio/healthcare-portal.webp",
    shortDescription:
      "Smart front-desk workflows, digital intake, and responsive customer support systems for seamless client engagement.",
    overview:
      "First impressions happen at your front desk—whether online, by phone, or in-clinic. Our Front-Desk Solutions modernize client reception with digital intake portals, automated appointment scheduling, smart call/chat routing, and CRM-synced ticketing so every inquiry is greeted promptly and zero leads slip through the cracks.",
    metrics: [
      { value: "-60%", label: "Fewer Repetitive Calls" },
      { value: "24/7", label: "Self-Serve Booking & Intake" },
      { value: "98%", label: "Client Satisfaction Score" },
    ],
    challenges: [
      {
        problem: "Overwhelmed front-desk staff miss calls during peak hours.",
        solution:
          "Self-serve online booking, smart call/chat triage, and instant missed-call SMS follow-ups.",
      },
      {
        problem: "Paper or emailed intake forms create slow check-ins and data entry errors.",
        solution:
          "Mobile-friendly digital intake portals that sync directly into your CRM or practice system.",
      },
      {
        problem: "High appointment no-show rates and fragmented client communications.",
        solution:
          "Automated SMS & email reminders, easy rescheduling links, and unified inbox tracking.",
      },
    ],
    capabilities: [
      {
        title: "Digital Client Intake & Forms",
        description:
          "Clean, accessible online intake and referral portals that pre-fill client profiles accurately.",
      },
      {
        title: "Automated Appointment Scheduling",
        description:
          "Real-time calendar availability, instant confirmations, and automated SMS/email reminders.",
      },
      {
        title: "Omnichannel Support Inbox",
        description:
          "Unify web chat, email, contact forms, and social inquiries into one organized team workspace.",
      },
      {
        title: "Smart Routing & Escalation",
        description:
          "Automatically direct urgent requests, billing questions, or new leads to the right specialist.",
      },
      {
        title: "24/7 AI Concierge Backup",
        description:
          "Instant after-hours answers for FAQs, directions, and appointment booking when staff are offline.",
      },
      {
        title: "CRM & Practice System Sync",
        description:
          "Keep every booking, message, and client note automatically logged in your central database.",
      },
    ],
    benefits: [
      "Dramatically reduce repetitive phone volume for front-desk staff",
      "Capture bookings and inquiries 24/7—even outside business hours",
      "Cut appointment no-shows with automated SMS & email reminders",
      "Deliver a calm, polished, modern client experience from first touch",
    ],
    process: [
      {
        step: 1,
        title: "Reception Audit",
        description: "Map call volume, booking bottlenecks, and client touchpoints.",
      },
      {
        step: 2,
        title: "System Setup",
        description: "Design intake portals, calendar rules, and routing workflows.",
      },
      {
        step: 3,
        title: "Integration & QA",
        description: "Connect CRM, SMS/email reminders, and test every client path.",
      },
      {
        step: 4,
        title: "Staff Training",
        description: "Onboard your front-desk team smoothly and monitor CSAT.",
      },
    ],
    faqs: [
      {
        question: "Which industries benefit most from Front-Desk Solutions?",
        answer:
          "Healthcare clinics, hospitality groups, real estate agencies, legal/advisory firms, and service businesses handling high daily booking or inquiry volume.",
      },
      {
        question: "Will this replace our front-desk team?",
        answer:
          "Not at all—it empowers them. By automating routine bookings, reminders, and intake data entry, your staff can focus on high-touch client care.",
      },
      {
        question: "Can it sync with our existing calendars and CRM?",
        answer:
          "Yes. We integrate seamlessly with Google Calendar, Microsoft Outlook, HubSpot, Salesforce, and industry scheduling platforms.",
      },
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((solution) => solution.slug);
}
