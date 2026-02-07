"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function RestaurantPremiumMenuPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Premium Dining Restaurant";

  return (
    <main className="bg-slate-950 text-white">
      <section className="px-6 py-12 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">{title} – Menu</h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Use this layout to present a premium food and beverage menu with
            fine-dining style categories.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-8 md:grid-cols-3 text-xs text-slate-100">
          <div>
            <h2 className="text-lg font-semibold text-amber-400 mb-3">
              Starters
            </h2>
            <ul className="space-y-1">
              <li>Chef&apos;s Tasting Platter</li>
              <li>Signature Soup of the Day</li>
              <li>Slow-roasted Vegetable Bruschetta</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-amber-400 mb-3">
              Main Course
            </h2>
            <ul className="space-y-1">
              <li>Grilled Cottage Cheese Steak</li>
              <li>Herb-infused Risotto</li>
              <li>Chef&apos;s Special Tasting Menu</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-amber-400 mb-3">
              Desserts & Beverages
            </h2>
            <ul className="space-y-1">
              <li>Signature Dessert Platter</li>
              <li>Mocktail & Beverage Pairings</li>
              <li>Hot and Cold Beverages</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

