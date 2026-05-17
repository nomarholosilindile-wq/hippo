import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getWhatsAppLink = (productName: string) =>
  `https://wa.me/27711078327?text=${encodeURIComponent(`Hi HIPPO PERFUMES, I want to order the ${productName}.`)}`;
