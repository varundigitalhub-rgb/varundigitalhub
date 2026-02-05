import Link from "next/link";
import type { ReactNode } from "react";

export interface ClinicPremiumLayoutProps {
  children: ReactNode;
  brandName?: string;
  brandLogo?: string | null;
}

const TEMPLATE_NAME = "Clinic – Premium";
const BASE_PATH = "/templates/clinics/clinic-premium";
const WHATSAPP_LINK =
  "https://wa.me/919372787128?text=" +
  encodeURIComponent(
    `Hi, I previewed the ${TEMPLATE_NAME} website and want this website for my business.`
  );

export default function ClinicPremiumLayout({
  children,
  brandName = "PrimeCare Clinic",
}: ClinicPremiumLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-xs font-semibold text-slate-50">
              {brandName.charAt(0)}
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                Clinic
              </p>
              <p className="text-sm font-semibold">{brandName}</p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-xs">
            <Link href={BASE_PATH} className="hover:text-sky-700">
              Home
            </Link>
            <Link href={`${BASE_PATH}/about`} className="hover:text-sky-700">
              About
            </Link>
            <Link
              href={`${BASE_PATH}/services`}
              className="hover:text-sky-700"
            >
              Services
            </Link>
            <Link
              href={`${BASE_PATH}/doctors`}
              className="hover:text-sky-700"
            >
              Doctors
            </Link>
            <Link
              href={`${BASE_PATH}/contact`}
              className="hover:text-sky-700"
            >
              Contact
            </Link>
          </nav>
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <Link
              href="/contact"
              className="rounded-full bg-sky-600 px-3 py-2 font-semibold text-white hover:bg-sky-500"
            >
              Get This Website
            </Link>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-sky-600 px-3 py-2 font-semibold text-sky-700 hover:bg-sky-50"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-slate-200 bg-white px-6 py-4 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} {brandName}. Designed by Varun Digital Hub.
      </footer>
    </div>
  );
}

