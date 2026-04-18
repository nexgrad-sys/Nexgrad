"use client";

import { motion } from "framer-motion";
import {
  Users,
  Globe,
  Target,
  Award,
  Briefcase,
  BookOpen,
  Brain,
  Lightbulb,
  TrendingUp,
  Network,
  Building2,
  CheckCircle,
  Shield,
  Trophy,
  GraduationCap,
} from "lucide-react";

export default function Page() {
  const features = [
    {
      title: "Personalized Guidance",
      icon: Users,
      description:
        "Dedicated enrollment advisors who understand your unique career goals and guide you to the perfect program match.",
    },
    {
      title: "Global Network",
      icon: Globe,
      description:
        "50+ partner universities across Europe, Americas, Asia, and the Middle East, all internationally accredited.",
    },
    {
      title: "Career-Focused",
      icon: Target,
      description:
        "Programs designed for working professionals with practical skills that deliver immediate career impact.",
    },
    {
      title: "Quality Assurance",
      icon: Award,
      description:
        "All programs are AACSB, EQUIS, or AMBA accredited, ensuring global recognition and employability.",
    },
    {
      title: "Lifetime Support",
      icon: Briefcase,
      description:
        "Continuous career services, alumni networking, and professional development resources long after graduation.",
    },
    {
      title: "Flexible Learning",
      icon: BookOpen,
      description:
        "Online, hybrid, and on-campus options that fit your schedule without compromising on academic rigor.",
    },
  ];

  return (
    <div className="bg-[#f7f7f7] text-gray-800">
      {/* HERO */}
      <section className="text-center py-20 px-6 bg-white">
        <h1 className="text-5xl font-bold">
          Why Choose <span className="text-red-600">NexGrad</span>
        </h1>
        <p className="mt-6 text-gray-500 max-w-3xl mx-auto text-lg">
          We're not just a platform—we're your partner in educational
          excellence.
        </p>

        {/* Mission Block */}
        <div className="grid md:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto items-center">
          <div className="bg-gray-200 h-[320px] rounded-2xl flex items-center justify-center">
            <span className="text-gray-400">Image</span>
          </div>

          <div className="text-left">
            <span className="inline-block border border-red-500 text-red-600 px-4 py-1 rounded-full text-sm">
              15+ Years of Excellence
            </span>

            <h2 className="text-3xl font-semibold mt-4">
              Your Success is Our Mission
            </h2>

            <p className="mt-4 text-gray-600">
              At NexGrad, we believe in the transformative power of education.
              Our approach goes beyond traditional course catalogs—we act as
              your intelligent academic advisor, guiding you through every step
              of your educational journey from inquiry to graduation and beyond.
            </p>

            <p className="mt-4 text-gray-600">
              With partnerships across 50+ globally recognized universities and
              a student community spanning 50+ countries, we've helped over
              10,000 professionals achieve their career aspirations through
              world-class higher education.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6">
        <h2 className="text-3xl text-center font-semibold">
          What Sets Us Apart
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Discover the key advantages
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>

                {/* TITLE */}
                <h3 className="font-semibold text-lg">{item.title}</h3>

                {/* DESC */}
                <p className="text-gray-500 mt-2 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-20 px-6 bg-[#f7f7f7]">
        <h2 className="text-3xl text-center font-semibold">
          Our Impact in Numbers
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Real results that demonstrate our commitment to student success
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
          {[
            {
              value: "10,000+",
              title: "Alumni Network",
              desc: "Graduates worldwide",
            },
            {
              value: "50+",
              title: "Partner Universities",
              desc: "Globally recognized",
            },
            {
              value: "90%",
              title: "Career Advancement",
              desc: "Within 1 year of graduation",
            },
            {
              value: "45%",
              title: "Salary Increase",
              desc: "Average post-MBA",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-red-600 text-4xl font-bold">{item.value}</h3>

              <p className="mt-3 font-semibold text-gray-800">{item.title}</p>

              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MILESTONES */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl text-center font-semibold">
          Institutional Milestones
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {["2008", "2012", "2015", "2018", "2021", "2024"].map((year, i) => (
            <div
              key={i}
              className="bg-[#f7f7f7] p-8 rounded-2xl border-l-4 border-red-600"
            >
              <h3 className="text-red-600 text-xl font-bold">{year}</h3>
              <p className="mt-2 font-semibold">Milestone Title</p>
              <p className="text-gray-500 text-sm mt-2">
                Description of milestone achievement.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LEARNING */}
      <section className="py-20 px-6">
        <h2 className="text-3xl text-center font-semibold">
          Learning Methodology
        </h2>

        <p className="text-center text-gray-500 mt-2">
          A proven approach that combines theory with real-world application
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-6xl mx-auto items-center">
          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            className="rounded-2xl shadow-md"
          />

          {/* CONTENT */}
          <div className="space-y-8">
            {[
              {
                title: "Experiential Learning",
                desc: "Real-world case studies, simulations, and business projects that mirror actual industry challenges.",
                icon: Brain,
              },
              {
                title: "Collaborative Approach",
                desc: "Peer learning, group projects, and networking opportunities with diverse global cohorts.",
                icon: Users,
              },
              {
                title: "Research-Driven Curriculum",
                desc: "Latest academic research and industry best practices integrated into every module.",
                icon: Lightbulb,
              },
              {
                title: "Outcome-Focused",
                desc: "Skills and competencies aligned with market demands and career advancement goals.",
                icon: Target,
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="flex gap-4 items-start">
                  {/* ICON BOX */}
                  <div className="w-12 h-12 flex items-center justify-center bg-red-50 rounded-xl">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl text-center font-semibold">
          Research & Innovation
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Driving thought leadership and industry innovation
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {[
            {
              title: "Business Innovation",
              desc: "Cutting-edge research in digital transformation, sustainable business models, and emerging markets.",
              stat: "50+ Published Papers Annually",
              icon: TrendingUp,
            },
            {
              title: "Leadership Studies",
              desc: "Advanced research in organizational behavior, strategic leadership, and change management.",
              stat: "30+ Research Collaborations",
              icon: Network,
            },
            {
              title: "Global Economics",
              desc: "Analysis of international trade, regional economic development, and financial systems.",
              stat: "15+ Industry Reports",
              icon: Globe,
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-[#f7f7f7] p-8 rounded-2xl hover:shadow-md transition"
              >
                {/* ICON */}
                <div className="w-14 h-14 flex items-center justify-center bg-red-100 rounded-2xl mb-6">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>

                {/* TITLE */}
                <h3 className="font-semibold text-lg">{item.title}</h3>

                {/* DESC */}
                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* STAT */}
                <p className="text-red-600 mt-6 text-sm font-medium">
                  {item.stat}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CORPORATE */}
      <section className="py-20 px-6 bg-white">
        {/* TITLE */}
        <h2 className="text-3xl text-center font-semibold">
          Corporate Collaborations
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Strategic partnerships with leading global organizations
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto items-stretch">
          {/* LEFT RED CARD */}
          <div className="bg-gradient-to-br from-red-600 to-red-500 text-white p-10 rounded-2xl flex flex-col justify-between">
            <div>
              {/* ICON */}
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-2xl mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold">Industry Partnerships</h3>

              {/* DESC */}
              <p className="mt-4 text-sm text-white/90 leading-relaxed">
                We collaborate with Fortune 500 companies and leading regional
                enterprises to ensure our curriculum remains industry-relevant
                and our graduates are job-ready.
              </p>
            </div>

            {/* BULLETS */}
            <div className="mt-8 space-y-3">
              {[
                "200+ Corporate Partners",
                "Executive Guest Lectures",
                "Live Business Projects",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-5">
            {[
              {
                title: "Corporate Learning Programs",
                desc: "Customized executive education for organizational talent development.",
              },
              {
                title: "Industry Research Projects",
                desc: "Collaborative research initiatives addressing real business challenges.",
              },
              {
                title: "Internship & Placement",
                desc: "Direct recruitment pipelines with leading multinational corporations.",
              },
              {
                title: "Guest Faculty Network",
                desc: "Senior executives teaching specialized modules and masterclasses.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f7f7f7] p-6 rounded-2xl hover:shadow-sm transition"
              >
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL */}
      <section className="py-20 bg-white px-6">
        {/* TITLE */}
        <h2 className="text-3xl text-center font-semibold">Global Exposure</h2>

        {/* SUBTITLE */}
        <p className="text-center text-gray-500 mt-2">
          Expand your horizons with international learning opportunities
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
          {[
            {
              title: "International Residencies",
              desc: "Campus visits to partner universities worldwide",
              icon: Globe,
            },
            {
              title: "Diverse Cohorts",
              desc: "Students from 50+ countries in every program",
              icon: Users,
            },
            {
              title: "Global Business Projects",
              desc: "Cross-border consulting and research",
              icon: Briefcase,
            },
            {
              title: "Alumni Network",
              desc: "Connections across 6 continents",
              icon: Network,
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-[#f7f7f7] p-8 rounded-2xl text-center hover:shadow-md transition"
              >
                {/* ICON */}
                <div className="w-14 h-14 mx-auto flex items-center justify-center bg-red-100 rounded-2xl mb-6">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>

                {/* TITLE */}
                <h3 className="font-semibold text-lg">{item.title}</h3>

                {/* DESC */}
                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-20 px-6 bg-white">
        {/* TITLE */}
        <h2 className="text-3xl text-center font-semibold">Student Outcomes</h2>

        {/* SUBTITLE */}
        <p className="text-center text-gray-500 mt-2">
          Transforming careers and creating future leaders
        </p>

        {/* TOP STATS */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {[
            {
              value: "45%",
              title: "Salary Increase",
              desc: "Average post-program salary growth within first year",
            },
            {
              value: "90%",
              title: "Career Advancement",
              desc: "Graduates promoted or transitioned to leadership roles",
            },
            {
              value: "95%",
              title: "Satisfaction Rate",
              desc: "Students highly satisfied with program outcomes",
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#f7f7f7] p-8 rounded-2xl text-center">
              <h3 className="text-red-600 text-4xl font-bold">{item.value}</h3>
              <h4 className="mt-3 font-semibold">{item.title}</h4>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* BIG CARD */}
        <div className="mt-16 max-w-6xl mx-auto bg-red-50 border border-red-100 rounded-3xl p-10 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <h3 className="text-xl font-semibold">
              Career Advancement Success
            </h3>

            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Our graduates consistently achieve remarkable career growth, with
              promotions, role transitions, and entrepreneurial ventures
              following program completion.
            </p>

            {/* BULLETS */}
            <div className="mt-6 space-y-3">
              {[
                "Senior management promotions within 6-18 months",
                "Successful career pivots to high-growth industries",
                "Entrepreneurial ventures launched and scaled",
                "C-suite and board-level appointments",
                "International career relocations",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "85%", label: "Promoted Within 18 Months" },
              { value: "72%", label: "Transitioned Careers" },
              { value: "65%", label: "Started Ventures" },
              { value: "92%", label: "Job Satisfaction" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl text-center shadow-sm"
              >
                <h3 className="text-red-600 text-3xl font-bold">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRA */}
      <section className="py-20 bg-white px-6">
        {/* TITLE */}
        <h2 className="text-3xl text-center font-semibold">
          Infrastructure Highlights
        </h2>

        {/* SUBTITLE */}
        <p className="text-center text-gray-500 mt-2">
          World-class facilities designed for optimal learning experiences
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
          {[
            {
              title: "State-of-the-Art Learning Centers",
              desc: "Modern campuses equipped with smart classrooms, collaboration spaces, and technology infrastructure for hybrid learning.",
              icon: Building2,
            },
            {
              title: "Digital Library Access",
              desc: "Access to 100,000+ digital resources, research databases, journals, and e-books from leading publishers worldwide.",
              icon: BookOpen,
            },
            {
              title: "Advanced LMS Platform",
              desc: "AI-powered learning management system with mobile access, analytics, and personalized learning paths.",
              icon: Network,
            },
            {
              title: "Secure Technology Infrastructure",
              desc: "Enterprise-grade security, data privacy, and 24/7 technical support ensuring seamless learning experiences.",
              icon: Shield,
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-[#f7f7f7] p-8 rounded-2xl flex gap-5 hover:shadow-sm transition"
              >
                {/* ICON */}
                <div className="w-14 h-14 flex items-center justify-center bg-red-100 rounded-2xl shrink-0">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>

                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-20 px-6">
        {/* TITLE */}
        <h2 className="text-3xl text-center font-semibold">
          Awards & Recognition
        </h2>

        {/* SUBTITLE */}
        <p className="text-center text-gray-500 mt-2">
          Excellence recognized by global education authorities
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {[
            {
              title: "Best Executive Education Platform",
              org: "Global Education Awards",
              year: "2024",
            },
            {
              title: "Excellence in Digital Learning",
              org: "EdTech Innovation Summit",
              year: "2023",
            },
            {
              title: "Top MBA Provider - GCC Region",
              org: "Middle East Education Forum",
              year: "2023",
            },
            {
              title: "Student Support Excellence",
              org: "International Education Council",
              year: "2022",
            },
            {
              title: "Innovation in Higher Education",
              org: "World Education Congress",
              year: "2022",
            },
            {
              title: "Industry Partnership Award",
              org: "Business Education Alliance",
              year: "2021",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#f7f7f7] p-8 rounded-2xl text-center hover:shadow-sm transition"
            >
              {/* ICON */}
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 flex items-center justify-center bg-red-100 rounded-2xl">
                  <Trophy className="w-7 h-7 text-red-600" />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-lg">{item.title}</h3>

              {/* ORG */}
              <p className="text-gray-500 text-sm mt-2">{item.org}</p>

              {/* YEAR */}
              <p className="text-red-600 text-sm mt-2 font-medium">
                {item.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-red-600 to-red-700 text-white">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">
            The NexGrad Advantage
          </h2>
          <p className="mt-3 text-red-100">
            Experience education that adapts to you, not the other way around
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {[
            {
              icon: CheckCircle,
              title: "Transparent Process",
              desc: "No hidden fees, clear timelines, and straightforward admissions. You will know exactly what to expect at every stage.",
            },
            {
              icon: TrendingUp,
              title: "ROI-Driven",
              desc: "Affordable tuition with flexible payment plans and significant career returns. Most students see salary increases within 12 months.",
            },
            {
              icon: GraduationCap,
              title: "Student-Centric",
              desc: "From pre-admission to post-graduation, our support infrastructure ensures you never feel alone in your academic journey.",
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition"
              >
                {/* ICON */}
                <div className="mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full border border-white/40">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold">{item.title}</h3>

                {/* DESC */}
                <p className="text-red-100 mt-3 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-3xl font-semibold">Ready to Start Your Journey?</h2>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg">
            Explore Programs
          </button>
          <button className="border border-red-600 px-6 py-3 rounded-lg">
            Schedule a Call
          </button>
        </div>
      </section>
    </div>
  );
}
