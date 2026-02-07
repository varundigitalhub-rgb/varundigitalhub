"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function LandingProductPricingPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Startup Landing Page";

  return (
    <main className="bg-slate-950 text-white">
      <section className="px-6 py-12 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">{title} – Pricing</h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Show 2–3 pricing options so visitors can quickly choose the right
            plan and contact you.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-6 md:grid-cols-3 text-xs text-slate-100">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm font-semibold mb-1">Basic</p>
            <p className="text-lg font-bold mb-1">₹</p>
            <p className="text-slate-300">
              Example section to show what&apos;s included in a basic plan.
            </p>
          </div>
          <div className="rounded-2xl border border-purple-500 bg-purple-900 p-5">
            <p className="text-sm font-semibold mb-1">Standard</p>
            <p className="text-lg font-bold mb-1">₹₹</p>
            <p className="text-slate-100">
              Highlight the recommended or most popular plan clearly.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm font-semibold mb-1">Premium</p>
            <p className="text-lg font-bold mb-1">₹₹₹</p>
            <p className="text-slate-300">
              Use this column for custom projects or advanced requirements.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

