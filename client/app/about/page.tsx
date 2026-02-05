import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Varun Digital Hub | Web Developer in Mumbai - Our Story",
    description: "Learn about Varun Digital Hub, a Mumbai-based web developer helping local businesses grow online with affordable, SEO-optimized websites for coaching institutes and shops.",
    keywords: [
      "About Varun Digital Hub",
      "Web developer in Mumbai",
      "Mumbai web agency",
      "Local business website developer"
    ],
    openGraph: {
      title: "About Varun Digital Hub | Web Developer in Mumbai",
      description: "Varun Digital Hub supports Mumbai’s local businesses with affordable, SEO-optimized websites.",
      url: "https://varun-digital-hub.vercel.app/about",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "About Varun Digital Hub"
        }
      ],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "About Varun Digital Hub | Web Developer in Mumbai",
      description: "Learn about our mission to help Mumbai businesses grow online.",
      images: ["/og-image.png"]
    },
    alternates: {
      canonical: "https://varun-digital-hub.vercel.app/about"
    }
  };
}

export default function About() {
  return <AboutClient />;
}
