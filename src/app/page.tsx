import { ApproachSection } from "@/components/approach-section";
import { BreakthroughSection } from "@/components/breakthrough-section";
import { FeaturesSection } from "@/components/features-section";
import { AppFooter } from "@/components/app-footer";
import { HeroSection } from "@/components/hero-section";
import { HiringSection } from "@/components/hiring-section";
import { ProgressSection } from "@/components/progress-section";
import { ImpactSection } from "@/components/impact-section";
import { ContactSection } from "@/components/contact-section";
import { FAQSection } from "@/components/faq-section";
import { SocialProof } from "@/components/social-proof";
import { BookingSection } from "@/components/booking-section";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-poppins)]">
      <HeroSection />
      <BreakthroughSection />
      <FeaturesSection />
      <ApproachSection />
      <ProgressSection />
      <ImpactSection />
      <SocialProof />
      <HiringSection />
      <FAQSection />
      <BookingSection />
      <ContactSection />
      <AppFooter />
    </main>
  );
}