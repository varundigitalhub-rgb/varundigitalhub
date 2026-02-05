import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
