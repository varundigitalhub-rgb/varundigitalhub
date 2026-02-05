import ClassesCoachingLayout from "../layout";

export default function ClassesCoachingContact() {
  const brandName = "BrightPath Coaching";

  return (
    <ClassesCoachingLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-14 text-xs">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-sky-100">Address</p>
            <p className="mt-2 text-slate-300">
              Near main school circle, Malad West, Mumbai.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-sky-100">Phone</p>
            <p className="mt-2 text-slate-300">+91 93727 87128</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-sky-100">Batch Timings</p>
            <p className="mt-2 text-slate-300">
              Weekdays: 5:30 PM – 9:30 PM
            </p>
          </div>
        </div>
      </section>
    </ClassesCoachingLayout>
  );
}

