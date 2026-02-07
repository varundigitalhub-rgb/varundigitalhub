"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function LandingServiceContactPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Service Landing Website";

  const whatsappMessage = encodeURIComponent(
    "Hi, I previewed the Service Landing Website template and want this website for my business."
  );

  return (
    <main className="bg-white text-slate-900">
      <section className="px-6 py-12 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Contact {title}
          </h1>
          <p className="text-sm text-slate-700 max-w-2xl">
            Use this page to show how service enquiries can reach you, either by
            WhatsApp or via your main contact page.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 text-sm text-slate-900">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Service Location</h2>
            <p>Mumbai, India</p>
            <p>Phone: +91-9372787178</p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">
              Want This Landing Website?
            </h2>
            <p className="text-slate-800">
              Use the CTAs visible across all pages to request a quote for this
              website layout.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex flex-1 justify-center rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white hover:bg-black"
              >
                Get This Website
              </a>
              <a
                href={`https://wa.me/919372787128?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 justify-center rounded-full border border-slate-300 px-6 py-2.5 text-xs font-semibold text-slate-900 hover:bg-slate-50"
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
