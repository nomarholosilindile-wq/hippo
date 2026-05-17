import { reviews } from "@/data/products";
import { motion } from "motion/react";

export const ReviewSection = () => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="font-serif text-4xl mb-16 text-center text-gray-950">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="text-gold mb-4">{"★".repeat(review.rating)}</div>
            <p className="text-gray-700 mb-6 font-light">"{review.text}"</p>
            <p className="font-semibold text-gray-950">- {review.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
