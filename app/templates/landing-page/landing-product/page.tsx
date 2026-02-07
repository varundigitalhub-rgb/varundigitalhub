"use client";

import { useBrandPreview } from "../../../context/BrandPreviewContext";
import { LandingPageLayout } from "../../layouts/LandingPageLayout";

export default function LandingProductTemplatePage() {
  const { brand } = useBrandPreview();

  return (
    <LandingPageLayout
      brandName={brand.brandName}
      brandLogo={brand.logoUrl}
    />
  );
}

