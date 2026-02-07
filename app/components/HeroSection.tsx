"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../utils/animations";
import { useBrandPreview } from "../context/BrandPreviewContext";

export default function HeroSection() {
  const { brand } = useBrandPreview();
  const effectiveBrandName = brand.brandName || "Varun Digital Hub";
  const effectiveDescription = brand.brandName
    ? `See how "${brand.brandName}" could look with a modern, SEO-optimized website designed for real business growth.`
    : "Helping Mumbai's local businesses grow online with SEO-optimized, responsive websites. Web developer in Mumbai for coaching institutes, shops, and startups. Affordable web design agency in Malad.";

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90 z-10" />
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/1920/1080?random=1"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-6 pt-28 md:pt-32 relative z-20">
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
            {effectiveBrandName}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl"
            variants={fadeInUp}
          >
            {effectiveDescription}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-6"
            variants={fadeInUp}
          >
            <Link
              href="/services"
              className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all hover:border-opacity-70"
            >
              Get In Touch
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
  );
}
