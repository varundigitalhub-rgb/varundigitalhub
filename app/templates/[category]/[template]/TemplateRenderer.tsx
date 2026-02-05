import dynamic from 'next/dynamic';

interface TemplateRendererProps {
  category: string;
  template: string;
}

export default function TemplateRenderer({ category, template }: TemplateRendererProps) {
  // Dynamically import the template component
  const TemplateComponent = dynamic(
    () => import(`../../../${category}/${template}.tsx`),
    {
      loading: () => <div className="flex items-center justify-center min-h-screen">Loading template...</div>,
      ssr: false
    }
  );

  return <TemplateComponent />;
}
