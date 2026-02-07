"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function RestaurantModernGalleryPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Classic Family Restaurant";

  return (
    <main className="bg-white">
      <section className="px-6 py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-purple-900 mb-2">
            {title} – Gallery
          </h1>
          <p className="text-sm text-gray-600 max-w-2xl">
            Use this page to showcase your ambience, seating, and food photos so
            guests can imagine their visit before they arrive.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-4 md:grid-cols-3">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-purple-200 to-purple-400" />
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-orange-200 to-red-300" />
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-yellow-200 to-rose-300" />
        </div>
      </section>
    </main>
  );
}

