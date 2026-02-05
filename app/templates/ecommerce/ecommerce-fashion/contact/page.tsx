import EcommerceFashionLayout from "../layout";

export default function EcommerceFashionContact() {
  const brandName = "Luxe Street Boutique";
  const phoneNumber = "+91 93727 87128";
  const address = "Malad West, Mumbai";

  return (
    <EcommerceFashionLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-16 text-xs text-slate-200">
        <div className="mx-auto max-w-4xl space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fuchsia-200">
              Contact
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-fuchsia-50">
              Give customers a simple way to place orders and ask questions.
            </h1>
            <p className="mt-3">
              This page can be used in Instagram bio or shared directly with
              potential buyers so they have all your contact details in one
              place.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fuchsia-200">
                  Phone
                </p>
                <a
                  href={`tel:${phoneNumber.replace(/[^0-9+]/g, "")}`}
                  className="mt-2 block text-sm font-semibold text-fuchsia-100"
                >
                  {phoneNumber}
                </a>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fuchsia-200">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/919372787128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex rounded-full bg-fuchsia-400 px-4 py-2 text-[11px] font-semibold text-slate-950 hover:bg-fuchsia-300"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fuchsia-200">
                  Address
                </p>
                <p className="mt-2 text-xs">{address}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fuchsia-200">
                  Fitting and trial
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Mention how customers can book a trial slot or visit your
                  studio to try shortlisted outfits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </EcommerceFashionLayout>
  );
}

