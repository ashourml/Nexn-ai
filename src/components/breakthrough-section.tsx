"use client";

import { ArrowRight } from "lucide-react";
import { AnimatedTextBlur } from "./animated-text";
import { motion } from "framer-motion";

export const BreakthroughSection = () => {
  return (
    <section className="bg-[#f0f0f0] text-black py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div>
            <AnimatedTextBlur
              text="Overview"
              className="text-sm uppercase tracking-widest text-gray-500"
            />
            <AnimatedTextBlur
              text="Breakthrough"
              className="text-sm uppercase tracking-widest text-gray-500"
            />
          </div>
          <div>
            <AnimatedTextBlur
              text="Nixn-ai is the first to engineer AI-driven, general-purpose computing designed to improve people's life."
              className="text-3xl md:text-4xl leading-tight"
            />
            <motion.a
              href="#"
              className="text-blue-600 mt-8 text-lg flex items-center gap-3 group"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-8 h-8 rounded-full border border-blue-600 flex items-center justify-center transition-colors group-hover:bg-blue-600">
                <ArrowRight className="w-4 h-4 text-blue-600 transition-colors group-hover:text-white" />
              </div>
              <span>Research Insight</span>
            </motion.a>

            {/* New glass‑blur CTA */}
            <a
              href="/case-study.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/30 px-6 py-2 mt-6 text-sm font-medium text-black backdrop-blur-md transition-colors hover:bg-white/40"
            >
              Read Full Case Study
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};