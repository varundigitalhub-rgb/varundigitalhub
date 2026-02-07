"use client";

import { useBrandPreview } from "../../../../context/BrandPreviewContext";

export default function CoffeeLuxuryContactPage() {
  const { brand } = useBrandPreview();
  const title = brand.brandName || "Luxury Coffee Lounge";

  const whatsappMessage = encodeURIComponent(
    "Hi, I previewed the Luxury Coffee Lounge website and want this website for my business."
  );

  return (
    <main className="bg-zinc-950 text-white">
      <section className="px-6 py-12 bg-zinc-900 border-b border-zinc-800">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">Contact {title}</h1>
          <p className="text-sm text-zinc-200 max-w-2xl">
            Show your lounge timings, location, and primary contact channels
            for table bookings or private events.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 text-sm">
          <div className="space-y-2 text-zinc-100">
            <h2 className="text-lg font-semibold text-amber-400">
              Lounge Details
            </h2>
            <p>Mumbai, India · Malad West</p>
            <p>Timings: Mon – Sun, 10 AM – 11 PM</p>
            <p>Phone: +91-9372787178</p>
          </div>
          <div className="space-y-3 text-zinc-100">
            <h2 className="text-lg font-semibold text-amber-400">
              Want This Coffee Website?
            </h2>
            <p className="text-zinc-200">
              Use the CTAs on every page to talk about building this website
              for your own coffee business.
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
