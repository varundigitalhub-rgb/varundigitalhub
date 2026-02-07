"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function ClassesCoachingAboutPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Coaching Classes Website";

  return (
    <main className="bg-slate-950 text-white">
      <section className="px-6 py-12 bg-gradient-to-r from-blue-900 to-purple-800 border-b border-slate-800">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-2">{title} – About</h1>
          <p className="text-sm text-blue-100">
            Describe your coaching institute&apos;s mission, teaching philosophy, and
            what makes your classes different from others nearby.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 text-sm text-slate-100">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Our Mission</h2>
            <p className="text-slate-200">
              Explain your focus on concepts, discipline, and mentoring to help
              students perform better in exams and build confidence.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">What Parents Can Expect</h2>
            <ul className="list-disc pl-5 text-slate-200 space-y-1">
              <li>Regular tests and performance updates</li>
              <li>Clear communication about progress and doubts</li>
              <li>Safe, structured learning environment</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

