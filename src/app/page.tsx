import {
  About,
  CTA,
  Expertise,
  FAQ,
  Hero,
  Industries,
  Portfolio,
  Process,
  Services,
  Testimonials,
  TrustIndicators,
  WhyChooseUs,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <About />
      <Services />
      <WhyChooseUs />
      <Expertise />
      <Process />
      <Portfolio />
      <Industries />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
