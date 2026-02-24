import ProgramSearchCard from "./ProgramSearchCard";
import { FiAward, FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#1f1f1f] to-[#5a5a5a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-red-500 text-red-500 rounded-full px-4 py-2 text-sm mb-6">
            <FiAward />
            Internationally Accredited Programs
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-semibold leading-tight">
            Your Academic Journey, <br />
            <span className="text-red-500">Guided at Every Step</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 mt-6 max-w-lg">
            Transform your career with globally recognized MBA, DBA, and
            Executive Education programs. We provide personalized guidance
            from inquiry to graduation.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg flex items-center gap-2">
              Start Your Journey <FiArrowRight />
            </button>

            <button className="border border-gray-400 px-6 py-3 rounded-lg">
              Explore Programs
            </button>
          </div>
        </div>

        {/* RIGHT SEARCH CARD */}
        <div className="flex justify-center lg:justify-end">
          <ProgramSearchCard />
        </div>

      </div>
    </section>
  );
}
