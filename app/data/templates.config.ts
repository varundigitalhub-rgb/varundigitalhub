export interface TemplateConfig {
  id: string;
  name: string;
  category: string;
  route: string;
  screenshot: string;
  component: string;
}

export const templatesConfig: TemplateConfig[] = [
  {
    id: "restaurant-modern",
    name: "Restaurant â€“ Modern Dining",
    category: "restaurant",
    route: "/templates/restaurant/restaurant-modern",
    screenshot: "/school-1.jpg",
    component: "restaurant/restaurant-modern/page",
  },
  {
    id: "restaurant-premium",
    name: "Restaurant â€“ Premium Dining",
    category: "restaurant",
    route: "/templates/restaurant/restaurant-premium",
    screenshot: "/portfolio_.jpg",
    component: "restaurant/restaurant-premium/page",
  },
  {
    id: "classes-coaching",
    name: "Classes â€“ Coaching & Training",
    category: "classes",
    route: "/templates/classes/classes-coaching",
    screenshot: "/landing_page.jpg",
    component: "classes/classes-coaching/page",
  },
  {
    id: "classes-academy",
    name: "Classes â€“ Academy",
    category: "classes",
    route: "/templates/classes/classes-academy",
    screenshot: "/landing_page.jpg",
    component: "classes/classes-academy/page",
  },
  {
    id: "landing-product",
    name: "Landing Page â€“ Product",
    category: "landing-page",
    route: "/templates/landing-page/landing-product",
    screenshot: "/landing_page.jpg",
    component: "landing-page/landing-product",
  },
  {
    id: "ecommerce-fashion",
    name: "Ecommerce â€“ Fashion Boutique",
    category: "ecommerce",
    route: "/templates/ecommerce/ecommerce-fashion",
    screenshot: "/e-commerce.png",
    component: "ecommerce/ecommerce-fashion/page",
  },
  {
    id: "saloon-modern",
    name: "Saloon â€“ Modern Studio",
    category: "saloon",
    route: "/templates/saloon/saloon-modern",
    screenshot: "/web-design.png",
    component: "saloon/saloon-modern/page",
  },
  {
    id: "realestate-modern",
    name: "Real Estate â€“ City Listings",
    category: "real-estate",
    route: "/templates/real-estate/realestate-modern",
    screenshot: "/seo-optimazation.png",
    component: "real-estate/realestate-modern/page",
  },
  {
    id: "shopkeeper-local",
    name: "Shopkeeper â€“ Local Store",
    category: "shopkeeper",
    route: "/templates/shopkeeper/shopkeeper-local",
    screenshot: "/h-bag.jpg",
    component: "shopkeeper/shopkeeper-local/page",
  },
  {
    id: "clinic-modern",
    name: "Clinic â€“ Modern",
    category: "clinics",
    route: "/templates/clinics/clinic-modern",
    screenshot: "/web-design.png",
    component: "clinics/clinic-modern/page",
  },
  {
    id: "clinic-premium",
    name: "Clinic â€“ Premium",
    category: "clinics",
    route: "/templates/clinics/clinic-premium",
    screenshot: "/web-design.png",
    component: "clinics/clinic-premium/page",
  },
];

export const categories = [
  "restaurant",
  "coffee-shop",
  "classes",
  "landing-page",
  "ecommerce",
  "saloon",
  "real-estate",
  "shopkeeper",
  "clinics",
] as const;

export const categoryLabels: Record<string, string> = {
  restaurant: "Restaurant",
  "coffee-shop": "Coffee Shop",
  classes: "Classes",
  "landing-page": "Landing Page",
  ecommerce: "Ecommerce",
  saloon: "Saloon",
  "real-estate": "Real Estate",
  shopkeeper: "Shopkeeper",
  clinics: "Clinics",
};
