"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cardHover } from "../utils/animations";
import { TemplateConfig } from "../data/templates.config";

interface TemplateCardProps {
  template: TemplateConfig;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
      whileHover={cardHover}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={template.screenshot}
          alt={template.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="inline-block bg-white/90 text-purple-900 text-sm font-semibold px-3 py-1 rounded-full">
            {template.category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-purple-900 mb-2">{template.name}</h3>
        <ul className="text-gray-600 mb-4 space-y-1">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Mobile Friendly
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            SEO Ready
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Fast Loading
          </li>
        </ul>
        <div className="flex flex-col gap-3">
          <Link
            href={`/templates/preview/${template.id}`}
            className="w-full bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg font-medium text-center transition-colors"
          >
            Preview &amp; See How Your Website Will Look
          </Link>
          <div className="flex gap-3">
            <Link
              href={template.route}
              className="flex-1 bg-purple-100 text-purple-700 hover:bg-purple-200 px-4 py-2 rounded-lg font-medium text-center transition-colors"
            >
              Live Preview
            </Link>
            <Link
              href={`https://wa.me/919372787128?text=I want to use the ${encodeURIComponent(template.name)} template`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-purple-900 text-white hover:bg-purple-800 px-4 py-2 rounded-lg font-medium text-center transition-colors"
            >
              Use This Template
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
