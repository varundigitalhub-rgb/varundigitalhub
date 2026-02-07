"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function ShopkeeperModernAboutPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Modern Local Store Website";

  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="px-6 py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {title} – About
          </h1>
          <p className="text-sm text-slate-700 max-w-2xl">
            Introduce your shop, how long you have been serving the area, and
            what makes your store reliable for nearby families.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 text-sm text-slate-900">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Our Store</h2>
            <p className="text-slate-800">
              Talk about your main product range, the type of customers you
              serve, and your focus on fast, friendly service.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Why Customers Choose Us</h2>
            <ul className="list-disc pl-5 text-slate-800 space-y-1">
              <li>Quick access to daily essentials</li>
              <li>Fair prices and honest recommendations</li>
              <li>Home delivery and bulk order support</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

