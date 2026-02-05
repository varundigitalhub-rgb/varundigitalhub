import ShopkeeperLocalLayout from "../layout";

export default function ShopkeeperLocalAbout() {
  const brandName = "Ganesh General Store";

  return (
    <ShopkeeperLocalLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-16 text-xs text-slate-200">
        <div className="mx-auto max-w-4xl space-y-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
            About the store
          </p>
          <h1 className="text-2xl font-semibold text-emerald-50">
            A neighbourhood shop that remembers your regular order.
          </h1>
          <p>
            {brandName} is built around trust and convenience. Families in the
            locality rely on us for monthly groceries, last-minute items and
            daily essentials without needing to visit crowded supermarkets.
          </p>
          <p>
            The shop layout is designed so you can quickly pick up what you
            need and be on your way, while still having space to ask for
            recommendations and new arrivals.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-sm font-semibold text-emerald-100">
                Friendly service
              </p>
              <p className="mt-2">
                Customer-first approach with help for senior citizens and bulk
                purchasers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-sm font-semibold text-emerald-100">
                Reliable quality
              </p>
              <p className="mt-2">
                Stock from trusted brands with clear expiry checks and storage.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-sm font-semibold text-emerald-100">
                Community focus
              </p>
              <p className="mt-2">
                Supporting local residents, housing societies and small
                businesses nearby.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ShopkeeperLocalLayout>
  );
}

