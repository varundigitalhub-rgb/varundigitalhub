"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren, cardHover } from "../utils/animations";

const services = [
  {
    name: "Web Design",
    price: "From ₹12,000",
    desc: "Custom, responsive websites for coaching institutes and local businesses. SEO-optimized designs that convert visitors into customers.",
    icon: "/window.svg",
    benefits: ["Mobile-first design", "SEO optimization", "Lead capture forms"]
  },
  {
    name: "Web Development",
    price: "From ₹18,000",
    desc: "Full-stack development with modern technologies. Build scalable web applications that grow with your business.",
    icon: "/next.svg",
    benefits: ["Custom functionality", "Database integration", "Performance optimization"]
  },
  {
    name: "SEO Optimization",
    price: "From ₹8,000",
    desc: "Rank higher on Google for local searches. Get more visibility for your Mumbai business and attract qualified leads.",
    icon: "/globe.svg",
    benefits: ["Local SEO setup", "Keyword research", "Analytics tracking"]
  },
  {
    name: "E-Commerce",
    price: "From ₹40,000",
    desc: "Complete online stores with payment gateways. Sell products online and reach customers beyond Mumbai.",
    icon: "/vercel.svg",
    benefits: ["Secure payments", "Inventory management", "Order tracking"]
  },
  {
    name: "Maintenance",
    price: "₹3,000/month",
    desc: "Keep your website secure, updated, and performing optimally. Ongoing support to ensure your online presence stays strong.",
    icon: "/file.svg",
    benefits: ["Security updates", "Performance monitoring", "Content updates"]
  },
  {
    name: "Branding",
    price: "From ₹15,000",
    desc: "Complete brand identity including logo, colors, and messaging. Stand out in the competitive Mumbai market.",
    icon: "/logo_digital_hub.png",
    benefits: ["Logo design", "Brand guidelines", "Marketing materials"]
  }
];

export default function ServicesGridSection() {
  return (
    <section className="py-24 px-6">
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
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Affordable web design and development services for Mumbai businesses. From SEO-optimized websites to e-commerce solutions, we help you grow online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="group p-8 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 transition-all hover:shadow-xl transform hover:-translate-y-1"
              variants={fadeInUp}
              whileHover={cardHover}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-700 transition-colors">
                    <Image
                      src={service.icon}
                      alt={`${service.name} service icon`}
                      width={28}
                      height={28}
                      className="group-hover:brightness-200 transition-all"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-900">{service.name}</h3>
                  </div>
                </div>
                <span className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {service.price}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <ul className="text-sm text-gray-500 mb-6 space-y-1">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <Link
                  href="#"
                  className="text-purple-700 font-medium group-hover:underline transition-colors"
                >
                  Learn more
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-purple-600 hover:text-purple-800 font-medium"
                >
                  Request proposal →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
