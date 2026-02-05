import Image from "next/image";
import RestaurantModernLayout from "./layout";

export default function RestaurantModernHome() {
  const brandName = "Spice & Saffron";

  return (
    <RestaurantModernLayout brandName={brandName}>
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b"
          alt="Restaurant interior"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16">
          <h1 className="max-w-xl text-4xl font-semibold text-amber-50 md:text-5xl">
            Fine Indian dining with slow-cooked flavours.
          </h1>
          <p className="max-w-md text-sm text-amber-100/90">
            Welcome to {brandName}, where family recipes meet modern
            presentation. Perfect for family dinners, celebrations and corporate
            meets.
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <a
              href="tel:+919372787128"
              className="rounded-full bg-amber-400 px-5 py-3 font-semibold text-slate-950 hover:bg-amber-300"
            >
              Call to reserve
            </a>
            <a
              href="#highlights"
              className="rounded-full border border-amber-300 px-5 py-3 font-semibold text-amber-100 hover:bg-amber-300/10"
            >
              View highlights
            </a>
          </div>
        </div>
      </section>

      <section
        id="highlights"
        className="bg-slate-950 px-6 py-16 text-xs text-slate-200"
      >
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div>
            <p className="font-semibold text-amber-200">Signature dishes</p>
            <p className="mt-2">
              Butter chicken, tandoori platters and seasonal chef specials.
            </p>
          </div>
          <div>
            <p className="font-semibold text-amber-200">Perfect for groups</p>
            <p className="mt-2">
              Comfortable seating for families, friends and office teams.
            </p>
          </div>
          <div>
            <p className="font-semibold text-amber-200">Easy location</p>
            <p className="mt-2">
              Close to the main road with parking options nearby.
            </p>
          </div>
        </div>
      </section>
    </RestaurantModernLayout>
  );
}

