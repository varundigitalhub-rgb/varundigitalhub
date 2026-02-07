import Image from "next/image";
import Link from "next/link";

type ClassesLayoutProps = {
  brandName?: string;
  brandLogo?: string | null;
};

export function ClassesLayout({ brandName, brandLogo }: ClassesLayoutProps) {
  const title = brandName || "Coaching Classes";

  const batches = [
    { label: "Std 8–10", info: "Evening batches · Weekdays" },
    { label: "11–12 Science", info: "JEE / NEET focus · Tests" },
    { label: "Skill Courses", info: "Basic Computer · English" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-14 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800">
        <div className="container mx-auto grid gap-10 md:grid-cols-[2fr,1.4fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
              Coaching & Tuition
            </p>
            <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
            <p className="text-sm md:text-base text-white/85 max-w-xl">
              Present your batches, results, and teaching style clearly so
              parents and students can quickly decide to enquire for admissions.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {batches.map((batch) => (
                <div
                  key={batch.label}
                  className="rounded-2xl bg-white/10 p-3 text-xs border border-white/10"
                >
                  <p className="font-semibold">{batch.label}</p>
                  <p className="mt-1 text-white/75">{batch.info}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
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
                  <span className="text-[11px] font-semibold text-blue-900">
                    Logo
                  </span>
                )}
              </div>
              <div>
                <p className="text-[11px] text-blue-100/80">Preview Mode</p>
                <p className="text-sm font-semibold">{title}</p>
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 p-4 text-xs text-white/80">
              <p>Show current admission status:</p>
              <ul className="mt-2 space-y-1">
                <li>• New academic year admissions open</li>
                <li>• Limited seats for evening batches</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 bg-slate-950">
        <div className="container mx-auto grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Courses & Batches
            </h2>
            <p className="text-sm md:text-base text-slate-200">
              List all programs, timings, and key highlights so parents can see
              the exact support their child will receive.
            </p>
          </div>
          <div className="space-y-4 text-xs text-slate-100">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <p className="font-semibold text-sm">School Tuitions</p>
              <p className="mt-1">
                Std 5–10 · All boards · Concept-focused teaching with regular
                tests and parent feedback.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <p className="font-semibold text-sm">Entrance Coaching</p>
              <p className="mt-1">
                Dedicated JEE / NEET / CET batches with test series and doubt
                solving sessions.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <p className="font-semibold text-sm">Skills & Languages</p>
              <p className="mt-1">
                English speaking, computer basics, and practical skill courses
                for students and working professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 bg-slate-900">
        <div className="container mx-auto grid gap-10 md:grid-cols-[1.1fr,1.3fr] md:items-center">
          <div className="rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 p-6 flex items-end">
            <div className="space-y-2 text-sm text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-100">
                Head Trainer
              </p>
              <p className="text-xl font-semibold">Your Lead Faculty</p>
              <p className="text-xs text-blue-50/90">
                Use this area for a professional photo of the teacher or
                founder.
              </p>
            </div>
          </div>
          <div className="space-y-4 text-sm text-slate-100">
            <h2 className="text-2xl font-semibold">Trainer Profile</h2>
            <p className="text-sm text-slate-200">
              Introduce your teaching experience, qualifications, and results
              from past students. This builds trust for new parents.
            </p>
            <ul className="space-y-1 text-xs">
              <li>• X+ years of teaching experience</li>
              <li>• Past students in top colleges / ranks</li>
              <li>• Strong focus on concepts and practice</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 bg-blue-700">
        <div className="container mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Want Admissions for the Upcoming Batch?
            </h2>
            <p className="text-sm md:text-base text-blue-50">
              Encourage parents and students to call or message you for
              admissions, fees, and batch timings.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-3">
            <a
              href="https://wa.me/919372787128?text=Hi,%20I%20want%20a%20classes%20website%20like%20this."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-900 shadow-md hover:bg-blue-50"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full justify-center rounded-full border border-blue-100 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Discuss Coaching Website
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
