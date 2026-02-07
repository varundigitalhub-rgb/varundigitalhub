"use client";
import Link from "next/link";
import { useBrandPreview } from "../../../context/BrandPreviewContext";

export default function ShopkeeperTemplate1Page() {
  const { brand } = useBrandPreview();
  const heroTitle =
    brand.brandName || "Shopkeeper / Kirana Store Website Template";

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 px-6 py-20 text-white">
        <div className="container mx-auto flex flex-col items-start gap-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-emerald-200">
              Local Business Website
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              {heroTitle}
            </h1>
            <p className="mb-6 text-lg text-white/90">
              Give your local shop an online identity where customers can quickly see
              what you sell, how to reach you, and why they should choose you.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919372787128?text=Hi,%20I%20want%20this%20website%20template:%20Shopkeeper%20/%20Kirana%20Store%20Website"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-emerald-900 shadow-lg transition-transform hover:scale-105 hover:bg-emerald-50 md:text-base"
              >
                Use This Template
              </a>
              <Link
                href="/contact"
                className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:text-base"
              >
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="w-full max-w-lg rounded-3xl bg-white/5 p-6 backdrop-blur md:p-8">
            <div className="mb-4 flex flex-wrap gap-2 text-xs font-medium text-white/80">
              <span className="rounded-full bg-white/10 px-3 py-1">
                Mobile Friendly
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1">SEO Ready</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Fast Loading</span>
            </div>
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-emerald-200 to-emerald-400" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="container mx-auto grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-emerald-900 md:text-3xl">
              About Your Shop
            </h2>
            <p className="mb-4 text-gray-700">
              Introduce your store, what you specialise in, and the areas you serve.
              This layout is ideal for general stores, kirana shops, and local service
              providers.
            </p>
            <p className="text-gray-700">
              Help regular customers quickly confirm your timings, location, and contact
              details before they visit or place an order.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-emerald-900">
                Ideal For
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Kirana and general stores</li>
                <li>Local electronics and hardware shops</li>
                <li>Small retail and service businesses</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-emerald-900">
                What You Can Highlight
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Product categories and services</li>
                <li>Home delivery or pick-up options</li>
                <li>Payment methods and offers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-2xl font-semibold text-emerald-900 md:text-3xl">
            Products & Services
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-emerald-900">
                Daily Essentials
              </h3>
              <p className="text-sm text-gray-700">
                Showcase groceries, packaged food, and everyday products available at
                your store.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-emerald-900">
                Special Items
              </h3>
              <p className="text-sm text-gray-700">
                Promote speciality products, festive items, or region-specific goods you
                stock.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-emerald-900">
                Services
              </h3>
              <p className="text-sm text-gray-700">
                Add home delivery, bulk orders, or monthly supply services that make you
                more convenient than competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 px-6 py-16">
        <div className="container mx-auto flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="mb-4 text-2xl font-semibold text-emerald-900 md:text-3xl">
              CTA For Local Customers
            </h2>
            <p className="mb-4 text-gray-700">
              Encourage customers to call or message you for product availability,
              delivery requests, and price enquiries.
            </p>
            <p className="text-gray-700">
              Make it easy for people to add you to their contacts and remember your
              store when they need essentials.
            </p>
          </div>
          <div className="space-y-4">
            <a
              href="https://wa.me/919372787128?text=Hi,%20I%20want%20to%20discuss%20a%20website%20for%20my%20local%20shop."
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-emerald-700 px-8 py-3 text-center text-sm font-semibold text-white shadow-md transition-colors hover:bg-emerald-800 md:text-base"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="block rounded-full border border-emerald-200 px-8 py-3 text-center text-sm font-semibold text-emerald-900 transition-colors hover:bg-white md:text-base"
            >
              Discuss This Template
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 px-6 py-16 text-white">
        <div className="container mx-auto grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
              Contact & Store Details
            </h2>
            <p className="mb-4 text-sm text-white/80">
              Use this section to share your address, nearby landmarks, and timings so
              customers can easily find you.
            </p>
            <ul className="space-y-2 text-sm text-white/90">
              <li>Location: Mumbai, India</li>
              <li>Timings: Mon – Sun, 8 AM – 10 PM</li>
              <li>Phone: +91-9372787178</li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-white/80">
              Embed a map and add links to delivery apps, if you use them, so customers
              can place orders from wherever they are.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-emerald-900 shadow-md transition-colors hover:bg-emerald-50 md:text-base"
            >
              Start Your Shop Website
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
