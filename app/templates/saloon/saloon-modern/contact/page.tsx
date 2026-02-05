import SaloonModernLayout from "../layout";

export default function SaloonModernContact() {
  const brandName = "Urban Cuts Studio";
  const phoneNumber = "+91 93727 87128";
  const address = "Near main junction, Malad West, Mumbai";

  return (
    <SaloonModernLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-16 text-xs text-slate-200">
        <div className="mx-auto max-w-4xl space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-200">
              Contact
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-sky-50">
              Make it easy for clients to book a slot.
            </h1>
            <p className="mt-3">
              Share this page directly so customers can quickly choose between
              calling or messaging.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-200">
                  Phone
                </p>
                <a
                  href={`tel:${phoneNumber.replace(/[^0-9+]/g, "")}`}
                  className="mt-2 block text-sm font-semibold text-sky-100"
                >
                  {phoneNumber}
                </a>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-200">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/919372787128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex rounded-full bg-sky-400 px-4 py-2 text-[11px] font-semibold text-slate-950 hover:bg-sky-300"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-200">
                  Address
                </p>
                <p className="mt-2 text-xs">{address}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-200">
                  Timings
                </p>
                <p className="mt-2 text-xs">
                  Tuesday to Sunday: 10:00 am – 9:00 pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SaloonModernLayout>
  );
}

