import RealEstateModernLayout from "../layout";

export default function RealEstateModernContact() {
  const brandName = "CityHomes Realty";
  const phoneNumber = "+91 93727 87128";
  const address = "Malad West, Mumbai";

  return (
    <RealEstateModernLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-16 text-xs text-slate-200">
        <div className="mx-auto max-w-4xl space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Contact
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-emerald-50">
              Give buyers and owners a direct line to you.
            </h1>
            <p className="mt-3">
              Use this page as your digital visiting card when sharing links on
              WhatsApp or property portals.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  Phone
                </p>
                <a
                  href={`tel:${phoneNumber.replace(/[^0-9+]/g, "")}`}
                  className="mt-2 block text-sm font-semibold text-emerald-100"
                >
                  {phoneNumber}
                </a>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/919372787128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex rounded-full bg-emerald-400 px-4 py-2 text-[11px] font-semibold text-slate-950 hover:bg-emerald-300"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  Office address
                </p>
                <p className="mt-2 text-xs">{address}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  Meeting slots
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Use this area to mention preferred meeting timings and days
                  for site visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RealEstateModernLayout>
  );
}

