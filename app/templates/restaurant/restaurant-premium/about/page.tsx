import RestaurantPremiumLayout from "../layout";

export default function RestaurantPremiumAbout() {
  const brandName = "Aurora Fine Dine";

  return (
    <RestaurantPremiumLayout brandName={brandName}>
      <section className="bg-black px-6 py-14 text-xs text-zinc-200">
        <div className="mx-auto max-w-5xl space-y-6">
          <h1 className="text-2xl font-semibold text-amber-200">About</h1>
          <p>
            {brandName} is a quiet corner away from the noise of the city. The
            focus is on slow dining, conversations and memorable evenings.
          </p>
          <p>
            We serve multi-course menus with wine pairing recommendations and
            vegetarian / non‑vegetarian options.
          </p>
        </div>
      </section>
    </RestaurantPremiumLayout>
  );
}

