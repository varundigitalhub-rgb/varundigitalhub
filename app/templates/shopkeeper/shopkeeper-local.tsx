import { ShopkeeperLayout } from "../layouts/ShopkeeperLayout";

interface TemplateProps {
  brandName?: string;
  brandLogo?: string | null;
}

export default function ShopkeeperLocalTemplate({
  brandName = "DailyMart General Store",
  brandLogo = null,
}: TemplateProps) {
  return (
    <ShopkeeperLayout
      brandName={brandName}
      brandLogo={brandLogo}
      heroSubtitle="Local convenience store for daily essentials in your neighbourhood."
      heroHighlight="Highlight top categories like groceries, dairy, snacks and household items with simple offers that regular customers remember."
      offers={[
        {
          title: "Monthly Grocery Combos",
          description:
            "Pre-packed monthly combos for small families with savings on basics.",
          badge: "Popular",
        },
        {
          title: "Morning Milk & Bread",
          description:
            "Daily fresh milk and bread available from 7:00 AM onwards.",
        },
        {
          title: "Local Delivery",
          description:
            "Free delivery above ₹499 within a 2 km radius. Call or WhatsApp to place your order.",
          badge: "Delivery",
        },
      ]}
      address="Ground floor shop, near main signal, Malad West, Mumbai."
      timings="Mon–Sun: 7:00 AM – 10:30 PM"
      phoneNumber="+91 93727 87128"
      whatsappLink="https://wa.me/919372787128?text=I'd%20like%20to%20place%20an%20order%20with%20DailyMart"
    />
  );
}

