"use client";

import { useBrandPreview } from "../../../context/BrandPreviewContext";
import { RestaurantLayout } from "../../layouts/RestaurantLayout";

export default function RestaurantModernTemplatePage() {
  const { brand } = useBrandPreview();

  return (
    <RestaurantLayout
      brandName={brand.brandName}
      brandLogo={brand.logoUrl}
    />
  );
}

