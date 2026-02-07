"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function LandingServiceFeaturesPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Service Landing Website";

  return (
    <main className="bg-white text-slate-900">
      <section className="px-6 py-12 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {title} – Features
          </h1>
          <p className="text-sm text-slate-700 max-w-2xl">
            Show the core features and benefits of your service in simple,
            skimmable cards that are easy to read on mobile and desktop.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-6 md:grid-cols-3 text-xs text-slate-800">
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
            <p className="text-sm font-semibold mb-1">Feature One</p>
            <p className="text-slate-700">
              Describe a core strength of your service in one or two sentences.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
            <p className="text-sm font-semibold mb-1">Feature Two</p>
            <p className="text-slate-700">
              Use this card to talk about speed, reliability, or support.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
            <p className="text-sm font-semibold mb-1">Feature Three</p>
            <p className="text-slate-700">
              Highlight something that competitors do not offer easily.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

