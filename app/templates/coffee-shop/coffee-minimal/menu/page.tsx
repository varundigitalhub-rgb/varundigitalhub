"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function CoffeeMinimalMenuPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Cozy Coffee Shop";

  return (
    <main className="bg-amber-50">
      <section className="px-6 py-12 bg-white border-b border-amber-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-amber-900 mb-2">
            {title} – Menu
          </h1>
          <p className="text-sm text-amber-900/80 max-w-2xl">
            Show your full coffee and food menu with simple categories that are
            easy to read on mobile.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-8 md:grid-cols-3 text-sm text-amber-900">
          <div>
            <h2 className="text-lg font-semibold mb-3">Hot Coffee</h2>
            <ul className="space-y-1">
              <li>Espresso</li>
              <li>Cappuccino</li>
              <li>Café Latte</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Cold Coffee</h2>
            <ul className="space-y-1">
              <li>Cold Brew</li>
              <li>Iced Latte</li>
              <li>Frappé</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Snacks & Bakery</h2>
            <ul className="space-y-1">
              <li>Croissants</li>
              <li>Sandwiches</li>
              <li>Brownies</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

