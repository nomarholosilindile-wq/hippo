import { cn } from "@/lib/utils";
import React from "react";

export const Section = ({ className, children, id }: { className?: string; children: React.ReactNode; id?: string }) => (
  <section id={id} className={cn("py-20 px-6 max-w-7xl mx-auto", className)}>
    {children}
  </section>
);
