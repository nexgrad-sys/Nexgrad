import React from "react";
import {
  Award,
  ArrowRight,
  Clock,
  BookOpen,
  Users,
  TrendingUp,
  Briefcase,
  Target,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export default function ExecutiveEducationPage() {
  return (
    <div className="bg-white text-slate-800 font-sans min-h-screen relative pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 px-6 max-w-6xl mx-auto w-full">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 border border-[#E11D48] text-[#E11D48] bg-[#E11D48]/10 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Award size={16} />
            Premium Executive Programs
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white max-w-4xl leading-tight">
            Executive Education for <br />
            <span className="text-[#E11D48]">Transformative Leadership</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-2xl mb-10 leading-relaxed">
            Short-term, high-impact programs designed for senior executives, emerging leaders, and
            organizations seeking to upskill their workforce with cutting-edge business knowledge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#E11D48] hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-medium transition-colors">
              View Programs <ArrowRight size={20} />
            </button>
            <button className="flex items-center justify-center bg-white hover:bg-gray-100 text-slate-900 px-8 py-3.5 rounded-lg font-medium transition-colors">
              Request Information
            </button>
          </div>
        </div>
      </section>

      {/* 2. DESIGNED FOR BUSY EXECUTIVES */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-semibold text-slate-800 mb-6">
              Designed for Busy Executives
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Our executive education programs are tailored for working professionals
              who need immediate, practical skills without the time commitment of a
              full degree program.
            </p>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Ranging from intensive weekend workshops to 6-month certificate
              programs, each offering delivers cutting-edge business knowledge that
              can be applied immediately in your organization.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2-6", label: "Months Duration" },
                { value: "100+", label: "Program Topics" },
                { value: "95%", label: "Satisfaction Rate" },
                { value: "60+", label: "Expert Faculty" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#E11D48] mb-1">{stat.value}</h3>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
              alt="Busy executive planning"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. PROGRAM STRUCTURE */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-800 mb-4">
              Program Structure
            </h2>
            <p className="text-gray-500">
              Flexible formats designed to fit your schedule and learning objectives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock size={32} strokeWidth={2} />,
                title: "Short Courses",
                desc: "Intensive 2-5 day workshops on focused topics. Perfect for quick skill development.",
                duration: "2-5 days",
                cert: "Certificate of Completion",
              },
              {
                icon: <BookOpen size={32} strokeWidth={2} />,
                title: "Certificate Programs",
                desc: "Comprehensive 3-6 month programs with in-depth coverage of specialized areas.",
                duration: "3-6 months",
                cert: "Professional Certificate",
              },
              {
                icon: <Award size={32} strokeWidth={2} />,
                title: "Custom Programs",
                desc: "Tailored programs designed specifically for your organization's unique needs.",
                duration: "Flexible",
                cert: "Custom Certification",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                <div className="text-[#E11D48] mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-gray-500 mb-8 flex-grow">{item.desc}</p>
                
                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <Clock size={16} /> {item.duration}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <Award size={16} /> {item.cert}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO SHOULD ATTEND */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-slate-800 mb-4">
            Who Should Attend?
          </h2>
          <p className="text-gray-500">
            Our executive programs are designed for professionals at various career stages
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: <Users size={28} strokeWidth={1.5} />,
              title: "C-Suite Executives",
              desc: "CEOs, CFOs, COOs seeking strategic insights",
            },
            {
              icon: <TrendingUp size={28} strokeWidth={1.5} />,
              title: "Senior Managers",
              desc: "Directors and VPs preparing for executive roles",
            },
            {
              icon: <Briefcase size={28} strokeWidth={1.5} />,
              title: "Entrepreneurs",
              desc: "Business owners scaling their ventures",
            },
            {
              icon: <Target size={28} strokeWidth={1.5} />,
              title: "Emerging Leaders",
              desc: "High-potential managers on leadership track",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-red-50 text-[#E11D48] p-4 rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="font-semibold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED TOPICS */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-800 mb-4">
              Featured Topics
            </h2>
            <p className="text-gray-500">
              Explore cutting-edge subjects relevant to today's business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Strategic Leadership", desc: "Develop visionary leadership skills", isRed: false },
              { title: "Digital Transformation", desc: "Lead organizational change in digital era", isRed: false },
              { title: "Financial Strategy", desc: "Master financial decision-making", isRed: false },
              { title: "Innovation Management", desc: "Drive innovation and creativity", isRed: false },
              { title: "Global Business", desc: "Navigate international markets", isRed: true }, // Highlighted in screenshot
              { title: "Sustainable Business", desc: "Build responsible enterprises", isRed: false },
              { title: "Data Analytics", desc: "Make data-driven decisions", isRed: false },
              { title: "Change Management", desc: "Lead transformation effectively", isRed: false },
              { title: "Negotiation Skills", desc: "Master high-stakes negotiations", isRed: false },
            ].map((topic, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className={`font-semibold mb-2 ${topic.isRed ? 'text-[#E11D48]' : 'text-slate-800'}`}>
                  {topic.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6">{topic.desc}</p>
                <a href="#" className="flex items-center gap-1 text-[#E11D48] font-medium text-sm hover:underline">
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CORPORATE SOLUTIONS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
              alt="Corporate solutions high five"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-slate-800 mb-6">
              Corporate Solutions
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Transform your entire organization with customized executive education
              programs tailored to your specific business challenges and goals.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  title: "Customized Curriculum",
                  desc: "Programs tailored to your industry, challenges, and organizational goals",
                },
                {
                  title: "On-Site Delivery",
                  desc: "Bring world-class education directly to your organization",
                },
                {
                  title: "Flexible Scheduling",
                  desc: "Minimize disruption with programs designed around your business cycle",
                },
                {
                  title: "Measurable ROI",
                  desc: "Track performance improvements and business impact",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle className="text-[#E11D48] shrink-0 mt-0.5" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 bg-[#E11D48] hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-medium transition-colors">
              Explore Corporate Solutions <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="bg-[#E11D48] text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">Ready to Elevate Your Leadership?</h2>
          <p className="text-red-100 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Explore our executive education programs and take the next step in your leadership journey
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-white text-[#E11D48] px-8 py-3.5 rounded-lg font-medium transition-colors hover:bg-gray-50">
              Browse Programs <ArrowRight size={20} />
            </button>
            <button className="flex items-center justify-center border border-white text-white px-8 py-3.5 rounded-lg font-medium transition-colors hover:bg-white/10">
              Request Consultation
            </button>
          </div>
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