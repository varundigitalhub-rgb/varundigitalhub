import RestaurantModernLayout from "../layout";

export default function RestaurantModernMenu() {
  const brandName = "Spice & Saffron";

  const sections = [
    {
      title: "Starters",
      items: [
        { name: "Tandoori Platter", desc: "Assorted kebabs", price: "₹620" },
        { name: "Paneer Tikka", desc: "Smoky cottage cheese", price: "₹380" },
      ],
    },
    {
      title: "Mains",
      items: [
        { name: "Butter Chicken", desc: "Creamy tomato gravy", price: "₹540" },
        { name: "Dal Tadka", desc: "Lentils with ghee tadka", price: "₹320" },
      ],
    },
    {
      title: "Breads & Rice",
      items: [
        { name: "Butter Naan", desc: "Soft leavened bread", price: "₹70" },
        { name: "Jeera Rice", desc: "Fragrant cumin rice", price: "₹220" },
      ],
    },
  ];

  return (
    <RestaurantModernLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-14 text-xs">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-2xl font-semibold text-amber-100">Menu</h1>
          <p className="mt-2 text-slate-300">
            Carefully curated dishes that work well for both daily dining and
            special occasions.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                <p className="text-sm font-semibold text-amber-200">
                  {section.title}
                </p>
                <div className="mt-3 space-y-3">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-50">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                      <p className="text-[11px] font-semibold text-amber-200">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RestaurantModernLayout>
  );
}

