import type { Metadata } from "next";
import ServicesHeroSection from "../components/ServicesHeroSection";
import ServicesGridSection from "../components/ServicesGridSection";
import CTASection from "../components/CTASection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Web Design Services | Affordable Website Development in Mumbai",
    description: "Professional web design and development services in Mumbai. SEO-optimized websites for coaching institutes, businesses, and e-commerce. Affordable pricing starting from ₹12,000.",
    keywords: [
      "Web design services Mumbai",
      "Website development in Mumbai",
      "Affordable web design agency",
      "E-commerce website development",
      "SEO optimized websites"
    ],
    openGraph: {
      title: "Web Design Services | Affordable Website Development in Mumbai",
      description: "Professional web design and development services in Mumbai. SEO-optimized websites for coaching institutes, businesses, and e-commerce.",
      url: "https://varun-digital-hub.vercel.app/services",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Web Design Services in Mumbai"
        }
      ],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "Web Design Services | Mumbai",
      description: "Affordable web design and development services in Mumbai.",
      images: ["/og-image.png"]
    },
    alternates: {
      canonical: "https://varun-digital-hub.vercel.app/services"
    }
  };
}

export default function Services() {
  return (
    <main className="bg-white overflow-hidden">
      <ServicesHeroSection />
      <ServicesGridSection />
      <CTASection />
    </main>
  );
}
