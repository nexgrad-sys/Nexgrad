"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import ProgramsMegaMenu from "./ProgramsMegaMenu";
import StudentMenu from "./StudentMenu";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu(prev => (prev === menu ? null : menu));
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClick = (e: any) => {
      if (!e.target.closest(".nav-dropdown")) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const navLinkStyle =
    "relative cursor-pointer text-gray-800 hover:text-red-600 transition duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center font-bold rounded">
            N
          </div>
          <span className="text-xl font-semibold">NexGrad</span>
        </Link>

        {/* Main Menu */}
        <nav className="hidden lg:flex gap-8 items-center text-[15px]">

          {/* Explore NexGrad */}
          <div className="relative nav-dropdown">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu("explore");
              }}
              className={navLinkStyle + " flex items-center gap-1"}
            >
              Explore NexGrad
              <FiChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  activeMenu === "explore" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeMenu === "explore" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 bg-white shadow-2xl rounded-2xl p-6 w-[280px] animate-fadeIn">
                <div className="flex flex-col space-y-3 text-sm text-gray-700">
                  <Link href="/why-nexgrad" className="block hover:text-red-600 transition">
                    Why NexGrad
                  </Link>
                  <Link href="/team" className="block hover:text-red-600 transition">
                    Team
                  </Link>
                  <Link href="/accreditation" className="block hover:text-red-600 transition">
                    Accreditation
                  </Link>
                  <Link href="/partners" className="block hover:text-red-600 transition">
                    Global Partner
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Programs */}
          <div className="relative nav-dropdown">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu("programs");
              }}
              className={navLinkStyle + " flex items-center gap-1"}
            >
              Programs
              <FiChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  activeMenu === "programs" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeMenu === "programs" && <ProgramsMegaMenu />}
          </div>

          <div
            className="relative nav-dropdown"
            //onMouseEnter={() => setActiveMenu("admissions")}
            //onMouseLeave={() => setActiveMenu(null)}
          >
            <button 
            onClick={(e) => {
                e.stopPropagation();
                toggleMenu("admissions");
              }}
              className={navLinkStyle + " flex items-center gap-1"}
            >
              Admissions <FiChevronDown size={16} />
            </button>

            {activeMenu === "admissions" && (
              <div className="absolute top-full left-0 mt-4 w-64 bg-white rounded-2xl shadow-xl border p-4 space-y-3">
                <Link
                  href="/lms"
                  className="block px-4 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
                >
                  LMS
                </Link>

                <Link
                  href="/apply"
                  className="block px-4 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
                >
                  Application Form
                </Link>

                <Link
                  href="/fee-payment"
                  className="block px-4 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
                >
                  Quick Fee Payment
                </Link>

                <Link
                  href="/library"
                  className="block px-4 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
                >
                  E-Library
                </Link>

                <Link
                  href="/faq"
                  className="block px-4 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>


          {/* Student Experience */}
          <div className="relative nav-dropdown">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu("student");
              }}
              className={navLinkStyle + " flex items-center gap-1"}
            >
              Student Experience
              <FiChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  activeMenu === "student" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeMenu === "student" && <StudentMenu />}
          </div>

          <Link href="/executive-education" className={navLinkStyle}>
            Executive Education
          </Link>

          <Link href="/contact" className={navLinkStyle}>
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex gap-4 items-center">
          {/* <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition">
            Enquire
          </button> */}

          <Link href="/apply">
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
              Apply Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}