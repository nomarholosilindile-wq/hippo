import { useState } from "react";
import { Vehicle } from "@/types";
import { getWhatsAppLink } from "@/lib/utils";
import { Button } from "./Button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 70;

  const shouldTruncate = vehicle.description.length > MAX_LENGTH;
  const displayText = isExpanded 
    ? vehicle.description 
    : (shouldTruncate ? `${vehicle.description.slice(0, MAX_LENGTH)}...` : vehicle.description);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-brand-charcoal border border-white/10 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="h-56 bg-brand-black mb-6 rounded-md flex items-center justify-center text-gray-500 font-serif italic border border-white/5 overflow-hidden relative">
        {vehicle.isHotDeal && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider z-10">
            Hot Deal
          </div>
        )}
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
        <p className="text-gray-400 text-sm mb-2 leading-relaxed">
          {displayText}
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-brand-blue ml-2 hover:underline text-xs"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </p>
      </div>
      
      <div className="flex flex-col gap-2 mb-6 text-sm text-gray-300">
          <span>{vehicle.year} • {vehicle.mileage.toLocaleString()} km</span>
          <span>{vehicle.fuelType} • {vehicle.transmission}</span>
      </div>

      <div className="text-2xl font-bold text-white mb-6">
        R{vehicle.price.toLocaleString()}
      </div>

      <div className="text-xs text-brand-blue mb-4 uppercase tracking-widest font-semibold">
        AVAILABLE IN ALL CARS
      </div>
      
      <div className="flex flex-col gap-2">
        <Button 
          variant="outline"
          className="w-full tracking-widest uppercase text-xs border-white/20 text-white hover:bg-white/10"
          onClick={() => window.open(getWhatsAppLink(`${vehicle.brand} ${vehicle.name}`), "_blank")}
        >
          Inquire on WhatsApp
        </Button>
        <Link to={`/vehicle/${vehicle.id}`}>
          <Button 
            variant="outline"
            className="w-full tracking-widest uppercase text-xs border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
          >
            View Details
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};
