import EcommerceFashionLayout from "./layout";

interface EcommerceFashionHomeProps {
  brandName?: string;
  brandLogo?: string | null;
}

export default function EcommerceFashionHome({
  brandName,
  brandLogo,
}: EcommerceFashionHomeProps) {
  const name = brandName || "Luxe Street Boutique";

  const heroCollections = [
    {
      title: "New arrivals",
      description: "Fresh drops for the season in modern cuts and colours.",
    },
    {
      title: "Everyday essentials",
      description: "Comfortable basics that pair well with any look.",
    },
    {
      title: "Occasion wear",
      description: "Sarees, lehengas and suits for weddings and celebrations.",
    },
  ];

  return (
    <EcommerceFashionLayout brandName={name} brandLogo={brandLogo}>
      <section className="bg-gradient-to-br from-fuchsia-900 via-slate-950 to-slate-950 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr,1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-200">
              Fashion Boutique
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-fuchsia-50 md:text-4xl">
              A clean online store to showcase your best outfits.
            </h1>
            <p className="mt-4 max-w-xl text-sm text-fuchsia-100/90">
              Highlight key collections, show real product photos and make it
              simple for customers to browse on mobile and place enquiries on
              WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <a
                href="#collections"
                className="rounded-full bg-fuchsia-400 px-5 py-3 font-semibold text-slate-950 hover:bg-fuchsia-300"
              >
                View collections
              </a>
              <a
                href="#highlights"
                className="rounded-full border border-fuchsia-300 px-5 py-3 font-semibold text-fuchsia-100 hover:bg-fuchsia-200/10"
              >
                Store highlights
              </a>
            </div>
          </div>
          <div className="grid gap-4 text-xs text-slate-200">
            <div className="rounded-2xl border border-fuchsia-500/40 bg-slate-950/70 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-fuchsia-200">
                Online-first layout
              </p>
              <p className="mt-2">
                Clean product cards, wishlist-style browsing and enquiry-based
                checkout for small fashion brands.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-sm font-semibold text-fuchsia-100">
                  Mobile ready
                </p>
                <p className="mt-2">
                  Designed so customers can comfortably browse on phones during
                  commute or breaks.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-sm font-semibold text-fuchsia-100">
                  Simple enquiries
                </p>
                <p className="mt-2">
                  Customers can send selected products on WhatsApp instead of a
                  complex cart system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="collections"
        className="bg-slate-950 px-6 py-16 text-xs text-slate-200"
      >
        <div className="mx-auto max-w-6xl space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fuchsia-200">
              Collections
            </p>
            <p className="mt-2 text-2xl font-semibold text-fuchsia-50">
              Showcase your main collections with simple labels.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {heroCollections.map((collection) => (
              <div
                key={collection.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                <p className="text-sm font-semibold text-fuchsia-100">
                  {collection.title}
                </p>
                <p className="mt-2">{collection.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="highlights"
        className="border-t border-slate-800 bg-slate-950 px-6 py-16 text-xs text-slate-200"
      >
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fuchsia-200">
              Product photos
            </p>
            <p className="mt-2">
              Clean grid that works well with both studio and phone-shot
              images.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fuchsia-200">
              Size and fit details
            </p>
            <p className="mt-2">
              Easy-to-read information blocks so customers feel confident before
              placing an order.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fuchsia-200">
              WhatsApp order flow
            </p>
            <p className="mt-2">
              Each product can be configured to send an enquiry message with
              selected size and colour.
            </p>
          </div>
        </div>
      </section>
    </EcommerceFashionLayout>
  );
}

