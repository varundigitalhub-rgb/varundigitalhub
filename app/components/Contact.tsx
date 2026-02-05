"use client";

import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { fadeInUp, staggerChildren } from "../utils/animations";

interface ContactProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function Contact({
  title = "Get In Touch",
  subtitle = "Ready to start your project? We'd love to hear from you.",
  className = "",
}: ContactProps) {

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6tp8yzc",
      "template_a31cr3h",
      e.target,
      "V_rSvkEYZiirocB5G"
    ).then(
      () => alert("Message sent successfully ✅"),
      () => alert("Failed to send message ❌")
    );

    e.target.reset();
  };

  return (
    <section className={`py-24 px-6 bg-white ${className}`}>
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
            {title}
          </h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </motion.div>

        <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
          <form
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
          >
            <div>
              <label className="block text-sm font-medium text-black-1000 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="your@email.com"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-black font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-purple-900 text-black hover:bg-purple-800 px-8 py-4 rounded-full font-semibold transition shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
