import Link from "next/link";
import {
  FiArrowRight,
  FiPhoneCall,
  FiCheckCircle,
} from "react-icons/fi";

export default function CareerCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-24">

      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -left-40 top-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 w-[420px] h-[420px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-flex bg-white/15 px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">

              START YOUR JOURNEY TODAY

            </span>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-white">

              Ready to
              <br />

              Transform Your Career?

            </h2>

            <p className="mt-8 text-xl leading-9 text-red-100 max-w-2xl">

              Take the next step toward achieving your academic and
              professional ambitions with internationally recognised
              degree programs designed for working professionals.

            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3 text-white">

                <FiCheckCircle className="text-2xl text-white" />

                <span>Personalised University Guidance</span>

              </div>

              <div className="flex items-center gap-3 text-white">

                <FiCheckCircle className="text-2xl text-white" />

                <span>Flexible Online Learning</span>

              </div>

              <div className="flex items-center gap-3 text-white">

                <FiCheckCircle className="text-2xl text-white" />

                <span>Globally Recognised Qualifications</span>

              </div>

              <div className="flex items-center gap-3 text-white">

                <FiCheckCircle className="text-2xl text-white" />

                <span>Dedicated Admission Support</span>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="bg-white rounded-3xl shadow-2xl p-10">

              <h3 className="text-3xl font-bold text-gray-900">

                Speak with a Program Advisor

              </h3>

              <p className="text-gray-600 mt-4 leading-8">

                Our advisors will help you compare universities,
                understand admission requirements, explore tuition
                options and choose the program that best aligns with
                your career goals.

              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">

                <div className="text-center">

                  <h4 className="text-4xl font-bold text-red-600">

                    1000+

                  </h4>

                  <p className="text-gray-500 mt-2">

                    Students Guided

                  </p>

                </div>

                <div className="text-center">

                  <h4 className="text-4xl font-bold text-red-600">

                    50+

                  </h4>

                  <p className="text-gray-500 mt-2">

                    Countries Served

                  </p>

                </div>

              </div>

              <div className="mt-10 space-y-4">

                <Link
                  href="/apply"
                  className="w-full inline-flex justify-center items-center gap-3 bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold transition"
                >

                  Apply Now

                  <FiArrowRight />

                </Link>

                <Link
                  href="/contact"
                  className="w-full inline-flex justify-center items-center gap-3 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-4 rounded-xl font-semibold transition"
                >

                  <FiPhoneCall />

                  Schedule a Free Consultation

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}