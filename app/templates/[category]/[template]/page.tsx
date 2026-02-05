import { notFound } from "next/navigation";
import { templatesConfig } from "../../../data/templates.config";
import TemplateRendererClient from "./TemplateRendererClient";

interface TemplatePageProps {
  params: Promise<{
    category: string;
    template: string;
  }>;
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { category, template } = await params;

  const templateConfig = templatesConfig.find(
    (config) =>
      config.category === category &&
      config.component === `${category}/${template}`
  );

  if (!templateConfig) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <TemplateRendererClient category={category} template={template} />
    </div>
  );
}

export async function generateStaticParams() {
  return templatesConfig.map((config) => ({
    category: config.category,
    template: config.component.split("/")[1],
  }));
}
