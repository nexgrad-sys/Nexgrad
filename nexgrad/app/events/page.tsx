import React from "react";
import {
  Calendar,
  Mic,
  Briefcase,
  Trophy,
  Users,
  Award,
  TrendingUp,
  MapPin,
  Image as ImageIcon,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function EventsPage() {
  return (
    <div className="bg-white text-slate-800 font-sans min-h-screen relative pb-20">
      
      {/* 1. HERO & STATS SECTION */}
      <section className="pt-20 pb-16 px-6 max-w-6xl mx-auto text-center">
        {/* Top Pill */}
        <div className="inline-flex items-center gap-2 border border-[#E11D48] text-[#E11D48] px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <Calendar size={16} />
          Year-Round Engagement
        </div>

        <h1 className="text-5xl font-bold mb-4 text-slate-800">
          Events & <span className="text-[#E11D48]">Activities</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Engage with a vibrant community through conferences, workshops,
          competitions, and networking events
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: <Mic size={28} />, title: "Conferences", count: "12 events" },
            { icon: <Briefcase size={28} />, title: "Workshops", count: "24 events" },
            { icon: <Trophy size={28} />, title: "Competitions", count: "8 events" },
            { icon: <Users size={28} />, title: "Networking", count: "18 events" },
            { icon: <Award size={28} />, title: "Guest Lectures", count: "36 events" },
            { icon: <TrendingUp size={28} />, title: "Cultural Events", count: "15 events" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50/50 border border-gray-100 p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center transition-transform hover:-translate-y-1"
            >
              <div className="text-[#E11D48] mb-4">{item.icon}</div>
              <h3 className="font-semibold text-slate-800 text-sm mb-1">{item.title}</h3>
              <p className="text-gray-500 text-xs">{item.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. UPCOMING EVENTS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-slate-800 mb-3">
            Upcoming Events
          </h2>
          <p className="text-gray-500">
            Mark your calendar for these exciting opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              badge: "Conference",
              image: null, // Renders placeholder
              title: "Global Leadership Summit 2026",
              desc: "Join global thought leaders and industry experts for three days of inspiring keynotes, panel discussions, and networking.",
              date: "March 15-17, 2026",
              location: "Dubai World Trade Centre",
              attendees: "500 expected attendees",
            },
            {
              badge: "Competition",
              image: null,
              title: "Business Case Competition",
              desc: "Test your strategic thinking and problem-solving skills in our annual business case competition with prizes worth AED 50,000.",
              date: "April 5, 2026",
              location: "NexGrad Campus, Abu Dhabi",
              attendees: "150 expected attendees",
            },
            {
              badge: "Workshop",
              image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80",
              title: "Digital Transformation Workshop",
              desc: "Hands-on workshop on implementing digital transformation strategies in modern organizations.",
              date: "April 20, 2026",
              location: "Virtual Event",
              attendees: "300 expected attendees",
            },
            {
              badge: "Networking",
              image: null,
              title: "Alumni Networking Gala",
              desc: "Exclusive evening with alumni, faculty, and industry leaders. Formal attire required.",
              date: "May 10, 2026",
              location: "Burj Al Arab, Dubai",
              attendees: "400 expected attendees",
            },
          ].map((event, idx) => (
            <div
              key={idx}
              className="bg-gray-50/50 border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gray-200 flex items-center justify-center">
                <div className="absolute top-4 left-4 bg-[#E11D48] text-white px-3 py-1 rounded text-sm font-medium z-10">
                  {event.badge}
                </div>
                {event.image ? (
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                ) : (
                  <ImageIcon className="text-gray-400" size={64} strokeWidth={1} />
                )}
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow bg-white">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{event.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">
                  {event.desc}
                </p>

                <div className="space-y-3 mb-8 mt-auto">
                  <div className="flex items-center text-sm text-gray-500 gap-3">
                    <Calendar size={18} className="text-[#E11D48] shrink-0" /> {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 gap-3">
                    <MapPin size={18} className="text-[#E11D48] shrink-0" /> {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 gap-3">
                    <Users size={18} className="text-[#E11D48] shrink-0" /> {event.attendees}
                  </div>
                </div>

                <button className="w-full bg-[#E11D48] hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ANNUAL EVENTS */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-800 mb-3">
              Annual Events
            </h2>
            <p className="text-gray-500">
              Signature events that define our academic calendar
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                month: "February",
                title: "NexGrad Business Festival",
                desc: "Week-long celebration of business innovation, entrepreneurship, and leadership with guest speakers, competitions, and exhibitions.",
              },
              {
                month: "May",
                title: "Global Alumni Meet",
                desc: "Annual gathering of NexGrad alumni from around the world for networking, knowledge sharing, and celebrating success stories.",
              },
              {
                month: "September",
                title: "Career Fair & Recruitment Drive",
                desc: "Meet leading employers, explore career opportunities, and participate in on-spot interviews with Fortune 500 companies.",
              },
              {
                month: "November",
                title: "Research Symposium",
                desc: "Academic conference showcasing groundbreaking research by faculty and doctoral students, with international peer review.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="bg-red-50 text-[#E11D48] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shrink-0">
                  <Calendar size={24} />
                </div>
                <p className="text-[#E11D48] font-semibold text-sm mb-2">{item.month}</p>
                <h3 className="font-semibold text-xl text-slate-800 mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EVENT HIGHLIGHTS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-slate-800 mb-3">
            Event Highlights
          </h2>
          <p className="text-gray-500">
            Memorable moments from our recent events
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { date: "January 2026", title: "CEO Panel Discussion", attendees: "350" },
            { date: "December 2025", title: "Startup Pitch Competition", attendees: "200" },
            { date: "November 2025", title: "Cultural Festival", attendees: "600" },
            { date: "October 2025", title: "Tech Innovation Summit", attendees: "450" },
            { date: "September 2025", title: "Women in Leadership", attendees: "300" },
            { date: "August 2025", title: "Global Case Challenge", attendees: "250" },
          ].map((item, idx) => (
            <div key={idx} className="relative h-72 rounded-2xl overflow-hidden group">
              {/* Placeholder Background mimicking screenshot */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <ImageIcon className="text-gray-400 opacity-50" size={64} strokeWidth={1} />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                <p className="text-sm text-gray-300 mb-1">{item.date}</p>
                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Users size={16} /> {item.attendees} attendees
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DEEP DIVE CARDS (Workshops & Lectures) */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Workshops */}
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
            <div className="text-[#E11D48] mb-6">
              <Briefcase size={36} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Professional Workshops
            </h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Hands-on training sessions covering the latest industry trends, tools, and methodologies. Led by experienced practitioners and certified trainers.
            </p>
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Data Analytics & Business Intelligence",
                "Project Management Masterclass",
                "Financial Modeling & Valuation",
                "Digital Marketing Strategy",
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mr-4 shrink-0"></span>
                  {bullet}
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center gap-2 text-[#E11D48] font-medium hover:underline">
              View Workshop Calendar <ArrowRight size={18} />
            </a>
          </div>

          {/* Guest Lectures */}
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
            <div className="text-[#E11D48] mb-6">
              <Mic size={36} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Guest Lecture Series
            </h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Learn from industry leaders, successful entrepreneurs, and academic thought leaders who share their insights and experiences.
            </p>
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "C-Level Executives from Fortune 500",
                "Successful Startup Founders",
                "Leading Academic Researchers",
                "Government Policy Makers",
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mr-4 shrink-0"></span>
                  {bullet}
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center gap-2 text-[#E11D48] font-medium hover:underline">
              View Upcoming Lectures <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 6. NEWSLETTER CTA */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-[#E11D48] rounded-3xl p-12 text-center text-white shadow-lg">
          <h2 className="text-4xl font-semibold mb-4">Never Miss an Event</h2>
          <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">
            Subscribe to our events calendar and get notified about upcoming workshops,
            conferences, and networking opportunities
          </p>
          
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-transparent border border-white/50 text-white placeholder:text-white/70 px-6 py-4 rounded-xl focus:outline-none focus:border-white transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-white text-[#E11D48] px-10 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* FLOATING CHAT BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#10B981] hover:bg-[#059669] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105">
          <MessageCircle size={28} />
        </button>
      </div>
      
    </div>
  );
}