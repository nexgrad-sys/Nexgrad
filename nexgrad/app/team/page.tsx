"use client";

import Image from "next/image";
import {  Mail, Users } from "lucide-react";

export default function TeamPage() {
  const executives = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Founder & CEO",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      desc: "Former Dean at European Business School with 20+ years in executive education. PhD from Oxford.",
    },
    {
      name: "James Rodriguez",
      role: "Chief Academic Officer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      desc: "Expert in curriculum design and accreditation. Led academic partnerships across UK universities.",
    },
    {
      name: "Aisha Al-Mansoori",
      role: "VP Student Success",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      desc: "15+ years in student services and career development with global institutions.",
    },
  ];

  const advisors = [
    { name: "Prof. David Williams", role: "Chair, Advisory Board", org: "Harvard Business School", initial: "P" },
    { name: "Dr. Maria Garcia", role: "Academic Advisor", org: "INSEAD", initial: "D" },
    { name: "Prof. John Smith", role: "Industry Liaison", org: "MIT Sloan", initial: "P" },
    { name: "Dr. Lisa Anderson", role: "Quality Assurance", org: "London Business School", initial: "D" },
    { name: "Prof. Ahmed Hassan", role: "Regional Director", org: "Dubai Business School", initial: "P" },
    { name: "Dr. Sophie Laurent", role: "Research Advisor", org: "HEC Paris", initial: "D" },
    { name: "Prof. Tom Jackson", role: "Curriculum Specialist", org: "Stanford GSB", initial: "P" },
    { name: "Dr. Nina Patel", role: "Student Advocate", org: "Cambridge Judge", initial: "D" },
  ];

  return (
    <div className="bg-white">
      {/* HEADER */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Meet Our <span className="text-red-600">Leadership Team</span>
        </h1>
        <p className="text-gray-500 mt-4">
          Visionary leaders with decades of combined experience in higher education,
          technology, and global business.
        </p>
      </section>

      {/* EXECUTIVE */}
      <section className="px-6">
        <h2 className="text-3xl text-center font-semibold">
          Executive Leadership
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Steering NexGrad's mission to democratize education
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {executives.map((item, i) => (
            <div
              key={i}
              className="bg-[#f7f7f7] rounded-2xl overflow-hidden hover:shadow-md transition"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={500}
                height={350}
                className="w-full h-[260px] object-cover"
              />

              <div className="p-6">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-red-600 text-sm mt-1 font-medium">
                  {item.role}
                </p>

                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>

                {/* SOCIAL */}
                <div className="flex gap-4 mt-4 text-gray-400">
                  <Users size={18} />
                  <Mail size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADVISORY BOARD */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl text-center font-semibold">
          Academic Advisory Board
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Distinguished educators and industry leaders guiding our excellence
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
          {advisors.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl text-center shadow-sm"
            >
              {/* INITIAL AVATAR */}
              <div className="w-16 h-16 mx-auto rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-semibold">
                {item.initial}
              </div>

              <h3 className="mt-4 font-semibold">{item.name}</h3>

              <p className="text-red-600 text-sm mt-1">
                {item.role}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                {item.org}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-red-600 to-red-700 text-white text-center p-12 rounded-3xl">
          <div className="flex justify-center mb-6">
            <Users className="w-10 h-10" />
          </div>

          <h2 className="text-3xl font-semibold">
            Join Our Growing Team
          </h2>

          <p className="mt-4 text-red-100">
            We're always looking for passionate individuals who share our mission.
          </p>

          <button className="mt-6 bg-white text-red-600 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
            View Open Positions →
          </button>
        </div>
      </section>
    </div>
  );
}