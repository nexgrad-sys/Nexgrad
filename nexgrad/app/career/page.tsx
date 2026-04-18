import React from "react";
import {
  Briefcase,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  Award,
  BarChart3,
  Handshake, // new
  FileText, // new
  ArrowRight,
} from "lucide-react";

export default function CareerPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section className="text-center py-20 px-6 bg-gray-50">
        <h1 className="text-5xl font-bold">
          Career <span className="text-red-500">Services</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
          Comprehensive career support from enrollment to employment. We are
          invested in your professional success every step of the way.
        </p>

        <div className="mt-10 max-w-6xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* END TO END SUPPORT */}
      <section className="py-20 text-center px-6">
        <h2 className="text-4xl font-semibold">End-to-End Placement Support</h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          From career counseling to job placement, we provide comprehensive
          support throughout your journey
        </p>
      </section>

      {/* SUCCESS PRIORITY */}
      <section className="grid md:grid-cols-2 gap-10 px-10 py-10 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Your Success Is Our Priority
          </h3>
          <p className="text-gray-600 mb-4">
            NexGrad's Career Services team works closely with students from day
            one to understand their career aspirations and create personalized
            action plans.
          </p>

          <div className="space-y-4 mt-6">
            {[
              "Career Assessment",
              "Job Search Strategy",
              "Application Support",
              "Lifetime Access",
            ].map((item) => (
              <div className="flex items-start gap-3">
                <CheckCircle className="text-red-500" />
                <div>
                  <p className="font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* INDUSTRY PARTNERS */}
      <section className="py-20 px-6 text-center bg-gray-50">
        <h2 className="text-4xl font-semibold">Industry Partnerships</h2>
        <p className="text-gray-600 mt-2">
          Strategic collaborations with leading organizations
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {[
            ["500+", "Partner Companies"],
            ["90%", "Placement Rate"],
            ["45%", "Avg. Salary Increase"],
            ["3 Months", "Job Search Time"],
          ].map(([num, label]) => (
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-3xl text-red-500 font-bold">{num}</h3>
              <p className="text-gray-600">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white p-6 rounded-xl shadow">
          <h4 className="text-xl font-semibold mb-4">
            Top Recruiting Companies
          </h4>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "McKinsey",
              "Deloitte",
              "Google",
              "Amazon",
              "Microsoft",
              "JPMorgan",
            ].map((c) => (
              <div className="px-6 py-3 bg-gray-100 rounded-lg">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNSHIPS */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-800 mb-4">
              Internship Opportunities
            </h2>
            <p className="text-gray-500 text-lg">
              Gain practical experience through structured internship programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Internships",
                description:
                  "Work with leading companies on real business challenges",
                icon: <Briefcase size={40} strokeWidth={1.5} />,
                bullets: [
                  "3-6 month placements",
                  "Stipend included",
                  "Potential for full-time offer",
                ],
              },
              {
                title: "Consulting Projects",
                description:
                  "Apply your skills to strategic consulting engagements",
                icon: <Target size={40} strokeWidth={1.5} />,
                bullets: [
                  "Team-based projects",
                  "Client presentations",
                  "Portfolio building",
                ],
              },
              {
                title: "Startup Experience",
                description:
                  "Gain entrepreneurial experience with innovative startups",
                icon: <TrendingUp size={40} strokeWidth={1.5} />,
                bullets: [
                  "Hands-on learning",
                  "Equity opportunities",
                  "Flexible arrangements",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
              >
                {/* Icon */}
                <div className="text-red-600 mb-6">{item.icon}</div>

                {/* Title & Description */}
                <h3 className="font-semibold text-xl text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 mt-auto">
                  {item.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-500 text-sm"
                    >
                      {/* Custom Red Dot */}
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mr-3 shrink-0"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOPS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-800 mb-4">
              Professional Development Workshops
            </h2>
            <p className="text-gray-500 text-lg">
              Master the skills you need to land your dream job
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Resume Building Masterclass",
                description:
                  "Learn to create ATS-optimized resumes that get noticed by recruiters",
                icon: <Award size={24} strokeWidth={2} />,
                bullets: [
                  "Resume formatting and structure",
                  "Achievement quantification",
                  "Keyword optimization",
                  "Cover letter writing",
                ],
              },
              {
                title: "Interview Excellence Workshop",
                description:
                  "Master behavioral and case interviews with hands-on practice",
                icon: <Users size={24} strokeWidth={2} />,
                bullets: [
                  "STAR method techniques",
                  "Case interview frameworks",
                  "Mock interviews with feedback",
                  "Salary negotiation strategies",
                ],
              },
              {
                title: "LinkedIn & Personal Branding",
                description:
                  "Build a compelling professional presence that attracts opportunities",
                icon: <FileText size={24} strokeWidth={2} />,
                bullets: [
                  "Profile optimization",
                  "Content strategy",
                  "Networking techniques",
                  "Thought leadership",
                ],
              },
              {
                title: "Networking & Professional Etiquette",
                description:
                  "Develop the soft skills to build lasting professional relationships",
                icon: <Handshake size={24} strokeWidth={2} />,
                bullets: [
                  "Effective networking strategies",
                  "Business communication",
                  "Professional presence",
                  "Relationship building",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 flex gap-6"
              >
                {/* Icon Container */}
                <div className="shrink-0">
                  <div className="bg-red-100 text-red-600 p-4 rounded-xl">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-xl text-slate-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Checkmark Bullets */}
                  <ul className="space-y-3">
                    {item.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-500 text-sm"
                      >
                        <CheckCircle
                          size={18}
                          className="text-red-600 mr-3 mt-0.5 shrink-0"
                          strokeWidth={2}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENTORSHIP */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Mentorship"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-4">
              One-on-One Career Mentorship
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Get personalized guidance from industry professionals and alumni
              who understand your career path and can provide valuable insights
              and connections.
            </p>

            {/* List Items */}
            <div className="space-y-4">
              {[
                {
                  title: "Industry Insights",
                  description:
                    "Learn about trends, challenges, and opportunities in your target field",
                },
                {
                  title: "Career Navigation",
                  description:
                    "Get guidance on career transitions and advancement strategies",
                },
                {
                  title: "Network Access",
                  description:
                    "Leverage your mentor's connections for introductions and referrals",
                },
                {
                  title: "Accountability & Support",
                  description:
                    "Stay motivated with regular check ins and goal tracking",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4"
                >
                  <Handshake
                    className="text-red-600 shrink-0 mt-0.5"
                    size={24}
                    strokeWidth={1.5}
                  />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RED STATS */}
      <section className="bg-red-600 text-white py-20 text-center">
        <h2 className="text-4xl font-semibold">Placement Success Statistics</h2>
        <p className="mt-2">Our track record speaks for itself</p>

        <div className="grid md:grid-cols-4 gap-6 mt-10 px-10">
          {[
            ["92%", "Placement Rate"],
            ["$95K", "Average Salary"],
            ["85%", "Career Switchers"],
            ["4.8/5", "Satisfaction"],
          ].map(([num, label]) => (
            <div className="bg-red-500 p-6 rounded-xl">
              <h3 className="text-3xl font-bold">{num}</h3>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-white border-t-[6px] border-red-600 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-slate-800 mb-6">
            Start Your Career Transformation Today
          </h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Join NexGrad and access world-class career support that continues long after
            graduation
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Primary Button */}
            <button className="flex items-center justify-center gap-2 bg-[#E11D48] hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-medium transition-colors">
              Apply Now
              <ArrowRight size={20} />
            </button>

            {/* Secondary Button */}
            <button className="flex items-center justify-center bg-white hover:bg-red-50 text-[#E11D48] border border-[#E11D48] px-8 py-3.5 rounded-lg font-medium transition-colors">
              Schedule Career Counseling
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
