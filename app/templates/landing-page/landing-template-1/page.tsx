"use client";
import Link from "next/link";
import { useBrandPreview } from "../../../context/BrandPreviewContext";

export default function LandingTemplate1Page() {
  const { brand } = useBrandPreview();
  const heroTitle =
    brand.brandName || "Startup Landing Page Website Template";

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-700 px-6 py-20 text-white">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-purple-200">
              High-Converting Landing Page
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              {heroTitle}
            </h1>
            <p className="mb-6 text-lg text-white/90">
              Built for startups, service providers, and campaigns that want clean,
              focused pages designed to drive signups and enquiries.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919372787128?text=Hi,%20I%20want%20this%20website%20template:%20Startup%20Landing%20Page"
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
          <div className="w-full">
            <div className="rounded-3xl bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex flex-wrap gap-2 text-xs font-medium text-white/80">
                <span className="rounded-full bg-white/10 px-3 py-1">
                  Mobile Friendly
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1">
                  SEO & Ad Ready
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1">
                  Fast Loading
                </span>
              </div>
              <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-purple-300 to-indigo-400" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="container mx-auto grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-purple-900 md:text-3xl">
              About The Offer
            </h2>
            <p className="mb-4 text-gray-700">
              This layout is designed to communicate your main offer clearly within the
              first few seconds. Perfect for lead generation, product launches, or
              service enquiries.
            </p>
            <p className="text-gray-700">
              Combine a strong headline, supporting text, and clear benefits to convince
              visitors to take action without distractions.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-purple-900">
                Ideal For
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Startups running ad campaigns</li>
                <li>Consultants and agencies</li>
                <li>Single product or service pages</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-purple-900">
                Key Elements
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Hero section with clear CTA</li>
                <li>Benefits and social proof</li>
                <li>Enquiry or booking form section</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-2xl font-semibold text-purple-900 md:text-3xl">
            Benefits & Highlights
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-purple-900">
                Clear Messaging
              </h3>
              <p className="text-sm text-gray-700">
                Structure your content so visitors quickly understand what you offer and
                who it is for.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-purple-900">
                Conversion Focused
              </h3>
              <p className="text-sm text-gray-700">
                Place clear call-to-action buttons throughout the page for maximum
                response.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-purple-900">
                Ad Campaign Ready
              </h3>
              <p className="text-sm text-gray-700">
                Optimized layout for Google Ads and social media campaigns with fast
                loading and focused content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-50 px-6 py-16">
        <div className="container mx-auto flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="mb-4 text-2xl font-semibold text-purple-900 md:text-3xl">
              CTA Section
            </h2>
            <p className="mb-4 text-gray-700">
              Use this section to drive visitors to your primary goal, whether that is
              booking a call, submitting a form, or requesting a quote.
            </p>
            <p className="text-gray-700">
              You can connect this with CRM tools, email marketing, or WhatsApp for
              instant follow-up.
            </p>
          </div>
          <div className="space-y-4">
            <a
              href="https://wa.me/919372787128?text=Hi,%20I%20want%20to%20discuss%20a%20landing%20page%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-purple-700 px-8 py-3 text-center text-sm font-semibold text-white shadow-md transition-colors hover:bg-purple-800 md:text-base"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="block rounded-full border border-purple-200 px-8 py-3 text-center text-sm font-semibold text-purple-900 transition-colors hover:bg-white md:text-base"
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
              Contact & Integration
            </h2>
            <p className="mb-4 text-sm text-white/80">
              Use this section to show how prospects can get in touch and what tools you
              integrate with, such as WhatsApp, email, or call tracking.
            </p>
            <ul className="space-y-2 text-sm text-white/90">
              <li>Location: Mumbai, India</li>
              <li>Phone: +91-9372787178</li>
              <li>WhatsApp: +91-9372787178</li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-white/80">
              You can add embedded forms, scheduling tools, or chat widgets to ensure
              every interested visitor has a clear path to contact you.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-purple-900 shadow-md transition-colors hover:bg-purple-50 md:text-base"
            >
              Start Your Landing Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
