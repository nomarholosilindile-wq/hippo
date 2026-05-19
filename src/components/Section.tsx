import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const Section = ({ className, children, id }: { className?: string; children: React.ReactNode; id?: string }) => (
  <motion.section 
    id={id} 
    className={cn("py-20 px-6 max-w-7xl mx-auto", className)}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.section>
);
