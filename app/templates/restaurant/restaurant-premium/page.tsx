import Image from "next/image";
import RestaurantPremiumLayout from "./layout";

export default function RestaurantPremiumHome() {
  const brandName = "Aurora Fine Dine";

  return (
    <RestaurantPremiumLayout brandName={brandName}>
      <section className="relative min-h-[70vh] overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1521017432544-7ea1ff8a1e43?auto=format&fit=crop&w=1400&q=80"
          alt="Fine dining interior"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16">
          <h1 className="max-w-xl text-4xl font-semibold text-amber-50 md:text-5xl">
            A tasting menu designed for celebrations.
          </h1>
          <p className="max-w-md text-sm text-amber-100/90">
            {brandName} offers curated chef&apos;s menus, seasonal ingredients
            and a quiet ambience for anniversaries, client dinners and family
            gatherings.
          </p>
        </div>
      </section>
    </RestaurantPremiumLayout>
  );
}

