import SaloonModernLayout from "../layout";

export default function SaloonModernStylists() {
  const brandName = "Urban Cuts Studio";

  const stylists = [
    {
      name: "Rohan Shah",
      role: "Senior stylist",
      highlight:
        "Specialises in modern fades and textured cuts for men and boys.",
    },
    {
      name: "Nisha Patel",
      role: "Colour specialist",
      highlight:
        "Experienced in global colour, highlights and corrective colouring.",
    },
    {
      name: "Imran Khan",
      role: "Grooming expert",
      highlight:
        "Focus on beard styling, facials and relaxing head massages.",
    },
  ];

  return (
    <SaloonModernLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-16 text-xs text-slate-200">
        <div className="mx-auto max-w-5xl space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-200">
              Team
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-sky-50">
              Introduce your core stylists and their strengths.
            </h1>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {stylists.map((stylist) => (
              <article
                key={stylist.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                <p className="text-sm font-semibold text-sky-100">
                  {stylist.name}
                </p>
                <p className="text-[11px] text-slate-400">{stylist.role}</p>
                <p className="mt-2">{stylist.highlight}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SaloonModernLayout>
  );
}

