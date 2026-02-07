import Image from "next/image";
import Link from "next/link";

type RestaurantLayoutProps = {
  brandName?: string;
  brandLogo?: string | null;
};

export function RestaurantLayout({
  brandName,
  brandLogo,
}: RestaurantLayoutProps) {
  const title = brandName || "Classic Family Restaurant";

  const menuItems = [
    { name: "Paneer Tikka", price: "₹280", desc: "Char-grilled cottage cheese with spices." },
    { name: "Veg Handi", price: "₹320", desc: "Rich mixed vegetable curry in handi style." },
    { name: "Tandoori Roti Basket", price: "₹190", desc: "Assorted tandoori breads, soft and crisp." },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 px-6 py-16 text-white">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://picsum.photos/1600/900?food=1"
            alt="Restaurant food"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto flex flex-col gap-10 md:flex-row md:items-center">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Family Dining · Pure Veg & Non-Veg</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-base md:text-lg text-white/85">
              A warm family restaurant serving fresh Indian and Chinese favourites.
              Perfect for family dinners, celebrations, and casual meetups.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919372787128"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-purple-900 shadow-lg hover:bg-purple-50 transition"
              >
                Call to Book a Table
              </a>
              <a
                href="https://wa.me/919372787128?text=Hi,%20I%20want%20to%20book%20a%20table."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/70 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                WhatsApp Reservation
              </a>
            </div>
          </div>
          <div className="w-full max-w-sm self-start rounded-2xl bg-white/10 p-5 backdrop-blur">
            <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-4">
              <div className="h-14 w-14 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                {brandLogo ? (
                  <Image
                    src={brandLogo}
                    alt={title}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-sm font-semibold text-purple-900">
                    Logo
                  </span>
                )}
              </div>
              <div>
                <p className="text-xs text-white/60">Preview Mode</p>
                <p className="text-sm font-semibold">{title}</p>
              </div>
            </div>
            <p className="text-xs text-white/80">
              Show your most popular dishes, ambience photos, and clear call
              buttons for table bookings and directions.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 bg-gray-50">
        <div className="container mx-auto grid gap-10 md:grid-cols-[2fr,1.2fr]">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-900 mb-4">
              Signature Menu Highlights
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              Give visitors a quick taste of your best dishes with prices so
              they can plan their meal and budget before visiting.
            </p>
            <div className="space-y-4">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <div>
                    <p className="text-sm font-semibold text-purple-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                  </div>
                  <p className="text-sm font-semibold text-purple-900">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-purple-900 mb-3">
              Opening Hours
            </h3>
            <ul className="space-y-1 text-xs text-gray-700 mb-4">
              <li>Mon – Fri: 12:00 PM – 11:00 PM</li>
              <li>Sat – Sun: 12:00 PM – 12:00 AM</li>
            </ul>
            <h3 className="text-sm font-semibold text-purple-900 mb-2">
              Location
            </h3>
            <p className="text-xs text-gray-700 mb-4">
              Malad West, Mumbai, Maharashtra, India
            </p>
            <Link
              href="/contact"
              className="inline-flex w-full justify-center rounded-full bg-purple-700 px-6 py-2.5 text-xs font-semibold text-white hover:bg-purple-800"
            >
              Discuss Restaurant Website
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 bg-white">
        <div className="container mx-auto grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-900 mb-4">
              Our Chef & Story
            </h2>
            <p className="text-sm md:text-base text-gray-700 mb-3">
              Share how your restaurant started, what cuisine you love, and why
              guests keep coming back. This builds trust before the first visit.
            </p>
            <p className="text-sm text-gray-700">
              Introduce your head chef, their experience, and the philosophy
              behind your menu — homely, gourmet, experimental, or comfort food.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 rounded-3xl bg-gradient-to-br from-purple-200 to-purple-400" />
            <div className="hidden md:block flex-1 rounded-3xl bg-gradient-to-br from-orange-200 to-red-300" />
          </div>
        </div>
      </section>

      <section className="px-6 py-14 bg-purple-900 text-white">
        <div className="container mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Ready to Take Table Bookings Online?
            </h2>
            <p className="text-sm md:text-base text-white/80">
              Convert website visitors into confirmed guests with clear call
              buttons for calling, WhatsApp, and directions from Google Maps.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full max-w-sm">
            <a
              href="tel:+919372787128"
              className="inline-flex justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-purple-900 shadow-md hover:bg-purple-50"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919372787128?text=Hi,%20I%20want%20a%20restaurant%20website%20like%20this."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full border border-white/70 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
