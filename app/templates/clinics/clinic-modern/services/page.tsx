import ClinicModernLayout from "../layout";

export default function ClinicModernServices() {
  const brandName = "CityCare Clinic";

  const services = [
    "General check‑ups and prescriptions",
    "Blood pressure and sugar monitoring",
    "Basic blood tests and reports",
    "Child and senior citizen care",
  ];

  return (
    <ClinicModernLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-14 text-xs text-slate-200">
        <div className="mx-auto max-w-6xl space-y-6">
          <h1 className="text-2xl font-semibold text-cyan-100">Services</h1>
          <ul className="space-y-3">
            {services.map((s) => (
              <li
                key={s}
                className="flex items-start gap-2 rounded-xl border border-slate-800 bg-slate-900/80 p-3"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </ClinicModernLayout>
  );
}

