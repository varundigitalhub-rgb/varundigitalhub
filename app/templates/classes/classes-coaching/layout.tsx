"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useBrandPreview } from "../../../context/BrandPreviewContext";

const TEMPLATE_NAME = "Coaching Classes Website";
const BASE_PATH = "/templates/classes/classes-coaching";

const navLinks = [
  { href: BASE_PATH, label: "Home" },
  { href: `${BASE_PATH}/about`, label: "About" },
  { href: `${BASE_PATH}/courses`, label: "Courses" },
  { href: `${BASE_PATH}/faculty`, label: "Faculty" },
  { href: `${BASE_PATH}/contact`, label: "Contact" },
];

export default function ClassesCoachingLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { brand } = useBrandPreview();
  const pathname = usePathname();

  const brandName = brand.brandName || TEMPLATE_NAME;
  const brandLogo = brand.logoUrl;

  const whatsAppMessage = encodeURIComponent(
    `Hi, I previewed the ${TEMPLATE_NAME} website and want this website.`
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
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
                <span className="text-[11px] font-semibold text-blue-200">
                  Logo
                </span>
              )}
            </div>
            <span className="text-sm md:text-base font-semibold text-white">
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
                      ? "bg-blue-600 text-white"
                      : "text-slate-100 hover:bg-slate-900"
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

      <Link
        href="/templates"
        className="fixed bottom-4 left-4 z-40 rounded-full bg-black/75 px-4 py-2 text-xs md:text-sm font-medium text-white shadow-lg hover:bg-black"
      >
        ← Back to Templates
      </Link>

      <footer className="border-t border-slate-800 bg-blue-700">
        <div className="container mx-auto flex flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs md:text-sm text-blue-50">
            Like this Classes website design? Get it customised for your
            coaching institute with real photos and results.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-white px-5 py-2 text-xs md:text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
            >
              Get This Website
            </Link>
            <a
              href={`https://wa.me/919372787128?text=${whatsAppMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full border border-blue-50 px-5 py-2 text-xs md:text-sm font-semibold text-white hover:bg-blue-600"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
