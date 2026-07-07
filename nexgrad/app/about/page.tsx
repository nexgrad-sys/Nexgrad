import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiCheckCircle,
  FiTarget,
  FiUsers,
  FiBookOpen,
  FiShield,
  FiTrendingUp,
  FiGlobe,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "About NexGrad | Guiding Better Higher Education Decisions",
  description:
    "Learn about NexGrad, our purpose, our approach to higher education guidance, and how we help working professionals choose recognised universities and programmes with confidence.",
  keywords: [
    "About NexGrad",
    "Education Consultancy UAE",
    "Higher Education Guidance",
    "University Admission Experts",
    "Study in UAE",
    "Online Degree Consultancy",
    "Education Advisors",
  ],
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-r from-[#111111] via-[#202020] to-[#363636]">
        <Image
          src="/images/about-hero.jpg"
          alt="About NexGrad"
          fill
          priority
          className="object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white mb-8">
              ABOUT NEXGRAD
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              Helping You Build
              <br />a Better Future Through
              <span className="text-red-500"> Better Education Decisions</span>
            </h1>

            <p className="mt-10 text-xl leading-9 text-gray-200 max-w-3xl">
              Choosing the right university has never been more important. It
              has also never been more complicated.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl">
              Today, students are faced with hundreds of universities, thousands
              of programmes, different recognition systems, countless rankings,
              and an overwhelming amount of information online. Every
              institution promises opportunity, yet very few help students
              understand which opportunity is truly right for them.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl">
              NexGrad was created to change that. We believe higher education
              decisions should be guided by clarity, transparency and
              personalised advice rather than marketing claims.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">
              <Link
                href="/programs"
                className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
              >
                Explore Programmes
                <FiArrowRight />
              </Link>

              <Link
                href="/contact"
                className="border border-white text-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl font-semibold"
              >
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* WHY NEXGRAD EXISTS */}
      {/* ===================================================== */}

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <Image
              src="/images/why-nexgrad.jpg"
              alt="Why NexGrad"
              width={700}
              height={650}
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <span className="text-red-600 font-semibold uppercase tracking-wider">
              Why NexGrad Exists
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8">
              Helping learners make confident education decisions.
            </h2>

            <p className="text-lg leading-9 text-gray-600">
              Every year, thousands of learners begin searching for higher
              education opportunities with excitement and ambition.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              Very quickly, that excitement often turns into confusion.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Which university should I choose?",
                "Will employers recognise my qualification?",
                "Should I focus on cost or reputation?",
                "Is a higher ranking always better?",
                "Which country offers better opportunities?",
              ].map((item) => (
                <div key={item} className="flex gap-4 items-start">
                  <FiCheckCircle className="text-red-600 mt-1" size={22} />

                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-lg leading-9 text-gray-600">
              The problem is not a lack of information. The problem is having
              too much information without the context needed to make a
              confident decision.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              That is where NexGrad makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* VALUES */}
      {/* ===================================================== */}

      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-red-600 font-semibold uppercase">
              Our Principles
            </span>

            <h2 className="text-5xl font-bold mt-4">
              We Believe Better Decisions Create Better Futures
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">
            {[
              {
                icon: <FiTarget size={30} />,
                title: "Clarity Before Commitment",
                text: "Students deserve complete information before making one of the biggest investments in their future.",
              },
              {
                icon: <FiUsers size={30} />,
                title: "Guidance Before Admission",
                text: "Applications are important. Making the right decision is even more important.",
              },
              {
                icon: <FiShield size={30} />,
                title: "Transparency Builds Trust",
                text: "Recognition, fees, timelines and programme expectations explained clearly.",
              },
              {
                icon: <FiBookOpen size={30} />,
                title: "Education Should Fit Life",
                text: "Learning should support your career, family and ambitions.",
              },
              {
                icon: <FiGlobe size={30} />,
                title: "Every Journey Is Personal",
                text: "No two learners share the same goals. Our advice reflects your ambitions.",
              },
              {
                icon: <FiTrendingUp size={30} />,
                title: "Success Beyond Graduation",
                text: "A qualification is one milestone. Real success is lifelong career growth.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition border border-gray-100 hover:border-red-200"
              >
                <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-8">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold mb-5">{card.title}</h3>

                <p className="text-gray-600 leading-8">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* THE WAY WE WORK */}
      {/* ===================================================== */}

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-red-600 font-semibold uppercase tracking-widest">
              Our Process
            </span>

            <h2 className="text-5xl font-bold mt-4">The Way We Work</h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              Most education consultancies begin with a programme.
            </p>

            <p className="text-lg text-gray-600 leading-9">
              We begin with a conversation.
            </p>

            <p className="mt-8 text-xl font-semibold">
              "What are you trying to achieve?"
            </p>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              Every recommendation we make starts with your goals, because the
              right education decision depends on where you want to go—not
              simply on what is available.
            </p>
          </div>

          <div className="mt-24 space-y-16">
            {[
              {
                no: "01",
                title: "We Listen",
                text: "Every learner has a different story. We begin by understanding your ambitions before discussing universities.",
              },
              {
                no: "02",
                title: "We Explore",
                text: "Once we understand your goals, we identify programmes and universities that genuinely align with your aspirations.",
              },
              {
                no: "03",
                title: "We Compare",
                text: "Recognition, programme structure, flexibility, tuition investment and long-term career value are compared objectively.",
              },
              {
                no: "04",
                title: "We Guide",
                text: "From eligibility and documentation to admission formalities, our advisors stay with you throughout the journey.",
              },
              {
                no: "05",
                title: "We Stay Connected",
                text: "Our relationship continues after admission, supporting you throughout your learning journey.",
              },
            ].map((step, index) => (
              <div
                key={step.no}
                className="grid lg:grid-cols-[120px_1fr] gap-10 items-start relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold shadow-xl">
                    {step.no}
                  </div>

                  {index !== 4 && (
                    <div className="w-1 h-24 bg-red-200 mt-4 rounded-full"></div>
                  )}
                </div>

                <div className="bg-gray-50 rounded-3xl p-10 shadow-lg border border-gray-100">
                  <h3 className="text-3xl font-bold mb-6">{step.title}</h3>

                  <p className="text-gray-600 text-lg leading-9">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* WE MEASURE SUCCESS DIFFERENTLY */}
      {/* ===================================================== */}

      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-red-600 font-semibold uppercase tracking-widest">
              Our Philosophy
            </span>

            <h2 className="text-5xl font-bold mt-4">
              We Measure Success Differently
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mt-20">
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">
                Every Recommendation Should Be Honest
              </h3>

              <p className="text-lg leading-9 text-gray-600">
                We believe trust is earned by giving students advice that
                genuinely serves their interests—even when that means
                encouraging them to explore multiple options before making a
                decision.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">
                Every Student Should Feel Confident
              </h3>

              <p className="text-lg leading-9 text-gray-600">
                Success begins long before graduation. It begins when a learner
                can confidently say:
              </p>

              <blockquote className="mt-6 text-2xl font-semibold text-red-600">
                “I know I am choosing the right path.”
              </blockquote>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">
                Every Partnership Should Add Value
              </h3>

              <p className="text-lg leading-9 text-gray-600">
                We collaborate with universities that share our commitment to
                recognised education, academic quality, and flexible learning
                designed for modern professionals.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">
                Every Learning Journey Matters
              </h3>

              <p className="text-lg leading-9 text-gray-600">
                For us, an admission is never the finish line. It is the
                beginning of personal growth, professional development and
                lifelong learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* MEET THE PEOPLE */}
      {/* ===================================================== */}

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-red-600 uppercase font-semibold tracking-widest">
              Our Team
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Meet the People Behind NexGrad
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              Technology makes education more accessible. People make it more
              meaningful.
            </p>

            <p className="mt-4 text-lg text-gray-600 leading-9">
              Behind every admission is a team committed to helping learners
              navigate one of the most important decisions of their lives.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">
            {[
              {
                image: "/team/advisor.jpg",
                name: "Education Advisor",
                role: "Senior Education Consultant",
                quote:
                  "I believe every student deserves advice that puts their future before everything else.",
              },
              {
                image: "/team/admission.jpg",
                name: "Admissions Specialist",
                role: "Admissions Team",
                quote:
                  "My role is to make every admission journey clear, organised and stress-free.",
              },
              {
                image: "/team/student.jpg",
                name: "Student Success Advisor",
                role: "Student Success",
                quote:
                  "Learning does not begin with admission. It begins with confidence.",
              },
              {
                image: "/team/career.jpg",
                name: "Career Guidance Specialist",
                role: "Career Advisor",
                quote:
                  "The right qualification should create opportunities far beyond graduation.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold">{member.name}</h3>

                  <p className="text-red-600 mt-2">{member.role}</p>

                  <p className="mt-6 text-gray-600 leading-8">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mt-20 text-center">
            <blockquote className="text-3xl leading-relaxed font-semibold text-gray-800">
              You may remember a university for its campus. You may remember a
              degree for its curriculum.
              <br />
              <br />
              But you will always remember the people who helped you make the
              right decision.
            </blockquote>

            <p className="mt-8 text-red-600 text-xl font-semibold">
              That is the experience we strive to create every day.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* UNIVERSITY NETWORK */}
      {/* ===================================================== */}

      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-red-600 uppercase font-semibold tracking-widest">
              Partner Universities
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Our Global University Network
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              No single university is the perfect choice for every learner.
            </p>

            <p className="mt-5 text-lg text-gray-600 leading-9">
              Our responsibility is not to convince you that one university is
              better than another. It is to help you understand which university
              is better for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mt-20">
            {[
              {
                logo: "/universities/city.png",
                country: "🇲🇾 Malaysia",
                name: "City University Malaysia",
                desc: "For professionals seeking internationally recognised education with flexible learning.",
                programs: ["MBA", "BBA", "M.Ed"],
              },
              {
                logo: "/universities/shoolini.png",
                country: "🇮🇳 India",
                name: "Shoolini University",
                desc: "Research-driven education with strong academic recognition.",
                programs: ["MBA", "BBA", "BCA", "B.Com", "MCA"],
              },
              {
                logo: "/universities/amity.png",
                country: "🇮🇳 India",
                name: "Amity University Online",
                desc: "Flexible online education from one of India's recognised private universities.",
                programs: ["MBA", "BBA", "BCA", "B.Com", "MCA"],
              },
              {
                logo: "/universities/othm.png",
                country: "🇬🇧 United Kingdom",
                name: "OTHM UK",
                desc: "UK regulated qualifications with international progression opportunities.",
                programs: [
                  "Executive Education",
                  "Professional Qualifications",
                ],
              },
            ].map((uni) => (
              <div
                key={uni.name}
                className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition"
              >
                <div className="flex items-center gap-6">
                  <Image src={uni.logo} alt={uni.name} width={90} height={90} />

                  <div>
                    <h3 className="text-2xl font-bold">{uni.name}</h3>

                    <p className="text-red-600 mt-2">{uni.country}</p>
                  </div>
                </div>

                <p className="mt-8 text-lg leading-8 text-gray-600">
                  {uni.desc}
                </p>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Available Programmes</h4>

                  <div className="flex flex-wrap gap-3">
                    {uni.programs.map((program) => (
                      <span
                        key={program}
                        className="px-4 py-2 rounded-full bg-red-50 text-red-600"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/universities"
                  className="inline-flex mt-10 bg-red-600 text-white px-7 py-3 rounded-xl hover:bg-red-700 transition"
                >
                  Explore University
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-xl mt-20 max-w-4xl mx-auto text-gray-700 leading-9">
            A university should never be chosen because it is the most popular.
            It should be chosen because it supports the future you want to
            build.
          </p>
        </div>
      </section>

      {/* ===================================================== */}
      {/* LOOKING BEYOND ADMISSION */}
      {/* ===================================================== */}

      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <span className="text-red-600 uppercase font-semibold">
              Lifelong Learning
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Looking Beyond Admission
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Many education providers see admission as the destination. We see
              it as the starting point.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mt-24 text-center">
            {[
              "Choose with Confidence",
              "Learn with Purpose",
              "Graduate with Pride",
              "Grow Professionally",
              "Keep Learning",
            ].map((stage, index) => (
              <div key={stage}>
                <div className="w-20 h-20 mx-auto rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold">{stage}</h3>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-20 text-center">
            <p className="text-lg leading-9 text-gray-600">
              The world of work changes constantly. New technologies emerge.
              Industries evolve. Leadership expectations shift.
            </p>

            <p className="mt-8 text-xl font-semibold text-red-600">
              The professionals who continue learning are often the ones who
              continue growing.
            </p>
          </div>
        </div>
      </section>

           {/* ===================================================== */}
      {/* THE FUTURE WE ARE BUILDING */}
      {/* ===================================================== */}

      <section className="py-28 bg-gradient-to-b from-gray-50 to-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <span className="text-red-600 uppercase tracking-widest font-semibold">

              Our Vision

            </span>

            <h2 className="text-5xl lg:text-6xl font-bold mt-4">

              The Future We Are Building

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              Higher education is evolving rapidly.

              Learners no longer search only for universities.

              They search for flexibility, recognition,
              affordability and meaningful career outcomes.

            </p>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              NexGrad is building a platform where every learner
              can confidently discover, compare and choose
              globally recognised education that supports
              long-term professional success.

            </p>

          </div>

          {/* Future Cards */}

          <div className="grid lg:grid-cols-3 gap-8 mt-24">

            {[
              {
                title: "Global University Network",
                text: "Expanding partnerships with recognised universities across multiple countries and disciplines."
              },
              {
                title: "Personalised Guidance",
                text: "Technology supported by experienced education advisors delivering recommendations tailored to every learner."
              },
              {
                title: "Career Focused Learning",
                text: "Helping professionals select programmes that directly support promotion, career progression and leadership."
              },
              {
                title: "Student First",
                text: "Every decision begins with what is right for the learner—not simply what is available."
              },
              {
                title: "Continuous Innovation",
                text: "Using digital tools and expert guidance to simplify complex higher education decisions."
              },
              {
                title: "Lifetime Relationship",
                text: "Supporting learners before admission, throughout study and well beyond graduation."
              },
            ].map((item) => (

              <div
                key={item.title}
                className="
                  bg-white
                  rounded-3xl
                  p-10
                  shadow-lg
                  border
                  border-gray-100
                  hover:border-red-200
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition
                "
              >

                <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 font-bold text-2xl mb-8">

                  ✓

                </div>

                <h3 className="text-2xl font-bold mb-5">

                  {item.title}

                </h3>

                <p className="text-gray-600 leading-8">

                  {item.text}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* STATISTICS */}
      {/* ===================================================== */}

      <section className="py-24 bg-red-600">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-4 gap-8 text-center">

            {[
              {
                value: "1000+",
                label: "Students Guided",
              },
              {
                value: "50+",
                label: "Countries Served",
              },
              {
                value: "20+",
                label: "University Partners",
              },
              {
                value: "95%",
                label: "Student Satisfaction",
              },
            ].map((item) => (

              <div key={item.label}>

                <h2 className="text-5xl font-bold text-white">

                  {item.value}

                </h2>

                <p className="mt-3 text-red-100 text-lg">

                  {item.label}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* FINAL CTA */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#111111] py-32">

        <div className="absolute -left-32 top-0 w-[420px] h-[420px] rounded-full bg-red-600/20 blur-3xl"></div>

        <div className="absolute -right-32 bottom-0 w-[420px] h-[420px] rounded-full bg-red-600/20 blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <span className="inline-flex bg-red-600 text-white px-5 py-2 rounded-full uppercase tracking-wider text-sm font-semibold mb-8">

            Begin Your Journey

          </span>

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-white">

            Education Should Never
            <br />

            Feel Like Guesswork.

          </h2>

          <p className="mt-10 text-xl text-gray-300 leading-9 max-w-4xl mx-auto">

            Whether you're exploring your first degree,
            advancing your leadership career through an MBA,
            or pursuing doctoral education,

            NexGrad helps you make informed,
            confident and future-focused education decisions.

          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-16">

            <Link
              href="/programs"
              className="
                bg-red-600
                hover:bg-red-700
                text-white
                px-10
                py-5
                rounded-xl
                font-semibold
                transition
                shadow-xl
                flex
                items-center
                gap-3
              "
            >

              Explore Programmes

              <FiArrowRight />

            </Link>

            <Link
              href="/contact"
              className="
                border
                border-white
                hover:bg-white
                hover:text-black
                transition
                text-white
                px-10
                py-5
                rounded-xl
                font-semibold
              "
            >

              Speak With an Advisor

            </Link>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-24">

            <div>

              <h3 className="text-white text-2xl font-bold">

                Trusted Guidance

              </h3>

              <p className="mt-4 text-gray-400 leading-8">

                Honest education advice tailored
                to every learner.

              </p>

            </div>

            <div>

              <h3 className="text-white text-2xl font-bold">

                Global Universities

              </h3>

              <p className="mt-4 text-gray-400 leading-8">

                Recognised partner institutions
                across multiple countries.

              </p>

            </div>

            <div>

              <h3 className="text-white text-2xl font-bold">

                Career Focused

              </h3>

              <p className="mt-4 text-gray-400 leading-8">

                Education designed to help
                professionals grow with confidence.

              </p>

            </div>

          </div>

        </div>

      </section>

   
    </main>
  );
}
