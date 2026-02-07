"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function ShopkeeperLocalOffersPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Local Shopkeeper Website";

  return (
    <main className="bg-emerald-50">
      <section className="px-6 py-12 bg-white border-b border-emerald-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-emerald-900 mb-2">
            {title} – Offers
          </h1>
          <p className="text-sm text-emerald-900/80 max-w-2xl">
            Highlight daily and monthly offers so customers remember to call
            your shop when they need to buy essentials.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-6 md:grid-cols-3 text-sm text-emerald-900">
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-emerald-100">
            <p className="font-semibold mb-1">Monthly Grocery Offers</p>
            <p className="text-emerald-900/80">
              Example space to show discounts on monthly grocery lists.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-emerald-100">
            <p className="font-semibold mb-1">Festival Offers</p>
            <p className="text-emerald-900/80">
              Highlight festive discounts and special combos for Diwali, Eid,
              etc.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-emerald-100">
            <p className="font-semibold mb-1">Delivery Benefits</p>
            <p className="text-emerald-900/80">
              Promote free or discounted home delivery above a certain amount.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

