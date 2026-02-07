"use client";
import Link from "next/link";
import { useBrandPreview } from "../../../context/BrandPreviewContext";

export default function CoffeeTemplate1Page() {
  const { brand } = useBrandPreview();
  const heroTitle =
    brand.brandName || "Cozy Coffee Shop Website Template";

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 px-6 py-20 text-white">
        <div className="container mx-auto flex flex-col items-start gap-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-amber-200">
              Coffee Shop Website
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              {heroTitle}
            </h1>
            <p className="mb-6 text-lg text-white/90">
              Create a warm online presence for your café or coffee shop. Highlight your
              menu, ambience, and location with a layout that feels inviting.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919372787128?text=Hi,%20I%20want%20this%20website%20template:%20Cozy%20Coffee%20Shop%20Website"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-amber-900 shadow-lg transition-transform hover:scale-105 hover:bg-amber-50 md:text-base"
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
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-amber-200 to-amber-400" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="container mx-auto grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-amber-900 md:text-3xl">
              About Your Café
            </h2>
            <p className="mb-4 text-gray-700">
              Use this section to introduce your coffee shop, the story behind it, and
              what makes your space special. Share the kind of experience you want
              guests to feel when they visit.
            </p>
            <p className="text-gray-700">
              Add photos of your interiors, seating, and barista counter so people can
              imagine themselves spending time there.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-amber-900">
                Perfect For
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Neighbourhood cafés and coffee shops</li>
                <li>Speciality coffee brands</li>
                <li>Bakery cafés and dessert shops</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-amber-900">
                What You Can Showcase
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Signature coffees and drinks</li>
                <li>Fresh bakery items and snacks</li>
                <li>Live music nights or events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-2xl font-semibold text-amber-900 md:text-3xl">
            Menu Highlights
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-amber-900">
                Coffee Favourites
              </h3>
              <p className="text-sm text-gray-700">
                Highlight your best-selling coffees, brews, and speciality drinks with
                clear descriptions.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-amber-900">
                Snacks & Bakery
              </h3>
              <p className="text-sm text-gray-700">
                Showcase croissants, sandwiches, and desserts that go well with your
                beverages.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-amber-900">
                Add-Ons & Combos
              </h3>
              <p className="text-sm text-gray-700">
                Promote combo offers like coffee + dessert or breakfast sets to increase
                order value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 px-6 py-16">
        <div className="container mx-auto flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="mb-4 text-2xl font-semibold text-amber-900 md:text-3xl">
              Call-To-Action Section
            </h2>
            <p className="mb-4 text-gray-700">
              Encourage visitors to drop in, reserve space for small gatherings, or
              contact you for collaborations and events.
            </p>
            <p className="text-gray-700">
              Use clear buttons for directions, WhatsApp chat, and Instagram so people
              can connect with your brand.
            </p>
          </div>
          <div className="space-y-4">
            <a
              href="https://wa.me/919372787128?text=Hi,%20I%20want%20to%20discuss%20a%20coffee%20shop%20website%20for%20my%20cafe."
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-amber-700 px-8 py-3 text-center text-sm font-semibold text-white shadow-md transition-colors hover:bg-amber-800 md:text-base"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="block rounded-full border border-amber-300 px-8 py-3 text-center text-sm font-semibold text-amber-900 transition-colors hover:bg-white md:text-base"
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
              Contact & Location
            </h2>
            <p className="mb-4 text-sm text-white/80">
              Use this section to show your café address, timings, and ways to get in
              touch so visitors can easily plan their visit.
            </p>
            <ul className="space-y-2 text-sm text-white/90">
              <li>Location: Mumbai, India</li>
              <li>Open: Mon – Sun, 8 AM – 10 PM</li>
              <li>Phone: +91-9372787178</li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-white/80">
              Embed a map, link to your delivery partners, or add social media links so
              customers can follow and stay updated about new launches and offers.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-amber-900 shadow-md transition-colors hover:bg-amber-50 md:text-base"
            >
              Start Your Café Website
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
