import ClinicPremiumLayout from "./layout";

export default function ClinicPremiumHome() {
  const brandName = "PrimeCare Clinic";

  return (
    <ClinicPremiumLayout brandName={brandName}>
      <section className="bg-slate-50 px-6 py-14 text-xs text-slate-800">
        <div className="mx-auto max-w-6xl space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-sky-600">
            Multi‑speciality Clinic
          </p>
          <h1 className="max-w-xl text-3xl font-semibold md:text-4xl">
            One clinic for routine care and specialist visits.
          </h1>
          <p className="max-w-md text-slate-600">
            Appointment‑based practice with general physician, paediatrician and
            specialist tie‑ups.
          </p>
        </div>
      </section>
    </ClinicPremiumLayout>
  );
}

