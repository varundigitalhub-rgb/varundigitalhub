import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function PortfolioTemplate2() {
  const services = [
    {
      title: "Designer Showcase",
      description: "Professional portfolio layouts perfect for showcasing design work.",
      icon: "🎯"
    },
    {
      title: "Project Galleries",
      description: "Beautiful galleries to display your projects and case studies.",
      icon: "📁"
    },
    {
      title: "Client Testimonials",
      description: "Integrated testimonial sections to build credibility.",
      icon: "💬"
    },
    {
      title: "Contact Integration",
      description: "Easy-to-use contact forms and social media integration.",
      icon: "📧"
    }
  ];

  const testimonials = [
    {
      text: "This portfolio template helped me land my dream job. Highly recommended!",
      author: "Arjun Mehta",
      role: "Senior Designer, TechGiant"
    },
    {
      text: "Clean, professional design that perfectly showcases creative work.",
      author: "Kavita Joshi",
      role: "Freelance Designer"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero
        title="Designer Portfolio Showcase"
        subtitle="Professional portfolio templates designed specifically for creative professionals."
        backgroundImage="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c"
        primaryButton={{
          text: "Start Designing",
          href: "https://wa.me/919372787128?text=I want the Designer Showcase template"
        }}
        secondaryButton={{
          text: "See Examples",
          href: "#services"
        }}
      />

      <Services
        title="Portfolio Features"
        subtitle="Everything you need to create an impressive online presence"
        services={services}
        id="services"
      />

      <Testimonials testimonials={testimonials} />

      <Contact />

      <Footer />
    </main>
  );
}
