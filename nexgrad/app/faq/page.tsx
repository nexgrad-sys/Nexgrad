"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState("Admissions");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const tabs = [
    "Admissions",
    "Programs",
    "Payments & Fees",
    "Campus Life",
    "Student Support",
  ];

  const faqs: any = {
    Admissions: [
      {
        q: "What are the admission requirements for MBA programs?",
        a: `Admission requirements typically include:
• Bachelor's degree from an accredited institution
• 2-3 years of professional work experience
• Valid ID/Passport
• Academic transcripts
• English proficiency (if applicable)
• Statement of purpose

Requirements may vary by program and university.`,
      },
      {
        q: "How long does the admission process take?",
        a: `Application review: 2-3 business days  
Interview: within 1 week  
Decision: 7-10 days after interview  
Final enrollment: 2-3 weeks  

Express processing is available.`,
      },
      {
        q: "Can I apply if I don't have a business background?",
        a: `Yes. Many MBA programs accept diverse backgrounds.  
Your work experience and motivation matter more.  
Some programs may require foundation courses.`,
      },
      {
        q: "Do I need to take GMAT or GRE?",
        a: `Depends on the program. Many universities offer waivers for:
• 5+ years experience
• Strong academic record`,
      },
      {
        q: "What is the application fee?",
        a: `Application fee ranges from AED 500 – AED 1,000.  
It is non-refundable and covers evaluation and processing.`,
      },
    ],

    Programs: [
      {
        q: "What types of programs do you offer?",
        a: "We offer MBA, Executive MBA, DBA, and specialized master's programs.",
      },
      {
        q: "How long do MBA programs typically take?",
        a: "Most MBA programs take 12–24 months depending on format.",
      },
      {
        q: "Are the degrees recognized internationally?",
        a: "Yes, all partner universities are globally accredited.",
      },
    ],

    "Payments & Fees": [
      {
        q: "What are the tuition fees?",
        a: "Fees vary depending on university and program. Contact admissions for details.",
      },
      {
        q: "Are installment plans available?",
        a: "Yes, flexible payment plans are available.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cards, bank transfers, and digital wallets.",
      },
    ],

    "Campus Life": [
      {
        q: "Do you have physical campus facilities?",
        a: "Yes, depending on the university partner.",
      },
      {
        q: "Are there networking opportunities?",
        a: "Yes, events, webinars, and alumni meetups.",
      },
    ],

    "Student Support": [
      {
        q: "What kind of academic support is available?",
        a: "Tutors, mentors, and academic advisors are available.",
      },
      {
        q: "How do I access LMS?",
        a: "You’ll receive login credentials after enrollment.",
      },
    ],
  };

  return (
    <section className="bg-[#f6f8fb] py-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-block border border-red-500 text-red-600 px-4 py-1 rounded-full text-sm mb-4">
            ❓ We're here to help
          </div>

          <h1 className="text-4xl font-semibold">
            Frequently Asked{" "}
            <span className="text-red-600">Questions</span>
          </h1>

          <p className="text-gray-600 mt-4">
            Find answers about programs, admissions, and student services
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
              className={`px-5 py-2 rounded-lg border ${
                activeTab === tab
                  ? "bg-red-600 text-white"
                  : "bg-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs[activeTab].map((item: any, i: number) => (
            <div
              key={i}
              className="bg-white border rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium">{item.q}</span>
                <ChevronDown
                  className={`transition ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="px-5 pb-5 text-gray-600 whitespace-pre-line">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-2">
            Still Have Questions?
          </h2>
          <p className="mb-6">
            Our team will respond within 24 hours.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-red-500/40 p-5 rounded-lg">
              📞
              <p className="font-semibold mt-2">Call Us</p>
              <p className="text-sm">+971 50 123 4567</p>
            </div>

            <div className="bg-red-500/40 p-5 rounded-lg">
              ✉️
              <p className="font-semibold mt-2">Email Us</p>
              <p className="text-sm">admissions@nexgrad.com</p>
            </div>

            <div className="bg-red-500/40 p-5 rounded-lg">
              💬
              <p className="font-semibold mt-2">Live Chat</p>
              <p className="text-sm">Available 24/7</p>
            </div>
          </div>

          <button className="bg-white text-red-600 px-6 py-3 rounded-lg">
            Contact Admissions Team
          </button>
        </div>
      </div>
    </section>
  );
}