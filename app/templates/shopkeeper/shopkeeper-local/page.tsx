"use client";

import { useBrandPreview } from "../../../context/BrandPreviewContext";
import { ShopkeeperLayout } from "../../layouts/ShopkeeperLayout";

export default function ShopkeeperLocalTemplatePage() {
  const { brand } = useBrandPreview();

  return (
    <ShopkeeperLayout
      brandName={brand.brandName}
      brandLogo={brand.logoUrl}
    />
  );
}

