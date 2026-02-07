import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "../../data/caseStudies";

type PageParams = {
  slug: string;
};

export function generateStaticParams(): PageParams[] {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {
      title: "Case Study | Varun Digital Hub",
    };
  }

  return {
    title: study.title,
    description: `${study.clientName} – ${study.beforeSummary} After: ${study.afterSummary}`,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  const {
    title,
    clientName,
    industry,
    location,
    beforeSummary,
    afterSummary,
    fullStory,
    googleReview,
    publishedDate,
  } = study;

  const stars =
    "★".repeat(googleReview.rating) +
    "☆".repeat(Math.max(0, 5 - googleReview.rating));

  return (
    <main className="bg-slate-950 text-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-slate-900 px-6 py-12 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <nav className="text-xs text-purple-100/80">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-1 text-purple-200/70">/</span>
              <Link href="/blog" className="hover:text-white">
                Client Stories
              </Link>
              <span className="mx-1 text-purple-200/70">/</span>
              <span className="text-purple-50">{clientName}</span>
            </nav>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-purple-200">
              Client Growth Story
            </p>
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="max-w-2xl text-sm text-purple-100/85 md:text-base">
              How a neighbourhood coaching institute in Malad West moved from
              having no website or Google presence to a structured digital
              foundation that consistently brings in qualified admission
              enquiries.
            </p>
            <p className="text-xs text-purple-200/80">
              Published on{" "}
              {new Date(publishedDate).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919372787128"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-green-500 px-6 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-green-600 md:text-sm"
              >
                Talk About My Coaching Website
              </a>
              <Link
                href="/blog"
                className="inline-flex items-center rounded-full border border-purple-200/70 px-6 py-2.5 text-xs font-semibold text-purple-100 hover:bg-purple-900/50 md:text-sm"
              >
                Back to All Stories
              </Link>
            </div>
          </div>

          <aside className="mt-4 w-full max-w-md md:mt-0">
            <div className="rounded-2xl bg-black/40 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.55)] ring-1 ring-white/15 backdrop-blur">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-100">
                Snapshot
              </h2>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-xs text-purple-50/90 md:text-sm">
                <div className="space-y-1">
                  <dt className="text-purple-200/80">Client</dt>
                  <dd className="font-semibold text-white">{clientName}</dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-purple-200/80">Industry</dt>
                  <dd className="text-purple-50">{industry}</dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-purple-200/80">Location</dt>
                  <dd className="text-purple-50">{location}</dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-purple-200/80">Focus</dt>
                  <dd className="text-purple-50">
                    Coaching website + local SEO
                  </dd>
                </div>
              </dl>
              <div className="mt-5 space-y-3 rounded-xl bg-white/5 p-4 text-xs text-purple-50/95 md:text-sm">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-purple-200">
                    Before
                  </p>
                  <p className="mt-1 leading-relaxed">{beforeSummary}</p>
                </div>
                <div className="border-t border-purple-200/30 pt-3">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    After
                  </p>
                  <p className="mt-1 leading-relaxed">{afterSummary}</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-10 md:py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row">
          <div className="w-full lg:w-2/3">
            <article className="prose prose-invert prose-purple max-w-none prose-h2:mt-10 prose-h2:text-purple-200 prose-h3:text-purple-100 prose-p:text-slate-100 prose-li:text-slate-100 prose-strong:text-white">
              {fullStory}
            </article>
          </div>

          <aside className="w-full space-y-6 lg:w-1/3">
            <div className="rounded-2xl bg-white/5 p-5 shadow-lg ring-1 ring-white/10">
              <h2 className="text-sm font-semibold text-white">
                Quick Outcomes
              </h2>
              <ul className="mt-3 space-y-2 text-xs text-purple-50/90 md:text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    Admission enquiries grew from roughly 25–30 per month to
                    about 55–70 per month during peak season.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    Parents now discover Naresh Coaching Center through Google
                    and a dedicated website, not just word-of-mouth.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    Stronger first impression and more structured admission
                    conversations with better-informed parents.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-purple-800 to-slate-900 p-5 shadow-lg ring-1 ring-purple-500/40">
              <h2 className="text-sm font-semibold text-white">
                Google Review
              </h2>
              <div className="mt-2 flex items-center gap-2">
                <p
                  className="text-lg text-yellow-400"
                  aria-label={`${googleReview.rating} star rating`}
                >
                  {stars}
                </p>
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-purple-100/80">
                  {googleReview.source || "Google Review"}
                </p>
              </div>
              <p className="mt-3 whitespace-pre-line text-xs leading-relaxed text-purple-50/95 md:text-sm">
                {googleReview.text}
              </p>
              <div className="mt-3 text-[0.7rem] text-purple-100/80">
                {googleReview.reviewer && (
                  <p className="font-semibold">{googleReview.reviewer}</p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-purple-800/40 bg-gradient-to-r from-purple-900 via-purple-800 to-slate-900 px-6 py-12 md:py-16 text-white">
        <div className="mx-auto max-w-5xl space-y-6 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Want a Similar Growth Story for Your Coaching Institute?
          </h2>
          <p className="text-sm text-purple-100 md:text-base leading-relaxed">
            Varun Digital Hub helps local coaching centers and institutes build
            modern, SEO-friendly websites and local SEO foundations that
            convert searches into real admission enquiries. If Naresh Coaching
            Center&apos;s journey feels close to where you are today, let&apos;s
            plan your next step together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919372787128"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-green-600"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-purple-900 shadow-md hover:bg-purple-100"
            >
              Talk to Varun Digital Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

