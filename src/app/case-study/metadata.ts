import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexn-ai Case Study - Modern AI Platform Development | Abdelrahman Ashour",
  description: "Detailed case study of the Nexn-ai platform built with Next.js 15, React 19, TypeScript, and modern web technologies. See how Abdelrahman Ashour creates cutting-edge web applications.",
  keywords: [
    "case study",
    "web development case study", 
    "Next.js case study",
    "React development",
    "TypeScript project",
    "AI platform development",
    "modern web technologies",
    "full-stack development",
    "Nexn-ai",
    "Abdelrahman Ashour",
    "developer portfolio",
    "web development portfolio"
  ],
  authors: [{ name: "Abdelrahman Ashour", url: "https://portfolio.abdelrahmanashour.com" }],
  alternates: {
    canonical: '/case-study'
  },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://nexn-ai.vercel.app/case-study',
    title: 'Nexn-ai Case Study - Modern AI Platform Development',
    description: 'Detailed case study showcasing the development of a modern AI platform using Next.js 15, React 19, TypeScript, and cutting-edge web technologies.',
    siteName: 'Abdelrahman Ashour Portfolio',
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    authors: ['Abdelrahman Ashour'],
    section: 'Technology',
    tags: ['Next.js', 'React', 'TypeScript', 'Web Development', 'Case Study'],
    images: [{
      url: '/case-study-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Nexn-ai Case Study - Modern Web Development'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexn-ai Case Study - Modern AI Platform Development',
    description: 'See how I built a cutting-edge AI platform using Next.js 15, React 19, TypeScript, and modern web technologies.',
    creator: '@AbdelrahmanDev',
    images: ['/case-study-og.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};