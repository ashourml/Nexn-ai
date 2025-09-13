"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, Mail } from "lucide-react";

const motionProps = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const DeveloperAttribution = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-4 left-10 transform -translate-x-1/2 z-50  "
    >
      <div className="flex items-center gap-3 rounded-full border border-white/40 bg-white/30 backdrop-blur-md px-4 py-2 text-sm font-medium text-black">
        <Code className="w-3 h-3 text-blue-600" />
        <span>Built by <strong>Abdelrahman Ashour</strong></span>
        
        <div className="h-3 w-px bg-gray-400/50" />
        
        <motion.button
          {...motionProps}
          onClick={() => window.open('mailto:abdelrahman.ashour@example.com', '_blank')}
          className="text-blue-600 hover:text-blue-700 transition-colors"
        >
          <Mail className="w-3 h-3" />
        </motion.button>
        
        <motion.button
          {...motionProps}
          onClick={() => window.open('https://portfolio.abdelrahmanashour.com', '_blank')}
          className="text-gray-600 hover:text-gray-700 transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
        </motion.button>
      </div>
    </motion.div>
  );
};