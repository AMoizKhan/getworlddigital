export type ServiceRoadmapStep = {
  step: number;
  phase: string;
  duration: string;
  title: string;
  description: string;
  milestone: string;
};

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  portfolioPath: string;
  shortDescription: string;
  overview: string;
  metrics: { value: string; label: string }[];
  deliverables: { title: string; description: string }[];
  benefits: string[];
  stack: string[];
  process: ServiceRoadmapStep[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "ai-chatbot",
    title: "AI Chatbot",
    tagline: "24/7 intelligent website & app chat trained on your business",
    image: "/services/ai-chatbot.svg",
    portfolioPath: "/public/portfolio/ai-chatbot.webp",
    shortDescription:
      "Deploy smart, brand-trained AI chatbots that answer questions, qualify visitors, and capture leads around the clock.",
    overview:
      "Turn passive website traffic into active conversations. Our AI Chatbots are grounded strictly in your services, pricing, and knowledge base—delivering instant, accurate answers across web, WhatsApp, and social channels while seamlessly handing complex inquiries and hot leads directly to your team.",
    metrics: [
      { value: "24/7", label: "Instant Visitor Response" },
      { value: "3×", label: "Higher Website Lead Capture" },
      { value: "98%", label: "Knowledge-Grounded Accuracy" },
    ],
    deliverables: [
      {
        title: "Custom Knowledge Base Training",
        description:
          "Trained directly on your website pages, PDFs, FAQs, and service catalogs with strict anti-hallucination guardrails.",
      },
      {
        title: "Lead Capture & Qualification",
        description:
          "Collects visitor name, email, budget, and project requirements naturally inside the conversation.",
      },
      {
        title: "Instant Calendar & CRM Sync",
        description:
          "Pushes qualified conversations, transcripts, and contact profiles directly into your CRM and calendar.",
      },
      {
        title: "Human Live-Chat Handoff",
        description:
          "Smart escalation rules alert your staff via Slack or email whenever a high-value prospect needs a human.",
      },
      {
        title: "Multi-Language Support",
        description:
          "Communicates fluently with global visitors in multiple languages while preserving your brand tone.",
      },
      {
        title: "Analytics & Conversation Logs",
        description:
          "Full dashboard tracking top customer questions, drop-off points, and total leads generated.",
      },
    ],
    benefits: [
      "Engage every website visitor in under 2 seconds, day or night",
      "Capture qualified leads outside normal business hours",
      "Reduce repetitive pre-sales questions for your team",
      "Consistent, accurate, brand-aligned responses every time",
    ],
    stack: ["OpenAI / Gemini", "Next.js", "RAG Knowledge Base", "Webhooks", "CRM API"],
    process: [
      {
        step: 1,
        phase: "Phase 01",
        duration: "Week 1",
        title: "Knowledge & Tone Audit",
        description:
          "Collect your FAQs, service docs, brand voice, and lead qualification criteria.",
        milestone: "Approved chatbot script & knowledge map",
      },
      {
        step: 2,
        phase: "Phase 02",
        duration: "Week 2",
        title: "AI Training & Guardrails",
        description:
          "Configure retrieval pipelines, safety boundaries, and natural qualification flows.",
        milestone: "Interactive staging chatbot ready for review",
      },
      {
        step: 3,
        phase: "Phase 03",
        duration: "Week 3",
        title: "CRM & Widget Integration",
        description:
          "Embed custom-branded widget on your site and wire live CRM, Slack, and booking hooks.",
        milestone: "End-to-end live test & lead sync verified",
      },
      {
        step: 4,
        phase: "Phase 04",
        duration: "Ongoing",
        title: "Launch & Optimization",
        description:
          "Go live, review real conversation logs, and tune responses to maximize conversion.",
        milestone: "Live analytics & monthly accuracy tuning",
      },
    ],
    faqs: [
      {
        question: "Will the chatbot give wrong or off-brand answers?",
        answer:
          "No. We ground responses strictly in your verified business documents with fallback rules that politely escalate to your team whenever a question falls outside scope.",
      },
      {
        question: "Can it match our website design and branding?",
        answer:
          "Yes—we style the chat launcher, colors, typography, and avatar to blend seamlessly into your site.",
      },
      {
        question: "How fast can we launch an AI Chatbot?",
        answer:
          "Most custom brand-trained chatbots go live in 2–3 weeks including CRM integration and testing.",
      },
    ],
  },
  {
    slug: "ai-voice-receptionist",
    title: "AI Voice Receptionist",
    tagline: "Human-sounding AI phone agents that never miss a call",
    image: "/services/ai-voice-receptionist.svg",
    portfolioPath: "/public/portfolio/ai-voice-receptionist.webp",
    shortDescription:
      "Answer every inbound phone call instantly with natural-sounding AI voice agents that book appointments and route callers.",
    overview:
      "Missed calls mean missed revenue. Our AI Voice Receptionists pick up every call on the first ring with natural, low-latency conversational speech—handling inquiries, screening callers, booking appointments directly into your calendar, and transferring urgent calls to the right team member 24/7.",
    metrics: [
      { value: "0", label: "Missed Customer Calls" },
      { value: "<1s", label: "Natural Voice Response" },
      { value: "24/7", label: "After-Hours Phone Coverage" },
    ],
    deliverables: [
      {
        title: "Natural Conversational Voice Agent",
        description:
          "Lifelike voice tone with real-time interruption handling, clear diction, and custom greeting scripts.",
      },
      {
        title: "Live Appointment Booking on Call",
        description:
          "Checks real-time calendar availability and books or reschedules caller appointments mid-conversation.",
      },
      {
        title: "Intelligent Call Routing & Transfer",
        description:
          "Warm-transfers urgent or VIP callers directly to the right department with a spoken summary.",
      },
      {
        title: "Instant Call Summaries & Transcripts",
        description:
          "Every call is automatically transcribed, summarized, and logged into your CRM with recording links.",
      },
      {
        title: "SMS & WhatsApp Follow-Up Links",
        description:
          "Sends callers instant booking confirmations, location pins, or intake links right after hanging up.",
      },
      {
        title: "Existing Phone Number Integration",
        description:
          "Works seamlessly with your existing business phone number, Twilio, or SIP trunking setup.",
      },
    ],
    benefits: [
      "Eliminate voicemail drop-offs and after-hours lost leads",
      "Handle multiple simultaneous callers with zero hold time",
      "Cut front-desk staffing overhead while elevating caller care",
      "Full transcripts and CRM logging for every single call",
    ],
    stack: ["Voice AI", "Twilio / SIP", "Calendar API", "CRM Webhooks", "SMS Automation"],
    process: [
      {
        step: 1,
        phase: "Phase 01",
        duration: "Week 1",
        title: "Call Flow & Script Design",
        description:
          "Map your top caller intents, routing rules, FAQs, and preferred voice persona.",
        milestone: "Approved voice persona & call tree",
      },
      {
        step: 2,
        phase: "Phase 02",
        duration: "Week 2",
        title: "Voice Agent & Calendar Build",
        description:
          "Configure low-latency voice models, booking tools, and live warm-transfer numbers.",
        milestone: "Test phone line ready for live trial calls",
      },
      {
        step: 3,
        phase: "Phase 03",
        duration: "Week 3",
        title: "Number Routing & CRM Sync",
        description:
          "Connect your business line (full-time or overflow/after-hours) and wire CRM summaries.",
        milestone: "Live call logging & SMS follow-up verified",
      },
      {
        step: 4,
        phase: "Phase 04",
        duration: "Ongoing",
        title: "Monitoring & Script Tuning",
        description:
          "Review real call recordings and refine phrasing to boost booking rates continuously.",
        milestone: "Weekly call analytics & quality review",
      },
    ],
    faqs: [
      {
        question: "Does the AI Voice Receptionist sound robotic?",
        answer:
          "Not at all. We use ultra-low-latency neural voice models with natural pacing, warmth, and smooth interruption handling.",
      },
      {
        question: "Can we use it only for after-hours or missed calls?",
        answer:
          "Yes! You can configure it to answer 24/7, only after business hours, or automatically whenever your staff doesn't pick up within 3 rings.",
      },
      {
        question: "Can it transfer calls to a real person when needed?",
        answer:
          "Yes—it supports instant live call transfers for emergencies, VIP clients, or specific departments.",
      },
    ],
  },
  {
    slug: "lead-generation-follow-up",
    title: "Lead Generation & Follow-up",
    tagline: "Automated lead capture, instant speed-to-lead & smart nurturing",
    image: "/services/lead-generation.svg",
    portfolioPath: "/public/portfolio/lead-generation-follow-up.webp",
    shortDescription:
      "Capture high-intent leads, respond in under 60 seconds, and nurture every prospect automatically until they book.",
    overview:
      "Speed-to-lead wins deals. Most businesses lose up to 60% of inbound inquiries simply because follow-ups take hours or stop after one email. We build automated Lead Generation & Follow-up engines that capture prospects across ads, web forms, and chat—then engage, qualify, and follow up persistently until a meeting is booked.",
    metrics: [
      { value: "<60s", label: "Automated Speed-to-Lead" },
      { value: "3.5×", label: "More Booked Sales Calls" },
      { value: "100%", label: "Leads Followed Up Consistently" },
    ],
    deliverables: [
      {
        title: "High-Converting Lead Capture Funnels",
        description:
          "Connected web forms, Meta/Google lead ads, and chat capture routed straight into one central pipeline.",
      },
      {
        title: "Instant AI Lead Response (<60s)",
        description:
          "Immediate personalized SMS, WhatsApp, and email outreach triggered the second a prospect submits a form.",
      },
      {
        title: "Automated Multi-Touch Nurture",
        description:
          "Smart 7-to-30-day follow-up sequences that pause automatically the moment a lead replies or books.",
      },
      {
        title: "Lead Scoring & Enrichment",
        description:
          "Automatically scores prospects by intent, budget, and company fit so sales focuses on top deals first.",
      },
      {
        title: "Dead-Lead Reactivation Campaigns",
        description:
          "AI-powered re-engagement sequences that revive older unclosed leads sitting idle in your database.",
      },
      {
        title: "Pipeline Attribution Dashboard",
        description:
          "Clear tracking from ad click or form fill all the way to booked appointment and closed revenue.",
      },
    ],
    benefits: [
      "Contact every new lead before competitors even open their inbox",
      "Zero leads forgotten or lost between marketing and sales",
      "Consistent multi-channel follow-up across email, SMS & WhatsApp",
      "Higher ROI from your existing ad spend and website traffic",
    ],
    stack: ["Meta & Google Ads Sync", "CRM Pipelines", "AI Copywriting", "SMS / WhatsApp", "Webhooks"],
    process: [
      {
        step: 1,
        phase: "Phase 01",
        duration: "Week 1",
        title: "Funnel & Lead Source Audit",
        description:
          "Map all inbound lead sources, response gaps, and ideal customer qualification rules.",
        milestone: "Lead capture & response blueprint",
      },
      {
        step: 2,
        phase: "Phase 02",
        duration: "Week 2",
        title: "Sequence & Scoring Build",
        description:
          "Craft high-converting follow-up messages and build smart branching automation workflows.",
        milestone: "Automated follow-up flows ready for QA",
      },
      {
        step: 3,
        phase: "Phase 03",
        duration: "Week 3",
        title: "Channel & CRM Integration",
        description:
          "Wire ad forms, website forms, calendar booking, and instant sales rep alerts.",
        milestone: "Live speed-to-lead tested end-to-end",
      },
      {
        step: 4,
        phase: "Phase 04",
        duration: "Ongoing",
        title: "Conversion Optimization",
        description:
          "A/B test follow-up timing and messaging to continuously lift reply and booking rates.",
        milestone: "Monthly pipeline & conversion report",
      },
    ],
    faqs: [
      {
        question: "Will automated follow-ups stop when a prospect replies?",
        answer:
          "Yes! Our workflows detect replies and bookings immediately, pausing the sequence and alerting your sales rep to take over.",
      },
      {
        question: "Can this connect to our Facebook, Instagram, and Google Lead Forms?",
        answer:
          "Yes—new ad leads enter your CRM and receive an instant personalized message within seconds of submitting.",
      },
      {
        question: "Can we reactivate old leads we already have in spreadsheets?",
        answer:
          "Absolutely. Importing and running a tailored reactivation flow on past inquiries is often one of the fastest ROI wins.",
      },
    ],
  },
  {
    slug: "appointment-booking-automation",
    title: "Appointment Booking Automation",
    tagline: "Frictionless self-serve scheduling with automated reminders",
    image: "/services/appointment-booking.svg",
    portfolioPath: "/public/portfolio/appointment-booking-automation.webp",
    shortDescription:
      "Eliminate back-and-forth scheduling with automated booking flows, calendar sync, and no-show prevention reminders.",
    overview:
      "Manual scheduling wastes staff hours and cools down interested prospects. Our Appointment Booking Automation creates effortless self-serve booking across your website, chatbot, voice agent, and WhatsApp—synced live with your team calendars and backed by automated confirmations, prep forms, and reminder sequences.",
    metrics: [
      { value: "-65%", label: "Reduction in No-Shows" },
      { value: "24/7", label: "Self-Serve Online Booking" },
      { value: "100%", label: "Real-Time Calendar Sync" },
    ],
    deliverables: [
      {
        title: "Branded Online Booking Portals",
        description:
          "Clean, mobile-friendly booking flows tailored by service type, duration, location, or staff member.",
      },
      {
        title: "Round-Robin & Team Calendar Routing",
        description:
          "Distribute appointments fairly across sales reps or specialists synced live with Google & Outlook calendars.",
      },
      {
        title: "Automated SMS, WhatsApp & Email Reminders",
        description:
          "Timed 24-hour and 1-hour reminders with one-tap confirmation or rescheduling links.",
      },
      {
        title: "Pre-Appointment Intake & Payments",
        description:
          "Collect intake questionnaires, deposits, or consultation fees automatically before the meeting.",
      },
      {
        title: "No-Show & Cancellation Recovery",
        description:
          "Automatically follows up with missed appointments to rebook open slots without staff chasing.",
      },
      {
        title: "CRM & Video Link Generation",
        description:
          "Auto-creates Zoom, Google Meet, or Teams links and logs every booking inside your CRM.",
      },
    ],
    benefits: [
      "Let clients book instantly without phone tag or email chains",
      "Slash costly no-shows with smart multi-channel reminders",
      "Prevent double bookings with live two-way calendar sync",
      "Keep sales and service calendars consistently full",
    ],
    stack: ["Google Calendar", "Outlook 365", "Cal.com / Calendly API", "Twilio SMS", "Stripe"],
    process: [
      {
        step: 1,
        phase: "Phase 01",
        duration: "Week 1",
        title: "Scheduling Rules & Availability",
        description:
          "Define meeting types, buffer times, staff routing rules, and intake fields.",
        milestone: "Booking logic & routing spec approved",
      },
      {
        step: 2,
        phase: "Phase 02",
        duration: "Week 2",
        title: "Portal & Reminder Build",
        description:
          "Build branded booking UI, calendar sync, video link generation, and reminder flows.",
        milestone: "Live test bookings & reminders verified",
      },
      {
        step: 3,
        phase: "Phase 03",
        duration: "Week 3",
        title: "Website, Chat & CRM Wiring",
        description:
          "Embed across website CTAs, AI Chatbot, WhatsApp, and CRM deal pipelines.",
        milestone: "Omnichannel booking live across touchpoints",
      },
      {
        step: 4,
        phase: "Phase 04",
        duration: "Ongoing",
        title: "Show-Rate Optimization",
        description:
          "Monitor booking drop-offs and fine-tune reminder timing for peak attendance.",
        milestone: "Monthly booking & show-rate scorecard",
      },
    ],
    faqs: [
      {
        question: "Does it sync with Google Calendar and Microsoft Outlook?",
        answer:
          "Yes—two-way real-time sync prevents double bookings across Google Workspace, Outlook, and Apple calendars.",
      },
      {
        question: "Can clients reschedule or cancel without calling us?",
        answer:
          "Yes. Every confirmation includes a secure link allowing clients to reschedule within your allowed policy window.",
      },
      {
        question: "Can we require deposits or intake forms during booking?",
        answer:
          "Absolutely. We can integrate Stripe deposits and custom intake questionnaires right into the booking step.",
      },
    ],
  },
  {
    slug: "customer-support-automation",
    title: "Customer Support Automation",
    tagline: "Fast, accurate AI ticket triage & 24/7 self-service resolution",
    image: "/services/customer-support.svg",
    portfolioPath: "/public/portfolio/customer-support-automation.webp",
    shortDescription:
      "Resolve routine support tickets automatically, prioritize urgent issues, and elevate customer satisfaction effortlessly.",
    overview:
      "Growing businesses shouldn't have to double support headcount every time customer volume grows. Our Customer Support Automation resolves repetitive tier-1 tickets instantly using verified help-center knowledge, categorizes and routes complex issues with full context, and keeps customers updated automatically.",
    metrics: [
      { value: "72%", label: "Tier-1 Tickets Auto-Resolved" },
      { value: "5×", label: "Faster First Response Time" },
      { value: "97%", label: "Customer Satisfaction (CSAT)" },
    ],
    deliverables: [
      {
        title: "AI Tier-1 Ticket Resolution",
        description:
          "Answers order status, account, billing, and troubleshooting queries instantly with verified accuracy.",
      },
      {
        title: "Smart Ticket Tagging & Priority Routing",
        description:
          "Automatically detects urgency, sentiment, and topic to route complex tickets straight to the right agent.",
      },
      {
        title: "AI Agent-Assist Draft Replies",
        description:
          "Pre-drafts accurate responses and summarizes long ticket threads so human agents resolve cases in half the time.",
      },
      {
        title: "Omnichannel Unified Support Desk",
        description:
          "Brings email, web chat, WhatsApp, and help-form tickets into one structured workspace.",
      },
      {
        title: "Automated Status & CSAT Follow-Ups",
        description:
          "Sends proactive ticket updates and post-resolution satisfaction surveys automatically.",
      },
      {
        title: "Self-Service Help Center Sync",
        description:
          "Turns recurring ticket solutions into searchable knowledge articles that continuously improve automation.",
      },
    ],
    benefits: [
      "Slash first-response time from hours down to seconds",
      "Free human support agents to focus on complex, high-value customers",
      "Scale support capacity effortlessly during peak seasons",
      "Track SLA compliance, CSAT, and recurring issues in real time",
    ],
    stack: ["AI Helpdesk", "Zendesk / Freshdesk / Intercom", "Knowledge RAG", "Slack Alerts", "CRM Sync"],
    process: [
      {
        step: 1,
        phase: "Phase 01",
        duration: "Week 1",
        title: "Ticket & FAQ Analysis",
        description:
          "Audit your past support tickets to identify the highest-volume automatable issues.",
        milestone: "Top automation opportunities & SLA map",
      },
      {
        step: 2,
        phase: "Phase 02",
        duration: "Week 2",
        title: "AI Resolution & Routing Setup",
        description:
          "Train help-center AI, configure escalation rules, and build agent-assist workflows.",
        milestone: "Sandbox ticket tests validated for accuracy",
      },
      {
        step: 3,
        phase: "Phase 03",
        duration: "Week 3",
        title: "Helpdesk & Channel Rollout",
        description:
          "Connect email, chat, WhatsApp, and order/CRM lookups for real-time answers.",
        milestone: "Live automated triage & team onboarding",
      },
      {
        step: 4,
        phase: "Phase 04",
        duration: "Ongoing",
        title: "CSAT & Knowledge Expansion",
        description:
          "Monitor resolution rates, fill knowledge gaps, and continuously boost CSAT.",
        milestone: "Monthly deflection & CSAT dashboard",
      },
    ],
    faqs: [
      {
        question: "What happens when a customer has a complex or frustrated request?",
        answer:
          "Our sentiment and complexity detection flags it immediately and routes the ticket—with a clean summary—to a human agent.",
      },
      {
        question: "Does this integrate with Zendesk, Freshdesk, Intercom, or HubSpot?",
        answer:
          "Yes—we plug directly into your existing helpdesk or set up a modern streamlined support stack for you.",
      },
      {
        question: "Can the AI look up live order or account status?",
        answer:
          "Yes. Through secure API lookups, it can authenticate customers and provide real-time order, shipping, or booking status.",
      },
    ],
  },
  {
    slug: "email-whatsapp-automation",
    title: "Email & WhatsApp Automation",
    tagline: "Automated multi-channel campaigns, alerts & two-way conversations",
    image: "/services/email-whatsapp.svg",
    portfolioPath: "/public/portfolio/email-whatsapp-automation.webp",
    shortDescription:
      "Engage customers where they actually read and reply with automated Email and official WhatsApp Business workflows.",
    overview:
      "Email delivers depth while WhatsApp delivers 95%+ open rates. Our Email & WhatsApp Automation unifies both channels into intelligent, event-driven customer journeys—from welcome sequences and order updates to abandoned cart recovery, payment reminders, and two-way AI WhatsApp replies.",
    metrics: [
      { value: "95%+", label: "WhatsApp Message Open Rate" },
      { value: "4.2×", label: "Higher Customer Reply Rate" },
      { value: "100%", label: "Official Meta API Compliant" },
    ],
    deliverables: [
      {
        title: "Official WhatsApp Business API Setup",
        description:
          "Verified Meta WhatsApp Cloud API integration with approved message templates and green-tick readiness.",
      },
      {
        title: "Two-Way AI WhatsApp Conversations",
        description:
          "Automated interactive buttons, quick replies, catalog sharing, and AI answers inside WhatsApp.",
      },
      {
        title: "Lifecycle Email Drip Sequences",
        description:
          "Automated onboarding, lead nurture, re-engagement, and post-purchase email campaigns.",
      },
      {
        title: "Transactional Alerts & Reminders",
        description:
          "Instant order confirmations, invoice links, shipping updates, and booking reminders on both channels.",
      },
      {
        title: "Audience Segmentation & Triggers",
        description:
          "Trigger tailored messages based on CRM stage, purchase history, form fills, or website activity.",
      },
      {
        title: "Deliverability & Opt-In Compliance",
        description:
          "SPF/DKIM/DMARC email authentication and clean opt-in/opt-out management to protect sender reputation.",
      },
    ],
    benefits: [
      "Reach customers instantly on WhatsApp with sky-high open rates",
      "Automate repetitive updates, reminders, and nurture campaigns",
      "Keep every WhatsApp and email reply logged inside your CRM",
      "Recover lost sales and boost repeat business on autopilot",
    ],
    stack: ["WhatsApp Cloud API", "Resend / SendGrid", "Klaviyo / Mailchimp", "CRM Triggers", "AI Replies"],
    process: [
      {
        step: 1,
        phase: "Phase 01",
        duration: "Week 1",
        title: "Journey Mapping & Compliance",
        description:
          "Plan customer touchpoints, set up official WhatsApp API, and verify email DNS records.",
        milestone: "Verified WhatsApp API & authenticated domain",
      },
      {
        step: 2,
        phase: "Phase 02",
        duration: "Week 2",
        title: "Templates & Flow Engineering",
        description:
          "Design branded email templates, Meta-approved WhatsApp messages, and trigger rules.",
        milestone: "Complete messaging journeys tested",
      },
      {
        step: 3,
        phase: "Phase 03",
        duration: "Week 3",
        title: "CRM & Store Integration",
        description:
          "Connect website forms, e-commerce events, and CRM pipelines for real-time triggers.",
        milestone: "Automated two-way messaging live",
      },
      {
        step: 4,
        phase: "Phase 04",
        duration: "Ongoing",
        title: "A/B Testing & Conversion Lift",
        description:
          "Track opens, clicks, and replies to refine copy and maximize campaign ROI.",
        milestone: "Monthly engagement & revenue report",
      },
    ],
    faqs: [
      {
        question: "Do you use the official WhatsApp Business API?",
        answer:
          "Yes—we exclusively use the official Meta WhatsApp Business Cloud API so your number stays compliant, reliable, and safe from bans.",
      },
      {
        question: "Can our team jump into a WhatsApp chat manually?",
        answer:
          "Yes. All conversations appear in a shared team inbox so your staff can reply manually anytime while automation pauses cleanly.",
      },
      {
        question: "Will automated emails land in spam?",
        answer:
          "We configure proper SPF, DKIM, and DMARC records, clean list hygiene, and behavioral sending rules to maximize primary inbox placement.",
      },
    ],
  },
  {
    slug: "crm-automation",
    title: "CRM Automation",
    tagline: "Zero-busywork pipelines, automated deal stages & live dashboards",
    image: "/services/crm-dashboard.webp",
    portfolioPath: "/public/portfolio/crm-automation.webp",
    shortDescription:
      "Automate CRM data entry, deal progression, task assignments, invoicing, and real-time KPI reporting.",
    overview:
      "A CRM only works when data stays clean and up to date—yet manual logging slows teams down. Our CRM Automation connects every lead source, email, call, form, and billing event directly into HubSpot, Salesforce, GoHighLevel, or a custom CRM dashboard so pipelines move automatically and leadership sees accurate numbers in real time.",
    metrics: [
      { value: "60%", label: "Less Manual Admin Work" },
      { value: "100%", label: "Clean Synced Pipeline Data" },
      { value: "Real-Time", label: "Executive KPI Dashboards" },
    ],
    deliverables: [
      {
        title: "End-to-End Pipeline Architecture",
        description:
          "Structured deal stages, custom properties, automated stage triggers, and clear sales playbooks.",
      },
      {
        title: "Zero-Touch Lead & Activity Logging",
        description:
          "Auto-syncs web forms, emails, calls, WhatsApp chats, and calendar meetings to the right contact record.",
      },
      {
        title: "Automated Tasks, Quotes & Invoicing",
        description:
          "Triggers proposal generation, follow-up tasks, onboarding emails, and Stripe/QuickBooks invoices on stage changes.",
      },
      {
        title: "Custom Admin & Vendor Portals",
        description:
          "Tailored role-based web dashboards for managing clients, vendors, approvals, and invoices in one place.",
      },
      {
        title: "Data Cleanup & Deduplication",
        description:
          "Automated validation and deduplication rules that keep contact and company records spotless.",
      },
      {
        title: "Live Revenue & Forecast Reports",
        description:
          "Real-time visual charts tracking conversion velocity, rep performance, and revenue forecasts.",
      },
    ],
    benefits: [
      "Eliminate manual CRM data entry for sales and ops teams",
      "Trigger onboarding and invoicing the moment a deal closes",
      "Give leadership accurate, live visibility across every pipeline",
      "Connect disconnected spreadsheets and SaaS tools into one hub",
    ],
    stack: ["HubSpot", "Salesforce", "GoHighLevel", "Custom Next.js CRM", "Node.js", "MySQL"],
    process: [
      {
        step: 1,
        phase: "Phase 01",
        duration: "Week 1",
        title: "Pipeline & Data Audit",
        description:
          "Review current CRM setup, spreadsheets, deal stages, and team handoff gaps.",
        milestone: "Clean CRM schema & automation plan",
      },
      {
        step: 2,
        phase: "Phase 02",
        duration: "Week 2",
        title: "Workflow & Integration Build",
        description:
          "Wire lead capture, stage triggers, task alerts, invoicing, and two-way tool syncs.",
        milestone: "Automated pipeline tested end-to-end",
      },
      {
        step: 3,
        phase: "Phase 03",
        duration: "Week 3",
        title: "Migration & Dashboard Setup",
        description:
          "Clean and migrate existing contacts/deals and launch live executive KPI dashboards.",
        milestone: "Clean data live with role-based access",
      },
      {
        step: 4,
        phase: "Phase 04",
        duration: "Ongoing",
        title: "Team Training & Scaling",
        description:
          "Train sales and operations staff and expand automations as your team grows.",
        milestone: "Team adoption & quarterly CRM tune-up",
      },
    ],
    faqs: [
      {
        question: "Which CRMs do you automate?",
        answer:
          "We automate HubSpot, Salesforce, GoHighLevel, Pipedrive, Zoho—and also build custom role-based CRM web portals tailored to unique workflows.",
      },
      {
        question: "Can you clean up and migrate our messy spreadsheets?",
        answer:
          "Yes. We deduplicate, standardize, and migrate your existing client and lead lists cleanly before turning automations on.",
      },
      {
        question: "Can CRM stage changes trigger invoices and client onboarding?",
        answer:
          "Definitely—moving a deal to Closed-Won can automatically send a contract/invoice, create a project workspace, and notify delivery.",
      },
    ],
  },
  {
    slug: "custom-ai-automation",
    title: "Custom AI Automation",
    tagline: "Bespoke AI agents, document pipelines & internal workflow automation",
    image: "/services/custom-ai.svg",
    portfolioPath: "/public/portfolio/custom-ai-automation.webp",
    shortDescription:
      "Design and engineer bespoke AI agents, document extraction pipelines, and custom API automations tailored to your operations.",
    overview:
      "When off-the-shelf automations aren't enough, we build custom AI systems engineered specifically for your business logic. From intelligent PDF/invoice extraction and multi-step AI agents to private internal knowledge copilots and ERP integrations—we deliver secure, maintainable automation with clear measurable ROI.",
    metrics: [
      { value: "25h+", label: "Team Hours Saved Weekly" },
      { value: "100%", label: "Built Around Your Logic" },
      { value: "Private", label: "Secure Data & Guardrails" },
    ],
    deliverables: [
      {
        title: "Custom Multi-Step AI Agents",
        description:
          "Autonomous agents that research, summarize, draft, classify, and trigger API actions with approval checkpoints.",
      },
      {
        title: "Document, Invoice & PDF Extraction",
        description:
          "Automatically parse PDFs, contracts, receipts, and intake packets into structured database records.",
      },
      {
        title: "Internal Team AI Copilots",
        description:
          "Private company-wide AI assistants connected securely to SOPs, drives, and internal databases.",
      },
      {
        title: "Custom API & Webhook Middleware",
        description:
          "Resilient Node.js / Python services connecting legacy ERPs, databases, and modern SaaS platforms.",
      },
      {
        title: "Automated Reporting & Intelligence",
        description:
          "Scheduled AI-generated operational digests, anomaly alerts, and executive KPI summaries.",
      },
      {
        title: "Security, Logging & Human-in-the-Loop",
        description:
          "Strict data privacy, zero training on your private data, full audit trails, and human review gates.",
      },
    ],
    benefits: [
      "Automate complex workflows unique to your industry and operations",
      "Keep full ownership of your custom code, prompts, and data",
      "Scale output dramatically without expanding operational overhead",
      "Enterprise-grade reliability, error handling, and human oversight",
    ],
    stack: ["OpenAI / Gemini / Claude API", "Node.js", "Python", "n8n / Make", "AWS / Azure", "MySQL"],
    process: [
      {
        step: 1,
        phase: "Phase 01",
        duration: "Week 1",
        title: "Opportunity & ROI Discovery",
        description:
          "Shadow key workflows, quantify hours lost, and architect the highest-ROI AI solution.",
        milestone: "Technical spec & ROI projection signed off",
      },
      {
        step: 2,
        phase: "Phase 02",
        duration: "Weeks 2–3",
        title: "AI Pipeline & Agent Engineering",
        description:
          "Build LLM orchestration, API connectors, validation guardrails, and fallback handling.",
        milestone: "Working prototype tested on real company data",
      },
      {
        step: 3,
        phase: "Phase 03",
        duration: "Week 4",
        title: "Security QA & Deployment",
        description:
          "Stress-test edge cases, configure audit logs and alerts, and deploy to secure cloud.",
        milestone: "Production launch & staff walkthrough",
      },
      {
        step: 4,
        phase: "Phase 04",
        duration: "Ongoing",
        title: "Monitoring & Iteration",
        description:
          "Track accuracy, latency, and cost while expanding automations to new departments.",
        milestone: "Ongoing performance & cost optimization",
      },
    ],
    faqs: [
      {
        question: "Is our company data used to train public AI models?",
        answer:
          "Never. We use enterprise API endpoints with zero-data-retention agreements so your proprietary business data remains strictly private.",
      },
      {
        question: "Do you use no-code tools or custom code?",
        answer:
          "We choose the right tool for reliability—combining custom TypeScript/Python microservices with workflow orchestrators where appropriate.",
      },
      {
        question: "What if we aren't sure which workflows to automate first?",
        answer:
          "We start with a focused discovery workshop to rank your workflows by time saved and implementation speed so you see fast ROI.",
      },
    ],
  },
  {
    slug: "mobile-application",
    title: "Mobile Application",
    tagline: "High-performance iOS & Android apps engineered for daily engagement",
    image: "/services/mobile-development.webp",
    portfolioPath: "/public/portfolio/mobile-application.webp",
    shortDescription:
      "Design, build, and launch sleek native-feel iOS and Android mobile applications powered by modern cloud backends.",
    overview:
      "We turn ambitious product ideas into fast, intuitive mobile applications users love opening every day. Using Flutter and React Native backed by scalable cloud APIs, we deliver seamless iOS and Android apps complete with real-time features, AI integrations, payments, push notifications, and end-to-end App Store launch management.",
    metrics: [
      { value: "4.8★", label: "Avg. App Store Quality" },
      { value: "40%", label: "Faster Cross-Platform Build" },
      { value: "iOS & Android", label: "Unified Production Release" },
    ],
    deliverables: [
      {
        title: "Cross-Platform iOS & Android Apps",
        description:
          "Fluid 60fps Flutter and React Native apps built from a clean, maintainable shared codebase.",
      },
      {
        title: "Mobile UI/UX & Interactive Prototypes",
        description:
          "Thumb-friendly mobile design systems and clickable prototypes validated before code is written.",
      },
      {
        title: "Cloud Backend, Auth & Real-Time Sync",
        description:
          "Secure user authentication, live chat, maps, offline support, and scalable cloud databases.",
      },
      {
        title: "AI Features Inside Your App",
        description:
          "Embed smart AI chat, voice assistants, personalized recommendations, and automated workflows right in-app.",
      },
      {
        title: "In-App Payments & Push Notifications",
        description:
          "Apple Pay, Google Pay, Stripe subscriptions, and targeted push notifications that boost retention.",
      },
      {
        title: "App Store & Google Play Publishing",
        description:
          "Complete build signing, TestFlight betas, compliance checks, and store submission approval support.",
      },
    ],
    benefits: [
      "Launch on both iOS and Android faster from one unified codebase",
      "Polished mobile UX engineered for retention and 5-star reviews",
      "Full-stack delivery covering mobile app, APIs, and admin dashboard",
      "End-to-end support through App Store & Play Store approval",
    ],
    stack: ["Flutter", "React Native", "Node.js", "MySQL", "AWS", "Firebase"],
    process: [
      {
        step: 1,
        phase: "Phase 01",
        duration: "Weeks 1–2",
        title: "Product Strategy & Prototype",
        description:
          "Define MVP features, map mobile user flows, and validate an interactive prototype.",
        milestone: "Approved clickable mobile prototype",
      },
      {
        step: 2,
        phase: "Phase 02",
        duration: "Weeks 3–6",
        title: "App & Cloud API Engineering",
        description:
          "Build core mobile screens, backend APIs, auth, and integrations in weekly sprints.",
        milestone: "Live TestFlight & Android preview builds",
      },
      {
        step: 3,
        phase: "Phase 03",
        duration: "Weeks 7–8",
        title: "QA, Performance & Store Prep",
        description:
          "Device testing across screen sizes, crash telemetry, and store submission packages.",
        milestone: "Release candidate approved for stores",
      },
      {
        step: 4,
        phase: "Phase 04",
        duration: "Ongoing",
        title: "Store Launch & Growth",
        description:
          "Publish live to App Store & Google Play, monitor analytics, and ship v2 iterations.",
        milestone: "Live app & ongoing feature roadmap",
      },
    ],
    faqs: [
      {
        question: "Do you build for both iOS and Android?",
        answer:
          "Yes! Using Flutter or React Native, we launch high-performance apps simultaneously on both Apple App Store and Google Play.",
      },
      {
        question: "Can you also build the backend server and admin panel?",
        answer:
          "Yes—we deliver the full stack including cloud APIs, database, user management, and a web admin dashboard.",
      },
      {
        question: "Can you integrate AI features like chat or automation into our mobile app?",
        answer:
          "Absolutely. Because we specialize in both AI automation and mobile apps, we embed AI assistants, smart booking, and CRM sync seamlessly.",
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
