import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../../utils/animations";

export default function RestaurantTemplate1() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-orange-800/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            alt="Elegant restaurant interior"
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
              Flavors of Tradition
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Experience authentic cuisine in an elegant atmosphere. Where every meal tells a story.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={fadeInUp}
            >
              <Link
                href="https://wa.me/919372787128?text=I want to use the Elegant Restaurant template"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 text-white hover:bg-amber-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
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
              Our Story
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-12 leading-relaxed"
              variants={fadeInUp}
            >
              For over two decades, we've been serving authentic flavors passed down through generations.
              Our commitment to quality ingredients and traditional cooking methods creates an unforgettable
              dining experience that brings families together.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Chefs</h3>
                <p className="text-gray-600">Master chefs with 20+ years experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥘</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Ingredients</h3>
                <p className="text-gray-600">Daily sourced local ingredients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Award Winning</h3>
                <p className="text-gray-600">Recognized for culinary excellence</p>
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
              Signature Dishes
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Indulge in our carefully crafted dishes, each prepared with passion and tradition
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
              { name: "Grilled Salmon", desc: "Fresh Atlantic salmon with herbs", price: "₹450" },
              { name: "Beef Wellington", desc: "Classic preparation with mushroom duxelles", price: "₹650" },
              { name: "Truffle Risotto", desc: "Creamy Arborio rice with black truffle", price: "₹380" },
              { name: "Duck Confit", desc: "Slow-cooked duck leg with garlic", price: "₹520" },
              { name: "Lobster Thermidor", desc: "Rich seafood delicacy", price: "₹750" },
              { name: "Tiramisu", desc: "Classic Italian dessert", price: "₹220" }
            ].map((dish, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  <span className="text-4xl">🍽️</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">{dish.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-orange-800/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
            alt="Restaurant ambiance"
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
              Ready to Start Your Restaurant Website?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get this professionally designed template customized for your restaurant
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={fadeInUp}
            >
              <Link
                href="https://wa.me/919372787128?text=I want the Elegant Restaurant template customized"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 text-white hover:bg-amber-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
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
                Visit Us
              </h2>
              <p className="text-xl text-gray-600">
                Experience the flavors that have made us a local favorite
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">123 Culinary Street<br />Mumbai, Maharashtra</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🕒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600">Mon-Sun: 11AM - 11PM<br />Lunch: 12-3PM, Dinner: 7-11PM</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reservations</h3>
                <p className="text-gray-600">+91 93727 87128<br />reservations@restaurant.com</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
