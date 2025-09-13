"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";
import { AnimatedTextBlur } from "./animated-text";

interface CalendlyWidgetProps {
  className?: string;
  showHeader?: boolean;
}

export const CalendlyWidget = ({ className = "", showHeader = true }: CalendlyWidgetProps) => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className={`${className}`}>
      {showHeader && (
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-blue-600" />
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Book a Consultation
            </p>
          </div>
          <AnimatedTextBlur
            text="Let's discuss your project"
            className="text-3xl md:text-4xl font-light tracking-tighter text-black mb-4"
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a free 30-minute consultation to discuss your project requirements and get a custom quote.
          </p>
        </div>
      )}

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-12 h-12 rounded-full border border-white/40 bg-white/30 backdrop-blur-md flex items-center justify-center mx-auto mb-3">
            <Clock className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-medium mb-2">30-Min Free Consultation</h3>
          <p className="text-sm text-gray-600">No commitment, just honest advice</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-12 h-12 rounded-full border border-white/40 bg-white/30 backdrop-blur-md flex items-center justify-center mx-auto mb-3">
            <User className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-medium mb-2">Direct Developer Access</h3>
          <p className="text-sm text-gray-600">Speak directly with Abdelrahman</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-12 h-12 rounded-full border border-white/40 bg-white/30 backdrop-blur-md flex items-center justify-center mx-auto mb-3">
            <Calendar className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-medium mb-2">Flexible Scheduling</h3>
          <p className="text-sm text-gray-600">Choose a time that works for you</p>
        </motion.div>
      </div>

      {/* Calendly Widget */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="border border-white/40 bg-white/30 backdrop-blur-md rounded-2xl p-4 shadow-xl"
      >
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/ashourdrafts"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </motion.div>
    </div>
  );
};