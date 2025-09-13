"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedTextBlur } from "./animated-text";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Calendar, Clock, Award } from "lucide-react";

const projectStats = [
  { label: "Development Time", value: "8 weeks", icon: Clock },
  { label: "Components Built", value: "25+", icon: Award },
  { label: "Performance Score", value: "98/100", icon: Award },
  { label: "Completed", value: "2024", icon: Calendar },
];

const technologies = [
  "Next.js 15", "React 19", "TypeScript", "Tailwind CSS", 
  "Framer Motion", "Radix UI", "Lucide Icons"
];

export const ProjectOverviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Project Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Case Study
            </div>
            
            <AnimatedTextBlur
              text="Nexn-ai Platform"
              className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4"
            />
            
            <AnimatedTextBlur
              text="A Modern AI-Focused Website"
              className="text-xl text-gray-600 mb-6"
            />
            
            <div className="prose prose-lg text-gray-700 mb-8">
              <p>
                This project showcases a cutting-edge website built with the latest web technologies. 
                Designed as a modern AI platform with smooth animations, responsive design, and 
                exceptional user experience.
              </p>
              <p>
                <strong>Built by Abdelrahman Ashour</strong> - Full-Stack Developer specializing in 
                Next.js, React, and modern web development.
              </p>
            </div>

            {/* Technology Stack */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-white border border-gray-200">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire Me for Similar Project
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-300"
                onClick={() => window.open('https://portfolio.abdelrahmanashour.com', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Portfolio
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Project Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Project Highlights</h4>
              <div className="grid grid-cols-2 gap-6">
                {projectStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features Showcase */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Smooth Framer Motion animations
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Fully responsive design
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  TypeScript for type safety
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Modern UI components
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Optimized performance
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};