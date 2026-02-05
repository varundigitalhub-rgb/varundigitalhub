"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren, cardHover } from "../utils/animations";

const services = [
  {
    name: "Web Design",
    desc: "Beautiful, responsive websites that convert visitors into customers.",
    icon: "/web-design.png",
  },
  {
    name: "SEO Optimization",
    desc: "Rank higher on Google with our proven SEO strategies.",
    icon: "/seo-optimazation.png",
  },
  {
    name: "E-Commerce",
    desc: "Custom online stores with secure payment integration.",
    icon: "/e-commerce.png",
  },
  {
    name: "Maintenance",
    desc: "Ongoing support and updates to keep your site running smoothly.",
    icon: "/maintainance.png",
  },
];

export default function ServicesSection() {
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
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Affordable web design and development services for Mumbai businesses. From SEO-optimized websites to e-commerce solutions, we help you grow online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      alt={service.name}
                      width={28}
                      height={28}
                      className="group-hover:brightness-200 transition-all"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-900">{service.name}</h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  className="text-purple-700 font-medium group-hover:underline transition-colors"
                >
                  Learn more
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-purple-600 hover:text-purple-800 font-medium"
                >
                  Get quote →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
