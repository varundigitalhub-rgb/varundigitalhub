import ClassesCoachingLayout from "../layout";

export default function ClassesCoachingAbout() {
  const brandName = "BrightPath Coaching";

  return (
    <ClassesCoachingLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-14 text-xs text-slate-200">
        <div className="mx-auto max-w-5xl space-y-6">
          <h1 className="text-2xl font-semibold text-sky-100">About</h1>
          <p>
            {brandName} is focused on building strong concepts for students in
            Maths, English and Coding through small interactive batches.
          </p>
          <p>
            Classes are structured with weekly tests, doubt‑solving sessions
            and clear communication with parents.
          </p>
        </div>
      </section>
    </ClassesCoachingLayout>
  );
}

