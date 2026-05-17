/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


import { products } from "./data/products";
import { ProductCard } from "./components/ProductCard";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";
import { ReviewSection } from "./components/ReviewSection";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50 p-6 flex justify-between items-center">
        <h1 className="font-serif text-3xl font-bold tracking-tighter">HIPPO PERFUMES</h1>
        <div className="space-x-8 text-xs uppercase tracking-widest hidden md:flex font-medium">
          <a href="#shop" className="hover:text-gold transition-colors">Shop</a>
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-[85vh] flex items-center justify-center bg-gray-50 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center px-4 z-10"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block">New Collection</span>
          <h2 className="font-serif text-6xl md:text-8xl mb-6 text-gray-950">Smell Expensive</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg mx-auto font-light leading-relaxed">Experience the essence of confidence and elegance with every spray.</p>
          <Button variant="gold" className="px-10 py-4 text-base tracking-widest uppercase">Explore Scents</Button>
        </motion.div>
      </header>

      {/* Featured Products */}
      <Section id="shop">
        <h2 className="font-serif text-4xl mb-16 text-center text-gray-950">Curated Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-8">The HIPPO Difference</h2>
          <p className="text-gray-600 leading-relaxed font-light">
            At Hippo Perfumes, we believe luxury should be accessible. Our fragrances are meticulously crafted for those who demand excellence, sophistication, and a lasting impression.
          </p>
        </div>
      </Section>
      
      {/* Reviews */}
      <ReviewSection />

      <Footer />
    </div>
  );
}

