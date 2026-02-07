"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function ClassesAcademyAboutPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Academy Website";

  return (
    <main className="bg-sky-50">
      <section className="px-6 py-12 bg-white border-b border-sky-100">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-sky-900 mb-2">
            {title} – About
          </h1>
          <p className="text-sm text-sky-800 max-w-2xl">
            Use this page to talk about your academy&apos;s journey, values, and
            approach to helping students succeed.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 text-sm text-sky-900">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Who We Are</h2>
            <p className="text-sky-900/90">
              Describe how your academy started, what subjects or exams you
              specialise in, and the type of students you serve.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">What Sets Us Apart</h2>
            <ul className="list-disc pl-5 text-sky-900/90 space-y-1">
              <li>Strong focus on fundamentals</li>
              <li>Regular assessments and feedback</li>
              <li>Mentoring and doubt-solving sessions</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

