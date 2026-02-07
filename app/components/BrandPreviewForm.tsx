"use client";
import { FormEvent, ChangeEvent, useRef, useState } from "react";
import { useBrandPreview } from "../context/BrandPreviewContext";

export default function BrandPreviewForm() {
  const { setBrandName, setLogoFile, resetBrand, brand } = useBrandPreview();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [localBrandName, setLocalBrandName] = useState<string>(
    brand.brandName ?? ""
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setBrandName(localBrandName.trim());
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    if (file && file.type.startsWith("image/")) {
      setLogoFile(file);
    } else {
      setLogoFile(null);
    }
  };

  const handleReset = () => {
    setLocalBrandName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    resetBrand();
  };

  return (
    <section className="w-full bg-purple-900/5 border border-purple-100 rounded-2xl p-5 md:p-6 mt-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">
            Preview Mode – Your branding is applied temporarily
          </p>
          <p className="text-sm text-gray-700 max-w-md">
            This preview runs only in your browser. Your brand name and logo are
            not saved or uploaded anywhere.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-start"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="brand-name"
              className="text-xs font-medium text-gray-700"
            >
              Brand Name
            </label>
            <input
              id="brand-name"
              type="text"
              value={localBrandName}
              onChange={(event) => setLocalBrandName(event.target.value)}
              placeholder="e.g. Sunrise Coaching Institute"
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="brand-logo"
              className="text-xs font-medium text-gray-700"
            >
              Logo (image only)
            </label>
            <input
              id="brand-logo"
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full text-xs file:mr-3 file:rounded-md file:border-0 file:bg-purple-700 file:px-3 file:py-2 file:text-xs file:font-medium file:text-white hover:file:bg-purple-800 cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <button
              type="submit"
              className="w-full md:w-auto inline-flex items-center justify-center rounded-lg bg-purple-700 px-4 py-2.5 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-purple-800 transition-colors"
            >
              Preview With My Brand
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full md:w-auto inline-flex items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Reset Preview
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

