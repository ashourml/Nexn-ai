"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { AnimatedTextBlur } from "./animated-text";
import { Sparkles } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Our Mission",
    description: "Smarter, smaller AI health tools",
  },
  {
    number: "02",
    title: "Our Vision",
    description: "Lead the future of Invisible Computing",
  },
  {
    number: "03",
    title: "Our Ambition",
    description: "Simplify Heads-Up Computing",
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="bg-black text-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1fr_3fr] gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          
        </motion.div>
        
        <div>
          <div className="mb-16">
            <AnimatedTextBlur text="At Nixn-ai" className="text-blue-500" />
            <AnimatedTextBlur text="We make humans better" className="text-2xl" />
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="grid grid-cols-[150px_1fr] items-baseline gap-8 border-b border-gray-800 pb-8"
              >
                <div className="text-gray-400">
                  <p>{feature.number}</p>
                  <p className="font-medium text-white">{feature.title}</p>
                </div>
                <h3 className="text-4xl md:text-5xl font-light tracking-tighter">
                  {feature.description}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};