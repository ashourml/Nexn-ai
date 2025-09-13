"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedTextBlur } from "@/components/animated-text";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadModal } from "@/components/lead-modal";
import { SocialShare } from "@/components/social-share";
// import { metadata } from "./metadata";

// Export metadata for this page
// export { metadata };

const motionProps = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export default function CaseStudyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Structured data for this specific case study
  const caseStudyStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Nexn-ai Platform Case Study - Modern AI Website Development",
    "description": "Comprehensive case study showcasing the development of a modern AI platform using Next.js 15, React 19, TypeScript, and cutting-edge web technologies.",
    "author": {
      "@type": "Person",
      "name": "Abdelrahman Ashour",
      "url": "https://ceo.braxni.com",
      "jobTitle": "CEO/Founder at Braxni , Full-Stack Developer"
    },
    "publisher": {
      "@type": "Person",
      "name": "Abdelrahman Ashour"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nexn-ai.vercel.app/case-study"
    },
    "image": "https://nexn-ai.vercel.app/case-study-og.jpg",
    "articleSection": "Technology",
    "keywords": "Next.js, React, TypeScript, Web Development, Case Study, AI Platform",
    "about": [
      {
        "@type": "Thing",
        "name": "Web Development"
      },
      {
        "@type": "Thing", 
        "name": "Next.js"
      },
      {
        "@type": "Thing",
        "name": "AI Platform Development"
      }
    ]
  };
  
  return (
    <>
      {/* Structured Data for Case Study */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyStructuredData) }}
      />
      
      <article className="font-[family-name:var(--font-poppins)]">
        {/* Header Section */}
        <header className="bg-white text-black py-24 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Return to homepage"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    <span>Back to Main</span>
                  </a>
                </motion.div>
              </nav>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mb-16"
              >
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                  Case Study
                </p>
                <h1 className="text-5xl md:text-6xl font-light tracking-tighter text-black mb-6">
                  Nexn-ai Platform
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A comprehensive look at building a modern AI-focused website with cutting-edge web technologies.
                </p>
              </motion.div>

              {/* Developer Attribution with Social Share */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/30 px-6 py-2 text-sm font-medium text-black backdrop-blur-md transition-colors hover:bg-white/40"
                    {...motionProps}
                    aria-label="Contact Abdelrahman Ashour for development services"
                  >
                    Built by Abdelrahman Ashour - Hire Developer
                  </motion.button>
                  
                  <SocialShare 
                    title="Amazing AI Website by Abdelrahman Ashour - Full-Stack Developer"
                    description="Check out this incredible case study showcasing modern web development with Next.js 15, React 19, and cutting-edge technologies. Available for hire!"
                  />
                  
                  <motion.a
                    href="https://calendly.com/ashourdrafts/30min"
                    className="inline-flex items-center justify-center rounded-full border border-blue-500 bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                    {...motionProps}
                  >
                    Book Consultation
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </header>

        {/* Project Overview Section */}
        <section className="bg-[#f0f0f0] text-black py-24 sm:py-32" aria-labelledby="overview-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  Overview
                </p>
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  Development Approach
                </p>
              </div>
              <div>
                <h2 id="overview-heading" className="text-3xl md:text-4xl leading-tight mb-8">
                  This project showcases a cutting-edge website built with the latest web technologies. Designed as a modern AI platform with smooth animations and exceptional user experience.
                </h2>
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="text-blue-600 text-lg flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-label="View detailed project information"
                >
                  <div className="w-8 h-8 rounded-full border border-blue-600 flex items-center justify-center transition-colors group-hover:bg-blue-600" aria-hidden="true">
                    <ArrowRight className="w-4 h-4 text-blue-600 transition-colors group-hover:text-white" />
                  </div>
                  <span>Project Details</span>
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Implementation Section */}
        <section className="bg-black text-white py-24 sm:py-32" aria-labelledby="technical-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-[1fr_3fr] gap-16">
              <div className="flex justify-center" aria-hidden="true">
                
              </div>
              <div>
                <header className="mb-16">
                  <p className="text-blue-500">Technical Stack</p>
                  <h2 id="technical-heading" className="text-2xl">Modern web technologies</h2>
                </header>
                <div className="space-y-12">
                  <div className="grid grid-cols-[150px_1fr] items-baseline gap-8 border-b border-gray-800 pb-8">
                    <div className="text-gray-400">
                      <p>01</p>
                      <p className="font-medium text-white">Frontend</p>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-light tracking-tighter">
                      Next.js 15 with React 19
                    </h3>
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-baseline gap-8 border-b border-gray-800 pb-8">
                    <div className="text-gray-400">
                      <p>02</p>
                      <p className="font-medium text-white">Styling</p>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-light tracking-tighter">
                      Tailwind CSS & Framer Motion
                    </h3>
                  </div>
                  <div className="grid grid-cols-[150px_1fr] items-baseline gap-8 border-b border-gray-800 pb-8">
                    <div className="text-gray-400">
                      <p>03</p>
                      <p className="font-medium text-white">Type Safety</p>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-light tracking-tighter">
                      TypeScript & Radix UI
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
      
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultTab="overview"
      />
    </>
  );
}