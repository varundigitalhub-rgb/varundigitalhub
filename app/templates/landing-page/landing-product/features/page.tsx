"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function LandingProductFeaturesPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Startup Landing Page";

  return (
    <main className="bg-slate-950 text-white">
      <section className="px-6 py-12 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">{title} – Features</h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Use this page to go deeper into the features of your product or
            service beyond the hero section.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-6 md:grid-cols-3 text-xs text-slate-100">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm font-semibold mb-1">Feature Block One</p>
            <p className="text-slate-300">
              Explain a core benefit of your product in 2–3 lines.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm font-semibold mb-1">Feature Block Two</p>
            <p className="text-slate-300">
              Use icons or small visuals to support these sections when building
              the real site.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm font-semibold mb-1">Feature Block Three</p>
            <p className="text-slate-300">
              Make it easy for visitors to skim and understand what you offer.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

