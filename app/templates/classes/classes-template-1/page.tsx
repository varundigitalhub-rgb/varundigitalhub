"use client";
import Link from "next/link";
import { useBrandPreview } from "../../../context/BrandPreviewContext";

export default function ClassesTemplate1Page() {
  const { brand } = useBrandPreview();
  const heroTitle =
    brand.brandName || "Coaching Classes Website Template";

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 px-6 py-20 text-white">
        <div className="container mx-auto flex flex-col items-start gap-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-blue-200">
              Coaching & Tuition Website
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              {heroTitle}
            </h1>
            <p className="mb-6 text-lg text-white/90">
              Designed for coaching centres, tuition classes, and training academies
              that want to build trust and generate student enquiries online.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919372787128?text=Hi,%20I%20want%20this%20website%20template:%20Coaching%20Classes%20Website"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-900 shadow-lg transition-transform hover:scale-105 hover:bg-blue-50 md:text-base"
              >
                Use This Template
              </a>
              <Link
                href="/contact"
                className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:text-base"
              >
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="w-full max-w-lg rounded-3xl bg-white/5 p-6 backdrop-blur md:p-8">
            <div className="mb-4 flex flex-wrap gap-2 text-xs font-medium text-white/80">
              <span className="rounded-full bg-white/10 px-3 py-1">
                Mobile Friendly
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1">SEO Ready</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Fast Loading</span>
            </div>
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-blue-200 to-purple-300" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="container mx-auto grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-blue-900 md:text-3xl">
              About Your Institute
            </h2>
            <p className="mb-4 text-gray-700">
              Present your coaching brand professionally with sections for your mission,
              teaching approach, and success stories from students and parents.
            </p>
            <p className="text-gray-700">
              Add results, rankers, testimonials, and photos from classrooms to build
              trust with parents and students who are comparing options online.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-blue-900">
                Ideal For
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Tuition classes for school students</li>
                <li>Coaching centres for entrance exams</li>
                <li>Skill training and professional courses</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-blue-900">
                What You Can Highlight
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Courses offered and batch timings</li>
                <li>Faculty profiles and experience</li>
                <li>Success stories and past results</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-2xl font-semibold text-blue-900 md:text-3xl">
            Courses & Programs
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-blue-900">
                School Tuitions
              </h3>
              <p className="text-sm text-gray-700">
                Explain how you support students from different boards and standards
                with structured guidance.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-blue-900">
                Entrance Coaching
              </h3>
              <p className="text-sm text-gray-700">
                Highlight focused programs for competitive exams with study plans and
                test series.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-blue-900">
                Skill Development
              </h3>
              <p className="text-sm text-gray-700">
                Showcase computer courses, language training, or professional skills you
                teach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 px-6 py-16">
        <div className="container mx-auto flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="mb-4 text-2xl font-semibold text-blue-900 md:text-3xl">
              CTA For Admissions
            </h2>
            <p className="mb-4 text-gray-700">
              Encourage parents and students to enquire for admissions, fee structure,
              and available batches with a clear call-to-action.
            </p>
            <p className="text-gray-700">
              Include contact options like WhatsApp, direct call, and a simple enquiry
              form to capture leads.
            </p>
          </div>
          <div className="space-y-4">
            <a
              href="https://wa.me/919372787128?text=Hi,%20I%20want%20to%20discuss%20a%20website%20for%20my%20coaching%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-blue-700 px-8 py-3 text-center text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-800 md:text-base"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="block rounded-full border border-blue-200 px-8 py-3 text-center text-sm font-semibold text-blue-900 transition-colors hover:bg-white md:text-base"
            >
              Discuss This Template
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 px-6 py-16 text-white">
        <div className="container mx-auto grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
              Contact & Centre Details
            </h2>
            <p className="mb-4 text-sm text-white/80">
              Use this section to list branch locations, contact numbers, and timings so
              parents know exactly how to reach your institute.
            </p>
            <ul className="space-y-2 text-sm text-white/90">
              <li>Location: Mumbai, India</li>
              <li>Timings: Mon – Sat, 9 AM – 9 PM</li>
              <li>Phone: +91-9372787178</li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-white/80">
              Add maps, enquiry forms, and quick links so that interested parents can
              quickly book a counselling session or request details.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-900 shadow-md transition-colors hover:bg-blue-50 md:text-base"
            >
              Start Your Classes Website
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
