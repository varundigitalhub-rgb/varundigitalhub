"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function ShopkeeperLocalContactPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Local Shopkeeper Website";

  const whatsappMessage = encodeURIComponent(
    "Hi, I previewed the Local Shopkeeper Website and want this website."
  );

  return (
    <main className="bg-emerald-50">
      <section className="px-6 py-12 bg-white border-b border-emerald-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-emerald-900 mb-2">
            Contact {title}
          </h1>
          <p className="text-sm text-emerald-900/80 max-w-2xl">
            Show your shop address, timings, and contact details so regular
            customers can easily reach you.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 text-sm text-emerald-900">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Shop Details</h2>
            <p>Location: Malad West, Mumbai, Maharashtra</p>
            <p>Timings: Mon – Sun, 8 AM – 10 PM</p>
            <p>Phone: +91-9372787178</p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">
              Want This Shopkeeper Website?
            </h2>
            <p className="text-emerald-900/80">
              Use the website CTAs to request this design customised for your
              own local business.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex flex-1 justify-center rounded-full bg-emerald-700 px-6 py-2.5 text-xs font-semibold text-white hover:bg-emerald-800"
              >
                Get This Website
              </a>
              <a
                href={`https://wa.me/919372787128?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 justify-center rounded-full border border-emerald-300 px-6 py-2.5 text-xs font-semibold text-emerald-900 hover:bg-white"
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
