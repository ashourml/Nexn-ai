"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User,  Send, CheckCircle, Calendar, Code2, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { CalendlyWidget } from "./calendly-widget";
import { AnimatedTextBlur } from "./animated-text";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'overview' | 'technical' | 'hire' | 'booking';
}

const technologies = [
  "Next.js 15", "React 19", "TypeScript", "Tailwind CSS", 
  "Framer Motion", "Radix UI", "Lucide Icons"
];

const projectFeatures = [
  "Responsive design for all devices",
  "SEO optimized for search engines", 
  "Fast loading speeds (<3 seconds)",
  "Modern animations and interactions",
  "Custom design tailored to your brand",
  "Content management system"
];

export const LeadModal = ({ isOpen, onClose, defaultTab = 'overview' }: LeadModalProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const subject = `Project Inquiry - ${formData.projectType}`;
      const body = `Name: ${formData.name}%0A` +
                  `Email: ${formData.email}%0A` +
                  `Phone: ${formData.phone}%0A` +
                  `Project Type: ${formData.projectType}%0A` +
                  `Budget: ${formData.budget}%0A` +
                  `Timeline: ${formData.timeline}%0A%0A` +
                  `Message:%0A${formData.message}`;
      
      const mailtoLink = `mailto:abdelrahman.ashour@example.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink);
      
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleScheduleCall = () => {
    window.open('https://calendly.com/abdelrahman-ashour', '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-200/50 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-900">Abdelrahman Ashour</h2>
                <p className="text-sm text-gray-600">Full-Stack Developer</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="rounded-full h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            {[
              { id: 'overview', label: 'Project Overview' },
              { id: 'technical', label: 'Technical Details' },
              { id: 'hire', label: 'Hire Me' },
              { id: 'booking', label: 'Book Call' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
                    Case Study
                  </div>
                  <AnimatedTextBlur
                    text="Nexn-ai Platform"
                    className="text-2xl font-light tracking-tight text-gray-900 mb-2"
                  />
                  <p className="text-gray-600 mb-4">
                    This project showcases a cutting-edge website built with the latest web technologies. 
                    Designed as a modern AI platform with smooth animations and exceptional user experience.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-100 border border-gray-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-gray-900 mb-1">8 weeks</div>
                    <div className="text-sm text-gray-600">Development Time</div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-gray-900 mb-1">98/100</div>
                    <div className="text-sm text-gray-600">Performance Score</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'technical' && (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
                    <Code2 className="w-3 h-3" />
                    Technical Implementation
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Modern Web Development</h3>
                  <p className="text-gray-600 mb-6">
                    Built using the latest technologies and best practices for performance, scalability, and user experience.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Key Features Delivered</h4>
                  <div className="space-y-2">
                    {projectFeatures.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-blue-600" />
                    <h4 className="font-medium text-blue-900">Performance Optimized</h4>
                  </div>
                  <p className="text-sm text-blue-700">
                    Achieved 98/100 Lighthouse score with optimized loading, modern code splitting, and efficient animations.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'hire' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Ready to Start Your Project?</h3>
                  <p className="text-gray-600 mb-6">
                    Let's discuss your requirements and create something amazing together.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-gray-300 focus:border-blue-500"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Select 
                      value={formData.projectType} 
                      onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                    >
                      <SelectTrigger className="border-gray-300 focus:border-blue-500">
                        <SelectValue placeholder="Project Type *" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Website Development</SelectItem>
                        <SelectItem value="webapp">Web Application</SelectItem>
                        <SelectItem value="ecommerce">E-commerce Site</SelectItem>
                        <SelectItem value="redesign">Website Redesign</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select 
                      value={formData.budget} 
                      onValueChange={(value) => setFormData({ ...formData, budget: value })}
                    >
                      <SelectTrigger className="border-gray-300 focus:border-blue-500">
                        <SelectValue placeholder="Budget Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k+">$25,000+</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Textarea
                    placeholder="Tell me about your project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    required
                    className="border-gray-300 focus:border-blue-500"
                  />

                  <div className="flex gap-3">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Inquiry"}
                    </Button>
                    
                    <Button 
                      type="button"
                      onClick={handleScheduleCall}
                      variant="outline"
                      className="flex-1 border-gray-300 rounded-full"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Call
                    </Button>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="text-green-600 text-center text-sm font-medium">
                      ✓ Message sent! I'll respond within 24 hours.
                    </div>
                  )}
                </form>

                <div className="text-center text-xs text-gray-500 pt-4 border-t border-gray-100">
                  ⚡ Response within 24 hours • 🚀 Project starts in 1 week
                </div>
              </div>
            )}

            {activeTab === 'booking' && (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
                    <Calendar className="w-3 h-3" />
                    Schedule Consultation
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Book a Free Consultation</h3>
                  <p className="text-gray-600 mb-6">
                    Schedule a 30-minute call to discuss your project requirements, timeline, and get a custom quote.
                  </p>
                </div>

                <CalendlyWidget showHeader={false} />
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};