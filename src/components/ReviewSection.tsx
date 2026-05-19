import { reviews } from "@/data/products";
import { motion } from "motion/react";

export const ReviewSection = () => (
  <section className="py-20 px-6 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <h2 className="font-heading text-4xl mb-16 text-center text-gray-950">Cars Customer Reviews</h2>
      
      <motion.div
        className="flex gap-8"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <motion.div
            key={`${review.id}-${index}`}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex-shrink-0 w-80"
          >
            <div className="mb-4 text-gold">
              {"★".repeat(review.rating)}
            </div>
            <p className="text-gray-700 mb-6 font-light">"{review.text}"</p>
            <p className="font-semibold text-gray-950">- {review.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
