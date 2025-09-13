"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { AnimatedTextBlur } from "./animated-text";
import { Button } from "./ui/button";

const motionProps = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center text-black overflow-hidden bg-white">
      {/* Background Image with fade */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="/model.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
            style={{
              maskImage:
                "linear-gradient(to top, transparent 5%, black 40%)",
              WebkitMaskImage:
                "linear-gradient(to top, transparent 5%, black 40%)",
            }}
          />
        </motion.div>
      </div>

      <div className="relative z-20 container flex flex-col justify-start items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-screen flex flex-col justify-end items-start pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl font-medium tracking-tight mb-2"
          >
            Nixn-ai
          </motion.h1>
          <AnimatedTextBlur
            text="Beyond Humanware."
            className="text-5xl md:text-6xl font-light tracking-tighter text-black"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-12 flex items-center gap-4"
          >
            <span className="text-neutral-500">Explore</span>
            <motion.div {...motionProps}>
              <Button
                variant="outline"
                className="rounded-full border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-600"
              >
                A¹ Sense
              </Button>
            </motion.div>
            <motion.div {...motionProps}>
              <Button
                variant="outline"
                className="rounded-full border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-600"
              >
                B¹ Eye
              </Button>
            </motion.div>
            <motion.div {...motionProps}>
              <Button
                variant="outline"
                className="rounded-full border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-600"
              >
                A¹ Neuro
              </Button>
            </motion.div>

            {/* New glass‑blur CTA */}
            <motion.div {...motionProps}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/30 px-6 py-2 text-sm font-medium text-black backdrop-blur-md transition-colors hover:bg-white/40"
              >
                Connect with Abdelrahman Ashour
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        className="absolute bottom-10 right-4 sm:right-6 lg:right-8"
      >
        <div className="w-8 h-12 rounded-full border border-neutral-300 flex justify-center items-start p-2">
          <ArrowDown className="w-4 h-9 animate-bounce text-neutral-500" />
        </div>
      </motion.div>
    </section>
  );
};