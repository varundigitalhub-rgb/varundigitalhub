"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function CoffeeMinimalAboutPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Cozy Coffee Shop";

  return (
    <main className="bg-amber-50">
      <section className="px-6 py-12 bg-amber-900 text-white">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-2">{title} – About</h1>
          <p className="text-sm text-amber-100">
            Share your cafe story, your love for coffee, and what makes your
            space special for regulars and new visitors.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 text-sm text-amber-900">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Our Story</h2>
            <p className="text-amber-900/90">
              Talk about how the cafe started, the idea behind the interiors,
              and the kind of experience you want every guest to have.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Why Guests Love Us</h2>
            <ul className="list-disc pl-5 text-amber-900/90 space-y-1">
              <li>Freshly brewed coffee with quality beans</li>
              <li>Comfortable seating for work and conversations</li>
              <li>Friendly staff and cosy ambience</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

