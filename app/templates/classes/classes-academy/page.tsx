import ClassesAcademyLayout from "./layout";

export default function ClassesAcademyHome() {
  const brandName = "CityEdge Academy";

  return (
    <ClassesAcademyLayout brandName={brandName}>
      <section className="bg-gradient-to-br from-violet-900 via-slate-950 to-slate-950 px-6 py-14 text-xs text-slate-100">
        <div className="mx-auto max-w-6xl space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-violet-200">
            Coaching & Entrance
          </p>
          <h1 className="max-w-xl text-3xl font-semibold md:text-4xl">
            Structured batches for board and entrance exams.
          </h1>
          <p className="max-w-md text-slate-200">
            Classroom teaching, study material and doubt‑clearing for students
            from Std. 8–12 and entrance prep.
          </p>
        </div>
      </section>
    </ClassesAcademyLayout>
  );
}

