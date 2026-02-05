import Link from "next/link";
import type { ReactNode } from "react";

export interface RestaurantPremiumLayoutProps {
  children: ReactNode;
  brandName?: string;
  brandLogo?: string | null;
}

const TEMPLATE_NAME = "Restaurant – Premium Dining";
const BASE_PATH = "/templates/restaurant/restaurant-premium";
const WHATSAPP_LINK =
  "https://wa.me/919372787128?text=" +
  encodeURIComponent(
    `Hi, I previewed the ${TEMPLATE_NAME} website and want this website for my business.`
  );

export default function RestaurantPremiumLayout({
  children,
  brandName = "Aurora Fine Dine",
}: RestaurantPremiumLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-slate-50">
      <header className="border-b border-zinc-800 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-amber-200 ring-1 ring-amber-500/60">
              {brandName.charAt(0)}
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-amber-300/80">
                Premium Dining
              </p>
              <p className="text-sm font-semibold">{brandName}</p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-xs">
            <Link href={BASE_PATH} className="hover:text-amber-300">
              Home
            </Link>
            <Link href={`${BASE_PATH}/about`} className="hover:text-amber-300">
              About
            </Link>
            <Link href={`${BASE_PATH}/menu`} className="hover:text-amber-300">
              Menu
            </Link>
            <Link
              href={`${BASE_PATH}/gallery`}
              className="hover:text-amber-300"
            >
              Gallery
            </Link>
            <Link
              href={`${BASE_PATH}/contact`}
              className="hover:text-amber-300"
            >
              Contact
            </Link>
          </nav>
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <Link
              href="/contact"
              className="rounded-full bg-amber-500 px-3 py-2 font-semibold text-black hover:bg-amber-400"
            >
              Get This Website
            </Link>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-amber-400 px-3 py-2 font-semibold text-amber-100 hover:bg-amber-400/10"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-zinc-800 bg-black px-6 py-4 text-center text-[11px] text-zinc-400">
        © {new Date().getFullYear()} {brandName}. Designed by Varun Digital Hub.
      </footer>
    </div>
  );
}

