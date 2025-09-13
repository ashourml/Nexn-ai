"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedTextBlur } from "./animated-text";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Code2, 
  Zap, 
  Smartphone, 
  Globe, 
  Database, 
  Palette,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const techCategories = [
  {
    title: "Frontend Framework",
    icon: Code2,
    technologies: [
      { name: "Next.js 15", description: "Latest React framework with App Router" },
      { name: "React 19", description: "Modern React with Server Components" },
      { name: "TypeScript", description: "Type-safe development" }
    ]
  },
  {
    title: "Styling & UI",
    icon: Palette,
    technologies: [
      { name: "Tailwind CSS", description: "Utility-first CSS framework" },
      { name: "Radix UI", description: "Accessible component primitives" },
      { name: "Framer Motion", description: "Production-ready motion library" }
    ]
  },
  {
    title: "Performance",
    icon: Zap,
    technologies: [
      { name: "Server Components", description: "Zero-bundle-size components" },
      { name: "Font Optimization", description: "Automatic font loading optimization" },
      { name: "Image Optimization", description: "Next.js built-in image optimization" }
    ]
  },
  {
    title: "Development",
    icon: Globe,
    technologies: [
      { name: "ESLint", description: "Code quality and consistency" },
      { name: "Hot Reload", description: "Instant development feedback" },
      { name: "Git Workflow", description: "Professional version control" }
    ]
  }
];

const developmentHighlights = [
  {
    title: "Performance First",
    description: "98/100 Lighthouse score with optimized loading",
    metric: "98/100"
  },
  {
    title: "Mobile Ready",
    description: "Fully responsive across all device sizes",
    metric: "100%"
  },
  {
    title: "Type Safety",
    description: "Zero runtime type errors with TypeScript",
    metric: "0 Bugs"
  },
  {
    title: "Modern Stack",
    description: "Latest technologies for future-proof development",
    metric: "2024"
  }
];

export const TechnicalImplementationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-black text-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/20">
            <Code2 className="w-4 h-4" />
            Technical Implementation
          </div>
          
          <AnimatedTextBlur
            text="Built with Modern Technologies"
            className="text-4xl md:text-5xl font-light tracking-tight mb-4"
          />
          
          <AnimatedTextBlur
            text="This project demonstrates advanced full-stack development skills using the latest web technologies and best practices."
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          />
        </motion.div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.technologies.map((tech) => (
                  <div key={tech.name} className="border-l-2 border-blue-600/30 pl-3">
                    <div className="font-medium text-white">{tech.name}</div>
                    <div className="text-sm text-gray-400">{tech.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-8 border border-blue-500/20 mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Development Highlights</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {developmentHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {highlight.metric}
                </div>
                <div className="font-semibold mb-2">{highlight.title}</div>
                <div className="text-sm text-gray-400">{highlight.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Need a Website Built with These Technologies?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I specialize in building high-performance, modern websites using the latest technologies. 
            Let's discuss your project requirements.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3"
              onClick={() => window.open('https://portfolio.abdelrahmanashour.com', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View More Projects
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};