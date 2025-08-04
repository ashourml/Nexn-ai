"use client";

import { ArrowRight } from "lucide-react";
import { AnimatedTextBlur } from "./animated-text";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-black text-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedTextBlur text="Our Aim" className="text-gray-400" />
        </div>
        <div className="grid md:grid-cols-[1fr_3fr] gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-light tracking-tight mb-4">A Radical Impact for our Life</h3>
              <motion.a 
                href="#" 
                className="text-blue-500 flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-8 h-8 rounded-full border border-blue-500 flex items-center justify-center transition-colors group-hover:bg-blue-500">
                  <ArrowRight className="w-4 h-4 text-blue-500 transition-colors group-hover:text-white" />
                </div>
                <span>Go to Programs</span>
              </motion.a>
            </div>
            <div className="text-gray-400 leading-relaxed">
              <h4 className="text-white font-medium mb-4">The future lies in our hands</h4>
              <p>We aim to create advanced technological devices that are seamlessly integrated with the human body, ensuring stability in their use.</p>
              <p className="mt-4">We always keep the end-users of our products in mind, prioritizing safety, accessibility, and reliability throughout our engineering process.</p>
            </div>
            <div className="text-gray-400">
              <span className="text-white">*</span>
              <p>Envisioning the future with a Pro-Human approach.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};