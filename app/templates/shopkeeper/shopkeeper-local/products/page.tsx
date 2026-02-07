"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function ShopkeeperLocalProductsPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Local Shopkeeper Website";

  return (
    <main className="bg-emerald-50">
      <section className="px-6 py-12 bg-white border-b border-emerald-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-emerald-900 mb-2">
            {title} – Products
          </h1>
          <p className="text-sm text-emerald-900/80 max-w-2xl">
            Show your main product categories so nearby customers know what they
            can buy from your shop.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-8 md:grid-cols-3 text-sm text-emerald-900">
          <div>
            <h2 className="text-lg font-semibold mb-2">Daily Essentials</h2>
            <ul className="space-y-1 text-emerald-900/90">
              <li>Groceries, pulses, oil</li>
              <li>Snacks, biscuits, soft drinks</li>
              <li>Milk and dairy products</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Household Items</h2>
            <ul className="space-y-1 text-emerald-900/90">
              <li>Cleaning products</li>
              <li>Detergent and soaps</li>
              <li>Misc. household items</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Special Items</h2>
            <ul className="space-y-1 text-emerald-900/90">
              <li>Festive and seasonal products</li>
              <li>Local / regional speciality items</li>
              <li>Bulk order options</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

