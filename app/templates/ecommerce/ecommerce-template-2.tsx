import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function EcommerceTemplate2() {
  const services = [
    {
      title: "Fashion Boutique",
      description: "Elegant fashion store layouts perfect for clothing and accessories.",
      icon: "👗"
    },
    {
      title: "Product Filtering",
      description: "Advanced filtering by size, color, price, and category.",
      icon: "🔍"
    },
    {
      title: "Customer Reviews",
      description: "Integrated review system to build trust and social proof.",
      icon: "⭐"
    },
    {
      title: "Mobile Shopping",
      description: "Fully responsive design optimized for mobile shopping experience.",
      icon: "📱"
    }
  ];

  const testimonials = [
    {
      text: "This boutique template perfectly captures our brand's elegance and style.",
      author: "Priya Kapoor",
      role: "Designer, Luxe Fashion"
    },
    {
      text: "Mobile sales have doubled since we went live with this template.",
      author: "Rahul Jain",
      role: "Founder, TrendyWear"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero
        title="Fashion Boutique Online"
        subtitle="Stunning e-commerce templates designed specifically for fashion and lifestyle brands."
        backgroundImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        primaryButton={{
          text: "Create Boutique",
          href: "https://wa.me/919372787128?text=I want the Fashion Boutique template"
        }}
        secondaryButton={{
          text: "Explore Features",
          href: "#services"
        }}
      />

      <Services
        title="Boutique Features"
        subtitle="Specialized features for fashion and lifestyle e-commerce"
        services={services}
        id="services"
      />

      <Testimonials testimonials={testimonials} />

      <Contact />

      <Footer />
    </main>
  );
}
