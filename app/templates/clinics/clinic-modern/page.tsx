import ClinicModernLayout from "./layout";

export default function ClinicModernHome() {
  const brandName = "CityCare Clinic";

  return (
    <ClinicModernLayout brandName={brandName}>
      <section className="bg-gradient-to-br from-cyan-900 via-slate-950 to-slate-950 px-6 py-14 text-xs text-slate-100">
        <div className="mx-auto max-w-6xl space-y-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-200">
            Family Clinic
          </p>
          <h1 className="max-w-xl text-3xl font-semibold md:text-4xl">
            Friendly neighbourhood clinic for everyday health.
          </h1>
          <p className="max-w-md text-slate-200">
            General physician, basic diagnostics and quick appointments for
            families in your locality.
          </p>
        </div>
      </section>
    </ClinicModernLayout>
  );
}

