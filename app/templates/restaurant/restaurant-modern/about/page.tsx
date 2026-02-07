"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function RestaurantModernAboutPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Classic Family Restaurant";

  return (
    <main className="bg-white">
      <section className="px-6 py-12 bg-purple-900 text-white">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-2">{title} – About Us</h1>
          <p className="text-sm text-white/85">
            Use this page to share your story, your cuisine, and why guests love
            dining at your restaurant.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-sm text-gray-700">
            <h2 className="text-xl font-semibold text-purple-900">
              Our Story
            </h2>
            <p>
              Talk about when you started, the inspiration behind the restaurant,
              and what you want every guest to feel when they walk in.
            </p>
            <p>
              Highlight your speciality cuisine, focus on hygiene, and the
              importance you place on consistent taste and service.
            </p>
          </div>
          <div className="space-y-4 text-sm text-gray-700">
            <h2 className="text-xl font-semibold text-purple-900">
              Why Guests Choose Us
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fresh ingredients and made-to-order dishes</li>
              <li>Comfortable seating for families and groups</li>
              <li>Easy access, parking, and home delivery options</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

