import { Product } from "@/types";
import { getWhatsAppLink } from "@/lib/utils";
import { Button } from "./Button";
import { motion } from "motion/react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="h-56 bg-gray-50 mb-6 rounded-md flex items-center justify-center text-gray-300 font-serif italic border border-gray-100 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex-grow">
        <span className="text-[10px] uppercase tracking-widest text-gold font-medium mb-2 block">
          {product.category}
        </span>
        <h3 className="font-serif text-2xl mb-2 text-gray-950">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">{product.description}</p>
      </div>
      
      <div className="flex flex-col gap-2 mb-6">
        <span className="font-medium text-lg text-gray-950">
          Price: R{product.price}
          {product.creditPrice && <span className="text-sm text-gray-400 font-normal"> (Cash)</span>}
        </span>
        {product.creditPrice && (
          <span className="text-sm text-gray-600 font-medium">
            Credit Price: R{product.creditPrice}
          </span>
        )}
      </div>
      
      <Button 
        variant="outline"
        className="w-full mt-auto tracking-widest uppercase text-xs"
        onClick={() => window.open(getWhatsAppLink(product.name), "_blank")}
      >
        Order on WhatsApp
      </Button>
    </motion.div>
  );
};
