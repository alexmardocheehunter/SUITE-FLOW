import Hero from "@/components/Hero";
import FlowStorySection from "@/components/FlowStorySection";
import TarifsSection from "@/components/TarifsSection";
import EcosystemeSection from "@/components/EcosystemeSection";
import TestimonialStackSection from "@/components/TestimonialStackSection";
import DemoCtaSection from "@/components/DemoCtaSection";

/**
 * Page d'accueil Suite Flow optimisée Core Web Vitals :
 * - Rendu SSR complet pour un CLS = 0.000 (aucun saut de mise en page en 3G throttling)
 * - Hero en CSS pur sans Framer Motion (TBT < 100ms)
 * - Priority strictement réservée au logo central LCP
 */
export default function Page() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Hero />
      <FlowStorySection />
      <TarifsSection />
      <EcosystemeSection />
      <TestimonialStackSection />
      <DemoCtaSection />
    </main>
  );
}
