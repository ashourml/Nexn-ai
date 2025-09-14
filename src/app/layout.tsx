import type { Metadata } from "next";
import { Geist, Geist_Mono , Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { DeveloperAttribution } from "@/components/developer-attribution";
import { FloatingHireCTA } from "@/components/floating-hire-cta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Abdelrahman Ashour - Full-Stack Developer | Modern Web Development",
    template: "%s | Abdelrahman Ashour - Full-Stack Developer"
  },
  description: "🚀 Transform Your Business with Cutting-Edge Web Development | Experienced full-stack developer specializing in Next.js 15, React 19, TypeScript. See the Nexn-ai case study showcasing modern AI platforms with smooth animations. Available for hire - Get your quote today!",
  keywords: [
    "full-stack developer",
    "Next.js developer", 
    "React developer",
    "TypeScript developer",
    "web development",
    "modern web apps",
    "hire developer",
    "Abdelrahman Ashour",
    "case study",
    "Nexn-ai",
    "AI website development",
    "Tailwind CSS",
    "Framer Motion"
  ],
  authors: [{ name: "Abdelrahman Ashour", url: "https://portfolio.abdelrahmanashour.com" }],
  creator: "Abdelrahman Ashour",
  publisher: "Abdelrahman Ashour",
  metadataBase: new URL('https://nexn-ai.vercel.app'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexn-ai.vercel.app',
    title: 'Abdelrahman Ashour - Full-Stack Developer | Nexn-ai Case Study',
    description: 'Experienced full-stack developer specializing in Next.js, React, TypeScript. View the Nexn-ai case study showcasing cutting-edge web development.',
    siteName: 'Abdelrahman Ashour Portfolio',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Abdelrahman Ashour - Full-Stack Developer Portfolio'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdelrahman Ashour - Full-Stack Developer | Nexn-ai Case Study',
    description: 'Experienced full-stack developer. View the Nexn-ai case study showcasing modern web development with Next.js, React, TypeScript.',
    creator: '@AbdelrahmanDev',
    images: ['/og-image.jpg']
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
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://nexn-ai.vercel.app/#person",
        "name": "Abdelrahman Ashour",
        "jobTitle": "Full-Stack Developer",
        "description": "Experienced full-stack developer specializing in Next.js, React, TypeScript, and modern web development.",
        "url": "https://nexn-ai.vercel.app",
        "sameAs": [
          "https://www.linkedin.com/in/abdelrahman-ashour-9b5a27282/",
          "https://github.com/ashourml",
          "https://ceo.braxni.com"
        ],
        "knowsAbout": [
          "Next.js",
          "React",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Tailwind CSS",
          "Full-Stack Development",
          "Web Development",
          "UI/UX Design"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Full-Stack Developer",
          "occupationLocation": {
            "@type": "Country",
            "name": "Global (Remote)"
          }
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://nexn-ai.vercel.app/#website",
        "url": "https://nexn-ai.vercel.app",
        "name": "Abdelrahman Ashour - Full-Stack Developer Portfolio",
        "description": "Professional portfolio showcasing full-stack development expertise through the Nexn-ai case study.",
        "publisher": {
          "@id": "https://nexn-ai.vercel.app/#person"
        },
        "potentialAction": [{
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://nexn-ai.vercel.app/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }]
      },
      {
        "@type": "CreativeWork",
        "@id": "https://nexn-ai.vercel.app/#casestudy",
        "name": "Nexn-ai Platform Case Study",
        "description": "A comprehensive case study showcasing modern web development with Next.js 15, React 19, TypeScript, and cutting-edge technologies.",
        "creator": {
          "@id": "https://nexn-ai.vercel.app/#person"
        },
        "dateCreated": "2024",
        "keywords": "Next.js, React, TypeScript, Web Development, Case Study, AI Platform",
        "about": [
          "Web Development",
          "Next.js",
          "React",
          "TypeScript",
          "AI Platform Development"
        ]
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://nexn-ai.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Performance and Analytics */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Additional Social Meta */}
        <meta property="og:site_name" content="Abdelrahman Ashour - Developer Portfolio" />
        <meta property="article:author" content="Abdelrahman Ashour" />
        <meta name="twitter:creator" content="@AbdelrahmanDev" />
        <meta name="pinterest-rich-pin" content="true" />
        
        {/* Schema.org for Google+ */}
        <meta itemProp="name" content="Abdelrahman Ashour - Full-Stack Developer" />
        <meta itemProp="description" content="Professional full-stack developer specializing in modern web technologies. View case studies and hire for your next project." />
        <meta itemProp="image" content="https://nexn-ai.vercel.app/og-image.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <DeveloperAttribution />
        <FloatingHireCTA />
        {children}
      </body>
    </html>
  );
}