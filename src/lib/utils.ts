import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getWhatsAppLink = (vehicleName: string) =>
  `https://wa.me/27711078327?text=${encodeURIComponent(`Hi CARS PLUG, I want to inquire about this vehicle: ${vehicleName}.`)}`;
