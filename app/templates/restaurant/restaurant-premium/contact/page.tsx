"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function RestaurantPremiumContactPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Premium Dining Restaurant";

  const whatsappMessage = encodeURIComponent(
    "Hi, I previewed the Premium Dining Restaurant website and want this website for my business."
  );

  return (
    <main className="bg-slate-950 text-white">
      <section className="px-6 py-12 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">Contact {title}</h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Present reservation phone numbers, WhatsApp, and location details so
            guests can easily book or enquire.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 text-sm">
          <div className="space-y-2 text-slate-100">
            <h2 className="text-lg font-semibold text-amber-400">
              Restaurant Details
            </h2>
            <p>Mumbai, India · Malad West</p>
            <p>Reservation Phone: +91-9372787178</p>
            <p>Timings: Mon – Sun, 7 PM – 12 AM</p>
          </div>
          <div className="space-y-3 text-slate-100">
            <h2 className="text-lg font-semibold text-amber-400">
              Want This Restaurant Website?
            </h2>
            <p className="text-slate-200">
              Use the CTAs visible across all pages to request this website
              layout customised for your restaurant.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex flex-1 justify-center rounded-full bg-amber-500 px-6 py-2.5 text-xs font-semibold text-black hover:bg-amber-400"
              >
                Get This Website
              </a>
              <a
                href={`https://wa.me/919372787128?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 justify-center rounded-full border border-amber-400 px-6 py-2.5 text-xs font-semibold text-amber-100 hover:bg-white/5"
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
