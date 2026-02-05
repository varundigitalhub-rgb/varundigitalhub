import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../../utils/animations";

export default function RestaurantTemplate2() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-800/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
            alt="Modern bistro interior"
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
              Modern Bistro
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Contemporary dining experience with innovative flavors and sustainable ingredients.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={fadeInUp}
            >
              <Link
                href="https://wa.me/919372787128?text=I want to use the Modern Bistro template"
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
                View Menu
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
      <section className="py-24 px-6 bg-gray-50">
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
              Our Philosophy
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-12 leading-relaxed"
              variants={fadeInUp}
            >
              We believe in creating memorable dining experiences through innovative cuisine,
              sustainable practices, and exceptional service. Every dish tells a story of
              local ingredients and global inspiration.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable</h3>
                <p className="text-gray-600">Locally sourced, organic ingredients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovative</h3>
                <p className="text-gray-600">Modern techniques with traditional roots</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">Supporting local farmers and artisans</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
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
              Chef's Specialties
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Discover our signature dishes crafted with seasonal ingredients and culinary creativity
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
              { name: "Heritage Tomato Salad", desc: "Seasonal tomatoes with burrata and basil oil", price: "₹320" },
              { name: "Wild Mushroom Risotto", desc: "Foraged mushrooms with aged parmesan", price: "₹420" },
              { name: "Grass-Fed Beef Tartare", desc: "Hand-cut beef with traditional accompaniments", price: "₹580" },
              { name: "Pan-Seared Sea Bass", desc: "Mediterranean fish with fennel and olives", price: "₹650" },
              { name: "Chocolate Soufflé", desc: "Warm chocolate with vanilla ice cream", price: "₹280" },
              { name: "Artisanal Cheese Board", desc: "Selection of local and imported cheeses", price: "₹450" }
            ].map((dish, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <span className="text-4xl">🍽️</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{dish.price}</span>
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
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
            alt="Modern dining setup"
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
              Ready to Launch Your Modern Restaurant?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get this contemporary template customized for your innovative dining concept
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={fadeInUp}
            >
              <Link
                href="https://wa.me/919372787128?text=I want the Modern Bistro template customized"
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
      <section className="py-24 px-6 bg-gray-50">
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
                Find Us
              </h2>
              <p className="text-xl text-gray-600">
                Join us for an unforgettable culinary journey in the heart of the city
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
                <p className="text-gray-600">456 Innovation Street<br />Mumbai, Maharashtra</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🕒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600">Tue-Sun: 12PM - 10PM<br />Brunch: 11AM-3PM, Dinner: 6-10PM</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reservations</h3>
                <p className="text-gray-600">+91 93727 87178<br />reservations@modernbistro.com</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
