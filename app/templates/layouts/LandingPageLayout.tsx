import Image from "next/image";
import Link from "next/link";

type LandingPageLayoutProps = {
  brandName?: string;
  brandLogo?: string | null;
};

export function LandingPageLayout({
  brandName,
  brandLogo,
}: LandingPageLayoutProps) {
  const title = brandName || "GrowthBoost Marketing Suite";

  const features = [
    "One-page layout focused on conversions",
    "SEO & ad campaign ready sections",
    "Fast-loading, mobile-first design",
    "WhatsApp, form, and call CTAs",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950">
        <div className="absolute inset-y-0 right-0 w-1/2 opacity-40">
          <Image
            src="https://picsum.photos/1200/900?random=80"
            alt="Product UI"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto grid gap-10 md:grid-cols-[1.4fr,1.2fr] md:items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] text-purple-100 border border-purple-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Landing Page Template Preview</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-sm md:text-base text-slate-100/85 max-w-xl">
              High-converting landing page layout for products, services, and
              campaigns that need fast results from ads and SEO.
            </p>
            <ul className="space-y-2 text-xs text-slate-100/90">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-purple-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="rounded-full bg-purple-500 px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-purple-600"
              >
                Get This Landing Page
              </Link>
              <button
                type="button"
                className="rounded-full border border-slate-400 px-7 py-3 text-sm font-semibold text-slate-100 hover:bg-white/5"
              >
                View Conversion Strategy
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 border border-white/10">
              <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                {brandLogo ? (
                  <Image
                    src={brandLogo}
                    alt={title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-[11px] font-semibold text-purple-900">
                    Logo
                  </span>
                )}
              </div>
              <div>
                <p className="text-[11px] text-slate-200/80">Preview Mode</p>
                <p className="text-sm font-semibold">{title}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-4 text-xs text-slate-200">
              <p className="font-semibold text-slate-100 mb-1">
                Above-the-fold preview
              </p>
              <p>
                Hero title, subheading, and primary CTA are the first things
                visitors see. This layout is tuned for that.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 bg-slate-950">
        <div className="container mx-auto space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Built for Conversions
            </h2>
            <p className="mt-2 text-sm md:text-base text-slate-300">
              Communicate the core benefits of your product or service with
              quick, skimmable blocks visitors can read in seconds.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-sm">
              <p className="font-semibold mb-1">Clear Positioning</p>
              <p className="text-xs text-slate-300">
                Explain who this is for and what problem you solve in one or two
                lines.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-sm">
              <p className="font-semibold mb-1">Benefit-driven Sections</p>
              <p className="text-xs text-slate-300">
                Use scannable feature blocks to highlight outcomes, not just
                features.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-sm">
              <p className="font-semibold mb-1">Conversion-focused Layout</p>
              <p className="text-xs text-slate-300">
                Place CTAs at strategic points in the scroll to avoid losing
                interested visitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 bg-slate-900">
        <div className="container mx-auto space-y-8">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Testimonials / Social Proof
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Show 2–3 short testimonials with names, designations, and results
              to improve trust and conversions.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-xs text-slate-200"
              >
                <p className="mb-3">
                  “Short testimonial text about how this landing page format
                  helped improve enquiries or sales.”
                </p>
                <p className="text-[11px] font-semibold text-slate-100">
                  Client Name
                </p>
                <p className="text-[10px] text-slate-400">Business / Role</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-purple-700">
        <div className="container mx-auto flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Want a Landing Page Like This for Your Product or Service?
          </h2>
          <p className="max-w-2xl text-sm md:text-base text-purple-100">
            Ideal for campaigns, product launches, and lead generation. Share
            your business details and preferred template. We will customise
            everything for your brand.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-purple-900 shadow-md hover:bg-purple-50"
            >
              Request a Quote
            </Link>
            <a
              href="https://wa.me/919372787128?text=Hi,%20I%20want%20a%20landing%20page%20like%20this."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
