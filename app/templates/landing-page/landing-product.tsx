import { LandingPageLayout } from "../layouts/LandingPageLayout";

interface TemplateProps {
  brandName?: string;
  brandLogo?: string | null;
}

export default function LandingProductTemplate({
  brandName = "LaunchPlus",
  brandLogo = null,
}: TemplateProps) {
  return (
    <LandingPageLayout
      brandName={brandName}
      brandLogo={brandLogo}
      productTagline="Launch your product with a focused, high-converting landing page that is easy to edit and ready for ads."
      heroImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
      features={[
        {
          title: "Above-the-fold hero",
          description:
            "Clear product headline, short description and a primary CTA button for instant action.",
        },
        {
          title: "Benefits-led sections",
          description:
            "Explain how your product solves real problems with simple, scannable blocks.",
        },
        {
          title: "Lead-focused layout",
          description:
            "Designed for WhatsApp, call or form enquiries with minimal distraction.",
        },
      ]}
      testimonials={[
        {
          name: "Anita Desai",
          role: "Course Creator",
          quote:
            "The landing page helped me get enquiries from day one of running ads.",
        },
        {
          name: "Rahul Mehta",
          role: "Local Business Owner",
          quote:
            "We could explain our services clearly and get more serious leads.",
        },
        {
          name: "Studio Pixel",
          role: "Design Agency",
          quote:
            "The structure is perfect for showcasing one offer and moving visitors to action.",
        },
      ]}
      primaryCtaText="Get this landing page"
      primaryCtaLink="https://wa.me/919372787128?text=I'd%20like%20this%20landing%20page%20for%20my%20product"
    />
  );
}

