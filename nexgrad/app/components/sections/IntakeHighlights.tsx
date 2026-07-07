"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiCalendar,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiGlobe,
} from "react-icons/fi";

export default function IntakeHighlights() {
  const COUNTDOWN_DURATION = 15 * 24 * 60 * 60;

  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_DURATION);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) =>
        prev <= 1 ? COUNTDOWN_DURATION : prev - 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const format = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="py-24 bg-[#fafafa]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Intake Card */}

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 via-red-600 to-red-700 text-white shadow-2xl">

          <div className="absolute right-[-100px] top-[-100px] w-72 h-72 rounded-full bg-white/10"></div>

          <div className="grid lg:grid-cols-2 gap-10 p-10 lg:p-16 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-5">

                <FiCalendar />

                NEXT INTAKE

              </div>

              <h2 className="text-4xl font-bold mb-4">

                Admissions Open

              </h2>

              <p className="text-white/90 text-lg max-w-lg leading-8">

                Secure your spot in our upcoming intake.
                Limited seats available for premium programs.

              </p>

              <Link href="/apply">

                <button className="mt-8 bg-white text-red-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition">

                  Apply Now →

                </button>

              </Link>

            </div>

            {/* RIGHT */}

            <div>

              <h3 className="text-xl font-semibold mb-6">

                Countdown To Next Intake

              </h3>

              <div className="grid grid-cols-4 gap-4">

                {[
                  {
                    label: "Days",
                    value: format(days),
                  },
                  {
                    label: "Hours",
                    value: format(hours),
                  },
                  {
                    label: "Minutes",
                    value: format(minutes),
                  },
                  {
                    label: "Seconds",
                    value: format(seconds),
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center border border-white/20"
                  >
                    <div className="text-4xl font-bold">
                      {item.value}
                    </div>

                    <div className="text-sm mt-2 text-white/80">
                      {item.label}
                    </div>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* Career Impact */}

        <div className="mt-16">

          <div className="text-center mb-12">

            <span className="text-red-600 font-semibold uppercase tracking-wide">

              Career Impact

            </span>

            <h2 className="text-4xl font-bold mt-3">

              Why Professionals Choose NexGrad

            </h2>

          </div>

          <div className="grid md:grid-cols-5 gap-6">

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-8 text-center border border-gray-100">

              <FiTrendingUp className="mx-auto text-red-600 text-4xl mb-4" />

              <h3 className="text-4xl font-bold text-red-600">
                90%
              </h3>

              <p className="mt-3 text-gray-600">
                Career advancement within 1 year
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-8 text-center border border-gray-100">

              <FiTrendingUp className="mx-auto text-red-600 text-4xl mb-4" />

              <h3 className="text-4xl font-bold text-red-600">
                45%
              </h3>

              <p className="mt-3 text-gray-600">
                Average salary increase
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-8 text-center border border-gray-100">

              <FiGlobe className="mx-auto text-red-600 text-4xl mb-4" />

              <h3 className="text-4xl font-bold text-red-600">
                50+
              </h3>

              <p className="mt-3 text-gray-600">
                Countries Represented
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-8 text-center border border-gray-100">

              <FiUsers className="mx-auto text-red-600 text-4xl mb-4" />

              <h3 className="text-4xl font-bold text-red-600">
                1000+
              </h3>

              <p className="mt-3 text-gray-600">
                Students Enrolled
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-8 text-center border border-gray-100">

              <FiAward className="mx-auto text-red-600 text-4xl mb-4" />

              <h3 className="text-4xl font-bold text-red-600">
                5+
              </h3>

              <p className="mt-3 text-gray-600">
                Years of Excellence
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}