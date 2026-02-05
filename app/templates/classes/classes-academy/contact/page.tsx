import ClassesAcademyLayout from "../layout";

export default function ClassesAcademyContact() {
  const brandName = "CityEdge Academy";

  return (
    <ClassesAcademyLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-14 text-xs">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-violet-100">Address</p>
            <p className="mt-2 text-slate-300">
              First floor, main coaching lane, Malad West, Mumbai.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-violet-100">Phone</p>
            <p className="mt-2 text-slate-300">+91 93727 87128</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-violet-100">
              Office Hours
            </p>
            <p className="mt-2 text-slate-300">
              Mon–Sat: 10:00 AM – 8:00 PM
            </p>
          </div>
        </div>
      </section>
    </ClassesAcademyLayout>
  );
}

