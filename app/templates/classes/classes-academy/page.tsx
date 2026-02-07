"use client";

import { useBrandPreview } from "../../../context/BrandPreviewContext";

export default function ClassesAcademyHomePage() {
  const { brand } = useBrandPreview();
  const brandName = brand.brandName || "Academy Website";

  return (
    <main className="bg-sky-50">
      <section className="px-6 py-16 bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 text-white">
        <div className="container mx-auto grid gap-10 md:grid-cols-[1.5fr,1.2fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-sky-200">
              Coaching & Academy Website
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {brandName}
            </h1>
            <p className="text-sm md:text-base text-sky-100 max-w-xl">
              A clean, structured website layout for coaching institutes and
              academies that focus on results and professional communication.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-sky-200 to-blue-300" />
        </div>
      </section>
    </main>
  );
}

