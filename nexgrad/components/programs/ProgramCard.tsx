import Image from "next/image";
import Link from "next/link";

export default function ProgramCard({ program }: any) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition border border-gray-100">

      <div className="flex gap-6">

        {/* IMAGE */}
        <div className="relative w-[240px] h-[160px] overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={program.image || "/program1.jfif"}
            alt={program.title}
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />

          {/* REGION BADGE */}
          <div className="absolute bottom-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded">
            {program.university?.region}
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1">

          {/* UNIVERSITY */}
          <p className="text-sm text-gray-400 mb-1">
            {program.university?.name}
          </p>

          {/* TITLE */}
          <h3 className="text-xl font-semibold mb-2">
            {program.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">
            {program.description}
          </p>

          {/* DETAILS */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-4">
            <span>
              Duration: {program.durationMonths} months
            </span>

            <span>
              Mode: {program.mode?.replace("_", " ")}
            </span>

            {program.credits && (
              <span>
                Credits: {program.credits} ECTS
              </span>
            )}

            <span>
              Tuition: {program.currency} {program.tuition?.toLocaleString()}
            </span>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-4">
            <Link
              href={`/programs/${program.slug}`}
              className="btn-primary"
            >
              View Details →
            </Link>

            <Link
              href={`/apply?program=${program.id}`}
              className="btn-outline"
            >
              Apply Now
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}