import EcommerceFashionLayout from "../layout";

export default function EcommerceFashionProducts() {
  const brandName = "Luxe Street Boutique";

  const products = [
    {
      name: "Summer co-ord set",
      tag: "New",
      description: "Lightweight cotton co-ord set with relaxed fit.",
      price: "₹2,450",
    },
    {
      name: "Evening maxi dress",
      tag: "Bestseller",
      description: "Flowy silhouette in rich jewel tones for special outings.",
      price: "₹3,290",
    },
    {
      name: "Handwoven saree",
      tag: "Limited",
      description: "Soft handloom cotton with subtle zari border.",
      price: "₹4,750",
    },
    {
      name: "Office-ready blazer",
      tag: "Classic",
      description: "Structured fit with minimal detailing for weekday meetings.",
      price: "₹3,990",
    },
  ];

  return (
    <EcommerceFashionLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-16 text-xs text-slate-200">
        <div className="mx-auto max-w-6xl space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fuchsia-200">
              Products
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-fuchsia-50">
              Featured products that represent your brand.
            </h1>
            <p className="mt-3 max-w-xl">
              Each product card can link to a dedicated product page or open a
              WhatsApp chat with product details pre-filled.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-fuchsia-100">
                      {product.name}
                    </p>
                    {product.tag && (
                      <span className="rounded-full bg-fuchsia-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-fuchsia-200">
                        {product.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-2">{product.description}</p>
                </div>
                <div className="mt-4 flex items-center justify-between gap-2 text-[11px]">
                  <p className="font-semibold text-fuchsia-100">
                    {product.price}
                  </p>
                  <a
                    href="https://wa.me/919372787128"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-fuchsia-400 px-3 py-2 font-semibold text-slate-950 hover:bg-fuchsia-300"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </EcommerceFashionLayout>
  );
}

