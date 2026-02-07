"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function ShopkeeperModernProductsPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Modern Local Store Website";

  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="px-6 py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {title} – Products
          </h1>
          <p className="text-sm text-slate-700 max-w-2xl">
            List your key product categories so nearby customers can quickly see
            if you stock what they need.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-8 md:grid-cols-3 text-sm text-slate-900">
          <div>
            <h2 className="text-lg font-semibold mb-2">Groceries</h2>
            <ul className="space-y-1 text-slate-800">
              <li>Rice, pulses, oil, spices</li>
              <li>Snacks, biscuits, soft drinks</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Home & Personal</h2>
            <ul className="space-y-1 text-slate-800">
              <li>Soaps, shampoos, detergents</li>
              <li>Cleaning and household items</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Extras</h2>
            <ul className="space-y-1 text-slate-800">
              <li>Festive products</li>
              <li>Local speciality items</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

