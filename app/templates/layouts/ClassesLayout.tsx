import Link from "next/link";

interface Course {
  title: string;
  level: string;
  duration: string;
  highlight: string;
}

interface TrainerProfile {
  name: string;
  role: string;
  experience: string;
  bio: string;
}

interface ClassesLayoutProps {
  brandName: string;
  brandLogo?: string | null;
  upcomingBatchLabel: string;
  upcomingBatchDate: string;
  heroDescription: string;
  courses: Course[];
  trainer: TrainerProfile;
  enrollmentCtaText: string;
  enrollmentWhatsAppLink: string;
}

export function ClassesLayout({
  brandName,
  brandLogo,
  upcomingBatchLabel,
  upcomingBatchDate,
  heroDescription,
  courses,
  trainer,
  enrollmentCtaText,
  enrollmentWhatsAppLink,
}: ClassesLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero with batch info */}
      <section className="bg-gradient-to-br from-sky-900 via-slate-950 to-slate-950 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400 text-sm font-semibold text-slate-950">
                {brandLogo ? (
                  <span className="text-xs">Logo</span>
                ) : (
                  brandName.charAt(0)
                )}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-sky-200">
                  Coaching & Training
                </p>
                <h1 className="mt-1 text-xl font-semibold tracking-tight">
                  {brandName}
                </h1>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-900/70 px-4 py-3 text-xs">
              <p className="text-sky-200">{upcomingBatchLabel}</p>
              <p className="mt-1 font-semibold text-sky-100">
                {upcomingBatchDate}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-slate-200">
            {heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={enrollmentWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sky-400 px-6 py-3 text-xs font-semibold text-slate-950 shadow-md shadow-sky-500/40 hover:bg-sky-300"
            >
              {enrollmentCtaText}
            </Link>
            <Link
              href="#courses"
              className="rounded-full border border-sky-300/70 px-6 py-3 text-xs font-semibold text-sky-100 hover:bg-sky-400/10"
            >
              View all batches
            </Link>
          </div>
        </div>
      </section>

      {/* Courses / Batches */}
      <section
        id="courses"
        className="border-t border-slate-800 bg-slate-950 px-6 py-14"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-lg font-semibold text-sky-100">
            Courses & Batches
          </h2>
          <p className="mt-2 text-xs text-slate-400">
            Structured batches designed for working professionals and students.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">
                  {course.level}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-50">
                  {course.title}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Duration: {course.duration}
                </p>
                <p className="mt-3 text-xs text-sky-200">{course.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Profile */}
      <section className="border-t border-slate-800 bg-slate-950 px-6 py-14">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row">
          <div className="md:w-1/3">
            <div className="inline-flex rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-200">
              Trainer Profile
            </div>
            <p className="mt-4 text-lg font-semibold text-slate-50">
              {trainer.name}
            </p>
            <p className="text-xs text-slate-400">{trainer.role}</p>
            <p className="mt-1 text-xs text-sky-200">{trainer.experience}</p>
          </div>
          <div className="md:w-2/3">
            <p className="text-sm text-slate-200">{trainer.bio}</p>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="border-t border-slate-800 bg-slate-950 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl bg-slate-900/90 px-6 py-6 md:flex-row">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
              Enrollment
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-50">
              Talk to us on WhatsApp to choose the right batch.
            </p>
          </div>
          <Link
            href={enrollmentWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-sky-400 px-6 py-3 text-xs font-semibold text-slate-950 hover:bg-sky-300"
          >
            Chat & Enroll
          </Link>
        </div>
      </section>
    </main>
  );
}

