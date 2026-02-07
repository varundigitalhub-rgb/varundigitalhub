"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren, cardHover } from "../utils/animations";

const pricingPlans = [
  {
    name: "Starter Website Plan",
    subtitle: "For local tutors or freelancers",
    price: "₹4,999",
    features: [
      "1–3 pages",
      "Responsive design",
      "WhatsApp button",
      "1-month support"
    ],
    popular: false,
    icon: "🌱"
  },
  {
    name: "Business Website Plan",
    subtitle: "For coaching classes, local shops, or startups",
    price: "₹8,999",
    features: [
      "4–6 pages",
      "SEO setup",
      "Google Map",
      "Domain + hosting setup",
      "Contact form"
    ],
    popular: true,
    icon: "🚀"
  },
  {
    name: "Premium Website Plan",
    subtitle: "For growing institutes or small businesses",
    price: "₹14,999+",
    features: [
      "8+ pages",
      "SEO + analytics",
      "Branding",
      "Chatbot",
      "3-month support"
    ],
    popular: false,
    icon: "💼"
  }
];

export default function Pricing() {
  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Pricing background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            className="max-w-4xl"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              variants={fadeInUp}
            >
              Our Pricing Plans
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl"
              variants={fadeInUp}
            >
              Simple. Transparent. No Hidden Fees. Choose the perfect plan for your website needs.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-6"
              variants={fadeInUp}
            >
              <Link
                href="#pricing-plans"
                className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
              >
                View Plans
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all hover:border-opacity-70"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1440 120" className="relative w-full h-[120px]">
            <path
              fill="#ffffff"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,122.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="pricing-plans" className="py-24 px-6 bg-gray-50">
        <motion.div
          className="container mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600">
              All plans include responsive design and professional development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`bg-white rounded-2xl shadow-lg p-8 flex flex-col text-center relative ${plan.popular ? 'border-2 border-purple-500' : ''}`}
                variants={fadeInUp}
                whileHover={cardHover}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-4xl mb-2">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-purple-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
                <div className="text-4xl font-bold text-purple-600 mb-6">{plan.price}</div>
                <ul className="text-left mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center mb-2">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`inline-block px-8 py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-purple-100 text-purple-900 hover:bg-purple-200'
                  }`}
                >
                  {plan.popular ? 'Book Free Call' : 'Get Started'}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="text-center py-8">
        <p className="text-gray-600">Custom quotes available for eCommerce or advanced projects.</p>
      </div>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080?random=21"
            alt="CTA background"
            fill
            className="object-cover"
            priority
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Let's build your perfect website today.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
