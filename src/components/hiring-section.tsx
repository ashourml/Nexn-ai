"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { AnimatedTextBlur } from "./animated-text";
import { motion } from "framer-motion";

export const HiringSection = () => {
  return (
    <section className="bg-[#0057FF] text-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_3fr] gap-16 items-center">
          <div className="flex justify-center">
            
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <AnimatedTextBlur text="1.0" className="text-lg" />
              <AnimatedTextBlur
                text="Hardware Engineer"
                className="text-4xl md:text-6xl font-light tracking-tighter mt-2"
              />
            </div>
            <div>
              <AnimatedTextBlur
                text="Help build what's next at Nixn-ai — today, now."
                className="mt-4 text-lg text-white/80"
              />
              <motion.a 
                href="#" 
                className="text-white p-0 mt-8 text-lg flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center transition-transform group-hover:scale-110">
                  <ArrowDown className="w-5 h-5" />
                </div>
                <span>Apply Today</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};