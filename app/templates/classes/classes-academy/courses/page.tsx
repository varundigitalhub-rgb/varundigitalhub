"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function ClassesAcademyCoursesPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Academy Website";

  return (
    <main className="bg-sky-50">
      <section className="px-6 py-12 bg-white border-b border-sky-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-sky-900 mb-2">
            {title} – Courses
          </h1>
          <p className="text-sm text-sky-800 max-w-2xl">
            Show all programs you offer, from school tuitions and coaching to
            skill-based and competitive exam courses.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-8 md:grid-cols-3 text-xs text-sky-900">
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-sky-100">
            <p className="text-sm font-semibold mb-1">School Support</p>
            <p>Std 5–10 · All boards</p>
            <p className="mt-1 text-sky-800/90">
              Structured homework help, tests, and concept clarification.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-sky-100">
            <p className="text-sm font-semibold mb-1">Entrance Preparation</p>
            <p>JEE / NEET / CET / Other</p>
            <p className="mt-1 text-sky-800/90">
              Dedicated batches with test series and performance tracking.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-sky-100">
            <p className="text-sm font-semibold mb-1">Skills & Languages</p>
            <p>Computers · English · Soft Skills</p>
            <p className="mt-1 text-sky-800/90">
              Short-term evening and weekend programs for students.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

