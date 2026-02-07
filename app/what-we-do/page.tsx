"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren, cardHover } from "../utils/animations";
import { FaLaptopCode, FaPalette, FaShareAlt, FaBullhorn, FaTrademark, FaSearch, FaRocket, FaHandshake } from 'react-icons/fa';

const services = [
  { title: "Custom Website", icon: FaLaptopCode, desc: "Tailored websites built to your specifications.", color: "bg-blue-50" },
  { title: "Graphic Design", icon: FaPalette, desc: "Creative visuals that capture your brand essence.", color: "bg-green-50" },
  { title: "Social Media Setup", icon: FaShareAlt, desc: "Establish and optimize your social media presence.", color: "bg-purple-50" },
  { title: "Advertisement Running", icon: FaBullhorn, desc: "Effective ad campaigns to boost your reach.", color: "bg-red-50" },
  { title: "Brand Building", icon: FaTrademark, desc: "Develop a strong, recognizable brand identity.", color: "bg-yellow-50" },
  { title: "SEO Service", icon: FaSearch, desc: "Improve your search engine rankings.", color: "bg-indigo-50" },
  { title: "Speed Optimization", icon: FaRocket, desc: "Enhance website performance and loading times.", color: "bg-pink-50" },
  { title: "Handling Clients", icon: FaHandshake, desc: "Professional client management and support.", color: "bg-teal-50" },
];



export default function WhatWeDo() {
  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="What We Do background"
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
              What We Do
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl"
              variants={fadeInUp}
            >
              Creative services to elevate your business. We combine creativity, strategy, and innovation to deliver results that matter.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-6"
              variants={fadeInUp}
            >
              <Link
                href="#our-services"
                className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Explore Services
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

      {/* Services Section */}
      <section id="our-services" className="py-24 px-6">
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
              Comprehensive creative solutions designed to help your business stand out and succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`${service.color} rounded-2xl shadow-lg p-8 flex flex-col items-center text-purple-900 group hover:shadow-xl transition-shadow`}
                variants={fadeInUp}
                whileHover={cardHover}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <service.icon size={64} className="mb-4 text-purple-600 group-hover:scale-110 transition-transform" />
                <span className="text-xl font-bold mb-2">{service.title}</span>
                <span className="text-center text-sm text-purple-600">{service.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing CTA Section */}
      <section className="py-24 px-6 bg-gray-50">
        <motion.div
          className="container mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Check out our transparent pricing plans and find the perfect package for your business.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/pricing"
                className="inline-block bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                View Pricing Plans
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

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
              Let's Create Something Extraordinary
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Ready to elevate your business with our creative services?
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
 
