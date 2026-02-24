import FeatureCard from "@/components/ui/FeatureCard";
import {
  FiTarget,
  FiUsers,
  FiCheckCircle,
  FiBriefcase,
  FiClock,
  FiAward,
} from "react-icons/fi";

export default function GuidanceSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-2">
          Guidance at Every Step
        </h2>

        <p className="text-gray-500 mb-14">
          We act as your intelligent academic advisor, not just a course catalog
        </p>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-8 text-left">

          <FeatureCard
            icon={<FiTarget />}
            title="Personalized Pathway"
            desc="AI-powered program recommendations based on your career goals, experience, and aspirations."
          />

          <FeatureCard
            icon={<FiUsers />}
            title="Dedicated Advisor"
            desc="Your personal enrollment advisor guides you from inquiry through graduation and beyond."
          />

          <FeatureCard
            icon={<FiCheckCircle />}
            title="Simplified Admissions"
            desc="Step-by-step application support with document review and interview preparation."
          />

          <FeatureCard
            icon={<FiBriefcase />}
            title="Career Services"
            desc="Lifetime access to career counseling, job placement, and professional development resources."
          />

          <FeatureCard
            icon={<FiClock />}
            title="Flexible Learning"
            desc="Study at your own pace with online, hybrid, and on-campus options that fit your schedule."
          />

          <FeatureCard
            icon={<FiAward />}
            title="Quality Assurance"
            desc="All programs are internationally accredited and recognized by employers worldwide."
          />

        </div>
      </div>
    </section>
  );
}
