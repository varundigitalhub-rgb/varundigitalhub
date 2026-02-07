export type TemplateCategory =
  | "Restaurant"
  | "Coffee Shop"
  | "Classes"
  | "Landing Page"
  | "Shopkeeper";

export interface TemplateConfig {
  name: string;
  category: TemplateCategory;
  route: string;
  screenshot: string;
}

export const templatesConfig: TemplateConfig[] = [
  {
    name: "Classic Family Restaurant",
    category: "Restaurant",
    route: "/templates/restaurant/restaurant-modern",
    screenshot: "/classic-restaurant .png",
  },
  {
    name: "Premium Dining Restaurant",
    category: "Restaurant",
    route: "/templates/restaurant/restaurant-premium",
    screenshot: "/premium-restaurant-web.png",
  },
  {
    name: "Cozy Coffee Shop",
    category: "Coffee Shop",
    route: "/templates/coffee-shop/coffee-minimal",
    screenshot: "/cozy-cofee-shop.png",
  },
  {
    name: "Luxury Coffee Lounge",
    category: "Coffee Shop",
    route: "/templates/coffee-shop/coffee-luxury",
    screenshot: "/cozy-launge.png",
  },
  {
    name: "Coaching Classes Website",
    category: "Classes",
    route: "/templates/classes/classes-coaching",
    screenshot: "/classes-tution.png",
  },
  {
    name: "Academy Website",
    category: "Classes",
    route: "/templates/classes/classes-academy",
    screenshot: "/academy-website.png",
  },
  {
    name: "Startup Landing Page",
    category: "Landing Page",
    route: "/templates/landing-page/landing-product",
    screenshot: "/startup-landing-page.png",
  },
  {
    name: "Service Landing Website",
    category: "Landing Page",
    route: "/templates/landing-page/landing-service",
    screenshot: "/service-landing-page.png",
  },
  {
    name: "Local Shopkeeper Website",
    category: "Shopkeeper",
    route: "/templates/shopkeeper/shopkeeper-local",
    screenshot: "/general-stores.png",
  },
  {
    name: "Modern Local Store Website",
    category: "Shopkeeper",
    route: "/templates/shopkeeper/shopkeeper-modern",
    screenshot: "/modern-general-store.png",
  },
];
