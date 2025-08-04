"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
  stagger?: number;
  once?: boolean;
};

export const AnimatedTextBlur = ({
  text,
  className,
  stagger = 0.01,
  once = true,
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  const defaultAnimations: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.p
      className={cn("font-[family-name:var(--font-poppins)]", className)}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: stagger }}
    >
      {text.split(" ").map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block"
          variants={defaultAnimations}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  );
};