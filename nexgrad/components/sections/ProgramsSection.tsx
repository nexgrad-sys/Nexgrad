import { prisma } from "@/app/lib/prisma";
import ProgramCard from "@/components/ui/ProgramCard";
import Link from "next/link";

export default async function ProgramsSection() {
  const programs = await prisma.program.findMany({
    include: {
      university: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 6, // show latest 6 programs
  });

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-3">
          Discover Your Next Degree
        </h2>

        <p className="text-gray-500 mb-12 text-lg">
          Explore our most sought-after programs designed for ambitious professionals
        </p>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-10 mt-6 text-left">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              slug={program.slug}
              badge={program.trending ? "Trending" : program.degreeLevel}
              duration={`${program.durationMonths} months`}
              school={program.university?.name}
              title={program.title}
              price={`${program.currency} ${program.tuition}`}
              img={program?.heroImage || "/program1.jfif"}
            />
          ))}
        </div>

        {/* View All */}
        <div className="mt-16">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 border border-red-600 text-red-600 px-8 py-4 rounded-xl hover:bg-red-600 hover:text-white transition font-medium"
          >
            View All Programs →
          </Link>
        </div>

      </div>
    </section>
  );
}