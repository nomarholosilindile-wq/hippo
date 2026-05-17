import { cn } from "@/lib/utils";
import React from "react";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" | "gold" }
>(({ className, variant = "primary", ...props }, ref) => {
  const base = "px-6 py-3 font-medium transition-all duration-300 rounded-sm";
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-black",
    outline: "border border-gray-900 text-gray-900 hover:bg-gray-100",
    gold: "bg-gold text-white hover:bg-[#B8860B]",
  };
  return (
    <button
      ref={ref}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
});
Button.displayName = "Button";
