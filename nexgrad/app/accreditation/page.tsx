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
  const [open, setOpen] = useState<number | null>(null);
  const [active, setActive] = useState<number | null>(0);
  const data = [
    {
      icon: Shield,
      title: "Partner Vetting",
      desc: "Rigorous evaluation of all partner universities before collaboration, ensuring they meet our quality benchmarks.",
    },
    {
      icon: FileCheck,
      title: "Curriculum Review",
      desc: "Regular audits of program content to ensure relevance, currency, and alignment with industry needs.",
    },
    {
      icon: Globe,
      title: "International Recognition",
      desc: "All degrees are internationally recognized and accepted for further study or employment worldwide.",
    },
    {
      icon: Building2,
      title: "Institutional Stability",
      desc: "Partner with established universities with proven track records and financial stability.",
    },
    {
      icon: Award,
      title: "Faculty Credentials",
      desc: "All instructors hold advanced degrees and significant industry or research experience.",
    },
    {
      icon: CheckCircle,
      title: "Student Outcomes",
      desc: "Continuous monitoring of graduation rates, career placement, and student satisfaction.",
    },
  ];

  const Tabledata = [
    {
      name: "European Business School",
      country: "France",
      aacsb: true,
      equis: true,
      amba: true,
    },
    {
      name: "London School",
      country: "UK",
      aacsb: true,
      equis: false,
      amba: true,
    },
    {
      name: "Swiss Institute",
      country: "Switzerland",
      aacsb: false,
      equis: true,
      amba: true,
    },
    {
      name: "American Business University",
      country: "USA",
      aacsb: true,
      equis: false,
      amba: false,
    },
    {
      name: "Singapore Management School",
      country: "Singapore",
      aacsb: true,
      equis: true,
      amba: false,
    },
    {
      name: "Dubai Business College",
      country: "UAE",
      aacsb: false,
      equis: false,
      amba: true,
    },
  ];

  const items = [
    {
      title: "Ministry of Education (EU)",
      region: "European Union",
      desc: "European partner universities are regulated by national ministries of education and must comply with the Bologna Process standards for higher education.",
      icon: <Building2 className="w-6 h-6 text-red-500" />,
    },
    {
      title: "U.S. Department of Education",
      region: "United States",
      desc: "American partner institutions are accredited by agencies recognized by the U.S. Department of Education and the Council for Higher Education Accreditation (CHEA).",
      icon: <Globe className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Quality Assurance Agency (QAA)",
      region: "United Kingdom",
      desc: "UK partner universities are regulated by the QAA, ensuring quality standards across teaching, learning, and student experience.",
      icon: <Scale className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Ministry of Higher Education (GCC)",
      region: "Gulf Cooperation Council",
      desc: "Regional partners comply with national higher education regulations and quality assurance frameworks in GCC countries.",
      icon: <BadgeCheck className="w-6 h-6 text-red-500" />,
    },
  ];

  const Certdata = [
    {
      title: "Academic Standards",
      icon: <FileText className="w-6 h-6 text-red-500" />,
      points: [
        "PhD-qualified faculty",
        "Research output requirements",
        "Peer-reviewed curriculum",
        "Student-faculty ratio compliance",
      ],
    },
    {
      title: "Institutional Standards",
      icon: <Building2 className="w-6 h-6 text-red-500" />,
      points: [
        "Financial stability proof",
        "Infrastructure adequacy",
        "Library and resource access",
        "Governance structure",
      ],
    },
    {
      title: "Program Standards",
      icon: <Award className="w-6 h-6 text-red-500" />,
      points: [
        "Learning outcome alignment",
        "Industry relevance",
        "Continuous improvement",
        "Graduate employability",
      ],
    },
  ];

  const complitems = [
    {
      title: "Annual Audits",
      desc: "Regular independent audits to ensure ongoing compliance with accreditation standards.",
      icon: <Lock className="w-5 h-5 text-red-500" />,
    },
    {
      title: "Quality Reviews",
      desc: "Comprehensive curriculum and teaching quality reviews every academic year.",
      icon: <FileCheck className="w-5 h-5 text-red-500" />,
    },
    {
      title: "Student Feedback",
      desc: "Continuous monitoring of student satisfaction and academic outcomes.",
      icon: <MessageCircle className="w-5 h-5 text-red-500" />,
    },
    {
      title: "Risk Management",
      desc: "Proactive identification and mitigation of quality assurance risks.",
      icon: <Shield className="w-5 h-5 text-red-500" />,
    },
  ];

  const recoitems = [
    {
      title: "UNESCO Recognition",
      desc: "Listed in UNESCO database of accredited institutions",
    },
    {
      title: "WES Evaluation",
      desc: "Accepted by World Education Services",
    },
    {
      title: "NARIC Approval",
      desc: "National Recognition Information Centers",
    },
    {
      title: "Professional Bodies",
      desc: "Recognized by PMI, CIPD, CFA, and more",
    },
    {
      title: "Government Attestation",
      desc: "Ministry-level degree authentication",
    },
    {
      title: "Industry Acceptance",
      desc: "Approved by Fortune 500 companies",
    },
    {
      title: "Academic Equivalency",
      desc: "Credit transfer to other universities",
    },
    {
      title: "Visa Eligibility",
      desc: "Accepted for work and study visas",
    },
  ];

  const steps = [
    {
      title: "Visit Official Accreditation Websites",
      desc: "Access the official websites of AACSB, EQUIS, or AMBA to search for accredited institutions. You can verify the accreditation status of any partner university directly.",
    },
    {
      title: "Check University Credentials",
      desc: "Visit the partner university's official website to view their accreditation certificates and recognition documents in the 'About' or 'Accreditation' sections.",
    },
    {
      title: "Contact NexGrad Admissions",
      desc: "Reach out to our admissions team who can provide you with official accreditation documentation for any program you're interested in.",
    },
    {
      title: "Verify with Relevant Authorities",
      desc: "Contact the Ministry of Education in your country or relevant professional bodies to confirm recognition of your chosen program.",
    },
  ];

  const faqs = [
    {
      q: "What is the difference between AACSB, EQUIS, and AMBA?",
      a: "AACSB is the oldest and most prestigious business school accreditation (USA-based), EQUIS focuses on internationalization and corporate connections (Europe-based), and AMBA specifically accredits MBA programs. All three are internationally recognized as gold standards.",
    },
    {
      q: "Will my degree be recognized in my home country?",
      a: "All our partner universities hold internationally recognized accreditations that are accepted globally. However, we recommend checking with your country's Ministry of Education or relevant professional bodies for specific recognition requirements.",
    },
    {
      q: "Can I pursue a PhD with a degree from your partner universities?",
      a: "Yes, degrees from accredited institutions are recognized for further education worldwide. Our alumni have successfully gained admission to PhD programs at top-tier universities globally.",
    },
    {
      q: "How often are accreditations renewed?",
      a: "Accrediting bodies typically conduct reviews every 5–10 years. During this period, institutions must maintain continuous compliance and submit annual reports demonstrating quality standards.",
    },
    {
      q: "What happens if a university loses its accreditation?",
      a: "This is extremely rare and would only happen after years of non-compliance. If this occurred, NexGrad would immediately discontinue the partnership and assist enrolled students in transferring to another accredited institution.",
    },
    {
      q: "Are online degrees from your partners equally accredited?",
      a: "Yes, accreditation applies to the institution and program, not the delivery mode. Online and on-campus degrees from our partners have the same accreditation status and recognition.",
    },
  ];

  const renderCell = (value: boolean) => {
    return value ? (
      <span className="text-gray text-lg font-medium">
        <CheckCircle style={{ color: "red" }} />
      </span>
    ) : (
      <span className="text-gray-400 text-lg">-</span>
    );
  };

  return (
    <main className="bg-[#f8f9fb] text-gray-800">
      {/* HERO */}
      <section className="text-center py-20 px-6">
        <div className="inline-block border border-red-200 text-red-500 px-4 py-1 rounded-full text-sm mb-4">
          Globally Recognized Quality Standards
        </div>

        <h1 className="text-5xl font-bold">
          Accreditation &{" "}
          <span className="text-red-500">Quality Assurance</span>
        </h1>

        <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
          Every program offered through NexGrad meets the highest international
          standards for academic excellence.
        </p>
      </section>

      {/* WHY ACCREDITATION */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              Why Accreditation Matters
            </h2>

            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-lg">
              Accreditation ensures that your education meets global standards.
            </p>

            <div className="space-y-5">
              {[
                "Global Recognition",
                "Transfer Credits",
                "Career Advancement",
                "Quality Education",
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

      {/* ACCREDITING BODIES */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Our Accrediting Bodies
          </h2>

          {/* Subheading */}
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            NexGrad partners exclusively with universities accredited by these
            prestigious organizations
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                title: "AACSB",
                subtitle:
                  "Association to Advance Collegiate Schools of Business",
                desc: "The gold standard for business schools, held by less than 5% of business schools worldwide.",
              },
              {
                title: "EQUIS",
                subtitle: "European Quality Improvement System",
                desc: "European-based accreditation focused on international excellence in management education.",
              },
              {
                title: "AMBA",
                subtitle: "Association of MBAs",
                desc: "Specifically accredits MBA programs ensuring highest quality standards.",
              },
              {
                title: "ACBSP",
                subtitle:
                  "Accreditation Council for Business Schools and Programs",
                desc: "Leading specialized accreditation for business education programs.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
                  <Award className="w-7 h-7 text-red-500" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-500 text-sm mt-2 leading-snug">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY STANDARDS */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Our Quality Standards
          </h2>

          {/* Subheading */}
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Beyond accreditation, we maintain rigorous internal standards to
            ensure excellence
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {data.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition"
                >
                  {/* Icon */}
                  <div className="mb-5">
                    <Icon className="w-8 h-8 text-red-500" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TABLE */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
            Partner University Accreditations
          </h2>

          {/* Subheading */}
          <p className="text-center text-gray-500 mt-4">
            View the accreditation status of our partner institutions
          </p>

          {/* Table */}
          <div className="mt-12 bg-white rounded-2xl overflow-hidden border border-gray-200">
            <table className="w-full">
              {/* Header */}
              <thead className="bg-gray-50">
                <tr className="text-left text-gray-700 text-sm">
                  <th className="px-6 py-4 font-semibold">University</th>
                  <th className="px-6 py-4 font-semibold">Country</th>
                  <th className="px-6 py-4 text-center font-semibold">AACSB</th>
                  <th className="px-6 py-4 text-center font-semibold">EQUIS</th>
                  <th className="px-6 py-4 text-center font-semibold">AMBA</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {Tabledata.map((item, i) => (
                  <tr
                    key={i}
                    className="border-t border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-5 text--gray-900">
                      <b>{item.name}</b>
                    </td>
                    <td className="px-6 py-5 text-gray-600">{item.country}</td>
                    <td className="px-6 py-5 text-center">
                      {renderCell(item.aacsb)}
                    </td>
                    <td className="px-6 py-5 text-center">
                      {renderCell(item.equis)}
                    </td>
                    <td className="px-6 py-5 text-center">
                      {renderCell(item.amba)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GOVERNING BODIES */}
      <section className="py-24 bg-[#f6f8fb]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0f172a]">
            Governing Bodies & Regulatory Framework
          </h2>

          <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
            Our partner institutions operate under strict oversight from
            educational authorities
          </p>

          {/* Grid */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 mb-5">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Region */}
                <p className="text-sm text-gray-500 mt-1">{item.region}</p>

                {/* Description */}
                <p className="text-gray-600 mt-4 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="py-24 bg-[#f6f8fb]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0f172a]">
            Certification Standards & Requirements
          </h2>

          <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
            Understanding the rigorous criteria our partner universities must
            meet
          </p>

          {/* Cards */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {Certdata.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 mb-6">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-5">
                  {item.title}
                </h3>

                {/* Points */}
                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-600 text-sm"
                    >
                      <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="py-24 bg-[#f6f8fb]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0f172a]">
            Compliance & Quality Assurance
          </h2>

          <p className="text-center text-gray-500 mt-4 mb-16">
            Our comprehensive approach to maintaining excellence
          </p>

          {/* Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT IMAGE */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216" // replace with your actual image
                alt="Compliance"
                className="rounded-2xl w-full object-cover shadow-md"
                style={{ height: "500px" }}
              />
            </div>

            {/* RIGHT CARDS */}
            <div className="space-y-6">
              {complitems.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center bg-red-50 rounded-lg">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="py-24 bg-[#f6f8fb]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0f172a]">
            Recognition & Approvals
          </h2>

          <p className="text-center text-gray-500 mt-4 mb-16">
            Endorsed and recognized by leading educational and professional
            bodies
          </p>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recoitems.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 mx-auto flex items-center justify-center bg-red-50 rounded-full mb-4">
                  <BadgeCheck className="w-6 h-6 text-red-500" />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL STATS */}
      <section className="py-24 bg-[#f6f8fb]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0f172a]">
            Global Academic Recognition
          </h2>

          <p className="text-center text-gray-500 mt-4 mb-16">
            Your degree is recognized across continents and borders
          </p>

          {/* RED STATS BAR */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl text-white grid md:grid-cols-3 text-center py-10 px-6 mb-12">
            <div>
              <h3 className="text-3xl font-bold">150+</h3>
              <p className="mt-2 font-medium">Countries</p>
              <p className="text-sm text-red-100 mt-1">
                Where degrees are recognized
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="mt-2 font-medium">Global Acceptance</p>
              <p className="text-sm text-red-100 mt-1">By leading employers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="mt-2 font-medium">Partner Universities</p>
              <p className="text-sm text-red-100 mt-1">Across all continents</p>
            </div>
          </div>

          {/* REGION CARDS */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* CARD 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">
                North America & Europe
              </h3>

              <ul className="space-y-3 text-gray-600 text-sm">
                {[
                  "Accepted for employment in USA, Canada, and European Union",
                  "Credit transferable to other accredited institutions",
                  "Eligible for professional certifications (CPA, CFA, PMP)",
                  "Recognized for postdoctoral and PhD admissions",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CARD 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Middle East & Asia</h3>

              <ul className="space-y-3 text-gray-600 text-sm">
                {[
                  "Ministry attestation in GCC countries",
                  "Recognized by major employers in UAE, Saudi Arabia, Qatar",
                  "Accepted in India, Singapore, and Hong Kong",
                  "Eligible for government and private sector positions",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="py-24 bg-[#f6f8fb]">
        <div className="max-w-4xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0f172a]">
            Accreditation Verification Process
          </h2>

          <p className="text-center text-gray-500 mt-4 mb-16">
            How to verify the accreditation status of your program
          </p>

          {/* Card Container */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm">
            <div className="space-y-10">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-6">
                  {/* Number Badge */}
                  <div className="min-w-[48px] h-12 flex items-center justify-center bg-red-600 text-white font-semibold rounded-xl text-lg">
                    {i + 1}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#f6f8fb]">
        <div className="max-w-4xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0f172a]">
            Frequently Asked Questions
          </h2>

          <p className="text-center text-gray-500 mt-4 mb-16">
            Common questions about accreditation
          </p>

          {/* FAQ List */}
          <div className="space-y-6">
            {faqs.map((faq, i) => {
              const isOpen = active === i;

              return (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition"
                >
                  {/* Question */}
                  <button
                    onClick={() => setActive(isOpen ? null : i)}
                    className="w-full flex items-start justify-between text-left"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="mt-1 text-red-600">
                        <HelpCircle size={22} />
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold text-gray-900 text-lg leading-snug">
                        {faq.q}
                      </h3>
                    </div>

                    {/* Toggle Icon */}
                    <div className="text-gray-500">
                      {isOpen ? <ChevronUp /> : <ChevronDown />}
                    </div>
                  </button>

                  {/* Answer */}
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
          Choose Quality. Choose Accredited Education.
        </h2>

        <button className="bg-red-500 text-white px-6 py-3 rounded-lg mt-4">
          View Accredited Programs →
        </button>
      </section>
    </main>
  );
}
