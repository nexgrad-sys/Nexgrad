import { FiArrowRight } from "react-icons/fi";

export default function CareerCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-red-600 text-white py-24">

      {/* DECORATIVE SHAPES */}
      <div className="absolute -left-32 bottom-0 w-96 h-96 bg-white/10 rounded-full" />
      <div className="absolute -right-32 top-0 w-96 h-96 bg-white/10 rounded-full" />

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

        <h2 className="text-4xl font-semibold mb-4">
          Ready to Transform Your Career?
        </h2>

        <p className="text-white/90 mb-10">
          Join thousands of professionals who have advanced their careers through our world-class programs. 
          Your success journey starts here.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium flex items-center gap-2 justify-center">
            Apply Now <FiArrowRight />
          </button>

          <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition">
            Schedule a Call
          </button>

        </div>

      </div>
    </section>
  );
}
