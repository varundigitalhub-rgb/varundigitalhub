import ServicesHeroSection from "../components/ServicesHeroSection";
import ServicesGridSection from "../components/ServicesGridSection";
import CTASection from "../components/CTASection";

export default function Services() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <ServicesHeroSection />
      <ServicesGridSection />
      <CTASection />
    </main>
  );
}
