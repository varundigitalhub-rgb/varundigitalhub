import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Varun Digital Hub | Web Developer in Mumbai - Affordable Website Design",
    description: "Helping Mumbai’s local businesses grow online with SEO-optimized, responsive websites. Web developer in Mumbai for coaching institutes, shops, and startups. Affordable web design agency in Malad.",
    keywords: [
      "Web developer in Mumbai",
      "Website design for coaching institutes",
      "Affordable web design agency in Malad",
      "Local business website developer Mumbai"
    ],
    openGraph: {
      title: "Varun Digital Hub | Web Developer in Mumbai - Affordable Website Design",
      description: "Helping Mumbai’s local businesses grow online with SEO-optimized, responsive websites.",
      url: "https://varun-digital-hub.vercel.app/",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Varun Digital Hub - Web Agency in Mumbai"
        }
      ],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "Varun Digital Hub | Web Developer in Mumbai",
      description: "Helping Mumbai’s local businesses grow online with SEO-optimized websites.",
      images: ["/og-image.png"]
    },
    alternates: {
      canonical: "https://varun-digital-hub.vercel.app/"
    }
  };
}







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
