"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../utils/animations";
import { templatesConfig, categories, categoryLabels } from "../data/templates.config";
import TemplateCard from "../components/TemplateCard";

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setSelectedCategory("all");
  }, []);

  const filteredTemplates = selectedCategory === "all"
    ? templatesConfig
    : templatesConfig.filter(template => template.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Templates hero background"
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
              Choose a Website Design You Like
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Preview ready-made website designs. We customize everything for your business.
            </motion.p>
            <motion.div
              variants={fadeInUp}
            >
              <Link
                href="/contact"
                className="inline-block bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Get This Website
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

      {/* Filters */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.button
              onClick={() => {
                setSelectedCategory("all");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-purple-900 text-white shadow-lg"
                  : "bg-white text-purple-900 hover:bg-purple-100"
              }`}
              variants={fadeInUp}
            >
              All Templates
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-purple-900 text-white shadow-lg"
                    : "bg-white text-purple-900 hover:bg-purple-100"
                }`}
                variants={fadeInUp}
              >
                {categoryLabels[category]}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {filteredTemplates.map((template) => (
              <motion.div key={template.id} variants={fadeInUp}>
                <TemplateCard template={template} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="CTA background"
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
              Like a design? We'll customize it with your brand, content, and features.
            </h2>
            <motion.div
              className="flex flex-wrap justify-center gap-6 mt-12"
              variants={fadeInUp}
            >
              <Link
                href="/contact"
                className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Request a Quote
              </Link>
              <Link
                href="https://wa.me/919372787128"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all hover:border-opacity-70"
              >
                Chat on WhatsApp
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
