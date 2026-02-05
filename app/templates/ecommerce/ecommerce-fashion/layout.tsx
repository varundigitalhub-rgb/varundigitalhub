import Link from "next/link";
import type { ReactNode } from "react";

interface EcommerceFashionLayoutProps {
  children: ReactNode;
  brandName?: string;
  brandLogo?: string | null;
}

const TEMPLATE_NAME = "Ecommerce – Fashion Boutique";
const BASE_PATH = "/templates/ecommerce/ecommerce-fashion";
const WHATSAPP_LINK =
  "https://wa.me/919372787128?text=" +
  encodeURIComponent(
    `Hi, I previewed the ${TEMPLATE_NAME} website and want this website for my business.`
  );

export default function EcommerceFashionLayout({
  children,
  brandName = "Luxe Street Boutique",
  brandLogo,
}: EcommerceFashionLayoutProps) {
  const initial = brandName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-fuchsia-400 text-sm font-semibold text-slate-950">
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
              <p className="text-[11px] uppercase tracking-[0.25em] text-fuchsia-200">
                Online Boutique
              </p>
              <p className="text-sm font-semibold">{brandName}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-4 text-xs md:flex">
            <Link href={BASE_PATH} className="hover:text-fuchsia-200">
              Home
            </Link>
            <Link href={`${BASE_PATH}/products`} className="hover:text-fuchsia-200">
              Products
            </Link>
            <Link
              href={`${BASE_PATH}/categories`}
              className="hover:text-fuchsia-200"
            >
              Categories
            </Link>
            <Link href={`${BASE_PATH}/about`} className="hover:text-fuchsia-200">
              About
            </Link>
            <Link
              href={`${BASE_PATH}/contact`}
              className="hover:text-fuchsia-200"
            >
              Contact
            </Link>
          </nav>

          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <Link
              href="/contact"
              className="rounded-full bg-fuchsia-400 px-3 py-2 font-semibold text-slate-950 hover:bg-fuchsia-300"
            >
              Get This Website
            </Link>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-fuchsia-300 px-3 py-2 font-semibold text-fuchsia-100 hover:bg-fuchsia-200/10"
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

