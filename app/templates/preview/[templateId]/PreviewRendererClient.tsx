"use client";

import { ChangeEvent, ReactNode } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { BrandPreviewProvider, useBrandPreview } from "./BrandPreviewContext";

interface PreviewRendererClientProps {
  template: {
    id: string;
    name: string;
    category: string;
    route: string;
    screenshot: string;
    component: string;
  };
}

interface PreviewChromeProps {
  template: PreviewRendererClientProps["template"];
  children: ReactNode;
}

function PreviewChrome({ template, children }: PreviewChromeProps) {
  const { brandName, setBrandName, logoUrl, setLogoUrl } = useBrandPreview();

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrandName(event.target.value);
  };

  const handleLogoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setLogoUrl(null);
      return;
    }

    const url = URL.createObjectURL(file);
    setLogoUrl(url);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi, I previewed the ${template.name} template and want this website for my business.`
  );
  const whatsappHref = `https://wa.me/919372787128?text=${whatsappMessage}`;

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-purple-100 text-sm font-semibold text-purple-900">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt={brandName || "Preview logo"}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-cover"
                />
              ) : (
                <span>{(brandName || template.name).charAt(0)}</span>
              )}
            </div>
            <div className="space-y-0.5">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-700">
                Preview Mode
              </p>
              <p className="text-xs text-gray-600">
                This is how your website will look. Content and colors will be
                customized.
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-wrap items-center justify-end gap-3">
            <input
              type="text"
              value={brandName}
              onChange={handleBrandChange}
              placeholder="Your business / brand name"
              className="min-w-[180px] flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            />

            <label className="inline-flex cursor-pointer items-center rounded-lg border border-dashed border-gray-300 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700">
              <span>Upload logo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
              />
            </label>

            <button
              type="button"
              className="rounded-lg bg-purple-100 px-3 py-2 text-xs font-semibold text-purple-800 hover:bg-purple-200"
            >
              Apply My Brand
            </button>

            <Link
              href="/contact"
              className="rounded-lg bg-purple-900 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-purple-800"
            >
              Get This Website
            </Link>

            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-green-700"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-white">{children}</main>
    </div>
  );
}

export default function PreviewRendererClient({
  template,
}: PreviewRendererClientProps) {
  return (
    <BrandPreviewProvider initialBrandName={template.name}>
      <PreviewChrome template={template}>
        <TemplateWithBrand template={template} />
      </PreviewChrome>
    </BrandPreviewProvider>
  );
}

interface TemplateWithBrandProps {
  template: PreviewRendererClientProps["template"];
}

function TemplateWithBrand({ template }: TemplateWithBrandProps) {
  const { brandName, logoUrl } = useBrandPreview();

  const TemplateComponent = dynamic<
    React.ComponentType<{ brandName?: string; brandLogo?: string | null }>
  >(() => import(`../../${template.component}`), {
    loading: () => (
      <div className="flex min-h-screen items-center justify-center">
        Loading template...
      </div>
    ),
    ssr: false,
  });

  return (
    <TemplateComponent brandName={brandName} brandLogo={logoUrl ?? null} />
  );
}
