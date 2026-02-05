import Link from "next/link";
import type { ReactNode } from "react";

interface RealEstateModernLayoutProps {
  children: ReactNode;
  brandName?: string;
  brandLogo?: string | null;
}

const TEMPLATE_NAME = "Real Estate – City Listings";
const BASE_PATH = "/templates/real-estate/realestate-modern";
const WHATSAPP_LINK =
  "https://wa.me/919372787128?text=" +
  encodeURIComponent(
    `Hi, I previewed the ${TEMPLATE_NAME} website and want this website for my business.`
  );

export default function RealEstateModernLayout({
  children,
  brandName = "CityHomes Realty",
  brandLogo,
}: RealEstateModernLayoutProps) {
  const initial = brandName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-emerald-400 text-sm font-semibold text-slate-950">
              {brandLogo ? (
                <img
                  src={brandLogo}
                  alt={brandName}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span>{initial}</span>
              )}
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-200">
                Real Estate
              </p>
              <p className="text-sm font-semibold">{brandName}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-4 text-xs md:flex">
            <Link href={BASE_PATH} className="hover:text-emerald-200">
              Home
            </Link>
            <Link
              href={`${BASE_PATH}/listings`}
              className="hover:text-emerald-200"
            >
              Listings
            </Link>
            <Link
              href={`${BASE_PATH}/projects`}
              className="hover:text-emerald-200"
            >
              Projects
            </Link>
            <Link href={`${BASE_PATH}/contact`} className="hover:text-emerald-200">
              Contact
            </Link>
          </nav>

          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <Link
              href="/contact"
              className="rounded-full bg-emerald-400 px-3 py-2 font-semibold text-slate-950 hover:bg-emerald-300"
            >
              Get This Website
            </Link>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-300 px-3 py-2 font-semibold text-emerald-100 hover:bg-emerald-200/10"
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

