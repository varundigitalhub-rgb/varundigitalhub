import SaloonModernLayout from "../layout";

export default function SaloonModernGallery() {
  const brandName = "Urban Cuts Studio";

  const sections = [
    {
      title: "Before/after transformations",
      description:
        "Space to show side-by-side images of real clients to build trust.",
    },
    {
      title: "Studio ambience",
      description:
        "Highlight clean stations, waiting area and overall salon interiors.",
    },
    {
      title: "Special occasion looks",
      description:
        "Add shots from weddings, parties and festive looks created by your team.",
    },
  ];

  return (
    <SaloonModernLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-16 text-xs text-slate-200">
        <div className="mx-auto max-w-5xl space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-200">
              Gallery plan
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-sky-50">
              A simple structure for your salon photos.
            </h1>
            <p className="mt-3">
              In the final website, this section will show your actual images
              using the same layout.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                <p className="text-sm font-semibold text-sky-100">
                  {section.title}
                </p>
                <p className="mt-2">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SaloonModernLayout>
  );
}

