"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function ShopkeeperModernOffersPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Modern Local Store Website";

  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="px-6 py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {title} – Offers
          </h1>
          <p className="text-sm text-slate-700 max-w-2xl">
            Highlight everyday deals and special discounts so customers know why
            they should call your store first.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-6 md:grid-cols-3 text-sm text-slate-900">
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
            <p className="font-semibold mb-1">Monthly Offers</p>
            <p className="text-slate-700">
              Example slot to show monthly grocery bill discounts or schemes.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
            <p className="font-semibold mb-1">Festival Offers</p>
            <p className="text-slate-700">
              Use this card to highlight festive bundles and seasonal discounts.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
            <p className="font-semibold mb-1">Delivery Benefits</p>
            <p className="text-slate-700">
              Promote free or discounted delivery for larger orders.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

