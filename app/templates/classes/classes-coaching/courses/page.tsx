import ClassesCoachingLayout from "../layout";

export default function ClassesCoachingCourses() {
  const brandName = "BrightPath Coaching";

  const courses = [
    {
      title: "Maths Foundation (Std. 8–10)",
      level: "School",
      duration: "4 months",
    },
    {
      title: "Spoken English & Confidence",
      level: "Skill",
      duration: "6 weeks",
    },
    {
      title: "Coding for Beginners",
      level: "Weekend",
      duration: "8 weeks",
    },
  ];

  return (
    <ClassesCoachingLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-14 text-xs text-slate-200">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-2xl font-semibold text-sky-100">Courses</h1>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {courses.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-300">
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
    </ClassesCoachingLayout>
  );
}

