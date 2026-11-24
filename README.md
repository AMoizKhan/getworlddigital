# GetWorldDigital — Next.js Website Architecture & Setup

## Phase 1: Structural & Architectural Blueprint

> **Note:** Color palettes, UI themes, typography, and visual styling are intentionally excluded at this stage. Focus strictly on layout scaffolding, routing, component hierarchy, and data flow.

### 1. Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS (structural layout / grid spacing for wireframing)
- Lucide React (structural placeholder icons)

### 2. Project Folder Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── portfolio/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/ (Header, Footer)
│   ├── sections/ (12 homepage sections)
│   └── ui/ (Button, Card, Container, Section)
└── data/
    ├── services.ts
    ├── projects.ts
    └── testimonials.ts
```

### 3. Sitemap

- `/` — Homepage (12 sections + Header/Footer)
- `/about` — Company introduction, mission, vision, team
- `/services` — All services overview
- `/services/[slug]` — Service detail (overview, benefits, process, CTA)
- `/portfolio` — Projects & case studies
- `/contact` — Contact details + inquiry form

### 4. Homepage Section Order

1. Header (layout)
2. Hero
3. TrustIndicators
4. About
5. Services
6. WhyChooseUs
7. Expertise
8. Process
9. Portfolio
10. Industries
11. Testimonials
12. FAQ
13. CTA
14. Footer (layout)

### 5. Development Roadmap

- [x] Step 1: Sitemap & Structure Definition
- [x] Step 2: Low-Fidelity Wireframing (grayscale structural skeleton)
- [ ] Step 3: Content & Data Integration (real copy & case studies)
- [ ] Step 4: Design System & UI Styling
- [ ] Step 5: Testing, SEO & Deployment

### Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
