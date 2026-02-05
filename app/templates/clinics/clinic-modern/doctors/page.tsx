import ClinicModernLayout from "../layout";

export default function ClinicModernDoctors() {
  const brandName = "CityCare Clinic";

  const doctors = [
    {
      name: "Dr. Meera Shah",
      role: "MBBS, General Physician",
    },
    {
      name: "Dr. Arjun Patel",
      role: "MBBS, Family Medicine",
    },
  ];

  return (
    <ClinicModernLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-14 text-xs text-slate-200">
        <div className="mx-auto max-w-6xl space-y-6">
          <h1 className="text-2xl font-semibold text-cyan-100">Doctors</h1>
          <div className="grid gap-4 md:grid-cols-2">
            {doctors.map((d) => (
              <div
                key={d.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                <p className="text-sm font-semibold text-slate-50">
                  {d.name}
                </p>
                <p className="mt-1 text-[11px] text-slate-400">{d.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ClinicModernLayout>
  );
}

