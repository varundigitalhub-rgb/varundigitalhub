"use client";

import { useBrandPreview } from "../../../context/BrandPreviewContext";

export default function LandingServiceHomePage() {
  const { brand } = useBrandPreview();
  const brandName = brand.brandName || "Service Landing Website";

  return (
    <main className="bg-white text-slate-900">
      <section className="px-6 py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="container mx-auto grid gap-10 md:grid-cols-[1.4fr,1.2fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-slate-200">
              Service Landing Website
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {brandName}
            </h1>
            <p className="text-sm md:text-base text-slate-100 max-w-xl">
              A structured landing website layout for services and agencies that
              want clear communication and strong CTAs.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-200 to-slate-400" />
        </div>
      </section>
    </main>
  );
}

