import { Product } from "../types";

export const products: Product[] = [
  {
    id: "30ml-perfume",
    name: "30ml Designer Inspired",
    price: 100,
    creditPrice: 120,
    category: "Perfume",
    description: "Our signature 30ml collection. Available in Sweet, Bold, or Fruity scent profiles. Perfect for everyday luxury.",
    imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "50ml-perfume",
    name: "50ml Premium Fragrance",
    price: 250,
    category: "Perfume",
    description: "Signature 50ml bottle for a longer lasting impression.",
    imageUrl: "https://images.unsplash.com/photo-1595536561081-37d71d3ad46f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "roll-on",
    name: "Perfume Roll-On",
    price: 60,
    category: "Roll-On",
    description: "Compact, convenient fragrance for on-the-go freshness.",
    imageUrl: "https://images.unsplash.com/photo-1620987278429-ab178fd61580?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "car-diffuser",
    name: "Car Diffuser",
    price: 100,
    category: "Diffuser",
    description: "Keep your car smelling luxurious and fresh.",
    imageUrl: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "home-diffuser",
    name: "Home Diffuser",
    price: 350,
    category: "Diffuser",
    description: "Transform your living space with our premium home fragrance.",
    imageUrl: "https://images.unsplash.com/photo-1602603567676-e8d116345607?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "body-lotion",
    name: "Signature Body Lotion",
    price: 350,
    category: "Lotion",
    description: "Hydrating lotion infused with our signature scent.",
    imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "collagen",
    name: "Premium Collagen",
    price: 300,
    category: "Collagen",
    description: "High-quality collagen to support your beauty routine.",
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "luxury-candle",
    name: "Luxury Soy Candle",
    price: 280,
    category: "Diffuser",
    description: "Hand-poured candle with a lingering delicate scent.",
    imageUrl: "https://images.unsplash.com/photo-1602603567676-e8d116345607?q=80&w=600&auto=format&fit=crop"
  },
];

export const reviews = [
  { id: 1, name: "Sarah M.", rating: 5, text: "Absolutely obsessed with the sweet scent! It lasts all day." },
  { id: 2, name: "David L.", rating: 5, text: "The bold scent is perfect for meetings. Very professional and long-lasting." },
  { id: 3, name: "Jessica K.", rating: 4, text: "Great value for money. The roll-on is my handbag essential." },
];
