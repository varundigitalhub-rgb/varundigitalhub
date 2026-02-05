import EcommerceFashionLayout from "../layout";

export default function EcommerceFashionAbout() {
  const brandName = "Luxe Street Boutique";

  return (
    <EcommerceFashionLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-16 text-xs text-slate-200">
        <div className="mx-auto max-w-4xl space-y-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-fuchsia-200">
            About the brand
          </p>
          <h1 className="text-2xl font-semibold text-fuchsia-50">
            A small fashion label with a big focus on fit and comfort.
          </h1>
          <p>
            {brandName} is designed for customers who want well-fitted outfits
            without spending hours in large malls. The website acts as a look
            book where buyers can shortlist pieces and confirm sizes over
            WhatsApp or a quick call.
          </p>
          <p>
            The layout keeps focus on products while giving space to tell your
            story, show brand values and highlight your manufacturing or
            sourcing approach.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-sm font-semibold text-fuchsia-100">
                Independent label
              </p>
              <p className="mt-2">
                Perfect for homegrown brands and small boutique owners.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-sm font-semibold text-fuchsia-100">
                Flexible orders
              </p>
              <p className="mt-2">
                Works well with enquiry-based orders instead of full automation.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-sm font-semibold text-fuchsia-100">
                Easy updates
              </p>
              <p className="mt-2">
                New collections and pieces can be added as simple cards without
                breaking design.
              </p>
            </div>
          </div>
        </div>
      </section>
    </EcommerceFashionLayout>
  );
}

