import RealEstateModernLayout from "../layout";

export default function RealEstateModernProjects() {
  const brandName = "CityHomes Realty";

  const projects = [
    {
      name: "Skyline Heights",
      status: "Ready",
      description:
        "Completed tower with 2 and 3 BHK apartments near main junction.",
    },
    {
      name: "Green Meadows",
      status: "Under construction",
      description:
        "Upcoming gated project with amenities and landscaped areas.",
    },
    {
      name: "Business Square",
      status: "Ready",
      description:
        "Commercial complex with small to mid-sized office spaces near station.",
    },
  ];

  return (
    <RealEstateModernLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-16 text-xs text-slate-200">
        <div className="mx-auto max-w-6xl space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Key projects
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-emerald-50">
              Highlight a few landmark projects you actively sell or lease.
            </h1>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-emerald-100">
                    {project.name}
                  </p>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-200">
                    {project.status}
                  </span>
                </div>
                <p className="mt-2">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </RealEstateModernLayout>
  );
}

