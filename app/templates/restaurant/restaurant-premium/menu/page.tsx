import RestaurantPremiumLayout from "../layout";

export default function RestaurantPremiumMenu() {
  const brandName = "Aurora Fine Dine";

  const menus = [
    { title: "Chef’s Tasting", price: "₹2,499", desc: "Seven‑course menu" },
    { title: "Weekend Brunch", price: "₹1,499", desc: "Four‑course brunch" },
  ];

  return (
    <RestaurantPremiumLayout brandName={brandName}>
      <section className="bg-black px-6 py-14 text-xs text-zinc-200">
        <div className="mx-auto max-w-5xl space-y-6">
          <h1 className="text-2xl font-semibold text-amber-200">Menu</h1>
          <div className="grid gap-4 md:grid-cols-2">
            {menus.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4"
              >
                <p className="text-sm font-semibold text-amber-100">
                  {m.title}
                </p>
                <p className="mt-1 text-[11px] text-zinc-400">{m.desc}</p>
                <p className="mt-3 text-[11px] font-semibold text-amber-300">
                  {m.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RestaurantPremiumLayout>
  );
}

