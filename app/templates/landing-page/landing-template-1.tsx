import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../../utils/animations";

export default function LandingTemplate1() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-800/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="Modern business workspace"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            className="max-w-4xl text-center"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              variants={fadeInUp}
            >
              Transform Your Business
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Professional solutions that drive results. We help businesses grow with innovative strategies and cutting-edge technology.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={fadeInUp}
            >
              <Link
                href="https://wa.me/919372787128?text=I want to use the Business Landing Page template"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Get This Template
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1440 120" className="relative w-full h-[120px]">
            <path fill="#ffffff" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,122.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="container mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              variants={fadeInUp}
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-12 leading-relaxed"
              variants={fadeInUp}
            >
              We combine expertise, innovation, and dedication to deliver exceptional results.
              Our proven track record and commitment to excellence make us the perfect partner
              for your business success.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Results Focused</h3>
                <p className="text-gray-600">We deliver measurable outcomes that drive your business forward</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation First</h3>
                <p className="text-gray-600">Cutting-edge solutions that keep you ahead of the competition</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Partner</h3>
                <p className="text-gray-600">Your success is our priority, building lasting relationships</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Comprehensive solutions tailored to meet your unique business needs
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              { name: "Digital Marketing", desc: "Strategic online marketing campaigns that drive traffic and conversions", icon: "📈" },
              { name: "Web Development", desc: "Custom websites and web applications built for performance", icon: "💻" },
              { name: "Brand Strategy", desc: "Comprehensive branding solutions that tell your story", icon: "🎨" },
              { name: "SEO Optimization", desc: "Improve your search rankings and online visibility", icon: "🔍" },
              { name: "Social Media", desc: "Engage your audience across all social platforms", icon: "📱" },
              { name: "Analytics & Insights", desc: "Data-driven decisions to optimize your business performance", icon: "📊" }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-6"
                variants={fadeInUp}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-800/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd"
            alt="Business meeting"
            fill
            className="object-cover"
          />
        </div>

        <motion.div
          className="container mx-auto relative z-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get this professional landing page template customized for your business
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={fadeInUp}
            >
              <Link
                href="https://wa.me/919372787128?text=I want the Business Landing Page template customized"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Get Custom Quote
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="container mx-auto">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600">
                Let's discuss how we can help your business grow and succeed
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">hello@yourbusiness.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91 93727 87128</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Mumbai, Maharashtra</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
