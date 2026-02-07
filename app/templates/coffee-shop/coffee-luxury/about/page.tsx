"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function CoffeeLuxuryAboutPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Luxury Coffee Lounge";

  return (
    <main className="bg-zinc-950 text-white">
      <section className="px-6 py-12 bg-black border-b border-zinc-800">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-2">{title} – About</h1>
          <p className="text-sm text-zinc-200">
            Introduce your coffee lounge with a focus on ambience, speciality
            brews, and the kind of gatherings you host.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 text-sm text-zinc-100">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-amber-400">
              Lounge Concept
            </h2>
            <p className="text-zinc-200">
              Talk about your interiors, seating style, and how your space is
              designed for both quiet work and conversations.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-amber-400">
              Coffee Philosophy
            </h2>
            <p className="text-zinc-200">
              Explain your focus on premium beans, roasting, and brewing
              methods, along with signature drinks.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

