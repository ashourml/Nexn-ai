"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedTextBlur } from "./animated-text";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ProgressSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-black text-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedTextBlur text="Our Progress" className="text-gray-400" />
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
              <h3 className="text-3xl font-light tracking-tight mb-4">The new Method</h3>
              <motion.a 
                href="#" 
                className="text-blue-500 flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-8 h-8 rounded-full border border-blue-500 flex items-center justify-center transition-colors group-hover:bg-blue-500">
                  <ArrowRight className="w-4 h-4 text-blue-500 transition-colors group-hover:text-white" />
                </div>
                <span>Go to Science</span>
              </motion.a>
            </div>
            <div className="text-gray-400 leading-relaxed">
              <h4 className="text-white font-medium mb-4">Where the future is wearable</h4>
              <p>At the intersection of innovation and insight, we redefine human enhancement and experience with next-gen technologies like A¹ Sense, B¹ Eye, and A¹ Neuro. These invisible technologies unlock new dimensions of human potential.</p>
              <p className="mt-4">Through advancements in Invisible Sense, Spatial, and Neural Computing, we aim to elevate your interactions. We transform signals into empowering forces, simplifying interactions, ensuring data precision, and leveraging patented technologies to deliver a seamless, trustworthy journey.</p>
            </div>
            <div className="text-gray-400">
              <span className="text-white">*</span>
              <p>Committed to advancing Wearable & Neural Technologies for the Intelligence Age.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};