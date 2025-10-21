"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../utils/animations";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", business: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error for this field
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", business: "", message: "" };
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid.";
    if (!form.business.trim()) newErrors.business = "Business is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.business && !newErrors.message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("Sending...");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("Message sent!");
      setForm({ name: "", email: "", business: "", message: "" });
      setErrors({ name: "", email: "", business: "", message: "" });
    } else {
      setStatus("Failed to send.");
    }
  };

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
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              variants={fadeInUp}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl"
              variants={fadeInUp}
            >
              Send us a message or reach out on WhatsApp. We'll get back to you quickly!
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-6"
              variants={fadeInUp}
            >
              <a
                href="https://wa.me/919372787178"
                target="_blank"
                rel="noopener"
                className="bg-green-500 text-white hover:bg-green-600 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
              >
                WhatsApp Us
              </a>
              <Link
                href="#contact-form"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all hover:border-opacity-70"
              >
                Send Message
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

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 px-6">
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
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600">
              We'd love to hear from you. Fill out the form below and we'll get back to you soon.
            </p>
          </motion.div>

          <motion.form
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-2xl mx-auto"
            onSubmit={handleSubmit}
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className=" text-purple-900 grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="border border-purple-300 rounded-lg p-4 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                />
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="relative">
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  type="email"
                  placeholder="Your Email"
                  className="border border-purple-300 rounded-lg p-4 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                />
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>
            <div className=" text-purple-900 relative mb-6">
              <input
                name="business"
                value={form.business}
                onChange={handleChange}
                required
                placeholder="Your Business"
                className="border border-purple-300 rounded-lg p-4 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
              />
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400" />
              {errors.business && <p className="text-red-500 text-sm mt-1">{errors.business}</p>}
            </div>
            <div className=" text-purple-900 relative mb-6">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="border border-purple-300 rounded-lg p-4 pl-12 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={6}
              />
              <FaComment className="absolute left-4 top-4 text-purple-400" />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                type="submit"
                className="bg-purple-700 text-white rounded-full px-8 py-4 font-semibold shadow-lg hover:bg-purple-800 hover:shadow-xl transition-all flex items-center justify-center gap-2 flex-1"
              >
                <FaPaperPlane /> Send Messages
              </button>
              <a
                href="https://wa.me/919372787178"
                target="_blank"
                rel="noopener"
                className="bg-green-500 text-white rounded-full px-8 py-4 font-semibold text-center hover:bg-green-600 hover:shadow-lg transition-all flex items-center justify-center gap-2 flex-1"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>
            {status && (
              <div className={`text-sm mt-4 text-center ${status === "Message sent!" ? "text-green-600" : "text-red-600"}`}>
                {status}
              </div>
            )}
          </motion.form>
        </motion.div>
      </section>
    </main>
  );
}
