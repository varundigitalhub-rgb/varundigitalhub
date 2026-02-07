 "use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  templatesConfig,
  type TemplateCategory,
  type TemplateConfig,
} from "./templates.config";

const FILTERS: Array<"All" | TemplateCategory> = [
  "All",
  "Restaurant",
  "Coffee Shop",
  "Classes",
  "Landing Page",
  "Shopkeeper",
];

export default function TemplatesPage() {
  const [activeFilter, setActiveFilter] = useState<"All" | TemplateCategory>("All");

  const filteredTemplates = useMemo(() => {
    if (activeFilter === "All") return templatesConfig;
    return templatesConfig.filter((template) => template.category === activeFilter);
  }, [activeFilter]);

  const handleUseTemplate = (template: TemplateConfig) => {
    const message = encodeURIComponent(
      `Hi, I want this website template: ${template.name}`
    );
    const url = `https://wa.me/919372787128?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080?random=80"
            alt="Website templates background"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-20 w-full">
          <div className="container mx-auto px-6 pt-25 pb-12 text-center">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
                Choose a Website Design You Like
              </h1>
              <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-2xl">
                Preview professional website designs. We customize everything for your
                business, from layout and content to branding and SEO.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#templates-list"
                  className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-purple-900 shadow-lg transition-transform hover:scale-105 hover:bg-purple-50 md:text-base"
                >
                  Get This Website
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:text-base"
                >
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1440 120" className="relative h-[120px] w-full">
            <path
              fill="#ffffff"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,122.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      <section id="templates-list" className="bg-gray-50 px-6 py-16">
        <div className="container mx-auto">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-purple-900 md:text-4xl">
              Website Templates
            </h2>
            <p className="text-lg text-gray-600">
              Explore website layouts for restaurants, coffee shops, coaching classes,
              landing pages, and local shopkeepers. Choose a design that matches how you
              want your business to appear online.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-purple-700 text-white shadow-md"
                      : "border border-purple-100 bg-white text-purple-900 hover:bg-purple-50"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredTemplates.map((template) => (
              <article
                key={template.route}
                className="group flex flex-col overflow-hidden rounded-2xl border border-purple-50 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Link href={template.route} className="relative w-full pt-[62%] bg-gray-100">
                  <Image
                    src={template.screenshot}
                    alt={template.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-purple-900 shadow-sm">
                    {template.category}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-lg font-semibold text-purple-900">
                    {template.name}
                  </h3>

                  <ul className="mb-6 space-y-1 text-sm text-gray-600">
                    <li>• Mobile Friendly</li>
                    <li>• SEO Ready</li>
                    <li>• Fast Loading</li>
                  </ul>

                  <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => handleUseTemplate(template)}
                      className="w-full rounded-full bg-purple-700 px-4 py-2 text-sm font-semibold text-white shadow-md transition-colors hover:bg-purple-800"
                    >
                      Use This Template
                    </button>
                    <Link
                      href={template.route}
                      className="w-full rounded-full border border-purple-200 px-4 py-2 text-center text-sm font-semibold text-purple-700 transition-colors hover:bg-purple-50"
                    >
                      View Template
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="templates-bottom-cta"
        className="relative overflow-hidden bg-purple-900 px-6 py-20"
      >
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080?random=81"
            alt="Website CTA background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 to-purple-700/95" />

        <div className="relative z-10">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                Like a design? We&apos;ll customize it with your brand, content, and features.
              </h2>
              <p className="mb-10 text-lg text-white/90">
                Share your business details and preferred template. We will handle the
                full website setup, including content, images, and on-page SEO.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    const section = document.getElementById("templates-list");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth", block: "start" });
                    } else {
                      window.location.href = "/contact";
                    }
                  }}
                  className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-purple-900 shadow-lg transition-transform hover:scale-105 hover:bg-purple-50 md:text-base"
                >
                  Request a Quote
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const message = encodeURIComponent(
                      "Hi, I saw your Website Templates and would like a quote for my business website."
                    );
                    const url = `https://wa.me/919372787128?text=${message}`;
                    window.open(url, "_blank");
                  }}
                  className="rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:text-base"
                >
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
