import PreviewRendererClient from "./PreviewRendererClient";

interface PreviewRendererProps {
  template: {
    id: string;
    name: string;
    category: string;
    route: string;
    screenshot: string;
    component: string;
  };
}

export default function PreviewRenderer({ template }: PreviewRendererProps) {
  return <PreviewRendererClient template={template} />;
}
