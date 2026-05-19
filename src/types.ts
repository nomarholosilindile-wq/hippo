export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  price: number;
  year: number;
  mileage: number;
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Manual" | "Automatic";
  description: string;
  imageUrl: string;
  isHotDeal?: boolean;
}
