"use client";

import { motion } from "framer-motion";
import { Star, Github, Code, Users, Award } from "lucide-react";
import { AnimatedTextBlur } from "./animated-text";

const stats = [
  {
    icon: Github,
    number: "50+",
    label: "Projects Completed",
    description: "Successfully delivered custom web solutions",
    color: "text-green-500"
  },
  {
    icon: Users,
    number: "25+",
    label: "Happy Clients",
    description: "Satisfied customers worldwide",
    color: "text-blue-500"
  },
  {
    icon: Code,
    number: "5+",
    label: "Years Experience",
    description: "Professional development expertise",
    color: "text-purple-500"
  },
  {
    icon: Award,
    number: "98%",
    label: "Client Satisfaction",
    description: "Based on project completion reviews",
    color: "text-yellow-500"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    content: "Abdelrahman delivered an exceptional website that perfectly captured our vision. The attention to detail and modern design exceeded our expectations.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Tech Director",
    content: "Professional, efficient, and incredibly skilled. The website performance and user experience are outstanding. Highly recommend!",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Ahmed Hassan",
    role: "E-commerce Owner",
    content: "The custom e-commerce solution increased our conversion rate by 40%. Amazing work with the latest technologies!",
    rating: 5,
    avatar: "AH"
  }
];

export const SocialProof = () => {
  return (
    <section className="bg-white text-black py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
              <span className="ml-2 text-sm text-gray-600">5.0 out of 5 stars</span>
            </div>
            <AnimatedTextBlur
              text="Trusted by businesses worldwide"
              className="text-4xl md:text-5xl font-light tracking-tighter text-black"
            />
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Join the growing list of satisfied clients who've transformed their digital presence
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full border border-white/40 bg-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl font-light tracking-tight mb-2"
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-lg font-medium mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="border border-white/40 bg-white/30 backdrop-blur-md rounded-2xl p-6"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};