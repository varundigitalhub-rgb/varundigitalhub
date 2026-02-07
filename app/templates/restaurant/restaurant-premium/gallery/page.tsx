"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function RestaurantPremiumGalleryPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Premium Dining Restaurant";

  return (
    <main className="bg-slate-950 text-white">
      <section className="px-6 py-12 bg-black border-b border-slate-800">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">{title} – Gallery</h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Show high-quality photos of interiors, plating, and ambience to
            present the fine-dining experience before guests visit.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-4 md:grid-cols-3">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-700 to-black" />
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-500 to-slate-900" />
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-800 to-amber-600" />
        </div>
      </section>
    </main>
  );
}

