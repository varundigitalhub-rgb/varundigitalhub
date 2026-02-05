import SaloonModernLayout from "./layout";

interface SaloonModernHomeProps {
  brandName?: string;
  brandLogo?: string | null;
}

export default function SaloonModernHome({
  brandName,
  brandLogo,
}: SaloonModernHomeProps) {
  const name = brandName || "Urban Cuts Studio";

  return (
    <SaloonModernLayout brandName={name} brandLogo={brandLogo}>
      <section className="bg-gradient-to-br from-sky-900 via-slate-950 to-slate-950 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr,1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
              Salon and grooming
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-sky-50 md:text-4xl">
              Modern haircuts, colour and grooming in a calm studio.
            </h1>
            <p className="mt-4 max-w-xl text-sm text-sky-100/90">
              Use this layout to show your key services, pricing bands and
              transform photos so customers feel confident before booking.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <a
                href="#services"
                className="rounded-full bg-sky-400 px-5 py-3 font-semibold text-slate-950 hover:bg-sky-300"
              >
                View services
              </a>
              <a
                href="#highlights"
                className="rounded-full border border-sky-300 px-5 py-3 font-semibold text-sky-100 hover:bg-sky-200/10"
              >
                Why clients return
              </a>
            </div>
          </div>
          <div className="grid gap-4 text-xs text-slate-200">
            <div className="rounded-2xl border border-sky-500/40 bg-slate-950/70 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-200">
                Appointment-focused
              </p>
              <p className="mt-2">
                Clear call-to-actions for booking slots on call or WhatsApp.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-sm font-semibold text-sky-100">
                  Separate men and women sections
                </p>
                <p className="mt-2">
                  Dedicated space to explain different services and timings.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-sm font-semibold text-sky-100">
                  Subtle studio aesthetic
                </p>
                <p className="mt-2">
                  Layout works well with your real studio photos and colours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-slate-950 px-6 py-16 text-xs text-slate-200"
      >
        <div className="mx-auto max-w-6xl space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-200">
              Services
            </p>
            <p className="mt-2 text-2xl font-semibold text-sky-50">
              List your most booked services with clear tags.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-sm font-semibold text-sky-100">
                Haircuts and styling
              </p>
              <p className="mt-2">
                Classic, layer cuts, fades and beard styling for daily and
                occasion looks.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-sm font-semibold text-sky-100">
                Colour and treatments
              </p>
              <p className="mt-2">
                Global colour, highlights, smoothening and scalp treatments.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-sm font-semibold text-sky-100">
                Grooming packages
              </p>
              <p className="mt-2">
                Pre-function packages combining haircut, shave, facial and head
                massage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="highlights"
        className="border-t border-slate-800 bg-slate-950 px-6 py-16 text-xs text-slate-200"
      >
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-200">
              Hygiene first
            </p>
            <p className="mt-2">
              Mention sanitisation steps and tool hygiene to reassure customers.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-200">
              Experienced stylists
            </p>
            <p className="mt-2">
              Highlight years of experience and training for key team members.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-200">
              Easy appointment flow
            </p>
            <p className="mt-2">
              Customers can call or message preferred time and service in one
              click.
            </p>
          </div>
        </div>
      </section>
    </SaloonModernLayout>
  );
}

