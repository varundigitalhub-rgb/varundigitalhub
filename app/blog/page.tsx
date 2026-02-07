"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren, cardHover } from "../utils/animations";
import { caseStudies } from "../data/caseStudies";

export default function Blog() {
  return (
    <main className="bg-slate-950 text-slate-50 overflow-hidden">
      {/* Hero */}
      <section className="relative flex min-h-[75vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-slate-900 z-10" />
        <div className="absolute inset-0 opacity-35">
          <Image
            src="https://picsum.photos/1920/1080?random=16"
            alt="Client stories background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-10 pt-10">
            <motion.div
              className="max-w-4xl"
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.24em] text-purple-100/90"
                variants={fadeInUp}
              >
                Case Studies · Client Growth Stories
              </motion.p>
              <motion.h1
                className="mt-3 text-4xl md:text-6xl font-bold text-white leading-tight"
                variants={fadeInUp}
              >
                Real results for local businesses.
              </motion.h1>
              <motion.p
                className="mt-5 text-base md:text-xl text-purple-100/90 max-w-2xl"
                variants={fadeInUp}
              >
                Deep-dive stories of how Varun Digital Hub helps coaching
                institutes and local businesses move from “no online presence”
                to websites and strategies that bring predictable enquiries.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <Link
                  href="#case-studies"
                  className="inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-purple-900 shadow-md transition hover:bg-purple-50"
                >
                  Browse Client Stories
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-purple-100/70 px-7 py-3 text-sm font-semibold text-purple-50 transition hover:bg-purple-900/50"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1440 120" className="relative w-full h-[120px]">
            <path
              fill="#020617"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,122.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* Listing */}
      <section
        id="case-studies"
        className="border-t border-slate-800 bg-slate-950 px-6 py-16 md:py-20"
      >
        <motion.div
          className="container mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div
            className="mx-auto mb-12 flex max-w-4xl flex-col gap-4 text-center"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Client success stories
            </h2>
            <p className="text-sm md:text-base text-slate-200">
              Each story is a structured breakdown of the challenge, strategy,
              implementation and results. These are the same case studies we
              walk through on calls with serious clients who want to see real
              proof of work.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.slug}
                className="group flex h-full flex-col rounded-2xl bg-slate-900/70 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.45)] ring-1 ring-slate-800/80 transition hover:-translate-y-1 hover:bg-slate-900 hover:ring-purple-500/60"
                variants={fadeInUp}
                whileHover={cardHover}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.07 }}
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-purple-300">
                  Client Growth Story
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-purple-100">
                  {study.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  <span className="font-semibold">{study.clientName}</span>
                  <span className="mx-2 text-slate-500">·</span>
                  <span>{study.industry}</span>
                </p>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
                  {study.location}
                </p>

                <div className="mt-4 flex-1 space-y-2 text-xs text-slate-100 md:text-sm">
                  <p>
                    <span className="font-semibold text-slate-200">
                      Before:
                    </span>{" "}
                    {study.beforeSummary}
                  </p>
                  <p>
                    <span className="font-semibold text-emerald-300">
                      After:
                    </span>{" "}
                    {study.afterSummary}
                  </p>
                </div>

                <Link
                  href={`/blog/${study.slug}`}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-purple-600 px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-purple-500 group-hover:shadow-md md:text-sm"
                >
                  Read full story
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 px-6 py-16 md:py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://picsum.photos/1920/1080?random=17"
            alt="CTA background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.18),_transparent_60%)]" />

        <motion.div
          className="container relative z-20 mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for your own case study?
            </h2>
            <p className="text-sm md:text-base text-purple-100 mb-8 leading-relaxed">
              If you&apos;re a coaching institute, local shop or service
              business and you want a website and strategy that actually
              supports enquiries, let&apos;s talk about what we can build
              together.
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={fadeInUp}
            >
              <a
                href="https://wa.me/919372787128"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-green-500 px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-green-600"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-purple-900 shadow-md hover:bg-purple-100"
              >
                Talk to Varun Digital Hub
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

