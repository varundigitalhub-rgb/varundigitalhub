import ClassesCoachingLayout from "../layout";

export default function ClassesCoachingFaculty() {
  const brandName = "BrightPath Coaching";

  const faculty = [
    {
      name: "Varun Shah",
      role: "Lead Trainer – Maths & Coding",
    },
    {
      name: "Anita Rao",
      role: "Spoken English & Soft Skills",
    },
  ];

  return (
    <ClassesCoachingLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-14 text-xs text-slate-200">
        <div className="mx-auto max-w-6xl space-y-6">
          <h1 className="text-2xl font-semibold text-sky-100">Faculty</h1>
          <div className="grid gap-4 md:grid-cols-2">
            {faculty.map((f) => (
              <div
                key={f.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                <p className="text-sm font-semibold text-slate-50">
                  {f.name}
                </p>
                <p className="mt-1 text-[11px] text-slate-400">{f.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ClassesCoachingLayout>
  );
}

