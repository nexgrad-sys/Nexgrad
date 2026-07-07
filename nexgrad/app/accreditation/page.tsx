"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Shield,
  FileCheck,
  Globe,
  Building2,
  Award,
  CheckCircle,
  Scale,
  BadgeCheck,
  FileText,
  Lock,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  HelpCircle,
} from "lucide-react";

export default function AccreditationPage() {
  const [active, setActive] = useState<number | null>(null);

  const regionData = [
    {
      title: "Malaysia",
      subtitle: "Ministry of Higher Education",
      desc: "Regulated by the Malaysian Qualifications Agency (MQA) for quality assurance and recognised universities.",
    },
    {
      title: "India",
      subtitle: "University Grants Commission (UGC)",
      desc: "Evaluated by the National Assessment and Accreditation Council (NAAC) for recognised universities.",
    },
    {
      title: "United Kingdom",
      subtitle: "Ofqual",
      desc: "Regulates awarding organisations to ensure qualifications and academic progression standards.",
    },
  ];

  const recognitionBodies = [
    {
      icon: Building2,
      title: "University Grants Commission (UGC)",
      desc: "The statutory body responsible for coordinating, regulating, and maintaining standards of higher education in India. Applies to Indian Universities.",
    },
    {
      icon: FileCheck,
      title: "National Assessment and Accreditation Council (NAAC)",
      desc: "Evaluates the overall quality of higher education institutions in India. Universities receive grades such as A++, A+, A, and others based on institutional performance.",
    },
    {
      icon: Shield,
      title: "Malaysian Qualifications Agency (MQA)",
      desc: "Responsible for quality assurance within Malaysia's higher education system. It evaluates programmes against established academic standards.",
    },
    {
      icon: Globe,
      title: "Ministry of Higher Education (Malaysia)",
      desc: "Oversees the country's higher education sector and establishes policies that govern universities and higher education institutions.[cite:",
    },
    {
      icon: Scale,
      title: "Ofqual",
      desc: "The Office of Qualifications and Examinations Regulation regulates qualifications, examinations, and awarding organisations in England.",
    },
    {
      icon: Award,
      title: "QS World & THE Rankings",
      desc: "Evaluates universities across multiple indicators including academic reputation, research, and international outlook. They measure performance, not accredit universities.",
    },
  ];

  const Tabledata = [
    {
      name: "City University Malaysia",
      country: "Malaysia",
      recognition: "Ministry of Higher Education",
      framework: "MQA",
      rankings: "QS Stars",
    },
    {
      name: "Shoolini University",
      country: "India",
      recognition: "UGC",
      framework: "NAAC A+",
      rankings: "QS, THE",
    },
    {
      name: "Amity University Online",
      country: "India",
      recognition: "UGC",
      framework: "NAAC A+",
      rankings: "Various Global Rankings",
    },
    {
      name: "OTHM",
      country: "United Kingdom",
      recognition: "Ofqual",
      framework: "RQF",
      rankings: "Academic Progression Framework",
    },
  ];

  const misconceptions = [
    {
      title: '"A Highly Ranked University Is Always Better."',
      region: "Misconception 1",
      desc: "A global ranking reflects how a university performs across selected indicators... It does not automatically mean that every programme offered by that university is the best choice for every student.",
      icon: <Award className="w-6 h-6 text-red-500" />,
    },
    {
      title: '"Recognition and Accreditation Mean the Same Thing."',
      region: "Misconception 2",
      desc: "Recognition confirms that an institution operates within the recognised higher education framework of its country. Accreditation evaluates academic quality, programme standards, or institutional performance.",
      icon: <FileCheck className="w-6 h-6 text-red-500" />,
    },
    {
      title: '"One Education Authority Regulates Universities Worldwide."',
      region: "Misconception 3",
      desc: "Every country has its own higher education system. Each system operates independently while maintaining its own quality standards.",
      icon: <Globe className="w-6 h-6 text-red-500" />,
    },
    {
      title: '"All Online Degrees Are the Same."',
      region: "Misconception 4",
      desc: "The quality and recognition of an online degree depend on the university offering the programme and the regulatory framework under which it operates.",
      icon: <Shield className="w-6 h-6 text-red-500" />,
    },
  ];

  const evaluations = [
    {
      title: "Academic Recognition",
      icon: <Building2 className="w-6 h-6 text-red-500" />,
      points: [
        "Review university regulatory frameworks",
        "Verify respective country recognition",
        "Assess awarding organisation status",
      ],
    },
    {
      title: "Quality & Relevance",
      icon: <FileText className="w-6 h-6 text-red-500" />,
      points: [
        "Examine institutional quality measures",
        "Align with industry expectations",
        "Address evolving workplace requirements",
      ],
    },
    {
      title: "Flexibility & Support",
      icon: <MessageCircle className="w-6 h-6 text-red-500" />,
      points: [
        "Evaluate learning flexibility for professionals",
        "Assess academic guidance resources",
        "Ensure long-term career value",
      ],
    },
  ];

  const faqs = [
    {
      q: "Why is university recognition important?",
      a: "Recognition confirms that a university operates within the recognised higher education framework of its country. It provides confidence that the institution follows established academic standards and quality requirements.",
    },
    {
      q: "What is the difference between recognition and accreditation?",
      a: "Recognition relates to the legal and regulatory status of an institution. Accreditation evaluates academic quality, programme standards, or institutional performance. Both are important, but they serve different purposes.",
    },
    {
      q: "Does a higher university ranking mean a better degree?",
      a: "Not necessarily. Rankings measure institutional performance using selected indicators, while the right university depends on your individual goals, programme requirements, and preferred learning experience.",
    },
    {
      q: "Are online degrees recognised?",
      a: "Recognition depends on the university offering the programme and the applicable regulatory framework, not on whether learning takes place online or on campus.",
    },
    {
      q: "How can I verify if a university is recognised?",
      a: "You can review the relevant regulatory authorities, accreditation bodies, and official university information.NexGrad advisors can also help you understand the recognition applicable to your chosen programme.",
    },
    {
      q: "Does every country have the same education authority?",
      a: "No. Each country maintains its own higher education framework and regulatory bodies responsible for overseeing universities and academic quality.",
    },
  ];

  return (
    <main className="bg-[#f8f9fb] text-gray-800">
      {/* HERO */}
      <section className="text-center py-20 px-6">
        <div className="inline-block border border-red-200 text-red-500 px-4 py-1 rounded-full text-sm mb-4">
          Choose Your University with Confidence
        </div>

        <h1 className="text-5xl font-bold">
          Accreditations & <span className="text-red-500">Recognition</span>
        </h1>

        <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
          One of the first questions every student asks is: &quot;Will my degree be recognised?&quot; 
          Every country has its own higher education system, regulatory authorities, accreditation standards, and quality assurance frameworks.
          This page explains the most important recognition bodies, helping you understand what they mean and why they matter.
        </p>
      </section>

      {/* WHY RECOGNITION MATTERS */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              Why Recognition Matters More Than You Think
            </h2>

            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-lg">
              Many students begin their search by comparing tuition fees, course duration, or university rankings.
              While these factors are important, they should never be considered before understanding whether a university and its programmes are appropriately recognised.
            </p>

            <div className="space-y-5">
              {[
                "Confidence in the quality of education.",
                "Eligibility for further studies.",
                "Employer perception.",
                "Professional credibility.",
                "Long-term academic and career opportunities.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full border border-red-500 flex items-center justify-center mt-1">
                    <span className="text-red-500 text-sm">✓</span>
                  </div>
                  <p className="text-gray-800 text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Accreditation"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* UNDERSTANDING RECOGNITION AROUND THE WORLD */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Understanding Recognition Around the World
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            One of the biggest misconceptions in higher education is that a single organisation approves universities worldwide.
            In reality, every country has its own education system.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {regionData.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-red-500" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-snug font-medium">
                  {item.subtitle}
                </p>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION BODIES */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Understanding the Recognition Bodies
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            University recognition can seem complicated because different organisations perform different roles.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {recognitionBodies.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition"
                >
                  <div className="mb-5">
                    <Icon className="w-8 h-8 text-red-500" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TABLE SECTION */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
            Recognition Across Our Partner Universities
          </h2>
          <p className="text-center text-gray-500 mt-4">
            Every university within the NexGrad network operates under the recognition and quality assurance framework of its respective country.
          </p>

          <div className="mt-12 bg-white rounded-2xl overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr className="text-left text-gray-700 text-sm">
                  <th className="px-6 py-4 font-semibold">Partner</th>
                  <th className="px-6 py-4 font-semibold">Country</th>
                  <th className="px-6 py-4 font-semibold">Recognition</th>
                  <th className="px-6 py-4 font-semibold">Quality Framework</th>
                  <th className="px-6 py-4 font-semibold">Rankings</th>
                </tr>
              </thead>
              <tbody>
                {Tabledata.map((item, i) => (
                  <tr
                    key={i}
                    className="border-t border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-5 text-gray-900">
                      <b>{item.name}</b>
                    </td>
                    <td className="px-6 py-5 text-gray-600">{item.country}</td>
                    <td className="px-6 py-5 text-gray-600">{item.recognition}</td>
                    <td className="px-6 py-5 text-gray-600">{item.framework}</td>
                    <td className="px-6 py-5 text-gray-600">{item.rankings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* COMMON MISCONCEPTIONS */}
      <section className="py-24 bg-[#f6f8fb]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0f172a]">
            Common Misconceptions About University Recognition
          </h2>
          <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
            Understanding these differences helps you evaluate universities with greater confidence and avoid making decisions based on incomplete information.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {misconceptions.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{item.region}</p>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW NEXGRAD EVALUATES */}
      <section className="py-24 bg-[#f6f8fb]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0f172a]">
            How NexGrad Evaluates Every University Partner
          </h2>
          <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
            Students trust us because we do more than introduce universities.
            Before partnering with an institution, we evaluate multiple factors.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {evaluations.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-5">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-600 text-sm"
                    >
                      <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#f6f8fb]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0f172a]">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-500 mt-4 mb-16">
            Common questions about recognition and frameworks
          </p>

          <div className="space-y-6">
            {faqs.map((faq, i) => {
              const isOpen = active === i;

              return (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition"
                >
                  <button
                    onClick={() => setActive(isOpen ? null : i)}
                    className="w-full flex items-start justify-between text-left"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 text-red-600">
                        <HelpCircle size={22} />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg leading-snug pr-4">
                        {faq.q}
                      </h3>
                    </div>
                    <div className="text-gray-500 mt-1 shrink-0">
                      {isOpen ? <ChevronUp /> : <ChevronDown />}
                    </div>
                  </button>

                  {isOpen && (
                    <p className="text-gray-600 mt-4 pl-10 leading-relaxed text-sm">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">
          Make Your Decision Based on Knowledge, Not Assumptions
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto mb-8">
          Choosing a university is one of the most important decisions you will make for your future.
          If you would like personalised guidance, our advisors are here to help you compare universities.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg">
            Explore Partner Universities
          </button>
          <button className="border border-red-500 text-red-500 px-6 py-3 rounded-lg">
            Talk to an Advisor
          </button>
        </div>
      </section>
    </main>
  );
}