"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { LeadModal } from "./lead-modal";

export const FloatingHireCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 800); // Show after scrolling past hero
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="fixed bottom-6 right-6 z-40 rounded-full border border-white/40 bg-white/30 backdrop-blur-md px-4 py-3 text-sm font-medium text-black shadow-lg transition-colors hover:bg-white/40"
          >
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Hire Developer</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
      
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultTab="hire"
      />
    </>
  );
};