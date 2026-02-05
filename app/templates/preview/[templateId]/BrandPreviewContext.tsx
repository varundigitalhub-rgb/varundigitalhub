"use client";

import {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from "react";

interface BrandPreviewContextValue {
  brandName: string;
  logoUrl: string | null;
  setBrandName: (value: string) => void;
  setLogoUrl: (value: string | null) => void;
}

const BrandPreviewContext = createContext<BrandPreviewContextValue | undefined>(
  undefined
);

interface BrandPreviewProviderProps {
  children: ReactNode;
  initialBrandName: string;
}

export function BrandPreviewProvider({
  children,
  initialBrandName,
}: BrandPreviewProviderProps) {
  const [brandName, setBrandName] = useState(initialBrandName);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      brandName,
      logoUrl,
      setBrandName,
      setLogoUrl,
    }),
    [brandName, logoUrl]
  );

  return (
    <BrandPreviewContext.Provider value={value}>
      {children}
    </BrandPreviewContext.Provider>
  );
}

export function useBrandPreview() {
  const context = useContext(BrandPreviewContext);
  if (!context) {
    throw new Error(
      "useBrandPreview must be used within a BrandPreviewProvider"
    );
  }
  return context;
}
