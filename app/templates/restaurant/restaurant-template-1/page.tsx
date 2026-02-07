"use client";
import Link from "next/link";
import { useBrandPreview } from "../../../context/BrandPreviewContext";

export default function RestaurantTemplate1Page() {
  const { brand } = useBrandPreview();
  const heroTitle =
    brand.brandName || "Classic Family Restaurant Website";

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 px-6 py-20 text-white">
        <div className="container mx-auto flex flex-col items-start gap-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              {heroTitle}
            </h1>
            <p className="mb-6 text-lg text-white/90">
              Showcase your family restaurant with a warm, welcoming website that
              highlights your menu, ambience, and location. Perfect for local diners,
              fine-dining spaces, and casual restaurants.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919372787128?text=Hi,%20I%20want%20this%20website%20template:%20Classic%20Family%20Restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-purple-900 shadow-lg transition-transform hover:scale-105 hover:bg-purple-50 md:text-base"
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
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-purple-200 to-purple-400" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="container mx-auto grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-purple-900 md:text-3xl">
              About Your Restaurant
            </h2>
            <p className="mb-4 text-gray-700">
              This layout is designed for restaurants that want to build trust and make
              guests feel welcome before they even visit. Add your story, chef
              highlights, signature dishes, and photos of your dining space.
            </p>
            <p className="text-gray-700">
              Clearly display opening hours, address, and reservation details so guests
              can quickly decide to book a table or walk in.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-purple-900">
                Ideal For
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Family restaurants and casual dining</li>
                <li>Fine-dining and speciality cuisine</li>
                <li>Multi-cuisine and themed restaurants</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-purple-900">
                What You Can Highlight
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Chef specials and popular dishes</li>
                <li>Ambience photos and interiors</li>
                <li>Special offers, buffets, or events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-2xl font-semibold text-purple-900 md:text-3xl">
            Menu Highlights
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-purple-900">
                Starters
              </h3>
              <p className="text-sm text-gray-700">
                Showcase your most-ordered starters with appetizing photos and short
                descriptions that encourage guests to explore more.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-purple-900">Mains</h3>
              <p className="text-sm text-gray-700">
                Display signature main courses, chef specials, and family platters with
                clear pricing and portion details.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-purple-900">
                Desserts & Beverages
              </h3>
              <p className="text-sm text-gray-700">
                Highlight desserts and drinks that complete the dining experience,
                including seasonal specials and house favourites.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-50 px-6 py-16">
        <div className="container mx-auto flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <div className="max-w-xl">
            <h2 className="mb-4 text-2xl font-semibold text-purple-900 md:text-3xl">
              Call-To-Action Section
            </h2>
            <p className="mb-4 text-gray-700">
              Place a strong call-to-action for table reservations, online inquiries, or
              party bookings. Guide visitors clearly to your primary goal.
            </p>
            <p className="text-gray-700">
              Add buttons for direct calling, WhatsApp chat, and directions so customers
              can reach you in one tap.
            </p>
          </div>
          <div className="space-y-4">
            <a
              href="tel:+919372787128"
              className="block rounded-full bg-purple-700 px-8 py-3 text-center text-sm font-semibold text-white shadow-md transition-colors hover:bg-purple-800 md:text-base"
            >
              Call For Reservations
            </a>
            <a
              href="https://wa.me/919372787128?text=Hi,%20I%20want%20to%20discuss%20a%20restaurant%20website%20for%20my%20business."
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
              Use this section to display restaurant contact details, location, and
              opening hours so guests have complete clarity before visiting.
            </p>
            <ul className="space-y-2 text-sm text-white/90">
              <li>Mumbai, India</li>
              <li>Open: Mon – Sun, 11 AM – 11 PM</li>
              <li>Phone: +91-9372787178</li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-white/80">
              You can embed a Google Map, add multiple branch locations, and include a
              simple enquiry form so visitors can request bookings or ask questions
              directly from the website.
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
