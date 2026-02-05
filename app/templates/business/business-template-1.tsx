import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function BusinessTemplate1() {
  const services = [
    {
      title: "Consulting Services",
      description: "Expert business consulting to help you grow and scale your operations.",
      icon: "💼"
    },
    {
      title: "Strategic Planning",
      description: "Develop comprehensive business strategies for long-term success.",
      icon: "📊"
    },
    {
      title: "Financial Advisory",
      description: "Professional financial guidance and investment planning services.",
      icon: "💰"
    },
    {
      title: "Market Research",
      description: "In-depth market analysis and competitive intelligence reports.",
      icon: "🔍"
    }
  ];

  const testimonials = [
    {
      text: "Their strategic insights transformed our business approach completely.",
      author: "Rajesh Kumar",
      role: "CEO, TechCorp"
    },
    {
      text: "Professional, reliable, and results-driven consulting services.",
      author: "Priya Sharma",
      role: "Director, Innovate Ltd"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero
        title="Empowering Business Growth"
        subtitle="Strategic consulting and advisory services to help your business thrive in today's competitive market."
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
        primaryButton={{
          text: "Get Started",
          href: "https://wa.me/919372787128?text=I want the Corporate Business template"
        }}
        secondaryButton={{
          text: "Our Services",
          href: "#services"
        }}
      />

      <Services
        title="Our Consulting Services"
        subtitle="Comprehensive business solutions tailored to your needs"
        services={services}
        id="services"
      />

      <Testimonials testimonials={testimonials} />

      <Contact />

      <Footer />
    </main>
  );
}
