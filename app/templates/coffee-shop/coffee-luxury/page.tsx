"use client";

import { useBrandPreview } from "../../../context/BrandPreviewContext";

export default function CoffeeLuxuryHomePage() {
  const { brand } = useBrandPreview();
  const brandName = brand.brandName || "Luxury Coffee Lounge";

  return (
    <main className="bg-zinc-950 text-white">
      <section className="px-6 py-16 bg-gradient-to-br from-black via-zinc-900 to-zinc-800">
        <div className="container mx-auto grid gap-10 md:grid-cols-[1.4fr,1.2fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.28em] text-amber-400 uppercase">
              Coffee Lounge Website
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {brandName}
            </h1>
            <p className="text-sm md:text-base text-zinc-200 max-w-xl">
              A modern layout for premium coffee lounges that host meetings,
              dates, and relaxed evenings with speciality brews.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-500 via-amber-700 to-black" />
        </div>
      </section>
    </main>
  );
}

