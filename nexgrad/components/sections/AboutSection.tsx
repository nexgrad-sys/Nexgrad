import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            About <span className="text-red-600">NexGrad</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            NexGrad is a leading global higher education platform connecting ambitious
            professionals with world-class MBA and DBA programs from prestigious
            partner universities.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* MISSION */}
          <div className="group bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">

            <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center rounded-lg mb-6 text-xl font-bold">
              M
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed text-[16px]">
              To democratize access to premium higher education and empower
              professionals to transform their careers through world-class
              learning experiences.
            </p>

          </div>

          {/* VISION */}
          <div className="group bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">

            <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center rounded-lg mb-6 text-xl font-bold">
              V
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed text-[16px]">
              To become the most trusted platform for executive education globally,
              bridging the gap between ambition and achievement.
            </p>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-red-700 transition shadow-lg hover:shadow-xl"
          >
            Explore Programs →
          </Link>
        </div>

      </div>

    </section>
  );
}