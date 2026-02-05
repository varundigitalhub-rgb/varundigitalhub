import RealEstateModernLayout from "./layout";

interface RealEstateModernHomeProps {
  brandName?: string;
  brandLogo?: string | null;
}

export default function RealEstateModernHome({
  brandName,
  brandLogo,
}: RealEstateModernHomeProps) {
  const name = brandName || "CityHomes Realty";

  const highlights = [
    {
      title: "Verified listings",
      description:
        "Properties checked for ownership documents and basic compliance.",
    },
    {
      title: "Neighbourhood focus",
      description:
        "Specialisation in a few areas so buyers get accurate guidance.",
    },
    {
      title: "Personal walkthroughs",
      description:
        "Assistance with site visits and shortlisting, not just portal links.",
    },
  ];

  return (
    <RealEstateModernLayout brandName={name} brandLogo={brandLogo}>
      <section className="bg-gradient-to-br from-emerald-900 via-slate-950 to-slate-950 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr,1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Property advisory
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-emerald-50 md:text-4xl">
              A clean listing website for serious buyers and tenants.
            </h1>
            <p className="mt-4 max-w-xl text-sm text-emerald-100/90">
              Showcase available flats, shops and offices with clear details so
              people contacting you are already pre-qualified.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <a
                href="#listings"
                className="rounded-full bg-emerald-400 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-300"
              >
                View listings
              </a>
              <a
                href="#highlights"
                className="rounded-full border border-emerald-300 px-5 py-3 font-semibold text-emerald-100 hover:bg-emerald-200/10"
              >
                Why work with you
              </a>
            </div>
          </div>
          <div className="grid gap-4 text-xs text-slate-200">
            <div className="rounded-2xl border border-emerald-500/40 bg-slate-950/70 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-200">
                Lead quality
              </p>
              <p className="mt-2">
                Focus on fewer but relevant enquiries with clear budget and
                requirement details.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-sm font-semibold text-emerald-100">
                  Owner and builder tie-ups
                </p>
                <p className="mt-2">
                  Space to mention exclusive mandates and long-term projects.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-sm font-semibold text-emerald-100">
                  Easy enquiry buttons
                </p>
                <p className="mt-2">
                  Buyers can share property links via WhatsApp or call
                  directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="listings"
        className="bg-slate-950 px-6 py-16 text-xs text-slate-200"
      >
        <div className="mx-auto max-w-6xl space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Sample listings
            </p>
            <p className="mt-2 text-2xl font-semibold text-emerald-50">
              A structure for residential and commercial properties.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-sm font-semibold text-emerald-100">
                2 BHK in Malad West
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                710 sq.ft · Fully furnished · Higher floor
              </p>
              <p className="mt-2">
                Ideal for small families looking for ready-to-move homes closer
                to schools and markets.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-sm font-semibold text-emerald-100">
                Road-facing shop
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                230 sq.ft · Main road · High footfall
              </p>
              <p className="mt-2">
                Perfect for retail, salon, clinic or takeaway food counters.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-sm font-semibold text-emerald-100">
                Office space near station
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                500 sq.ft · Semi-furnished · 2 cabins
              </p>
              <p className="mt-2">
                Suitable for small agencies, consultants and back-office teams.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="highlights"
        className="border-t border-slate-800 bg-slate-950 px-6 py-16 text-xs text-slate-200"
      >
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
            >
              <p className="text-sm font-semibold text-emerald-100">
                {item.title}
              </p>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </RealEstateModernLayout>
  );
}

