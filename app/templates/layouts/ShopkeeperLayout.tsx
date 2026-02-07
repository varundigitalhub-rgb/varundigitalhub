import Link from "next/link";
import Image from "next/image";

type ShopkeeperLayoutProps = {
  brandName?: string;
  brandLogo?: string | null;
};

export function ShopkeeperLayout({
  brandName,
  brandLogo,
}: ShopkeeperLayoutProps) {
  const title = brandName || "Local General Store";

  return (
    <main className="min-h-screen bg-emerald-50">
      <section className="px-6 py-14 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white">
        <div className="container mx-auto grid gap-10 md:grid-cols-[1.4fr,1.2fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
              Local Business Website
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-sm md:text-base text-emerald-50/90 max-w-xl">
              Show daily essentials, special items, and delivery options so
              nearby customers remember to call your shop first.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-emerald-50/90">
              <span className="rounded-full bg-white/10 px-3 py-1">
                Groceries & Essentials
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1">
                Home Delivery
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1">
                UPI Payments
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
              <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                {brandLogo ? (
                  <Image
                    src={brandLogo}
                    alt={title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-[11px] font-semibold text-emerald-900">
                    Logo
                  </span>
                )}
              </div>
              <div>
                <p className="text-[11px] text-emerald-100/80">Preview Mode</p>
                <p className="text-sm font-semibold">{title}</p>
              </div>
            </div>
            <div className="rounded-3xl bg-white/10 p-4 text-xs text-emerald-50">
              <p>
                Highlight free home delivery, quick calls, or WhatsApp orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 bg-emerald-50">
        <div className="container mx-auto grid gap-10 md:grid-cols-[1.5fr,1.1fr]">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-emerald-900 mb-3">
              Products & Offers
            </h2>
            <p className="text-sm md:text-base text-emerald-900/80 mb-4">
              Use simple blocks to show main product categories and daily /
              weekly offers.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-emerald-100">
                <p className="text-sm font-semibold text-emerald-900">
                  Daily Essentials
                </p>
                <p className="mt-1 text-xs text-emerald-900/80">
                  Rice, pulses, oil, snacks, and more.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-emerald-100">
                <p className="text-sm font-semibold text-emerald-900">
                  Special Items
                </p>
                <p className="mt-1 text-xs text-emerald-900/80">
                  Festive items, regional products, and bulk orders.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-emerald-100">
                <p className="text-sm font-semibold text-emerald-900">
                  Home Delivery
                </p>
                <p className="mt-1 text-xs text-emerald-900/80">
                  Same-day delivery for nearby societies on call / WhatsApp.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-emerald-100">
                <p className="text-sm font-semibold text-emerald-900">
                  Payment Methods
                </p>
                <p className="mt-1 text-xs text-emerald-900/80">
                  UPI, cash, and card accepted for all orders.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm border border-emerald-100 text-xs text-emerald-900/90 space-y-3">
            <p className="font-semibold text-sm text-emerald-900">
              Today&apos;s Example Offers
            </p>
            <ul className="space-y-1">
              <li>• Buy 1 Get 1 on chips</li>
              <li>• Flat 5% off on monthly grocery bill</li>
              <li>• Free delivery above ₹500</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 bg-white">
        <div className="container mx-auto grid gap-10 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-emerald-900">
              Location & Timings
            </h2>
            <p className="text-sm md:text-base text-emerald-900/80">
              Make it easy for customers to know where you are and when you are
              open.
            </p>
            <ul className="text-xs text-emerald-900/90 space-y-1">
              <li>Address: Malad West, Mumbai, Maharashtra</li>
              <li>Timings: Mon – Sun, 8:00 AM – 10:00 PM</li>
              <li>Landmark: Near your local landmark here</li>
            </ul>
          </div>
          <div className="space-y-3 text-xs text-emerald-900/90">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-emerald-100 to-emerald-300" />
            <p>Replace this area with an embedded Google Map for directions.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 bg-emerald-900 text-white">
        <div className="container mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Want a Simple Website for Your Local Shop?
            </h2>
            <p className="text-sm md:text-base text-emerald-50">
              Show customers what you sell, your timings, and quick contact
              buttons so they reach you first.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-3">
            <a
              href="tel:+919372787128"
              className="inline-flex w-full justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-emerald-900 shadow-md hover:bg-emerald-50"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919372787128?text=Hi,%20I%20want%20a%20shopkeeper%20website%20like%20this."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full justify-center rounded-full border border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full justify-center rounded-full bg-emerald-700 px-8 py-2.5 text-xs font-semibold text-white hover:bg-emerald-800"
            >
              Discuss Local Business Website
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
