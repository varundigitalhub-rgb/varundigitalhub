"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../utils/animations";
import { projects } from "../data/projects";

export default function LiveDemo() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080?random=15"
            alt="Live Demo background"
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
              Live Demo
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              See our agency template in action. Explore the features, layouts, and creative solutions we offer.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-6 justify-center"
              variants={fadeInUp}
            >
              <a
                href="https://themes.boldway.agency/deep/agency/"
                target="_blank"
                rel="noopener"
                className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
              >
                View Live Demo
              </a>
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

      {/* Content Section */}
      <section className="py-24 px-6">
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
              Experience Our Work
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Our live demo showcases the quality and creativity we bring to every project. See how we can transform your digital presence.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://themes.boldway.agency/deep/agency/"
                target="_blank"
                rel="noopener"
                className="inline-block bg-purple-700 text-white hover:bg-purple-800 px-8 py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Live Demo
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects & Templates Section */}
      <section className="py-24 px-6 bg-gray-50">
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
              Projects & Templates
            </h2>
            <p className="text-lg text-gray-600">
              Explore our collection of stunning projects and versatile templates designed to inspire and elevate your digital presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {projects.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative aspect-video">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-purple-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener"
                    className="text-purple-600 hover:text-purple-800 font-semibold text-sm"
                  >
                    View Demo →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
