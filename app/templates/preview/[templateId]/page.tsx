import { notFound } from "next/navigation";
import { templatesConfig } from "../../../data/templates.config";
import PreviewRenderer from "./PreviewRenderer";

interface PreviewPageProps {
  params: Promise<{
    templateId: string;
  }>;
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { templateId } = await params;
  const template = templatesConfig.find((t) => t.id === templateId);

  if (!template) {
    notFound();
  }

  return <PreviewRenderer template={template} />;
}

export async function generateStaticParams() {
  return templatesConfig.map((template) => ({
    templateId: template.id,
  }));
}
