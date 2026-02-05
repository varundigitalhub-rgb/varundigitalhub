import Link from "next/link";
import type { ReactNode } from "react";

export interface RestaurantModernLayoutProps {
  children: ReactNode;
  brandName?: string;
  brandLogo?: string | null;
}

const TEMPLATE_NAME = "Restaurant – Modern Dining";
const BASE_PATH = "/templates/restaurant/restaurant-modern";
const WHATSAPP_LINK =
  "https://wa.me/919372787128?text=" +
  encodeURIComponent(
    `Hi, I previewed the ${TEMPLATE_NAME} website and want this website for my business.`
  );

export default function RestaurantModernLayout({
  children,
  brandName = "Spice & Saffron",
}: RestaurantModernLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/15 text-xs font-semibold text-amber-200">
              {brandName.charAt(0)}
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-amber-200/80">
                Restaurant
              </p>
              <p className="text-sm font-semibold">{brandName}</p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-xs">
            <Link href={BASE_PATH} className="hover:text-amber-200">
              Home
            </Link>
            <Link href={`${BASE_PATH}/about`} className="hover:text-amber-200">
              About
            </Link>
            <Link href={`${BASE_PATH}/menu`} className="hover:text-amber-200">
              Menu
            </Link>
            <Link
              href={`${BASE_PATH}/gallery`}
              className="hover:text-amber-200"
            >
              Gallery
            </Link>
            <Link
              href={`${BASE_PATH}/contact`}
              className="hover:text-amber-200"
            >
              Contact
            </Link>
          </nav>
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <Link
              href="/contact"
              className="rounded-full bg-amber-400 px-3 py-2 font-semibold text-slate-950 hover:bg-amber-300"
            >
              Get This Website
            </Link>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-amber-300 px-3 py-2 font-semibold text-amber-100 hover:bg-amber-200/10"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-slate-800 bg-black/90 px-6 py-4 text-center text-[11px] text-slate-400">
        © {new Date().getFullYear()} {brandName}. Designed by Varun Digital Hub.
      </footer>
    </div>
  );
}

