import Link from "next/link";
import type { ReactNode } from "react";

export interface ClinicModernLayoutProps {
  children: ReactNode;
  brandName?: string;
  brandLogo?: string | null;
}

const TEMPLATE_NAME = "Clinic – Modern";
const BASE_PATH = "/templates/clinics/clinic-modern";
const WHATSAPP_LINK =
  "https://wa.me/919372787128?text=" +
  encodeURIComponent(
    `Hi, I previewed the ${TEMPLATE_NAME} website and want this website for my business.`
  );

export default function ClinicModernLayout({
  children,
  brandName = "CityCare Clinic",
}: ClinicModernLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500 text-xs font-semibold text-slate-950">
              {brandName.charAt(0)}
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-200">
                Clinic
              </p>
              <p className="text-sm font-semibold">{brandName}</p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-xs">
            <Link href={BASE_PATH} className="hover:text-cyan-200">
              Home
            </Link>
            <Link href={`${BASE_PATH}/about`} className="hover:text-cyan-200">
              About
            </Link>
            <Link href={`${BASE_PATH}/services`} className="hover:text-cyan-200">
              Services
            </Link>
            <Link href={`${BASE_PATH}/doctors`} className="hover:text-cyan-200">
              Doctors
            </Link>
            <Link href={`${BASE_PATH}/contact`} className="hover:text-cyan-200">
              Contact
            </Link>
          </nav>
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <Link
              href="/contact"
              className="rounded-full bg-cyan-400 px-3 py-2 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Get This Website
            </Link>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-300 px-3 py-2 font-semibold text-cyan-100 hover:bg-cyan-400/10"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-4 text-center text-[11px] text-slate-400">
        © {new Date().getFullYear()} {brandName}. Designed by Varun Digital Hub.
      </footer>
    </div>
  );
}

