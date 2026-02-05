import Link from "next/link";

interface Offer {
  title: string;
  description: string;
  badge?: string;
}

interface ShopkeeperLayoutProps {
  brandName: string;
  brandLogo?: string | null;
  heroSubtitle: string;
  heroHighlight: string;
  offers: Offer[];
  address: string;
  timings: string;
  phoneNumber: string;
  whatsappLink: string;
}

export function ShopkeeperLayout({
  brandName,
  brandLogo,
  heroSubtitle,
  heroHighlight,
  offers,
  address,
  timings,
  phoneNumber,
  whatsappLink,
}: ShopkeeperLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Local Store Hero */}
      <section className="border-b border-slate-800 bg-gradient-to-br from-emerald-900 via-slate-950 to-slate-950 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400 text-sm font-semibold text-slate-950">
                  {brandLogo ? (
                    <span className="text-xs">Logo</span>
                  ) : (
                    brandName.charAt(0)
                  )}
                </div>
                <div>
                  <h1 className="text-xl font-semibold tracking-tight">
                    {brandName}
                  </h1>
                  <p className="text-xs text-emerald-100">{heroSubtitle}</p>
                </div>
              </div>
              <p className="mt-4 max-w-md text-sm text-emerald-50/90">
                {heroHighlight}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/70 px-4 py-3 text-xs">
              <p className="text-emerald-200">Call for quick enquiry</p>
              <p className="mt-1 font-semibold text-emerald-100">
                {phoneNumber}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products / Offers */}
      <section className="border-b border-slate-800 bg-slate-950 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-lg font-semibold text-emerald-100">
            Today&apos;s Offers
          </h2>
          <p className="mt-2 text-xs text-slate-400">
            Highlight key products or discounts that bring customers to your
            shop.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                {offer.badge && (
                  <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-200">
                    {offer.badge}
                  </span>
                )}
                <p className="mt-2 text-sm font-semibold text-slate-50">
                  {offer.title}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Timing */}
      <section className="border-b border-slate-800 bg-slate-950 px-6 py-12">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Location
            </p>
            <p className="mt-2 text-xs text-slate-300">{address}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Store Timings
            </p>
            <p className="mt-2 text-xs text-slate-300">{timings}</p>
          </div>
          <div className="flex items-end">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-4 py-3 text-xs font-semibold text-slate-950 hover:bg-emerald-300"
            >
              Call / WhatsApp Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

