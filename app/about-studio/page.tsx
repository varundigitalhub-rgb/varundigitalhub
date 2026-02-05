"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren, cardHover } from "../utils/animations";

const team = [
  { name: "Varun Mukhiya", role: "CEO / Art Director", img: "/VARUN-DP1.png" },
  // { name: "Manuela Silva", role: "Designer", img: "" },
  // { name: "Rita Redufe", role: "CTO / Developer", img: "/file.svg" },
];

export default function AboutStudio() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080?random=22"
            alt="About Studio background"
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
              About Our Studio
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl"
              variants={fadeInUp}
            >
              We're a global creative company delivering innovative solutions.
              We don't just create — we innovate, elevate and transform.
            </motion.p>
            <motion.div className="flex flex-wrap gap-6" variants={fadeInUp}>
              <Link
                href="#meet-the-team"
                className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Meet the Team
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all hover:border-opacity-70"
              >
                Work With Us
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

      {/* Team Section */}
      <section id="meet-the-team" className="py-24 px-6">
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
              Meet the Team
            </h2>
            <p className="text-lg text-gray-600">
              Our talented team of creatives and developers work together to
              bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-purple-50 rounded-sm shadow-lg p-8 flex flex-col items-center group hover:shadow-xl transition-shadow w-full text-center "
                variants={fadeInUp}
                whileHover={cardHover}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Image
                  src={member.img || "/default-profile.png"}
                  alt={member.name}
                  width={120}
                  height={80}
                  className="mb-4 rounded-sm group-hover:scale-110 transition-transform"
                />
                <span className="text-xl font-bold mb-2 text-purple-900">
                  {member.name}
                </span>
                <span className="text-purple-700 font-semibold">
                  {member.role}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  Our Story
                </h3>
                <p className="text-gray-600 mb-4">
                  Our Story At Varun Digital Hub, we blend creativity with
                  technology to help local businesses in Mumbai grow and stand
                  out online. We believe every business — from a small coaching
                  institute to a neighborhood store — deserves a strong digital
                  presence. That’s why we craft modern, user-friendly websites
                  and online solutions that drive real results: more visibility,
                  more leads, and more growth. Our mission is simple — to
                  empower local businesses with affordable, high-quality digital
                  solutions that help them succeed in today’s competitive world.
                </p>
                <p className="text-gray-600">
                  Our mission is to create innovative solutions that not only
                  meet but exceed our clients' expectations.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/logo_digital_hub.png"
                  alt="Our Story"
                  width={300}
                  height={240}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
 
      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080?random=23"
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
              Join Our Creative Journey
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Ready to work with a team that delivers exceptional results?
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
