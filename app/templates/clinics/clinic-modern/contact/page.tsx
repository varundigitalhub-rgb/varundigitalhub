import ClinicModernLayout from "../layout";

export default function ClinicModernContact() {
  const brandName = "CityCare Clinic";

  return (
    <ClinicModernLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-14 text-xs">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-cyan-100">Address</p>
            <p className="mt-2 text-slate-300">
              Ground floor, near market circle, Malad West, Mumbai.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-cyan-100">Phone</p>
            <p className="mt-2 text-slate-300">+91 93727 87128</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-cyan-100">
              Clinic Timings
            </p>
            <p className="mt-2 text-slate-300">
              Mon–Sat: 9:00 AM – 1:00 PM, 5:00 PM – 9:00 PM
            </p>
          </div>
        </div>
      </section>
    </ClinicModernLayout>
  );
}

