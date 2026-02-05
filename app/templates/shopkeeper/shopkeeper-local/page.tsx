import ShopkeeperLocalLayout from "./layout";

interface ShopkeeperLocalHomeProps {
  brandName?: string;
  brandLogo?: string | null;
}

export default function ShopkeeperLocalHome({
  brandName,
  brandLogo,
}: ShopkeeperLocalHomeProps) {
  const name = brandName || "Ganesh General Store";

  return (
    <ShopkeeperLocalLayout brandName={name} brandLogo={brandLogo}>
      <section className="bg-gradient-to-br from-emerald-900 via-slate-950 to-slate-950 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr,1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Neighbourhood Store
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-emerald-50 md:text-4xl">
              Daily groceries, household essentials and quick refills for your
              home.
            </h1>
            <p className="mt-4 max-w-xl text-sm text-emerald-100/90">
              Open early till late so your family never has to wait for milk,
              bread, snacks or monthly rations. Call and keep your order ready
              for pickup.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <a
                href="tel:+919372787128"
                className="rounded-full bg-emerald-400 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Call the shop
              </a>
              <a
                href="#highlights"
                className="rounded-full border border-emerald-300 px-5 py-3 font-semibold text-emerald-100 hover:bg-emerald-200/10"
              >
                View key products
              </a>
            </div>
          </div>
          <div className="grid gap-4 text-xs text-slate-200">
            <div className="rounded-2xl border border-emerald-500/30 bg-slate-950/60 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-200">
                Fast moving items
              </p>
              <p className="mt-2">
                Milk, bread, eggs, biscuits, snacks, soft drinks and ice cream
                always in stock.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-sm font-semibold text-emerald-100">
                  Monthly groceries
                </p>
                <p className="mt-2">
                  Atta, rice, dal, oils, masalas and daily-use home supplies.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-sm font-semibold text-emerald-100">
                  Home delivery option
                </p>
                <p className="mt-2">
                  Optional local delivery for senior citizens and bulk orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="highlights"
        className="bg-slate-950 px-6 py-16 text-xs text-slate-200"
      >
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-200">
              Grocery essentials
            </p>
            <p className="mt-2">
              Grains, flours, pulses, oils, masalas and packed food items.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-200">
              Household products
            </p>
            <p className="mt-2">
              Cleaning supplies, detergents, soaps, personal care and toiletries.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-200">
              Snacks and quick bites
            </p>
            <p className="mt-2">
              Chips, namkeen, biscuits, chocolates and cold drinks for all age
              groups.
            </p>
          </div>
        </div>
      </section>
    </ShopkeeperLocalLayout>
  );
}

