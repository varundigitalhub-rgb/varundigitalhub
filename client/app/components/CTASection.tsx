"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../utils/animations";

export default function CTASection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90 z-10" />
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/1920/1080?random=8"
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
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Let's create something amazing together. Get in touch to start your project.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
