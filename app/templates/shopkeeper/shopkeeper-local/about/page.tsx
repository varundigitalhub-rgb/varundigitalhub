"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function ShopkeeperLocalAboutPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Local Shopkeeper Website";

  return (
    <main className="bg-emerald-50">
      <section className="px-6 py-12 bg-emerald-900 text-white">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-2">{title} – About</h1>
          <p className="text-sm text-emerald-100">
            Share how your shop started, what you specialise in, and how you
            help nearby families with daily essentials.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 text-sm text-emerald-900">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Our Story</h2>
            <p className="text-emerald-900/90">
              Talk about how long the shop has been in the area, the families
              you serve, and how you focus on trust and consistency.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Why Customers Choose Us</h2>
            <ul className="list-disc pl-5 text-emerald-900/90 space-y-1">
              <li>Quick service and friendly staff</li>
              <li>Reliable stock for daily items</li>
              <li>Home delivery options for regular customers</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

