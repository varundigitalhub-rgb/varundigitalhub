import ClassesAcademyLayout from "../layout";

export default function ClassesAcademyCourses() {
  const brandName = "CityEdge Academy";

  const courses = [
    { title: "Std. 8–10 Foundation", level: "School", duration: "Annual" },
    { title: "Science (11–12)", level: "College", duration: "Annual" },
    { title: "Entrance Test Prep", level: "Competitive", duration: "6–12 months" },
  ];

  return (
    <ClassesAcademyLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-14 text-xs text-slate-200">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-2xl font-semibold text-violet-100">Courses</h1>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {courses.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-violet-300">
                  {c.level}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-50">
                  {c.title}
                </p>
                <p className="mt-2 text-[11px] text-slate-400">
                  Duration: {c.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ClassesAcademyLayout>
  );
}

