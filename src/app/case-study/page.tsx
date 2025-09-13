"use client";

import { motion } from "framer-motion";
import { AnimatedTextBlur } from "@/components/animated-text";

export default function CaseStudyPage() {
  return (
    <main className="bg-white min-h-screen py-24">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glass‑blur heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <AnimatedTextBlur
            text="Case Study: Nixn‑ai Breakthrough"
            className="text-4xl md:text-5xl font-light text-gray-800"
          />
        </motion.div>

        {/* Placeholder content */}
        <div className="prose prose-lg max-w-3xl mx-auto text-gray-700">
          <p>
            This page showcases the detailed case study behind Nixn‑ai’s
            groundbreaking AI‑driven, general‑purpose computing platform.
          </p>
          <h2>Background</h2>
          <p>
            Nixn‑ai aims to enhance human capabilities through invisible
            wearable and neural technologies. The research phase focused on
            integrating AI models directly into compact, low‑power hardware.
          </p>
          <h2>Key Innovations</h2>
          <ul>
            <li>Ultra‑low latency AI inference on edge devices.</li>
            <li>Seamless sensor fusion for real‑time context awareness.</li>
            <li>Modular architecture enabling rapid feature expansion.</li>
          </ul>
          <h2>Results</h2>
          <p>
            Early prototypes demonstrated a 40% reduction in power consumption
            compared to traditional approaches while maintaining state‑of‑the‑art
            performance.
          </p>
          <h2>Next Steps</h2>
          <p>
            Ongoing work includes scaling the platform for mass production,
            expanding the developer ecosystem, and exploring new application
            domains such as healthcare and augmented reality.
          </p>
        </div>
      </section>
    </main>
  );
}