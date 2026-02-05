import ClassesCoachingLayout from "./layout";

export default function ClassesCoachingHome() {
  const brandName = "BrightPath Coaching";

  return (
    <ClassesCoachingLayout brandName={brandName}>
      <section className="bg-gradient-to-br from-sky-900 via-slate-950 to-slate-950 px-6 py-14 text-xs text-slate-100">
        <div className="mx-auto max-w-6xl space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-sky-200">
            Coaching & Training
          </p>
          <h1 className="max-w-xl text-3xl font-semibold md:text-4xl">
            Batches for school students and working professionals.
          </h1>
          <p className="max-w-md text-slate-200">
            Small groups, concept clarity and regular tests to build confidence.
          </p>
        </div>
      </section>
    </ClassesCoachingLayout>
  );
}

