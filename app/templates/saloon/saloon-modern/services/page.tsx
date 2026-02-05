import SaloonModernLayout from "../layout";

export default function SaloonModernServices() {
  const brandName = "Urban Cuts Studio";

  const services = [
    {
      title: "Haircuts",
      items: ["Basic cut", "Layered cut", "Fade", "Children's haircut"],
    },
    {
      title: "Colour services",
      items: ["Root touch-up", "Global colour", "Highlights", "Balayage"],
    },
    {
      title: "Treatments",
      items: ["Hair spa", "Smoothening", "Keratin", "Dandruff treatment"],
    },
    {
      title: "Grooming",
      items: ["Beard trim", "Clean shave", "Facial", "Head massage"],
    },
  ];

  return (
    <SaloonModernLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-16 text-xs text-slate-200">
        <div className="mx-auto max-w-6xl space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-200">
              Service menu
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-sky-50">
              A clear service list customers can read quickly.
            </h1>
            <p className="mt-3 max-w-xl">
              Use this page to show category-wise services. You can add price
              ranges or separate price cards as needed.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                <p className="text-sm font-semibold text-sky-100">
                  {service.title}
                </p>
                <ul className="mt-2 space-y-1">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SaloonModernLayout>
  );
}

