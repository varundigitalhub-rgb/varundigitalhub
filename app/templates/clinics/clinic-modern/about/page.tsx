import ClinicModernLayout from "../layout";

export default function ClinicModernAbout() {
  const brandName = "CityCare Clinic";

  return (
    <ClinicModernLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-14 text-xs text-slate-200">
        <div className="mx-auto max-w-5xl space-y-6">
          <h1 className="text-2xl font-semibold text-cyan-100">About</h1>
          <p>
            {brandName} focuses on giving patients enough time to explain their
            concerns. The clinic is designed for hassle‑free check‑ups with a
            simple token system.
          </p>
          <p>
            We keep basic medicines and tests available in‑house so that most
            common issues can be handled in one visit.
          </p>
        </div>
      </section>
    </ClinicModernLayout>
  );
}

