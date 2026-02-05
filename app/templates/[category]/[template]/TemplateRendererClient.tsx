"use client";

import dynamic from "next/dynamic";

interface TemplateRendererProps {
  category: string;
  template: string;
}

export default function TemplateRendererClient({
  category,
  template,
}: TemplateRendererProps) {
  const TemplateComponent = dynamic<
    React.ComponentType<{ brandName?: string; brandLogo?: string | null }>
  >(() => import(`../../${category}/${template}`), {
    loading: () => (
      <div className="flex min-h-screen items-center justify-center">
        Loading template...
      </div>
    ),
    ssr: false,
  });

  return <TemplateComponent />;
}
