"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function LandingServicePricingPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Service Landing Website";

  return (
    <main className="bg-white text-slate-900">
      <section className="px-6 py-12 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {title} – Pricing
          </h1>
          <p className="text-sm text-slate-700 max-w-2xl">
            Use simple pricing tiers so visitors can quickly understand which
            option is right for them before contacting you.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-6 md:grid-cols-3 text-xs text-slate-800">
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
            <p className="text-sm font-semibold mb-1">Starter</p>
            <p className="text-lg font-bold mb-1">₹</p>
            <p className="text-slate-700">
              Example slot to describe services included in a starter plan.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900 p-5 shadow-sm border border-slate-900 text-white">
            <p className="text-sm font-semibold mb-1">Standard</p>
            <p className="text-lg font-bold mb-1">₹₹</p>
            <p className="text-slate-100">
              Highlight your recommended plan with stronger styling.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
            <p className="text-sm font-semibold mb-1">Premium</p>
            <p className="text-lg font-bold mb-1">₹₹₹</p>
            <p className="text-slate-700">
              Placeholder for advanced or custom services you provide.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

