"use client";

import { useBrandPreview } from "../../../context/BrandPreviewContext";

export default function RestaurantPremiumHomePage() {
  const { brand } = useBrandPreview();
  const brandName = brand.brandName || "Premium Dining Restaurant";

  return (
    <main className="bg-slate-950 text-white">
      <section className="px-6 py-16 bg-gradient-to-br from-black via-slate-900 to-slate-800">
        <div className="container mx-auto grid gap-10 md:grid-cols-[1.5fr,1.2fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.28em] text-amber-400 uppercase">
              Fine Dining Experience
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {brandName}
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-xl">
              A premium restaurant website layout for chef-driven, ambience-rich
              dining spaces that want to leave a strong first impression online.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-500 via-amber-700 to-black" />
        </div>
      </section>
    </main>
  );
}

