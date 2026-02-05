import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function PortfolioTemplate1() {
  const services = [
    {
      title: "Creative Portfolio",
      description: "Showcase your creative work with stunning portfolio layouts.",
      icon: "🎨"
    },
    {
      title: "Project Showcase",
      description: "Beautiful galleries to display your projects and achievements.",
      icon: "📸"
    },
    {
      title: "About Section",
      description: "Personal story and expertise presentation.",
      icon: "👤"
    },
    {
      title: "Contact Integration",
      description: "Easy client contact forms and social media links.",
      icon: "📧"
    }
  ];

  const testimonials = [
    {
      text: "This portfolio template helped me stand out and attract amazing clients.",
      author: "Vikram Singh",
      role: "Freelance Photographer"
    },
    {
      text: "Clean, modern design that perfectly represents my creative style.",
      author: "Maya Reddy",
      role: "Graphic Designer"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero
        title="Creative Portfolio Showcase"
        subtitle="Professional portfolio templates designed for creative professionals and artists."
        backgroundImage="https://images.unsplash.com/photo-1542744094-3a31f272c490"
        primaryButton={{
          text: "Create Portfolio",
          href: "https://wa.me/919372787128?text=I want the Creative Portfolio template"
        }}
        secondaryButton={{
          text: "View Examples",
          href: "#services"
        }}
      />

      <Services
        title="Portfolio Features"
        subtitle="Everything you need to showcase your creative work professionally"
        services={services}
        id="services"
      />

      <Testimonials testimonials={testimonials} />

      <Contact />

      <Footer />
    </main>
  );
}
