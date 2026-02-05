import Image from "next/image";
import Link from "next/link";

interface CoffeeSpecial {
  name: string;
  note: string;
  price: string;
}

interface CoffeeShopLayoutProps {
  brandName: string;
  brandLogo?: string | null;
  heroSubtitle: string;
  specials: CoffeeSpecial[];
  galleryImages: string[];
  address: string;
  openingHours: string;
  visitCtaText: string;
  visitCtaLink: string;
}

export function CoffeeShopLayout({
  brandName,
  brandLogo,
  heroSubtitle,
  specials,
  galleryImages,
  address,
  openingHours,
  visitCtaText,
  visitCtaLink,
}: CoffeeShopLayoutProps) {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-50">
      {/* Minimal Hero */}
      <section className="border-b border-stone-800 bg-stone-950 px-6 py-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-amber-100">
              {brandLogo ? (
                <Image
                  src={brandLogo}
                  alt={brandName}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-cover"
                />
              ) : (
                <span className="text-sm font-semibold text-stone-900">
                  {brandName.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                {brandName}
              </h1>
              <p className="text-xs text-stone-400">{heroSubtitle}</p>
            </div>
          </div>
          <Link
            href={visitCtaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-amber-300/80 px-4 py-2 text-xs font-medium text-amber-200 hover:bg-amber-200/10"
          >
            {visitCtaText}
          </Link>
        </div>
      </section>

      {/* Coffee Specials */}
      <section className="border-b border-stone-800 bg-stone-950 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-amber-50">
              Today&apos;s Coffee Specials
            </h2>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300">
              Slow Roasted Beans
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {specials.map((special) => (
              <div
                key={special.name}
                className="rounded-2xl border border-stone-800 bg-stone-900/60 p-4"
              >
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-semibold">{special.name}</p>
                  <p className="text-xs font-medium text-amber-300">
                    {special.price}
                  </p>
                </div>
                <p className="mt-2 text-xs text-stone-400">{special.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambience Gallery */}
      <section className="border-b border-stone-800 bg-stone-950 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-amber-50">
              Inside the Cafe
            </h2>
            <p className="text-xs text-stone-400">
              A calm corner to slow down
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative h-44 overflow-hidden rounded-2xl bg-stone-900"
              >
                <Image
                  src={image}
                  alt={`Cafe ambience ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="bg-stone-950 px-6 py-12">
        <div className="mx-auto max-w-5xl rounded-3xl border border-stone-800 bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-900 px-6 py-8 md:px-8 md:py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-amber-100">
                Visit Us
              </h3>
              <p className="mt-2 text-xs text-stone-400">{address}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-amber-100">
                Opening Hours
              </h3>
              <p className="mt-2 text-xs text-stone-400">{openingHours}</p>
            </div>
            <div className="flex items-end">
              <Link
                href={visitCtaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-amber-300 px-4 py-3 text-xs font-semibold text-stone-950 hover:bg-amber-200"
              >
                Open in Google Maps
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
