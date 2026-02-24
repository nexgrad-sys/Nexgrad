import { FiClock, FiMapPin, FiBookOpen, FiDollarSign } from "react-icons/fi";
import Link from "next/link";

export default function ProgramHero({ program }: any) {
  const formatEnum = (value: string) =>
    value?.replace(/_/g, " ").toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <section className="relative w-full min-h-[560px] flex items-center overflow-hidden">

      {/* DYNAMIC BG IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${program.heroImage || "/program1.jfif"}')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-12 gap-12 text-white w-full py-16">

        {/* LEFT */}
        <div className="col-span-12 lg:col-span-7">

          {/* Dynamic Breadcrumb */}
          <p className="text-sm text-gray-300 mb-4">
            Home / Programs / {program.university?.name} / {program.title}
          </p>

          {/* Dynamic Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-primary px-4 py-1 rounded-full text-sm">
              {program.degreeLevel}
            </span>

            {program.accreditation && (
              <span className="bg-white/15 px-4 py-1 rounded-full text-sm">
                {program.accreditation}
              </span>
            )}

            {program.trending && (
              <span className="bg-white/15 px-4 py-1 rounded-full text-sm">
                🔥 Trending
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            {program.title}
          </h1>

          <p className="max-w-xl text-gray-200 leading-relaxed">
            {program.description}
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

            <Stat icon={<FiClock />} value={program.durationMonths} label="Months" />

            <Stat icon={<FiMapPin />} value={formatEnum(program.mode)} label="Mode" />

            {program.credits && (
              <Stat icon={<FiBookOpen />} value={program.credits} label="Credits" />
            )}

            <Stat
              icon={<FiDollarSign />}
              value={`${program.currency} ${program.tuition?.toLocaleString()}`}
              label="Tuition"
            />

          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="col-span-12 lg:col-span-5 flex justify-start lg:justify-end mt-12 lg:mt-0">

          <div className="bg-white text-black rounded-2xl p-8 w-full max-w-[360px] shadow-2xl">

            <p className="text-gray-500 text-sm mb-4">Offered by</p>

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary text-white font-bold w-14 h-14 rounded-xl flex items-center justify-center text-lg">
                {program.university?.name?.substring(0, 2)}
              </div>

              <div>
                <p className="font-semibold">
                  {program.university?.name}
                </p>
                <p className="text-sm text-gray-500">
                  {program.location || program.university?.region}
                </p>
              </div>
            </div>

            <Link
              href={`/apply?program=${program.id}`}
              className="btn-primary w-full mb-3 text-center block"
            >
              Apply Now
            </Link>

            {program.brochureUrl && (
              <a
                href={program.brochureUrl}
                target="_blank"
                className="w-full border border-primary text-primary rounded-lg py-3 text-center block hover:bg-primary hover:text-white transition"
              >
                Download Brochure
              </a>
            )}

            <div className="border-t my-6" />

            <ul className="space-y-3 text-sm text-gray-600">
              {program.intake && (
                <li>✔ Next intake: {program.intake}</li>
              )}

              {program.scholarships && (
                <li>✔ Scholarships available</li>
              )}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }: any) {
  return (
    <div className="backdrop-blur-md bg-white/10 p-6 rounded-xl">
      <div className="text-primary mb-3">{icon}</div>
      <h3 className="text-xl font-semibold">{value}</h3>
      <p className="text-sm text-gray-300">{label}</p>
    </div>
  );
}