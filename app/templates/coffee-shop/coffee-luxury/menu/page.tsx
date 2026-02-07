"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function CoffeeLuxuryMenuPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Luxury Coffee Lounge";

  return (
    <main className="bg-zinc-950 text-white">
      <section className="px-6 py-12 bg-zinc-900 border-b border-zinc-800">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">{title} – Menu</h1>
          <p className="text-sm text-zinc-200 max-w-2xl">
            Show speciality coffees, signature drinks, and small plates with a
            premium, minimal menu layout.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-8 md:grid-cols-3 text-xs text-zinc-100">
          <div>
            <h2 className="text-lg font-semibold text-amber-400 mb-3">
              Signature Coffees
            </h2>
            <ul className="space-y-1">
              <li>Single-origin Pour Over</li>
              <li>Cold Brew with Citrus</li>
              <li>Hazelnut Flat White</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-amber-400 mb-3">
              Seasonal Drinks
            </h2>
            <ul className="space-y-1">
              <li>Spiced Mocha</li>
              <li>Vanilla Almond Latte</li>
              <li>Limited Edition Drinks</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-amber-400 mb-3">
              Small Plates
            </h2>
            <ul className="space-y-1">
              <li>Cheese Platters</li>
              <li>Artisan Sandwiches</li>
              <li>Fresh Bakes & Desserts</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

