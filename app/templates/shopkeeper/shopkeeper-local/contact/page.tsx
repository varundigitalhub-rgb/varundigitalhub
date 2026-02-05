import ShopkeeperLocalLayout from "../layout";

export default function ShopkeeperLocalContact() {
  const brandName = "Ganesh General Store";
  const phoneNumber = "+91 93727 87128";
  const address =
    "Shop no. 3, Ground Floor, Near Main Market, Malad West, Mumbai";

  return (
    <ShopkeeperLocalLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-16 text-xs text-slate-200">
        <div className="mx-auto max-w-4xl space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Contact
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-emerald-50">
              Simple ways for customers to reach you.
            </h1>
            <p className="mt-3">
              This page can be shared on WhatsApp so people instantly see your
              shop timing, location and contact numbers.
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
                  Address
                </p>
                <p className="mt-2 text-xs">{address}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  Store timings
                </p>
                <p className="mt-2 text-xs">
                  Monday to Sunday: 7:30 am – 10:30 pm
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  Quick contact form
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  In the final website this section can be connected to a form
                  or WhatsApp link so customers can send their requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ShopkeeperLocalLayout>
  );
}

