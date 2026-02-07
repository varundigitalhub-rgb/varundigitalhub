import Image from "next/image";
import Link from "next/link";

type CoffeeShopLayoutProps = {
  brandName?: string;
  brandLogo?: string | null;
};

export function CoffeeShopLayout({
  brandName,
  brandLogo,
}: CoffeeShopLayoutProps) {
  const title = brandName || "Neighborhood Coffee Bar";

  return (
    <main className="min-h-screen bg-amber-50">
      <section className="px-6 py-14 bg-white">
        <div className="container mx-auto flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
              Coffee Shop Website
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-amber-900">
              {title}
            </h1>
            <p className="text-sm md:text-base text-amber-900/80 max-w-lg">
              Simple, clean layout for cafes that want to highlight their coffee,
              ambience, and location without clutter.
            </p>
          </div>
          <div className="w-full max-w-xs rounded-2xl border border-amber-100 bg-amber-50 p-4 flex items-center gap-4">
            <div className="h-14 w-14 rounded-xl bg-white flex items-center justify-center overflow-hidden">
              {brandLogo ? (
                <Image
                  src={brandLogo}
                  alt={title}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              ) : (
                <span className="text-xs font-semibold text-amber-900">
                  Logo
                </span>
              )}
            </div>
            <div>
              <p className="text-[11px] text-amber-700/70">Preview Mode</p>
              <p className="text-sm font-semibold text-amber-900">{title}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="container mx-auto grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold text-amber-900 mb-3">
              Coffee Specials
            </h2>
            <p className="text-sm text-amber-900/80">
              Show 3–6 signature drinks with short descriptions so visitors
              immediately see what makes your cafe special.
            </p>
          </div>
          <div className="md:col-span-2 grid gap-4 sm:grid-cols-3">
            {[
              {
                name: "Cold Brew",
                desc: "Slow brewed for 18 hours, served over ice.",
              },
              {
                name: "Hazelnut Latte",
                desc: "Silky espresso with hazelnut and microfoam.",
              },
              {
                name: "Filter Coffee",
                desc: "Classic South Indian style filter coffee.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-2xl bg-white p-4 shadow-sm border border-amber-100"
              >
                <p className="text-sm font-semibold text-amber-900">
                  {item.name}
                </p>
                <p className="mt-1 text-xs text-amber-900/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 bg-white">
        <div className="container mx-auto space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-amber-900">
              Ambience Gallery
            </h2>
            <p className="hidden text-xs text-amber-900/70 md:block max-w-sm text-right">
              Use 3–5 photos to show seating, counter, and the overall vibe so
              people can imagine spending time at your cafe.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-200 to-amber-400" />
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-100 to-orange-300" />
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-300 to-amber-500" />
          </div>
        </div>
      </section>

      <section className="px-6 py-14 bg-amber-900 text-white">
        <div className="container mx-auto flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Visit Us for Your Next Coffee Break
            </h2>
            <p className="text-sm md:text-base text-white/85">
              Show your address, timings, and quick links so visitors can easily
              open directions or message you.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-3">
            <p className="text-xs text-white/80">
              Malad West, Mumbai · Mon – Sun, 8 AM – 10 PM
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://maps.google.com"
                className="flex-1 rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-amber-900 shadow-md hover:bg-amber-50"
              >
                Open Directions
              </a>
              <a
                href="https://wa.me/919372787128?text=Hi,%20I%20want%20a%20coffee%20shop%20website%20like%20this."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full border border-white/70 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
              >
                WhatsApp Us
              </a>
            </div>
            <Link
              href="/contact"
              className="mt-2 inline-flex w-full justify-center rounded-full bg-amber-700 px-6 py-2.5 text-xs font-semibold text-white hover:bg-amber-800"
            >
              Discuss Coffee Shop Website
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
