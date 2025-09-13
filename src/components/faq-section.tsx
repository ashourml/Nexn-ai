"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { AnimatedTextBlur } from "./animated-text";

const faqs = [
  {
    question: "How much does a website like this cost?",
    answer: "Custom websites like this typically range from $3,000-$15,000 depending on complexity, features, and timeline. I provide detailed quotes based on your specific requirements during our consultation.",
    category: "pricing"
  },
  {
    question: "How long does it take to build a modern website?",
    answer: "A professional website usually takes 2-6 weeks from start to finish. This includes design, development, testing, and deployment. Timeline depends on project scope and feedback cycles.",
    category: "timeline"
  },
  {
    question: "What technologies do you use for modern web development?",
    answer: "I specialize in Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion. These cutting-edge technologies ensure your website is fast, scalable, and future-proof.",
    category: "technical"
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes! I offer maintenance packages that include updates, security patches, performance monitoring, and content updates to keep your website running smoothly.",
    category: "support"
  },
  {
    question: "Can you help with SEO and marketing for my website?",
    answer: "Absolutely! All my websites include comprehensive SEO optimization, structured data, social media integration, and performance optimization to help you rank higher and get discovered.",
    category: "marketing"
  },
  {
    question: "What makes your websites different from template-based solutions?",
    answer: "Every website I build is custom-coded from scratch, optimized for your specific business needs, and built with the latest technologies. No templates, no limitations - just pure performance and unique design.",
    category: "approach"
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Generate FAQ structured data for rich snippets
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      
      <section className="bg-[#f0f0f0] text-black py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-blue-600" />
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  Frequently Asked Questions
                </p>
              </div>
              <AnimatedTextBlur
                text="Everything you need to know"
                className="text-4xl md:text-5xl font-light tracking-tighter text-black"
              />
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Get answers to common questions about working with a professional developer
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-white/40 bg-white/30 backdrop-blur-md rounded-2xl overflow-hidden"
                >
                  <motion.button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/40 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <h3 className="text-lg font-medium text-black pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-600 mb-4">
                Still have questions? Let's discuss your project!
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <motion.a
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-full border border-blue-500 bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Free Consultation
                </motion.a>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/30 px-8 py-3 text-black font-medium backdrop-blur-md hover:bg-white/40 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </>
  );
};