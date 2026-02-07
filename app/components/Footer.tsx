"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  const isTemplatePreviewRoute =
    pathname?.startsWith("/templates/restaurant/") ||
    pathname?.startsWith("/templates/coffee-shop/") ||
    pathname?.startsWith("/templates/classes/") ||
    pathname?.startsWith("/templates/landing-page/") ||
    pathname?.startsWith("/templates/shopkeeper/");

  if (isTemplatePreviewRoute) {
    return null;
  }

  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">
      <div className="container mx-auto flex flex-col gap-8 px-6 py-10 md:flex-row md:items-start md:justify-between md:py-12">
        <div className="max-w-sm space-y-3">
          <p className="text-sm font-semibold tracking-wide text-white">
            Varun Digital Hub
          </p>
          <p className="text-sm text-gray-400">
            Building modern, SEO-friendly websites for local businesses,
            coaching institutes, and service providers across Mumbai.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-sm font-semibold text-white">Contact</p>
          <a
            href="https://wa.me/919372787128"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
          >
            <FaWhatsapp className="h-4 w-4 text-green-500" />
            <span>WhatsApp: +91 93727 87128 </span>
          </a>
          <a
            href="mailto:varundigitalhub@gmail.com"
            className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white p-px-2"
          >
            <span className="h-4 w-4 rounded-full border border-gray-500 p-px-2" />
            <span>varundigitalhub@gmail.com</span>
          </a>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-sm font-semibold text-white">Follow</p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/varun_digital_hub/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-gray-300 transition-colors hover:bg-white hover:text-gray-900"
              aria-label="Instagram"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61583458471814"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-gray-300 transition-colors hover:bg-white hover:text-gray-900"
              aria-label="Facebook"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/varun-digital-hub-41425a398/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-gray-300 transition-colors hover:bg-white hover:text-gray-900"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-gray-300 transition-colors hover:bg-white hover:text-gray-900"
              aria-label="YouTube"
            >
              <FaYoutube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Varun Digital Hub. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-purple-500" />
            <span>Designed &amp; built in Mumbai.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
