import RestaurantModernLayout from "../layout";

export default function RestaurantModernAbout() {
  const brandName = "Spice & Saffron";

  return (
    <RestaurantModernLayout brandName={brandName}>
      <section className="bg-slate-950 px-6 py-14 text-xs text-slate-200">
        <div className="mx-auto max-w-5xl space-y-6">
          <h1 className="text-2xl font-semibold text-amber-100">About</h1>
          <p>
            {brandName} is built on Mumbai&apos;s love for sharing food. We
            combine family recipes, fresh ingredients and a calm atmosphere so
            guests can relax and enjoy.
          </p>
          <p>
            The interiors balance warm lighting with comfortable seating and a
            clear view of the tandoor kitchen.
          </p>
        </div>
      </section>
    </RestaurantModernLayout>
  );
}

