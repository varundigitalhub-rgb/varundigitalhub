import ShopkeeperLocalLayout from "../layout";

export default function ShopkeeperLocalOffers() {
  const brandName = "Ganesh General Store";

  const offers = [
    {
      title: "Monthly ration combo",
      description:
        "Custom grocery hampers for families with rice, dals, oil and essentials at bundled pricing.",
      tag: "Popular",
    },
    {
      title: "Society bulk orders",
      description:
        "Special rates for housing societies on milk, bread and water cans with scheduled delivery.",
      tag: "For societies",
    },
    {
      title: "Festival specials",
      description:
        "Seasonal dry fruits, sweets and gift packs curated for Diwali, Ganesh Chaturthi and other festivals.",
      tag: "Seasonal",
    },
    {
      title: "Loyalty customers",
      description:
        "Simple notebook-based tracking with occasional bill discounts for regular customers.",
      tag: "Local loyalty",
    },
  ];

  return (
    <ShopkeeperLocalLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-16 text-xs text-slate-200">
        <div className="mx-auto max-w-5xl space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Offers and highlights
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-emerald-50">
              Simple, clear offers that bring customers back.
            </h1>
            <p className="mt-3 max-w-xl">
              Use this page to show running schemes, combos and reasons for
              walk-in customers to choose your store over large chains.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-emerald-100">
                    {offer.title}
                  </p>
                  {offer.tag && (
                    <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-200">
                      {offer.tag}
                    </span>
                  )}
                </div>
                <p className="mt-2">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ShopkeeperLocalLayout>
  );
}

