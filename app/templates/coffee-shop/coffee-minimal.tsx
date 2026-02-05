import { CoffeeShopLayout } from "../layouts/CoffeeShopLayout";

interface TemplateProps {
  brandName?: string;
  brandLogo?: string | null;
}

export default function CoffeeMinimalTemplate({
  brandName = "Brew & Bloom",
  brandLogo = null,
}: TemplateProps) {
  return (
    <CoffeeShopLayout
      brandName={brandName}
      brandLogo={brandLogo}
      heroSubtitle="Calm coffee bar for remote workers and quick meetings."
      specials={[
        {
          name: "Vanilla Cold Brew",
          note: "Slow steeped for 16 hours with a hint of vanilla.",
          price: "₹220",
        },
        {
          name: "Flat White",
          note: "Double espresso with silky steamed milk.",
          price: "₹190",
        },
        {
          name: "Hazelnut Cappuccino",
          note: "Foamy cappuccino with roasted hazelnut flavour.",
          price: "₹210",
        },
      ]}
      galleryImages={[
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=900&q=80",
      ]}
      address="Ground Floor, Off Link Road, Malad West, Mumbai."
      openingHours="Mon–Sun: 8:00 AM – 10:00 PM"
      visitCtaText="Plan your visit"
      visitCtaLink="https://wa.me/919372787128?text=I'd%20like%20to%20visit%20the%20cafe"
    />
  );
}

