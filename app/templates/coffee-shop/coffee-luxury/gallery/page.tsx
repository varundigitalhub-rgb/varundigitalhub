"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function CoffeeLuxuryGalleryPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Luxury Coffee Lounge";

  return (
    <main className="bg-zinc-950 text-white">
      <section className="px-6 py-12 bg-black border-b border-zinc-800">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">{title} – Gallery</h1>
          <p className="text-sm text-zinc-200 max-w-2xl">
            Showcase premium photos of your coffee bar, lounge seating, and
            latte art to set the tone for your brand.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-4 md:grid-cols-3">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-zinc-700 to-black" />
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-400 to-zinc-800" />
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-zinc-800 to-amber-500" />
        </div>
      </section>
    </main>
  );
}

