/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { vehicles } from "./data/vehicles";
import { VehicleCard } from "./components/VehicleCard";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";
import { ReviewSection } from "./components/ReviewSection";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white">
      {/* Navbar */}
      <nav className="sticky top-0 bg-brand-black/90 backdrop-blur-sm border-b border-white/10 z-50 p-6 flex justify-between items-center">
        <h1 className="font-heading text-3xl font-bold tracking-tighter">CARS PLUG</h1>
        <div className="space-x-8 text-xs uppercase tracking-widest hidden md:flex font-medium">
          <a href="#inventory" className="hover:text-brand-blue transition-colors">Inventory</a>
          <a href="#about" className="hover:text-brand-blue transition-colors">About</a>
          <a href="#contact" className="hover:text-brand-blue transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-[85vh] flex items-center justify-center bg-brand-charcoal overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center px-4 z-10"
        >
          <span className="text-brand-blue uppercase tracking-[0.3em] text-sm mb-4 block">Premium Selection</span>
          <h2 className="font-heading text-6xl md:text-8xl mb-6">Drive Your Dream</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg mx-auto font-light leading-relaxed">Luxury vehicles, affordable deals. The ultimate plug for premium driving.</p>
          <Button variant="gold" className="px-10 py-4 text-base tracking-widest uppercase bg-brand-blue text-white hover:bg-blue-700">Browse Cars</Button>
        </motion.div>
      </header>

      {/* Vehicles */}
      <Section id="inventory">
        <h2 className="font-heading text-4xl mb-16 text-center">Featured Inventory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="bg-brand-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-4xl mb-8">Why Cars Plug?</h2>
          <p className="text-gray-300 leading-relaxed font-light">
            Cars Plug is your premier destination for exceptional vehicles. We curate only the finest, most reliable luxury and premium cars, ensuring every drive you take feels like an accomplishment. Your path to excellence starts here.
          </p>
        </div>
      </Section>
      
      <ReviewSection />

      <Footer />
    </div>
  );
}

