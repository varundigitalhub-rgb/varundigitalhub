"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function LandingServiceTestimonialsPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Service Landing Website";

  return (
    <main className="bg-white text-slate-900">
      <section className="px-6 py-12 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {title} – Testimonials
          </h1>
          <p className="text-sm text-slate-700 max-w-2xl">
            Show short, clear testimonials to build trust and support your
            landing page messaging.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-6 md:grid-cols-3 text-xs text-slate-800">
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
            <p className="mb-3">
              “Use this space for a specific, honest quote about working with
              your service.”
            </p>
            <p className="text-[11px] font-semibold">Client Name</p>
            <p className="text-[10px] text-slate-500">Business / Role</p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
            <p className="mb-3">
              “Short note about improved clarity, communication, or results.”
            </p>
            <p className="text-[11px] font-semibold">Client Name</p>
            <p className="text-[10px] text-slate-500">Business / Role</p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
            <p className="mb-3">
              “Quote that supports your core promise on the home page.”
            </p>
            <p className="text-[11px] font-semibold">Client Name</p>
            <p className="text-[10px] text-slate-500">Business / Role</p>
          </div>
        </div>
      </section>
    </main>
  );
}

