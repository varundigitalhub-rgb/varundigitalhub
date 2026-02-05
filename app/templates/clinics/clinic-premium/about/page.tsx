import ClinicPremiumLayout from "../layout";

export default function ClinicPremiumAbout() {
  const brandName = "PrimeCare Clinic";

  return (
    <ClinicPremiumLayout brandName={brandName}>
      <section className="bg-slate-50 px-6 py-14 text-xs text-slate-700">
        <div className="mx-auto max-w-5xl space-y-6">
          <h1 className="text-2xl font-semibold text-slate-900">About</h1>
          <p>
            {brandName} brings multiple doctors under one roof so that families
            can manage most health needs in one familiar clinic.
          </p>
          <p>
            Reception assists with scheduling, follow‑up and sending reports
            over WhatsApp where possible.
          </p>
        </div>
      </section>
    </ClinicPremiumLayout>
  );
}

