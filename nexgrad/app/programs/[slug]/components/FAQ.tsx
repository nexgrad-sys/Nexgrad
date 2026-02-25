"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQ({ program }: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!program?.faqs?.length) return null;

  return (
    <section>
      <h2 className="heading-2 mb-10">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {program.faqs.map((faq: any, index: number) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.id}
              className="border rounded-xl bg-white shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left font-medium hover:bg-gray-50 transition"
              >
                <span>{faq.question}</span>
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-red-600" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 pb-6 text-gray-600 leading-relaxed transition-all duration-300 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}