"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function LandingProductTestimonialsPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Startup Landing Page";

  return (
    <main className="bg-slate-950 text-white">
      <section className="px-6 py-12 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">{title} – Testimonials</h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Use this page to show short, specific testimonials that build trust
            and support your landing page conversions.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-6 md:grid-cols-3 text-xs text-slate-100">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <p className="mb-3">
              “Example quote to explain how this landing page structure improved
              lead quality and clarity of our offer.”
            </p>
            <p className="text-[11px] font-semibold text-slate-50">
              Client Name
            </p>
            <p className="text-[10px] text-slate-400">Business / Role</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <p className="mb-3">
              “Short review meant to show that the layout works well on mobile
              and supports ad traffic from multiple channels.”
            </p>
            <p className="text-[11px] font-semibold text-slate-50">
              Client Name
            </p>
            <p className="text-[10px] text-slate-400">Business / Role</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <p className="mb-3">
              “Snippet about easy editing, clarity of sections, and better
              tracking of enquiries after using this website format.”
            </p>
            <p className="text-[11px] font-semibold text-slate-50">
              Client Name
            </p>
            <p className="text-[10px] text-slate-400">Business / Role</p>
          </div>
        </div>
      </section>
    </main>
  );
}

