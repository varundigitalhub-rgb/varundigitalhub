import { RestaurantLayout } from "../layouts/RestaurantLayout";

interface TemplateProps {
  brandName?: string;
  brandLogo?: string | null;
}

export default function RestaurantModernTemplate({
  brandName = "Spice & Saffron",
  brandLogo = null,
}: TemplateProps) {
  return (
    <RestaurantLayout
      brandName={brandName}
      brandLogo={brandLogo}
      heroTagline="Slow-cooked Indian flavours served with a modern presentation and warm hospitality."
      heroBackgroundImage="https://images.unsplash.com/photo-1514933651103-005eec06c04b"
      menuSections={[
        {
          title: "Signature Starters",
          items: [
            {
              name: "Smoked Tandoori Platter",
              description:
                "Assorted kebabs with house-made chutneys and picked onions.",
              price: "₹620",
            },
            {
              name: "Crispy Masala Corn Chaat",
              description:
                "Street-style corn tossed with roasted spices and lime.",
              price: "₹280",
            },
          ],
        },
        {
          title: "Mains",
          items: [
            {
              name: "Handi Butter Chicken",
              description:
                "Charcoal grilled chicken in a slow-simmered tomato cream gravy.",
              price: "₹540",
            },
            {
              name: "Dal Tadka & Jeera Rice",
              description:
                "Yellow lentils tempered with ghee, cumin and garlic.",
              price: "₹380",
            },
          ],
        },
      ]}
      story={{
        heading: "A kitchen led by stories and spices.",
        text: "Our kitchen is built on family recipes, slow cooking and honest ingredients. Every plate is designed to feel like a celebration—whether it's a weekday dinner or a special occasion.",
        chefName: "Chef Arjun Mehta",
        experience: "15+ years perfecting regional Indian cuisine.",
        imageUrl:
          "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
      }}
      bookingCtaText="Book a Table"
      bookingWhatsAppLink="https://wa.me/919372787128?text=I'd%20like%20to%20book%20a%20table%20at%20Spice%20%26%20Saffron"
    />
  );
}

