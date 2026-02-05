import ClinicPremiumLayout from "../layout";

export default function ClinicPremiumServices() {
  const brandName = "PrimeCare Clinic";

  const services = [
    "General physician consultations",
    "Paediatric and women’s health",
    "Routine blood tests and ECG",
    "Chronic condition management",
  ];

  return (
    <ClinicPremiumLayout brandName={brandName}>
      <section className="bg-slate-50 px-6 py-14 text-xs text-slate-700">
        <div className="mx-auto max-w-6xl space-y-6">
          <h1 className="text-2xl font-semibold text-slate-900">Services</h1>
          <ul className="space-y-3">
            {services.map((s) => (
              <li
                key={s}
                className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-3"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </ClinicPremiumLayout>
  );
}

