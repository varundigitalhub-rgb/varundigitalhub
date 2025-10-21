"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren, cardHover } from "../utils/animations";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
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
            Our Work
          </h2>
          <p className="text-lg text-gray-600">
            See how we've helped Mumbai businesses establish a strong online presence with modern, SEO-optimized websites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              variants={fadeInUp}
              whileHover={cardHover}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-white/90 text-purple-900 text-sm font-semibold px-3 py-1 rounded-full">
                    Website
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <div className="flex items-center justify-between">
                  <Link
                    href={project.link}
                    className="text-purple-700 font-medium group-hover:underline transition-colors"
                  >
                    View Project
                  </Link>
                  <Link
                    href={project.link}
                    className="text-sm text-purple-600 hover:text-purple-800 font-medium"
                  >
                    Live Demo →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
        >
          <Link
            href="/our-work"
            className="inline-block bg-purple-900 text-white hover:bg-purple-800 px-8 py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            View All Projects
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
