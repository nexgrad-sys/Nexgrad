import Link from "next/link";
import ProgramSearchCard from "./ProgramSearchCard";
import { FiAward, FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#1B1B1B] via-[#2A2A2A] to-[#4A4A4A] text-white">

      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-red-500 bg-red-500/10 text-red-400 px-5 py-2 text-sm font-medium mb-8">
            <FiAward className="text-lg" />
            Internationally Accredited Programs
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">

            Your Academic Journey,
            <br />

            <span className="text-red-500">
              Guided at Every Step
            </span>

          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-300 max-w-2xl">

            Explore flexible online degree programs designed for working
            professionals across the UAE and GCC. Compare universities,
            receive expert admission guidance, and advance your career
            without putting work on hold.

          </p>

          {/* CTA */}

          <div className="flex flex-wrap gap-5 mt-10">

            <Link href="/programs">

              <button className="group bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-semibold flex items-center gap-3 shadow-xl">

                Explore Programs

                <FiArrowRight className="group-hover:translate-x-1 transition" />

              </button>

            </Link>

            <Link href="/apply">

              <button className="border border-white/30 hover:border-red-500 hover:bg-red-500 transition px-8 py-4 rounded-xl font-medium">

                Apply Now

              </button>

            </Link>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-6 mt-14">

            <div>
              <h3 className="text-3xl font-bold text-red-500">
                1000+
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Students Enrolled
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-500">
                50+
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Countries Served
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-500">
                5+
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Years of Excellence
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center lg:justify-end">

          <div className="w-full max-w-md">

            <ProgramSearchCard />

          </div>

        </div>

      </div>

    </section>
  );
}