"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function ClassesCoachingContactPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Coaching Classes Website";

  const whatsappMessage = encodeURIComponent(
    "Hi, I previewed the Coaching Classes Website and want this website."
  );

  return (
    <main className="bg-slate-950 text-white">
      <section className="px-6 py-12 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">Contact {title}</h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Show branch locations, timings, and contact numbers so parents know
            how to reach your coaching centre.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 text-sm text-slate-100">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Centre Details</h2>
            <p>Mumbai, India · Malad West</p>
            <p>Timings: Mon – Sat, 9 AM – 9 PM</p>
            <p>Phone: +91-9372787178</p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">
              Want This Coaching Website?
            </h2>
            <p className="text-slate-200">
              Use the CTAs on every page to discuss this design for your own
              coaching classes.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex flex-1 justify-center rounded-full bg-blue-600 px-6 py-2.5 text-xs font-semibold text-white hover:bg-blue-700"
              >
                Get This Website
              </a>
              <a
                href={`https://wa.me/919372787128?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 justify-center rounded-full border border-blue-300 px-6 py-2.5 text-xs font-semibold text-blue-100 hover:bg-blue-700"
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
