import { prisma } from "@/lib/prisma";
import ProgramCard from "@/app/components/ui/ProgramCard";
import Link from "next/link";
import { Prisma } from "@prisma/client";
import { FiArrowRight } from "react-icons/fi";

export default async function ProgramsSection() {
const programs = await prisma.program.findMany({
  include: {
    university: true,
  },
  orderBy: {
    createdAt: "desc",
  },
  take: 6,
});

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center max-w-4xl mx-auto mb-16">

          <span className="inline-flex items-center rounded-full bg-red-50 text-red-600 px-5 py-2 text-sm font-semibold mb-5">
            Popular Programs
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">

            Popular Programs for
            <span className="text-red-600">
              {" "}Working Professionals
            </span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            Explore degree programs designed to help professionals
            strengthen business knowledge, build leadership skills,
            and progress into higher-paying roles across the UAE
            and GCC.

          </p>

        </div>

        {/* Quick Categories */}

        <div className="flex flex-wrap justify-center gap-4 mb-14">

          {[
            "MBA",
            "Executive MBA",
            "BBA",
            "BCom",
            "DBA",
            "Executive Education",
          ].map((item) => (
            <span
              key={item}
              className="px-5 py-2 rounded-full bg-white border border-red-100 shadow-sm text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition cursor-pointer"
            >
              {item}
            </span>
          ))}

        </div>

        {/* Cards */}

        {programs.length > 0 ? (

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {programs.map((program) => (

              <ProgramCard
                key={program.id}
                slug={program.slug}
                badge={program.trending ? "Trending" : program.degreeLevel}
                duration={`${program.durationMonths} Months`}
                school={program.university?.name || ""}
                title={program.title}
                price={`${program.currency || "AED"} ${program.tuition}`}
                img={program.heroImage || "/program1.jfif"}
              />

            ))}

          </div>

        ) : (

          <div className="rounded-3xl border border-dashed border-red-200 bg-red-50 p-20 text-center">

            <h3 className="text-2xl font-semibold mb-3">
              Programs Coming Soon
            </h3>

            <p className="text-gray-600">
              Our latest degree programs will appear here shortly.
            </p>

          </div>

        )}

        {/* CTA */}

        <div className="text-center mt-16">

          <Link
            href="/programs"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg"
          >

            View All Programs

            <FiArrowRight />

          </Link>

        </div>

      </div>

    </section>
  );
}