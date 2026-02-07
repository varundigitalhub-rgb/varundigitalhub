"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useBrandPreview } from "../../../context/BrandPreviewContext";

const TEMPLATE_NAME = "Service Landing Website";
const BASE_PATH = "/templates/landing-page/landing-service";

const navLinks = [
  { href: BASE_PATH, label: "Home" },
  { href: `${BASE_PATH}/features`, label: "Features" },
  { href: `${BASE_PATH}/pricing`, label: "Pricing" },
  { href: `${BASE_PATH}/testimonials`, label: "Testimonials" },
  { href: `${BASE_PATH}/contact`, label: "Contact" },
];

export default function LandingServiceLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { brand } = useBrandPreview();
  const pathname = usePathname();

  const brandName = brand.brandName || TEMPLATE_NAME;
  const brandLogo = brand.logoUrl;

  const whatsAppMessage = encodeURIComponent(
    `Hi, I previewed the ${TEMPLATE_NAME} website and want this website for my business.`
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <Link href={BASE_PATH} className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-slate-900 flex items-center justify-center overflow-hidden">
              {brandLogo ? (
                <Image
                  src={brandLogo}
                  alt={brandName}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              ) : (
                <span className="text-[11px] font-semibold text-white">
                  Logo
                </span>
              )}
            </div>
            <span className="text-sm md:text-base font-semibold text-slate-900">
              {brandName}
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-xs md:text-sm">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full ${
                    active
                      ? "bg-slate-900 text-white"
                      : "text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-100 bg-slate-900 text-white">
        <div className="container mx-auto flex flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs md:text-sm text-slate-100">
            Like this Service Landing website? Get it customised with your own
            copy, visuals, and CTAs.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-white px-5 py-2 text-xs md:text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
            >
              Get This Website
            </Link>
            <a
              href={`https://wa.me/919372787128?text=${whatsAppMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full border border-slate-300 px-5 py-2 text-xs md:text-sm font-semibold text-white hover:bg-slate-800"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <Link
          href="/templates"
          className="fixed bottom-4 left-4 z-40 rounded-full bg-black/75 px-4 py-2 text-xs md:text-sm font-medium text-white shadow-lg hover:bg-black"
        >
          ← Back to Templates
        </Link>
      </footer>
    </div>
  );
}
