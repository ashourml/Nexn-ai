"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Share2, Twitter, Linkedin, Link, Check } from "lucide-react";
import { Button } from "./ui/button";

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

const motionProps = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const SocialShare = ({ 
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = "Check out this amazing AI website by Abdelrahman Ashour",
  description = "Professional full-stack developer creating cutting-edge web experiences. See this case study!",
  className = ""
}: SocialShareProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);
  const shareDescription = encodeURIComponent(description);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleShare = (platform: 'twitter' | 'linkedin') => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
    
    // Track sharing event for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'share', {
        method: platform,
        content_type: 'case_study',
        item_id: 'nexn-ai-case-study'
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div {...motionProps}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          size="sm"
          className="rounded-full border-white/40 bg-white/30 text-black backdrop-blur-md hover:bg-white/40"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          className="absolute top-full mt-2 right-0 z-50 bg-white/90 backdrop-blur-md border border-white/40 rounded-2xl p-4 shadow-xl min-w-[200px]"
        >
          <div className="space-y-2">
            <motion.button
              onClick={() => handleShare('twitter')}
              className="w-full flex items-center gap-3 p-2 rounded-full hover:bg-blue-50 transition-colors text-left"
              {...motionProps}
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Twitter className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Share on Twitter</span>
            </motion.button>

            <motion.button
              onClick={() => handleShare('linkedin')}
              className="w-full flex items-center gap-3 p-2 rounded-full hover:bg-blue-50 transition-colors text-left"
              {...motionProps}
            >
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                <Linkedin className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Share on LinkedIn</span>
            </motion.button>

            <motion.button
              onClick={handleCopyLink}
              className="w-full flex items-center gap-3 p-2 rounded-full hover:bg-gray-50 transition-colors text-left"
              {...motionProps}
            >
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                {copied ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <Link className="w-4 h-4 text-white" />
                )}
              </div>
              <span className="text-sm font-medium">
                {copied ? 'Copied!' : 'Copy Link'}
              </span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};