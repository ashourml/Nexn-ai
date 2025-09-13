"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedTextBlur } from "./animated-text";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Sparkles, 
  CheckCircle, 
  Calendar,
  MessageCircle
} from "lucide-react";

const projectFeatures = [
  "Responsive design for all devices",
  "SEO optimized for search engines", 
  "Fast loading speeds (<3 seconds)",
  "Modern animations and interactions",
  "Custom design tailored to your brand",
  "Content management system"
];

export const WantWebsiteCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleScheduleCall = () => {
    window.open('https://calendly.com/abdelrahman-ashour', '_blank');
  };

  const handleContactNow = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Custom Web Development
          </motion.div>
          
          <AnimatedTextBlur
            text="Want a Website Like This?"
            className="text-4xl md:text-6xl font-light tracking-tight mb-6"
          />
          
          <AnimatedTextBlur
            text="I'll build you a stunning, high-performance website that converts visitors into customers"
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">What You'll Get:</h3>
            <div className="grid grid-cols-1 gap-3 mb-8">
              {projectFeatures.map((feature, index) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold mb-3">Investment Range</h4>
              <div className="flex items-center gap-4 mb-3">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  Starting at $2,500
                </Badge>
              </div>
              <p className="text-sm text-blue-100">
                Final price depends on complexity. Free consultation included.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Let's discuss your project and create something amazing together.
              </p>
              
              <div className="space-y-4 mb-6">
                <Button 
                  onClick={handleScheduleCall}
                  className="w-full bg-white text-blue-900 hover:bg-blue-50 py-3 text-lg font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </Button>
                
                <Button 
                  onClick={handleContactNow}
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10 py-3 text-lg font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Project Details
                </Button>
              </div>
              
              <p className="text-xs text-blue-200">
                ⚡ Response within 2 hours • 🚀 Project starts in 1 week
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};