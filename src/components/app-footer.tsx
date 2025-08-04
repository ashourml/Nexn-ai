"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  Pages: ["A¹ Sense", "B¹ Eye", "A¹ Neuro", "Programs", "Science"],
  Follow: ["LinkedIn", "X"],
};

const linkAnimation = {
  whileHover: { y: -2 },
  transition: { type: "spring", stiffness: 400, damping: 10 },
} as const;

export const AppFooter = () => {
  return (
    <footer className="bg-black text-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="text-4xl font-bold">
            <motion.a href="#" {...linkAnimation}>Nixn-ai</motion.a>
          </div>
          <div className="grid grid-cols-2 gap-8 col-span-2">
            <div>
              <h3 className="text-gray-500 mb-4">
                <span className="text-xs">1.0</span> Pages
              </h3>
              <ul className="space-y-2 text-lg">
                {footerLinks.Pages.map((link) => (
                  <li key={link}>
                    <motion.a href="#" className="hover:text-blue-500 transition-colors inline-block" {...linkAnimation}>
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-gray-500 mb-4">
                <span className="text-xs">2.0</span> Follow
              </h3>
              <ul className="space-y-2 text-lg">
                {footerLinks.Follow.map((link) => (
                  <li key={link}>
                    <motion.a href="#" className="hover:text-blue-500 transition-colors inline-block" {...linkAnimation}>
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            <span>© 2024 Nixn-ai</span>
          </div>
          <div className="flex gap-8">
            <motion.a href="#" className="hover:text-white" {...linkAnimation}>Privacy Policy</motion.a>
            <motion.a href="#" className="hover:text-white" {...linkAnimation}>Terms of Use</motion.a>
            <motion.a href="#" className="hover:text-white" {...linkAnimation}>Cookie Policy</motion.a>
          </div>
          <div>
            <span>Italy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};