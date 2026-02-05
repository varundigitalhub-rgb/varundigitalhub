import Image from "next/image";
import Link from "next/link";

interface Feature {
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

interface LandingPageLayoutProps {
  brandName: string;
  brandLogo?: string | null;
  productTagline: string;
  heroImage: string;
  features: Feature[];
  testimonials: Testimonial[];
  primaryCtaText: string;
  primaryCtaLink: string;
}

export function LandingPageLayout({
  brandName,
  brandLogo,
  productTagline,
  heroImage,
  features,
  testimonials,
  primaryCtaText,
  primaryCtaLink,
}: LandingPageLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Product Hero */}
      <section className="bg-gradient-to-br from-indigo-900 via-slate-950 to-slate-950 px-6 py-14">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-[11px] font-medium text-indigo-200">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              New product landing
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {brandName}
            </h1>
            <p className="mt-3 text-sm text-slate-200">{productTagline}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={primaryCtaLink}
                className="rounded-full bg-indigo-400 px-6 py-3 text-xs font-semibold text-slate-950 shadow-md shadow-indigo-500/40 hover:bg-indigo-300"
              >
                {primaryCtaText}
              </Link>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>No-code, SEO-ready landing page</span>
              </div>
            </div>
          </div>
          <div className="relative h-64 rounded-3xl bg-slate-900/80">
            <Image
              src={heroImage}
              alt={brandName}
              fill
              className="rounded-3xl object-cover"
            />
            {brandLogo && (
              <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/80">
                <Image
                  src={brandLogo}
                  alt={brandName}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-t border-slate-800 bg-slate-950 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
            Features
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-50">
            Built to convert visitors into leads
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                <p className="text-sm font-semibold text-slate-50">
                  {feature.title}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-slate-800 bg-slate-950 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">
                Testimonials
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-50">
                What clients say
              </h3>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                <p className="text-xs text-slate-300">
                  “{testimonial.quote}”
                </p>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-slate-100">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="border-t border-slate-800 bg-slate-950 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl bg-slate-900/90 px-6 py-6 md:flex-row">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
              Conversion CTA
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-50">
              Ready to turn this landing page into your product launch?
            </p>
          </div>
          <Link
            href={primaryCtaLink}
            className="rounded-full bg-indigo-400 px-6 py-3 text-xs font-semibold text-slate-950 hover:bg-indigo-300"
          >
            {primaryCtaText}
          </Link>
        </div>
      </section>
    </main>
  );
}

