import ClinicPremiumLayout from "../layout";

export default function ClinicPremiumContact() {
  const brandName = "PrimeCare Clinic";

  return (
    <ClinicPremiumLayout brandName={brandName}>
      <section className="bg-slate-50 px-6 py-14 text-xs">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3 text-slate-700">
          <div>
            <p className="text-sm font-semibold text-slate-900">Address</p>
            <p className="mt-2">
              Second floor, health plaza, near main junction, Malad West,
              Mumbai.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Phone</p>
            <p className="mt-2">+91 93727 87128</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Appointment Hours
            </p>
            <p className="mt-2">
              Mon–Sat: 10:00 AM – 1:00 PM, 5:00 PM – 9:00 PM
            </p>
          </div>
        </div>
      </section>
    </ClinicPremiumLayout>
  );
}

