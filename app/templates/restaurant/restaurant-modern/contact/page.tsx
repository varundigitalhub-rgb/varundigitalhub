"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function RestaurantModernContactPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Classic Family Restaurant";

  const whatsappMessage = encodeURIComponent(
    `Hi, I previewed the Classic Family Restaurant website and want this website.`
  );

  return (
    <main className="bg-gray-50">
      <section className="px-6 py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-purple-900 mb-2">
            Contact {title}
          </h1>
          <p className="text-sm text-gray-600 max-w-2xl">
            Show your address, phone number, WhatsApp, and embedded map so
            guests can easily reach you.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2">
          <div className="space-y-3 text-sm text-gray-800">
            <h2 className="text-lg font-semibold text-purple-900">
              Restaurant Details
            </h2>
            <p>Mumbai, India · Malad West</p>
            <p>Phone: +91-9372787178</p>
            <p>Timings: Mon – Sun, 12 PM – 11 PM</p>
          </div>
          <div className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-purple-900">
              Want This Restaurant Website?
            </h2>
            <p>
              Use the buttons on every page to contact us about building this
              website customised for your restaurant.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex flex-1 justify-center rounded-full bg-purple-700 px-6 py-2.5 text-xs font-semibold text-white hover:bg-purple-800"
              >
                Get This Website
              </a>
              <a
                href={`https://wa.me/919372787128?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 justify-center rounded-full border border-purple-200 px-6 py-2.5 text-xs font-semibold text-purple-900 hover:bg-purple-50"
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
