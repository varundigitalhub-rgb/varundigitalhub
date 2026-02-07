"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function CoffeeMinimalContactPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Cozy Coffee Shop";

  const whatsappMessage = encodeURIComponent(
    "Hi, I previewed the Cozy Coffee Shop website and want this website."
  );

  return (
    <main className="bg-amber-50">
      <section className="px-6 py-12 bg-white border-b border-amber-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-amber-900 mb-2">
            Contact {title}
          </h1>
          <p className="text-sm text-amber-900/80 max-w-2xl">
            Show your location, timings, and quick WhatsApp / call buttons so
            visitors can plan their visit.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 text-sm text-amber-900">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Cafe Details</h2>
            <p>Mumbai, India · Malad West</p>
            <p>Timings: Mon – Sun, 8 AM – 10 PM</p>
            <p>Phone: +91-9372787178</p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Interested in This Website?</h2>
            <p className="text-amber-900/80">
              Use the buttons below from any page of this template to discuss a
              similar website for your cafe.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex flex-1 justify-center rounded-full bg-amber-800 px-6 py-2.5 text-xs font-semibold text-white hover:bg-amber-900"
              >
                Get This Website
              </a>
              <a
                href={`https://wa.me/919372787128?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 justify-center rounded-full border border-amber-300 px-6 py-2.5 text-xs font-semibold text-amber-900 hover:bg-white"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
