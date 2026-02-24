import HeroSection from "@/components/sections/HeroSection";
import IntakeHighlights from "@/components/sections/IntakeHighlights";
import ProgramsSection from "@/components/sections/ProgramsSection";
import AlumniSuccess from "@/components/sections/AlumniSuccess"
import GuidanceSection from "@/components/sections/GuidanceSection";
import CareerCTA from "@/components/sections/CareerCTA";
import AboutSection from "@/components/sections/AboutSection";
import GccInsightsSection from "@/components/sections/GccInsightsSection";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <IntakeHighlights />
      <ProgramsSection />
      <GccInsightsSection />
      <AlumniSuccess />
      <GuidanceSection />
      <CareerCTA />
    </main>
  );
}
