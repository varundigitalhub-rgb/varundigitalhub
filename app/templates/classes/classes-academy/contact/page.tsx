"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function ClassesAcademyContactPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Academy Website";

  const whatsappMessage = encodeURIComponent(
    "Hi, I previewed the Academy Website template and want this website for my business."
  );

  return (
    <main className="bg-sky-50">
      <section className="px-6 py-12 bg-white border-b border-sky-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-sky-900 mb-2">
            Contact {title}
          </h1>
          <p className="text-sm text-sky-800 max-w-2xl">
            Show branch addresses, timings, and contact details so parents can
            reach your academy easily.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 text-sm text-sky-900">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Academy Details</h2>
            <p>Mumbai, India · Malad West</p>
            <p>Timings: Mon – Sat, 9 AM – 9 PM</p>
            <p>Phone: +91-9372787178</p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">
              Want This Academy Website?
            </h2>
            <p className="text-sky-900/90">
              Use the CTAs on all pages to discuss using this design for your
              coaching or training institute.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex flex-1 justify-center rounded-full bg-sky-700 px-6 py-2.5 text-xs font-semibold text-white hover:bg-sky-800"
              >
                Get This Website
              </a>
              <a
                href={`https://wa.me/919372787128?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 justify-center rounded-full border border-sky-300 px-6 py-2.5 text-xs font-semibold text-sky-900 hover:bg-white"
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
