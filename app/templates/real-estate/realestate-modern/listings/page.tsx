import RealEstateModernLayout from "../layout";

export default function RealEstateModernListings() {
  const brandName = "CityHomes Realty";

  const listingBlocks = [
    {
      title: "Buy",
      points: [
        "Apartments in gated communities",
        "Standalone buildings and resale flats",
        "Under-construction projects with tie-ups",
      ],
    },
    {
      title: "Rent",
      points: [
        "Family-friendly rental options",
        "Company lease properties",
        "Shops and offices for commercial use",
      ],
    },
    {
      title: "Invest",
      points: [
        "Pre-leased commercial units",
        "Smaller ticket investments in upcoming areas",
        "Plots and redevelopment opportunities",
      ],
    },
  ];

  return (
    <RealEstateModernLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-16 text-xs text-slate-200">
        <div className="mx-auto max-w-6xl space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Listings overview
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-emerald-50">
              Show how you categorise buy, rent and investment options.
            </h1>
            <p className="mt-3 max-w-xl">
              In the final site, this page will connect to dynamic listing
              cards or third-party portals.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {listingBlocks.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                <p className="text-sm font-semibold text-emerald-100">
                  {block.title}
                </p>
                <ul className="mt-2 space-y-1">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RealEstateModernLayout>
  );
}

