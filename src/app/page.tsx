import Hero from "@/components/Hero";
import FlowStorySection from "@/components/FlowStorySection";
import TarifsSection from "@/components/TarifsSection";
import EcosystemeSection from "@/components/EcosystemeSection";
import TestimonialStackSection from "@/components/TestimonialStackSection";
import DemoCtaSection from "@/components/DemoCtaSection";

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
