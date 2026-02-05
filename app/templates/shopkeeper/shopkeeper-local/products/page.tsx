import ShopkeeperLocalLayout from "../layout";

export default function ShopkeeperLocalProducts() {
  const brandName = "Ganesh General Store";

  const categories = [
    {
      title: "Monthly groceries",
      items: [
        "Wheat flour, rice, dals",
        "Cooking oils and ghee",
        "Masalas, spices and condiments",
      ],
    },
    {
      title: "Home and cleaning",
      items: [
        "Detergents and fabric care",
        "Floor and bathroom cleaners",
        "Garbage bags and tissues",
      ],
    },
    {
      title: "Snacks and beverages",
      items: [
        "Chips, namkeen and biscuits",
        "Soft drinks and juices",
        "Tea, coffee and instant mixes",
      ],
    },
    {
      title: "Personal care",
      items: [
        "Soaps and body wash",
        "Shampoos and hair oils",
        "Toothpaste and dental care",
      ],
    },
    {
      title: "Quick add-ons",
      items: [
        "Ice cream and frozen items",
        "Ready-to-eat packets",
        "Chocolates and sweets",
      ],
    },
  ];

  return (
    <ShopkeeperLocalLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-16 text-xs text-slate-200">
        <div className="mx-auto max-w-5xl space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Products
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-emerald-50">
              Everything you need for a well-stocked home.
            </h1>
            <p className="mt-3 max-w-xl">
              Products are organised category-wise so customers can quickly
              understand what the store offers and call to ask for availability
              before visiting.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {categories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
              >
                <p className="text-sm font-semibold text-emerald-100">
                  {category.title}
                </p>
                <ul className="mt-2 space-y-1">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ShopkeeperLocalLayout>
  );
}

