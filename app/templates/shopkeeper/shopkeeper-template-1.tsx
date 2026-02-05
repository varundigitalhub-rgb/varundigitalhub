import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../../utils/animations";

export default function ShopkeeperTemplate1() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-800/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
            alt="Local shop with fresh produce"
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
              Your Neighborhood Store
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Fresh products, friendly service, and everything you need. Serving our community with quality and care since day one.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={fadeInUp}
            >
              <Link
                href="https://wa.me/919372787128?text=I want to use the Shopkeeper Store template"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Get This Template
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all"
              >
                View Products
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
      <section className="py-24 px-6 bg-green-50">
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
              Our Story
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-12 leading-relaxed"
              variants={fadeInUp}
            >
              For generations, we've been the heart of our community. From fresh produce to daily essentials,
              we pride ourselves on offering quality products at fair prices. Your trust and satisfaction
              drive everything we do.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Produce</h3>
                <p className="text-gray-600">Daily fresh fruits and vegetables</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏪</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Favorite</h3>
                <p className="text-gray-600">Trusted by the community for decades</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
                <p className="text-gray-600">Only the best products for our customers</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
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
              What We Offer
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Everything you need for your daily life, from fresh groceries to household essentials
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
              { name: "Fresh Vegetables", desc: "Farm-fresh seasonal vegetables", icon: "🥕" },
              { name: "Fruits", desc: "Juicy, ripe fruits from local farms", icon: "🍎" },
              { name: "Dairy Products", desc: "Fresh milk, cheese, and yogurt", icon: "🥛" },
              { name: "Groceries", desc: "Rice, pulses, spices, and more", icon: "🛒" },
              { name: "Household Items", desc: "Cleaning supplies and essentials", icon: "🧹" },
              { name: "Snacks & Sweets", desc: "Local snacks and traditional sweets", icon: "🍬" }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <span className="text-4xl">{product.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  <div className="text-green-600 font-semibold">
                    Available Daily
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-800/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
            alt="Fresh market produce"
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
              Ready to Showcase Your Store Online?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get this template customized to highlight your products and services
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={fadeInUp}
            >
              <Link
                href="https://wa.me/919372787128?text=I want the Shopkeeper Store template customized"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
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
      <section className="py-24 px-6 bg-green-50">
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
                Visit Our Store
              </h2>
              <p className="text-xl text-gray-600">
                Come experience the warmth of neighborhood shopping at its finest
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">321 Market Street<br />Mumbai, Maharashtra</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🕒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600">Mon-Sun: 8AM - 10PM<br />Open 7 days a week</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact</h3>
                <p className="text-gray-600">+91 93727 87128<br />hello@neighborhoodstore.com</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
