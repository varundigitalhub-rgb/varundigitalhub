"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function ClassesCoachingCoursesPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Coaching Classes Website";

  return (
    <main className="bg-slate-950 text-white">
      <section className="px-6 py-12 border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">{title} – Courses</h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            List all batches, timings, and key highlights so parents understand
            exactly what courses you offer.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-8 md:grid-cols-3 text-xs text-slate-100">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm font-semibold mb-1">School Tuitions</p>
            <p>Std 5–10 · All boards</p>
            <p className="mt-1 text-slate-300">
              Focus on concepts, regular tests, and doubt-solving.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm font-semibold mb-1">Entrance Coaching</p>
            <p>JEE / NEET / CET</p>
            <p className="mt-1 text-slate-300">
              Structured syllabus with test series and analysis.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm font-semibold mb-1">Skill Courses</p>
            <p>Computer basics, English speaking</p>
            <p className="mt-1 text-slate-300">
              Short-term skill programs for students and professionals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

