import RestaurantModernLayout from "../layout";

export default function RestaurantModernContact() {
  const brandName = "Spice & Saffron";

  return (
    <RestaurantModernLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-14 text-xs">
        <div className="mx-auto max-w-6xl space-y-6">
          <h1 className="text-2xl font-semibold text-amber-100">Contact</h1>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="font-semibold text-amber-200">Address</p>
              <p className="mt-2 text-slate-300">
                Link Road, Malad West, Mumbai, Maharashtra.
              </p>
            </div>
            <div>
              <p className="font-semibold text-amber-200">Phone</p>
              <p className="mt-2 text-slate-300">+91 93727 87128</p>
            </div>
            <div>
              <p className="font-semibold text-amber-200">Timings</p>
              <p className="mt-2 text-slate-300">
                Mon–Sun: 12:00 PM – 11:30 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </RestaurantModernLayout>
  );
}

