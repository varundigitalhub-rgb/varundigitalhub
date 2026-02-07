"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function RestaurantPremiumAboutPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Premium Dining Restaurant";

  return (
    <main className="bg-slate-950 text-white">
      <section className="px-6 py-12 bg-black border-b border-slate-800">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-2">{title} – About</h1>
          <p className="text-sm text-slate-200">
            Use this page to introduce your fine-dining story, chef vision, and
            the experience you want guests to remember.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 text-sm text-slate-100">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-amber-400">
              Concept & Cuisine
            </h2>
            <p className="text-slate-200">
              Describe your cuisine philosophy, local ingredients, and what
              makes your dishes unique compared to regular restaurants.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-amber-400">
              Guest Experience
            </h2>
            <p className="text-slate-200">
              Talk about ambience, service, and the kind of evenings you host –
              family dinners, celebrations, or business meetings.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

