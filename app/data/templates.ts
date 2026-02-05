export interface Template {
  id: number;
  name: string;
  category: string;
  image: string;
}

export const templates: Template[] = [
  {
    id: 1,
    name: "Elegant Restaurant",
    category: "restaurant",
    image: "/school-1.jpg"
  },
  {
    id: 2,
    name: "Modern Bistro",
    category: "restaurant",
    image: "/portfolio_.jpg"
  },
  {
    id: 3,
    name: "Cozy Coffee Shop",
    category: "coffee-shop",
    image: "/method-mask-d2.jpg"
  },
  {
    id: 4,
    name: "Classes & Coaching",
    category: "classes",
    image: "/landing_page.jpg"
  },
  {
    id: 5,
    name: "Business Landing Page",
    category: "landing-page",
    image: "https://picsum.photos/400/300"
  },
  {
    id: 6,
    name: "Shopkeeper Store",
    category: "shopkeeper",
    image: "https://picsum.photos/400/301"
  }
];

export const categories = ["restaurant", "coffee-shop", "classes", "landing-page", "shopkeeper"];
