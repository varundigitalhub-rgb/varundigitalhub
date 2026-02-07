"use client";
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from "react";

type BrandPreviewState = {
  brandName: string;
  logoUrl: string | null;
};

type BrandPreviewContextValue = {
  brand: BrandPreviewState;
  setBrandName: (name: string) => void;
  setLogoFile: (file: File | null) => void;
  resetBrand: () => void;
};

const BrandPreviewContext = createContext<
  BrandPreviewContextValue | undefined
>(undefined);

export const BrandPreviewProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [brandName, setBrandNameState] = useState<string>("");
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [currentObjectUrl, setCurrentObjectUrl] = useState<string | null>(null);

  const setBrandName = (name: string) => {
    setBrandNameState(name);
  };

  const setLogoFile = (file: File | null) => {
    if (currentObjectUrl) {
      URL.revokeObjectURL(currentObjectUrl);
      setCurrentObjectUrl(null);
    }

    if (!file) {
      setLogoUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setLogoUrl(objectUrl);
    setCurrentObjectUrl(objectUrl);
  };

  const resetBrand = () => {
    setBrandNameState("");
    if (currentObjectUrl) {
      URL.revokeObjectURL(currentObjectUrl);
    }
    setLogoUrl(null);
    setCurrentObjectUrl(null);
  };

  const value = useMemo(
    () => ({
      brand: { brandName, logoUrl },
      setBrandName,
      setLogoFile,
      resetBrand,
    }),
    [brandName, logoUrl]
  );

  return (
    <BrandPreviewContext.Provider value={value}>
      {children}
    </BrandPreviewContext.Provider>
  );
};

export const useBrandPreview = () => {
  const context = useContext(BrandPreviewContext);
  if (!context) {
    throw new Error(
      "useBrandPreview must be used within a BrandPreviewProvider"
    );
  }
  return context;
};

