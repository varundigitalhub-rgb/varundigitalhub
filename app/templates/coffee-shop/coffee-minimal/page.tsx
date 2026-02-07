"use client";

import { useBrandPreview } from "../../../context/BrandPreviewContext";
import { CoffeeShopLayout } from "../../layouts/CoffeeShopLayout";

export default function CoffeeMinimalTemplatePage() {
  const { brand } = useBrandPreview();

  return (
    <CoffeeShopLayout
      brandName={brand.brandName}
      brandLogo={brand.logoUrl}
    />
  );
}

