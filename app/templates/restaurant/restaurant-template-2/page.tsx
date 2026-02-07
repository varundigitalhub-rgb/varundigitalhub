"use client";
import Link from "next/link";
import { useBrandPreview } from "../../../context/BrandPreviewContext";

export default function RestaurantTemplate2Page() {
  const { brand } = useBrandPreview();
  const heroTitle =
    brand.brandName || "Modern Dining Restaurant Website";

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-black px-6 py-20 text-white">
        <div className="container mx-auto flex flex-col items-start gap-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-purple-300">
              Fine Dining Experience
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              {heroTitle}
            </h1>
            <p className="mb-6 text-lg text-white/85">
              A bold, modern layout for premium restaurants that want to highlight
              ambience, chef-crafted menus, and curated experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919372787128?text=Hi,%20I%20want%20this%20website%20template:%20Modern%20Dining%20Restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 hover:bg-purple-700 md:text-base"
              >
                Use This Template
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-white px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:text-base"
              >
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/40 via-purple-700/20 to-transparent p-6">
            <div className="mb-4 flex flex-wrap gap-2 text-xs font-medium text-white/80">
              <span className="rounded-full bg-white/10 px-3 py-1">
                Mobile Friendly
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1">SEO Ready</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Fast Loading</span>
            </div>
            <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-purple-500 via-purple-800 to-black" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="container mx-auto grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-purple-900 md:text-3xl">
              About The Experience
            </h2>
            <p className="mb-4 text-gray-700">
              This template focuses on storytelling, highlighting your brand, chef, and
              curated menu philosophy. It is ideal for premium restaurants that want a
              strong first impression.
            </p>
            <p className="text-gray-700">
              Feature private dining, tasting menus, and signature dishes with a layout
              built to convert online visitors into table bookings.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-purple-900">
                Brand Story Section
              </h3>
              <p className="text-sm text-gray-700">
                Dedicated space to introduce your restaurant&apos;s story, inspiration, and
                philosophy with high-quality imagery and clean typography.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-purple-900">
                Chef & Team
              </h3>
              <p className="text-sm text-gray-700">
                Highlight the chef and key team members, helping guests connect with the
                people behind the dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-2xl font-semibold text-purple-900 md:text-3xl">
            Signature Menu Layout
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-purple-900">
                Tasting Menu
              </h3>
              <p className="text-sm text-gray-700">
                Perfect layout for multi-course tasting menus with curated descriptions
                and wine pairings.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-purple-900">
                Seasonal Specials
              </h3>
              <p className="text-sm text-gray-700">
                Highlight seasonal ingredients and limited-time dishes that keep guests
                excited to return.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-purple-900">
                Drinks & Pairings
              </h3>
              <p className="text-sm text-gray-700">
                Showcase cocktails, wines, and curated pairings with a clean, premium
                layout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-50 px-6 py-16">
        <div className="container mx-auto flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="mb-4 text-2xl font-semibold text-purple-900 md:text-3xl">
              CTA For Reservations
            </h2>
            <p className="mb-4 text-gray-700">
              Guide visitors to make a reservation, book a private dining room, or
              inquire about events with a strong, focused call-to-action.
            </p>
            <p className="text-gray-700">
              Add clear options to call, send a WhatsApp message, or fill a simple
              enquiry form.
            </p>
          </div>
          <div className="space-y-4">
            <a
              href="tel:+919372787128"
              className="block rounded-full bg-purple-700 px-8 py-3 text-center text-sm font-semibold text-white shadow-md transition-colors hover:bg-purple-800 md:text-base"
            >
              Call For Bookings
            </a>
            <a
              href="https://wa.me/919372787128?text=Hi,%20I%20want%20to%20discuss%20a%20fine-dining%20restaurant%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full border border-purple-200 px-8 py-3 text-center text-sm font-semibold text-purple-700 transition-colors hover:bg-white md:text-base"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 px-6 py-16 text-white">
        <div className="container mx-auto grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
              Contact & Location
            </h2>
            <p className="mb-4 text-sm text-white/80">
              Use this section to display contact details, address, and quick links so
              guests can reach you without friction.
            </p>
            <ul className="space-y-2 text-sm text-white/90">
              <li>Mumbai, India</li>
              <li>Open: Tue – Sun, 7 PM – 12 AM</li>
              <li>Phone: +91-9372787178</li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-white/80">
              You can connect this layout with your reservation system, add a map, and
              integrate tracking to measure how many guests contact you through the
              website.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-purple-900 shadow-md transition-colors hover:bg-purple-50 md:text-base"
            >
              Discuss This Template
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
