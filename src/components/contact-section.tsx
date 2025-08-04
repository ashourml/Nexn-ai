"use client";

import { ArrowRight } from "lucide-react";
import { AnimatedTextBlur } from "./animated-text";
import { motion } from "framer-motion";

const linkAnimation = {
  whileHover: { x: 5 },
  transition: { type: "spring", stiffness: 400, damping: 10 },
} as const;

export const ContactSection = () => {
  return (
    <section className="bg-[#f0f0f0] text-black py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <AnimatedTextBlur text="2.0" className="text-blue-600 mb-4" />
            <AnimatedTextBlur text="Driven by People" className="text-3xl md:text-4xl font-light tracking-tight mb-4" />
            <AnimatedTextBlur text="We believe technology is only as powerful as the people behind it. Discover the team that makes it possible." className="text-gray-600 mb-8" />
            <motion.a href="#" className="text-blue-600 text-lg flex items-center gap-3 group" {...linkAnimation}>
              <div className="w-8 h-8 rounded-full border border-blue-600 flex items-center justify-center transition-colors group-hover:bg-blue-600">
                <ArrowRight className="w-4 h-4 text-blue-600 transition-colors group-hover:text-white" />
              </div>
              <span>Power Unified</span>
            </motion.a>
          </div>
          <div>
            <AnimatedTextBlur text="3.0" className="text-blue-600 mb-4" />
            <AnimatedTextBlur text="Get in Touch" className="text-3xl md:text-4xl font-light tracking-tight mb-4" />
            <AnimatedTextBlur text="Questions, ideas, or just a hello — we're here. Reach out and let's build something remarkable together." className="text-gray-600 mb-8" />
            <motion.a href="#" className="text-blue-600 text-lg flex items-center gap-3 group" {...linkAnimation}>
              <div className="w-8 h-8 rounded-full border border-blue-600 flex items-center justify-center transition-colors group-hover:bg-blue-600">
                <ArrowRight className="w-4 h-4 text-blue-600 transition-colors group-hover:text-white" />
              </div>
              <span>Say Hello</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};