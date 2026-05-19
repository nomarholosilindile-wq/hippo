import { Vehicle } from "@/types";
import { getWhatsAppLink } from "@/lib/utils";
import { Button } from "./Button";
import { motion } from "motion/react";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-brand-charcoal border border-white/10 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="h-56 bg-brand-black mb-6 rounded-md flex items-center justify-center text-gray-500 font-serif italic border border-white/5 overflow-hidden">
        <img 
          src={vehicle.imageUrl} 
          alt={vehicle.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex-grow">
        <span className="text-[10px] uppercase tracking-widest text-brand-blue font-medium mb-2 block">
          {vehicle.brand}
        </span>
        <h3 className="font-heading text-2xl mb-2 text-white">{vehicle.name}</h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">{vehicle.description}</p>
      </div>
      
      <div className="flex flex-col gap-2 mb-6 text-sm text-gray-300">
          <span>{vehicle.year} • {vehicle.mileage.toLocaleString()} km</span>
          <span>{vehicle.fuelType} • {vehicle.transmission}</span>
      </div>

      <div className="text-2xl font-bold text-white mb-6">
        R{vehicle.price.toLocaleString()}
      </div>
      
      <Button 
        variant="outline"
        className="w-full mt-auto tracking-widest uppercase text-xs border-white/20 text-white hover:bg-white/10"
        onClick={() => window.open(getWhatsAppLink(`${vehicle.brand} ${vehicle.name}`), "_blank")}
      >
        Inquire on WhatsApp
      </Button>
    </motion.div>
  );
};
