import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface ChefStory {
  heading: string;
  text: string;
  chefName: string;
  experience: string;
  imageUrl: string;
}

interface RestaurantLayoutProps {
  brandName: string;
  brandLogo?: string | null;
  heroTagline: string;
  heroBackgroundImage: string;
  menuSections: MenuSection[];
  story: ChefStory;
  bookingCtaText: string;
  bookingWhatsAppLink: string;
}

export function RestaurantLayout({
  brandName,
  brandLogo,
  heroTagline,
  heroBackgroundImage,
  menuSections,
  story,
  bookingCtaText,
  bookingWhatsAppLink,
}: RestaurantLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image
          src={heroBackgroundImage}
          alt={brandName}
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-16">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-amber-500/10 ring-2 ring-amber-400/60">
              {brandLogo ? (
                <Image
                  src={brandLogo}
                  alt={brandName}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-cover"
                />
              ) : (
                <span className="text-lg font-semibold uppercase tracking-wide text-amber-300">
                  {brandName.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">
                Fine Dining Restaurant
              </p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight text-amber-50 sm:text-4xl">
                {brandName}
              </h1>
            </div>
          </div>
          <p className="mt-8 max-w-xl text-lg text-amber-50/80">{heroTagline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={bookingWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/40 hover:bg-amber-400"
            >
              {bookingCtaText}
            </Link>
            <Link
              href="#menu"
              className="rounded-full border border-amber-300/70 px-6 py-3 text-sm font-semibold text-amber-100 hover:bg-amber-400/10"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-slate-950 py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
              Signature Menu
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-amber-50">
              Chef&apos;s Recommendations
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {menuSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 text-lg font-semibold text-amber-200">
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-start justify-between gap-4 border-b border-amber-50/10 pb-3"
                    >
                      <div>
                        <p className="font-medium text-amber-50">
                          {item.name}
                        </p>
                        <p className="text-xs text-amber-100/80">
                          {item.description}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-amber-300">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Story */}
      <section className="bg-slate-950 py-16 px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center">
          <div className="relative h-72 w-full overflow-hidden rounded-3xl bg-slate-900 md:h-80 md:w-1/2">
            <Image
              src={story.imageUrl}
              alt={story.chefName}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-300">
                Executive Chef
              </p>
              <p className="mt-1 text-lg font-semibold text-amber-50">
                {story.chefName}
              </p>
              <p className="text-xs text-amber-200/80">{story.experience}</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-amber-50">
              {story.heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-amber-100/90">
              {story.text}
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="border-t border-amber-100/10 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-slate-950 px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
              Table Reservations
            </p>
            <p className="mt-2 text-xl font-semibold text-amber-50">
              Reserve your table for tonight&apos;s experience
            </p>
          </div>
          <Link
            href={bookingWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-md shadow-amber-500/40 hover:bg-amber-300"
          >
            Book a Table on WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}

