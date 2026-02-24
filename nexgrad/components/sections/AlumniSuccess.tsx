import TestimonialCard from "@/components/ui/TestimonialCard";

export default function AlumniSuccess() {
  return (
    <section className="w-full py-24 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-2">
          Success Stories from Our Alumni
        </h2>

        <p className="text-gray-500">
          Hear how our graduates transformed their careers and achieved their goals
        </p>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12 text-left">

          <TestimonialCard
            image="/testi1.jfif"
            name="Ahmed Al-Rashid"
            role="Senior Director, Tech Corp"
            quote="The personalized guidance throughout my MBA journey was exceptional. From admission to graduation, I felt supported every step of the way."
            program="Executive MBA Graduate"
            initial="A"
            video
          />

          <TestimonialCard
            name="Sarah Johnson"
            role="VP Operations, Retail Giant"
            quote="The flexibility and academic rigor were perfectly balanced. I could advance my education while excelling in my career."
            program="Global MBA Graduate"
            initial="S"
          />

          <TestimonialCard
            image="/testi2.jfif"
            name="Dr. Raj Patel"
            role="Chief Strategy Officer"
            quote="The DBA program equipped me with research skills and strategic thinking that propelled me to C-suite leadership."
            program="DBA Graduate"
            initial="D"
            video
          />

        </div>

        {/* CTA */}
        <button className="mt-14 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition">
          Join Our Alumni Network →
        </button>

      </div>
    </section>
  );
}
