"use client";

import { motion } from "framer-motion";
import { AnimatedTextBlur } from "./animated-text";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

const motionProps = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const ApproachSection = () => {
  return (
    <section className="bg-[#f0f0f0] text-black py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-32 h-96 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80"
          >
            <img src="/ear.png" alt="Futuristic device" className="w-full h-full object-contain" />
          </motion.div>
          <div className="relative z-10">
            <AnimatedTextBlur
              text="Invisible Approach"
              className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-blue-600"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_3fr] gap-16 items-end">
          <div className="flex justify-center">
            
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <AnimatedTextBlur text="We're currently in Research & Development phase on two innovative devices that will" className="text-gray-600" />
              <AnimatedTextBlur text="Enhance everyday life." className="text-2xl mt-2" />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-gray-600 mb-4">Explore in depth</p>
              <div className="flex gap-2">
                <motion.div {...motionProps}>
                  <Button className="bg-blue-600 text-white rounded-full hover:bg-blue-700">A¹ Sense</Button>
                </motion.div>
                <motion.div {...motionProps}>
                  <Button variant="outline" className="rounded-full border-gray-400 text-gray-600 hover:bg-gray-200">B¹ Eye</Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};