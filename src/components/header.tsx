"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedSearch } from "./animated-search";
import { useHeaderVisibility } from "@/hooks/use-header-visibility";

const motionProps = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const Header = () => {
  const isVisible = useHeaderVisibility(100);

  return (
    <motion.header
      animate={{ y: isVisible ? 0 : "-110%", opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="mt-4 flex items-center rounded-full bg-neutral-100/80 p-1 backdrop-blur-lg border border-neutral-200/80">
          <div className="flex items-center gap-1">
            <motion.div {...motionProps}>
              <Button variant="ghost" className="text-neutral-700 hover:text-black hover:bg-neutral-200/60 rounded-full">Wearable</Button>
            </motion.div>
            <motion.div {...motionProps}>
              <Button variant="ghost" className="text-neutral-700 hover:text-black hover:bg-neutral-200/60 rounded-full">Neural</Button>
            </motion.div>
            <motion.div {...motionProps}>
              <Button variant="ghost" className="text-neutral-700 hover:text-black hover:bg-neutral-200/60 rounded-full">Programs</Button>
            </motion.div>
            <motion.div {...motionProps}>
              <Button variant="ghost" className="text-neutral-700 hover:text-black hover:bg-neutral-200/60 rounded-full">Science</Button>
            </motion.div>
            <motion.div>
              <AnimatedSearch />
            </motion.div>
          </div>
        </div>
        <motion.div {...motionProps} className="mt-4 flex items-center justify-between rounded-full bg-neutral-100/80 py-2 px-4 backdrop-blur-lg border border-neutral-200/80 text-sm text-neutral-700 cursor-pointer">
          <span>Discover the future in every update</span>
          <div className="ml-3 w-6 h-6 rounded-full border-neutral-300 flex items-center justify-center">
            <ArrowRight className="w-3 h-3" />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};