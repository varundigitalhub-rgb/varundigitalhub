"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function ClassesAcademyFacultyPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Academy Website";

  return (
    <main className="bg-sky-50">
      <section className="px-6 py-12 bg-white border-b border-sky-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-sky-900 mb-2">
            {title} – Faculty
          </h1>
          <p className="text-sm text-sky-800 max-w-2xl">
            Introduce your core teaching team with simple, professional cards so
            parents know who is teaching their children.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-8 md:grid-cols-3 text-xs text-sky-900">
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-sky-100 space-y-1">
            <p className="text-sm font-semibold">Faculty Name 1</p>
            <p>B.Sc, B.Ed – Mathematics</p>
            <p className="text-sky-800/90">
              Experienced in board and competitive exam coaching.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-sky-100 space-y-1">
            <p className="text-sm font-semibold">Faculty Name 2</p>
            <p>M.Sc – Science</p>
            <p className="text-sky-800/90">
              Focus on concept clarity and lab-based understanding.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-sky-100 space-y-1">
            <p className="text-sm font-semibold">Faculty Name 3</p>
            <p>M.A – English</p>
            <p className="text-sky-800/90">
              Helps students with reading, writing, and communication.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

