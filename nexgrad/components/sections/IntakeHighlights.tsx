"use client";
import { useState,useEffect } from "react";
import { FiCalendar, FiUsers, FiTrendingUp, FiGlobe, FiAward } from "react-icons/fi";


export default function IntakeHighlights() {
   const COUNTDOWN_DURATION = 15 * 24 * 60 * 60;
   const [timeLeft, setTimeLeft] = useState(COUNTDOWN_DURATION);

    useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return COUNTDOWN_DURATION; // 🔁 Restart when reaches 0
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  const format = (num: number) => String(num).padStart(2, "0");


  return (
    <section className="w-full bg-[#f6f6f6] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID WRAPPER */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT BIG RED CARD */}
          <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-8 col-span-2 relative overflow-hidden">

            <div className="flex items-center gap-2 text-sm mb-3">
              <FiCalendar />
              NEXT INTAKE
            </div>

            <h3 className="text-3xl font-semibold mb-3">
              Enrollments Open
            </h3>

            <p className="text-white/80 max-w-md mb-6">
              Secure your spot in our upcoming intake. Limited seats available for premium programs.
            </p>

            {/* TIMER */}
            <div className="flex gap-3 mb-6">
               {[
                { label: "Days", value: format(days) },
                { label: "Hours", value: format(hours) },
                { label: "Minutes", value: format(minutes) },
                { label: "Seconds", value: format(seconds) },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/20 px-4 py-3 rounded-lg text-center min-w-[70px]"
                >
                  <p className="text-lg font-semibold">
                    {item.value}
                  </p>
                  <p className="text-xs text-white/80">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <button className="bg-white text-red-600 px-5 py-3 rounded-lg font-medium">
              Apply Now →
            </button>

            {/* DECORATIVE SHAPE */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          </div>

          {/* FACULTY CARD */}
          <div className="
bg-white 
rounded-2xl 
p-6 
shadow-[0_4px_20px_rgba(0,0,0,0.06)]
hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
transition-all 
duration-300
">
            <div className="w-10 h-10 bg-red-50 text-red-600 flex items-center justify-center rounded-lg mb-4">
              <FiUsers />
            </div>

            <h4 className="font-semibold text-lg mb-2">
              World-Class Faculty
            </h4>

            <p className="text-gray-500 text-sm mb-4">
              Learn from 200+ renowned professors and industry experts from top global institutions.
            </p>

            <div className="flex gap-2 mb-3">
              {["F1", "F2", "F3", "F4"].map((f, i) => (
                <div key={i} className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
                  {f}
                </div>
              ))}
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs">
                +
              </div>
            </div>

            <button className="text-red-600 text-sm font-medium">
              Meet Our Faculty →
            </button>
          </div>

        </div>

        {/* LOWER GRID */}
        <div className="grid lg:grid-cols-3 gap-6 mt-6">

          {/* CAREER IMPACT */}
          <div className="bg-white 
rounded-2xl 
p-6 
shadow-[0_4px_20px_rgba(0,0,0,0.06)]
hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
transition-all 
duration-300">
            <div className="w-10 h-10 bg-red-50 text-red-600 flex items-center justify-center rounded-lg mb-4">
              <FiTrendingUp />
            </div>

            <h4 className="font-semibold mb-3">Career Impact</h4>

            <p className="text-red-600 font-semibold">90%</p>
            <p className="text-sm text-gray-500 mb-3">
              Career advancement within 1 year
            </p>

            <p className="text-red-600 font-semibold">45%</p>
            <p className="text-sm text-gray-500">
              Average salary increase
            </p>
          </div>

          {/* STATS CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] 
hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] 
transition-all duration-300 
col-span-2 grid
 grid-cols-3 gap-6">

            <div>
              <FiGlobe className="text-red-600 mb-2" />
              <p className="font-semibold text-lg">50+</p>
              <p className="text-sm text-gray-500">Countries Represented</p>
            </div>

            <div>
              <FiUsers className="text-red-600 mb-2" />
              <p className="font-semibold text-lg">10,000+</p>
              <p className="text-sm text-gray-500">Students Enrolled</p>
            </div>

            <div>
              <FiAward className="text-red-600 mb-2" />
              <p className="font-semibold text-lg">15+</p>
              <p className="text-sm text-gray-500">Years of Excellence</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
