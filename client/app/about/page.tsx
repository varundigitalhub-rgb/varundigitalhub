"use client"
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../utils/animations";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Varun Digital Hub | Web Developer in Mumbai - Our Story",
    description: "Learn about Varun Digital Hub, a Mumbai-based web developer helping local businesses grow online with affordable, SEO-optimized websites for coaching institutes and shops.",
    keywords: [
      "About Varun Digital Hub",
      "Web developer in Mumbai",
      "Mumbai web agency",
      "Local business website developer"
    ],
    openGraph: {
      title: "About Varun Digital Hub | Web Developer in Mumbai",
      description: "Varun Digital Hub supports Mumbai’s local businesses with affordable, SEO-optimized websites.",
      url: "https://varun-digital-hub.vercel.app/about",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "About Varun Digital Hub"
        }
      ],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "About Varun Digital Hub | Web Developer in Mumbai",
      description: "Learn about our mission to help Mumbai businesses grow online.",
      images: ["/og-image.png"]
    },
    alternates: {
      canonical: "https://varun-digital-hub.vercel.app/about"
    }
  };
}

export default function About() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080?random=10"
            alt="About background"
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
              About Varun Digital Hub
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl"
              variants={fadeInUp}
            >
              Varun Digital Hub supports Mumbai’s local businesses like coaching institutes and shops with affordable, SEO-optimized websites that rank on Google.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-6"
              variants={fadeInUp}
            >
              <Link
                href="/contact"
                className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Get In Touch
              </Link>
              <Link
                href="/our-work"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all hover:border-opacity-70"
              >
                View Our Work
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

          {/* Story Section */}
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
                  Our Story
                </h2>
                <p className="text-lg text-gray-600">
                  Empowering Indian businesses with beautiful, responsive, and SEO-friendly web solutions.
                </p>
              </motion.div>

              <motion.div
                className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-900 mb-4">Driven by Technology & Design</h3>
                    <p className="text-gray-600 mb-4">
                      Varun started this agency to empower Mumbai's local businesses, like coaching institutes and shops in Malad, with beautiful, responsive, and SEO-friendly web solutions. As a BCA graduate and passionate web developer based in Mumbai, he helps clients rank higher on Google for searches like 'local business website developer Mumbai'.
                    </p>
                    <p className="text-gray-600">
                      Our mission is to make high-quality web development accessible and affordable for Mumbai businesses of all sizes, driving online growth through optimized websites.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Image src="/window.svg" alt="Our Story" width={300} height={240} className="rounded-lg shadow-lg" />
                  </div>
                </div>
              </motion.div>

              {/* Mission Section */}
              <motion.div
                className="text-center max-w-3xl mx-auto mt-24 mb-16"
                variants={fadeInUp}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  To empower Mumbai's local businesses by delivering innovative, affordable, and high-quality digital solutions that drive growth and success in the modern digital landscape, with a focus on SEO for 'web developer in Mumbai'.
                </p>
              </motion.div>

              {/* Team Section */}
              <motion.div
                className="text-center max-w-3xl mx-auto mt-24 mb-16"
                variants={fadeInUp}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
                  Our Team
                </h2>
                <div className="flex flex-col items-center">
                  <img src="/varun-digital-hub-logo.png" alt="Varun Digital Hub Logo" className="w-48 h-auto mb-6" />
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                    Currently, Varun is the sole member of the team, passionately driving the vision and success of Varun Digital Hub. I am dedicated to delivering the best results and, as the business grows, I plan to hire talented professionals to better serve our clients.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080?random=11"
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
              Ready to Grow Your Business Online?
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
    </main>
  );
}
