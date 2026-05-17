export interface Product {
  id: string;
  name: string;
  price: number;
  creditPrice?: number;
  category: "Perfume" | "Lotion" | "Roll-On" | "Diffuser" | "Collagen";
  scentProfile?: "Sweet" | "Bold" | "Fruity";
  description: string;
  isBestSeller?: boolean;
  imageUrl: string;
}
