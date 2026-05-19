import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getWhatsAppLink = (vehicleName: string) =>
  `https://wa.me/27655479547?text=${encodeURIComponent(`Hi CARS PLUG, I want to inquire about this vehicle: ${vehicleName}.`)}`;
