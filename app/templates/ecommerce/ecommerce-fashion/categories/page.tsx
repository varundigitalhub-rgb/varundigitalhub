import EcommerceFashionLayout from "../layout";

export default function EcommerceFashionCategories() {
  const brandName = "Luxe Street Boutique";

  const categories = [
    {
      title: "Western wear",
      items: ["Dresses", "Co-ords", "Tops", "Bottoms"],
    },
    {
      title: "Indian wear",
      items: ["Sarees", "Kurtas", "Lehenga sets", "Dupattas"],
    },
    {
      title: "Work wardrobe",
      items: ["Blazers", "Formal shirts", "Trousers"],
    },
    {
      title: "Accessories",
      items: ["Bags", "Jewellery", "Belts", "Scarves"],
    },
  ];

  return (
    <EcommerceFashionLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-16 text-xs text-slate-200">
        <div className="mx-auto max-w-6xl space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fuchsia-200">
              Categories
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-fuchsia-50">
              Organise your catalogue into clear sections.
            </h1>
            <p className="mt-3 max-w-xl">
              Use simple, customer-friendly category names so browsing feels
              natural even for first-time visitors.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {categories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                <p className="text-sm font-semibold text-fuchsia-100">
                  {category.title}
                </p>
                <ul className="mt-2 space-y-1">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </EcommerceFashionLayout>
  );
}

