"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

export const AnimatedSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <motion.div
      ref={containerRef}
      onClick={() => !isOpen && setIsOpen(true)}
      className="relative flex items-center justify-center rounded-full cursor-pointer"
      animate={{ width: isOpen ? 200 : "auto" }}
      transition={{ duration: 0.4}}
    >
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="input-wrapper"
            className="w-full h-10 relative bg-neutral-200/60 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-neutral-500" />
            </div>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              className="w-full h-full pl-10 pr-4 bg-transparent text-black placeholder-neutral-500 outline-none"
            />
          </motion.div>
        ) : (
          <motion.div
            key="text-wrapper"
            className="h-10 px-4 flex items-center justify-center hover:bg-neutral-200/60 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-neutral-700 pointer-events-none">
              Search
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};