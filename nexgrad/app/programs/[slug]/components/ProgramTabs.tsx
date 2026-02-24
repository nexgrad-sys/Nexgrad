"use client";

import { useEffect, useState } from "react";

export default function ProgramTabs({ program }: any) {
  const [active, setActive] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", show: true },
    { id: "curriculum", label: "Curriculum", show: !!program.curriculum },
    { id: "fees", label: "Fees & EMI", show: true },
  ].filter(tab => tab.show);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 120;
    const y =
      el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      tabs.forEach(tab => {
        const el = document.getElementById(tab.id);
        if (!el) return;

        const top = el.offsetTop - 140;
        if (window.scrollY >= top) {
          setActive(tab.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-[80px] z-30 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-6 py-4">

          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`
                pb-2 border-b-2 text-sm font-medium transition
                ${
                  active === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-600 hover:text-primary"
                }
              `}
            >
              {tab.label}
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}