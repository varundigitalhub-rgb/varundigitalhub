"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function LandingProductContactPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Startup Landing Page";

  const whatsappMessage = encodeURIComponent(
    "Hi, I previewed the Startup Landing Page website and want this website."
  );

  return (
    <main className="bg-slate-950 text-white">
      <section className="px-6 py-12 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">Contact – {title}</h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Use this page to capture enquiries from visitors who are interested
            in your product or service.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 text-sm">
          <div className="space-y-2 text-slate-100">
            <h2 className="text-lg font-semibold">Business Details</h2>
            <p>Mumbai, India</p>
            <p>Phone: +91-9372787178</p>
            <p>Prefer WhatsApp for quick responses.</p>
          </div>
          <div className="space-y-3 text-slate-100">
            <h2 className="text-lg font-semibold">Discuss This Website</h2>
            <p className="text-slate-200">
              Use the CTAs visible across all pages of this template to request
              a quote or chat.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex flex-1 justify-center rounded-full bg-purple-600 px-6 py-2.5 text-xs font-semibold text-white hover:bg-purple-700"
              >
                Get This Website
              </a>
              <a
                href={`https://wa.me/919372787128?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 justify-center rounded-full border border-purple-300 px-6 py-2.5 text-xs font-semibold text-purple-100 hover:bg-purple-800"
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
