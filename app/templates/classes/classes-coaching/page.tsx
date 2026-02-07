"use client";

import { useBrandPreview } from "../../../context/BrandPreviewContext";
import { ClassesLayout } from "../../layouts/ClassesLayout";

export default function ClassesCoachingTemplatePage() {
  const { brand } = useBrandPreview();

  return (
    <ClassesLayout brandName={brand.brandName} brandLogo={brand.logoUrl} />
  );
}

