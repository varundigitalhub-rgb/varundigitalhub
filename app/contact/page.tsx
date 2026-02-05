"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../utils/animations";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080?random=12"
            alt="Contact background"
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
              className="text-5xl md:text-7xl font-bold text-white mb-8"
              variants={fadeInUp}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 mb-12 max-w-2xl"
              variants={fadeInUp}
            >
              Send us a message or contact us on WhatsApp. We respond fast.
            </motion.p>

            <motion.div className="flex gap-6" variants={fadeInUp}>
              <a
                href="https://wa.me/919372787128"
                target="_blank"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition"
              >
                WhatsApp Us
              </a>
              <Link
                href="#contact-form"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold"
              >
                Send Message
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-24 px-6">
        <motion.div
          className="container mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.form
            action="https://formsubmit.co/varundigitalhub@gmail.com"
            method="POST"
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {/* Hidden config */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Website Inquiry"
            />
            <input type="hidden" name="_template" value="table" />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="border border-purple-300 rounded-lg p-4 pl-12 w-full"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="border border-purple-300 rounded-lg p-4 pl-12 w-full"
                />
              </div>
            </div>

            <div className="relative mb-6">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
              <input
                name="business"
                required
                placeholder="Your Business"
                className="border border-purple-300 rounded-lg p-4 pl-12 w-full"
              />
            </div>

            <div className="relative mb-6">
              <FaComment className="absolute left-4 top-4 text-purple-400" />
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Your Message"
                className="border border-purple-300 rounded-lg p-4 pl-12 w-full"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="bg-purple-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-purple-800"
              >
                <FaPaperPlane /> Send Message
              </button>

              <a
                href="https://wa.me/919372787128"
                target="_blank"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-green-600"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </motion.form>
        </motion.div>
      </section>
    </main>
  );
}
