import HeroSection from "@/app/components/sections/HeroSection";
import IntakeHighlights from "@/app/components/sections/IntakeHighlights";
import ProgramsSection from "@/app/components/sections/ProgramsSection";
import AlumniSuccess from "@/app/components/sections/AlumniSuccess";
import GuidanceSection from "@/app/components/sections/GuidanceSection";
import CareerCTA from "@/app/components/sections/CareerCTA";
import AboutSection from "@/app/components/sections/AboutSection";
import GccInsightsSection from "@/app/components/sections/GccInsightsSection";
export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <AboutSection /> */}
      <IntakeHighlights />
      <ProgramsSection />
      <GccInsightsSection />
      <AlumniSuccess />
      <GuidanceSection />
      <CareerCTA />
    </main>
  );
}
