import ClinicPremiumLayout from "../layout";

export default function ClinicPremiumDoctors() {
  const brandName = "PrimeCare Clinic";

  const doctors = [
    {
      name: "Dr. Neha Kulkarni",
      role: "MBBS, MD (Internal Medicine)",
    },
    {
      name: "Dr. Rohan Mehta",
      role: "MBBS, DCH (Paediatrics)",
    },
  ];

  return (
    <ClinicPremiumLayout brandName={brandName}>
      <section className="bg-slate-50 px-6 py-14 text-xs text-slate-700">
        <div className="mx-auto max-w-6xl space-y-6">
          <h1 className="text-2xl font-semibold text-slate-900">Doctors</h1>
          <div className="grid gap-4 md:grid-cols-2">
            {doctors.map((d) => (
              <div
                key={d.name}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {d.name}
                </p>
                <p className="mt-1 text-[11px] text-slate-500">{d.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ClinicPremiumLayout>
  );
}

