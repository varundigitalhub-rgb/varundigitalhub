import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function BusinessTemplate2() {
  const services = [
    {
      title: "Professional Services",
      description: "Comprehensive professional services for modern businesses.",
      icon: "🏢"
    },
    {
      title: "Business Development",
      description: "Accelerate your business growth with proven development strategies.",
      icon: "📈"
    },
    {
      title: "Operations Management",
      description: "Streamline your operations for maximum efficiency and productivity.",
      icon: "⚙️"
    },
    {
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge digital solutions.",
      icon: "💻"
    }
  ];

  const testimonials = [
    {
      text: "Outstanding professional services that delivered real results.",
      author: "Amit Patel",
      role: "Managing Director, Global Solutions"
    },
    {
      text: "Their expertise in business development is unmatched.",
      author: "Sneha Gupta",
      role: "Founder, NextGen Enterprises"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero
        title="Professional Business Solutions"
        subtitle="Expert services to help your business reach new heights of success and innovation."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978"
        primaryButton={{
          text: "Contact Us",
          href: "https://wa.me/919372787128?text=I want the Professional Services template"
        }}
        secondaryButton={{
          text: "View Services",
          href: "#services"
        }}
      />

      <Services
        title="Our Professional Services"
        subtitle="Tailored solutions for modern business challenges"
        services={services}
        id="services"
      />

      <Testimonials testimonials={testimonials} />

      <Contact />

      <Footer />
    </main>
  );
}
