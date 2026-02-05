import RestaurantPremiumLayout from "../layout";

export default function RestaurantPremiumContact() {
  const brandName = "Aurora Fine Dine";

  return (
    <RestaurantPremiumLayout brandName={brandName}>
      <section className="bg-black px-6 py-14 text-xs text-zinc-200">
        <div className="mx-auto max-w-5xl space-y-6">
          <h1 className="text-2xl font-semibold text-amber-200">Contact</h1>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="font-semibold text-amber-100">Address</p>
              <p className="mt-2 text-zinc-300">
                Quiet lane off the main road, Malad West, Mumbai.
              </p>
            </div>
            <div>
              <p className="font-semibold text-amber-100">Phone</p>
              <p className="mt-2 text-zinc-300">+91 93727 87128</p>
            </div>
            <div>
              <p className="font-semibold text-amber-100">Timings</p>
              <p className="mt-2 text-zinc-300">
                Tue–Sun: 7:00 PM – 11:30 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </RestaurantPremiumLayout>
  );
}

