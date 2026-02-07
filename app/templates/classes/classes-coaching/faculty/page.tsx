"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function ClassesCoachingFacultyPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Coaching Classes Website";

  return (
    <main className="bg-slate-950 text-white">
      <section className="px-6 py-12 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">{title} – Faculty</h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Introduce your main teachers, their qualifications, and experience to
            build trust with parents and students.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-8 md:grid-cols-3 text-xs text-slate-100">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 space-y-1">
            <p className="text-sm font-semibold">Faculty Name 1</p>
            <p>B.Sc, B.Ed – Mathematics</p>
            <p className="text-slate-300">10+ years of teaching experience.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 space-y-1">
            <p className="text-sm font-semibold">Faculty Name 2</p>
            <p>M.Sc – Physics</p>
            <p className="text-slate-300">
              Specialises in entrance exam preparation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 space-y-1">
            <p className="text-sm font-semibold">Faculty Name 3</p>
            <p>M.A – English</p>
            <p className="text-slate-300">
              Focus on communication skills and language basics.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

