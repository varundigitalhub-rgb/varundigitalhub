"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function CoffeeMinimalGalleryPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Cozy Coffee Shop";

  return (
    <main className="bg-amber-50">
      <section className="px-6 py-12 bg-white border-b border-amber-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-amber-900 mb-2">
            {title} – Gallery
          </h1>
          <p className="text-sm text-amber-900/80 max-w-2xl">
            Use this page to showcase your ambience, seating, counter, and
            events so people can visualise your cafe.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-4 md:grid-cols-3">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-100 to-amber-300" />
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-200 to-amber-400" />
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-300 to-amber-500" />
        </div>
      </section>
    </main>
  );
}

