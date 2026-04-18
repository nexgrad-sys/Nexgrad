"use client";

import {
  Building2,
  Users,
  Heart,
  Sparkles,
  Calendar,
  Camera,
  Dumbbell,
  Trophy,
  Home,
  Coffee,
  ShieldCheck,
  Briefcase,
  Rocket,
  Globe,
  DollarSign,
  BarChart,
  Palette,
  Activity,
  Mic,
} from "lucide-react";

export default function CampusPage() {
  return (
    <div className="bg-[#f7f9fc]">

      {/* HERO */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl font-semibold">
          Campus <span className="text-red-600">Life</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Experience a vibrant academic community where learning extends beyond
          the classroom. Connect, grow, and create lasting memories.
        </p>

        <div className="mt-10 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
            className="w-full h-[450px] object-cover"
          />
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            A Community That Inspires
          </h2>
          <p className="text-gray-600 mb-6">
            Our campus environment is designed to foster collaboration,
            innovation, and personal growth.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            Vibrant Learning Environment
          </h3>

          <p className="text-gray-600 mb-4">
            NexGrad offers a dynamic campus culture blending academic excellence
            with personal development.
          </p>

          <ul className="space-y-3 text-gray-700">
            {[
              "Diverse student body from 50+ countries",
              "Regular networking events",
              "Student-led clubs",
              "Virtual & in-person collaboration",
              "Mentorship programs",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          className="rounded-2xl"
        />
      </section>

      {/* FACILITIES */}
      <section className="py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">World-Class Facilities</h2>
          <p className="text-gray-600">
            Access modern facilities across campuses
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icon: Building2, title: "Modern Classrooms" },
            { icon: Users, title: "Study Lounges" },
            { icon: Heart, title: "Wellness Centers" },
            { icon: Sparkles, title: "Innovation Labs" },
            { icon: Calendar, title: "Event Venues" },
            { icon: Camera, title: "Recreation Areas" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <item.icon className="text-red-600 mb-4" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-2">
                High-quality facilities designed for students
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CLUBS */}
      <section className="py-16 px-6 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Clubs & Societies</h2>
          <p className="text-gray-600">
            Join student-led communities
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            { icon: Briefcase, title: "Business Club" },
            { icon: Rocket, title: "Entrepreneurship" },
            { icon: Globe, title: "Global Affairs" },
            { icon: DollarSign, title: "Finance Society" },
            { icon: BarChart, title: "Marketing Forum" },
            { icon: Palette, title: "Creative Arts" },
            { icon: Activity, title: "Sports & Fitness" },
            { icon: Mic, title: "Public Speaking" },
          ].map((item, i) => (
            <div key={i} className="bg-[#f7f9fc] p-6 rounded-xl text-center">
              <item.icon className="mx-auto text-red-600 mb-4" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-2">
                Student-driven activities
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOSTEL */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
          className="rounded-2xl"
        />

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Hostel & Accommodation
          </h2>
          <p className="text-gray-600 mb-6">
            Comfortable living options for students.
          </p>

          {[
            { icon: Home, title: "Furnished Rooms" },
            { icon: Coffee, title: "Common Areas" },
            { icon: Building2, title: "Campus Locations" },
            { icon: ShieldCheck, title: "24/7 Security" },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 mb-4">
              <item.icon className="text-red-600" />
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-500">
                  Comfortable and secure facilities
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPORTS */}
      <section className="py-16 px-6 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Sports & Recreation</h2>
          <p className="text-gray-600">Stay active and balanced</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-[#f7f9fc] p-6 rounded-xl">
            <Dumbbell className="text-red-600 mb-4" />
            <h3 className="font-semibold">Fitness Facilities</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>• Gym & training</li>
              <li>• Yoga studios</li>
              <li>• Swimming pool</li>
            </ul>
          </div>

          <div className="bg-[#f7f9fc] p-6 rounded-xl">
            <Trophy className="text-red-600 mb-4" />
            <h3 className="font-semibold">Sports Activities</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>• Football & cricket</li>
              <li>• Tennis & badminton</li>
              <li>• Tournaments</li>
            </ul>
          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
          {[
            { value: "15+", label: "Sports Activities" },
            { value: "500+", label: "Active Athletes" },
            { value: "20+", label: "Tournaments" },
          ].map((s, i) => (
            <div key={i} className="bg-[#f7f9fc] p-6 rounded-xl text-center">
              <h3 className="text-3xl text-red-600 font-bold">{s.value}</h3>
              <p className="text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">
            Student Engagement Programs
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            "Peer Mentorship",
            "Leadership Development",
            "Cultural Exchange",
            "Innovation Challenges",
            "Social Responsibility",
            "Social Events",
          ].map((title, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-gray-500 text-sm mt-2">
                Programs to enhance growth
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ENGAGEMENT STATS */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-semibold mb-10">
          Student Engagement
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { value: "50+", label: "Student Clubs" },
            { value: "100+", label: "Annual Events" },
            { value: "85%", label: "Engagement Rate" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-4xl text-red-600 font-bold">
                {item.value}
              </h3>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 px-6 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">Campus Gallery</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <img
              key={i}
              src={`https://picsum.photos/500/300?random=${i}`}
              className="rounded-xl"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white text-center py-16">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Join Our Community?
        </h2>
        <p className="mb-6">
          Become part of a dynamic student body
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-red-600 px-6 py-3 rounded-lg">
            Apply Now
          </button>
          <button className="border px-6 py-3 rounded-lg">
            Explore Programs
          </button>
        </div>
      </section>
    </div>
  );
}