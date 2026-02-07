"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function RestaurantModernMenuPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Classic Family Restaurant";

  return (
    <main className="bg-white">
      <section className="px-6 py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-purple-900 mb-2">
            {title} – Menu
          </h1>
          <p className="text-sm text-gray-600 max-w-2xl">
            Show your full menu with categories, prices, and best sellers so
            guests can plan what to order before visiting.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-purple-900">Starters</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Paneer Tikka – ₹280</li>
              <li>Veg Manchurian – ₹260</li>
              <li>Hara Bhara Kebab – ₹250</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-purple-900">Main Course</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Veg Handi – ₹320</li>
              <li>Dal Tadka – ₹260</li>
              <li>Veg Fried Rice – ₹260</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-purple-900">Breads & Combos</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Tandoori Roti Basket – ₹190</li>
              <li>Butter Naan – ₹60</li>
              <li>Family Combo Meals – from ₹699</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

