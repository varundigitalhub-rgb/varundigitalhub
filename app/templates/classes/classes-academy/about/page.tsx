import ClassesAcademyLayout from "../layout";

export default function ClassesAcademyAbout() {
  const brandName = "CityEdge Academy";

  return (
    <ClassesAcademyLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-14 text-xs text-slate-200">
        <div className="mx-auto max-w-5xl space-y-6">
          <h1 className="text-2xl font-semibold text-violet-100">About</h1>
          <p>
            {brandName} focuses on systematic preparation with weekly schedules,
            practice sets and performance tracking.
          </p>
          <p>
            Each batch is designed with a clear syllabus plan, so parents and
            students know what to expect every month.
          </p>
        </div>
      </section>
    </ClassesAcademyLayout>
  );
}

