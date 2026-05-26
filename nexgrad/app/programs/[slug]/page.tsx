/* app/programs/[slug]/page.tsx */

import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

/* COMPONENTS */

import ProgramHero from "./components/ProgramHero";
import ProgramTabs from "./components/ProgramTabs";
import Overview from "./components/Overview";
import Curriculum from "./components/Curriculum";
import Fees from "./components/Fees";
import Faculty from "./components/Faculty";
import Careers from "./components/Careers";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Sidebar from "./components/Sidebar";

/* -------------------------------- */
/* READ JSON */
/* -------------------------------- */

function readJson(fileName: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      fileName
    );

    if (!fs.existsSync(filePath)) {
      return [];
    }

    const data = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(data || "[]");
  } catch (err) {
    console.log(err);
    return [];
  }
}

/* -------------------------------- */
/* SAFE ARRAY */
/* -------------------------------- */

function safeArray(value: any) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value;
  }

  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}

/* -------------------------------- */
/* PAGE */
/* -------------------------------- */

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const programs = readJson("programs.json");

  const rawProgram = programs.find(
    (item: any) => item.slug === slug
  );

  if (!rawProgram) {
    notFound();
  }

  /* UNIVERSITY */

  const university =
    rawProgram?.universities?.[0] || {
      name: "University",
    };

  /* RELATED PROGRAMS */

  const relatedPrograms = programs
    .filter(
      (item: any) =>
        item.slug !== slug
    )
    .slice(0, 3);

  /* FINAL PROGRAM */

  const program = {
    ...rawProgram,

    /* HERO */

    title:
      rawProgram?.title || "Program",

    subtitle:
      rawProgram?.subtitle ||
      "Transform your future with globally recognized education.",

    description:
      rawProgram?.description ||
      "This program is designed for ambitious professionals looking to accelerate their career growth.",

    degreeLevel:
      rawProgram?.degreeLevel ||
      "Master's",

    image:
      rawProgram?.image ||
      "/images/program-hero.jpg",

    university,

    duration:
      rawProgram?.duration ||
      "24 Months",

    mode:
      rawProgram?.mode ||
      "Online",

    credits:
      rawProgram?.credits ||
      "60",

    tuition:
      rawProgram?.tuition ||
      "25000",

    currency:
      rawProgram?.currency ||
      "AED",

    intake:
      rawProgram?.intake ||
      "March 2026",

    accreditation:
      rawProgram?.accreditation ||
      "UGC Approved",

    /* OVERVIEW */

    overview:
      rawProgram?.overview ||
      rawProgram?.description ||
      "Program overview content here.",

    highlights:
      safeArray(rawProgram?.highlights)
        .length > 0
        ? safeArray(rawProgram?.highlights)
        : [
            {
              title: "Live Projects",
              description:
                "Hands-on industry exposure",
            },
            {
              title: "Career Growth",
              description:
                "Strong placement opportunities",
            },
            {
              title: "Industry Mentors",
              description:
                "Learn from experts",
            },
            {
              title: "Global Exposure",
              description:
                "International curriculum",
            },
          ],

    /* CURRICULUM */

    curriculum:
      safeArray(rawProgram?.curriculum)
        .length > 0
        ? safeArray(rawProgram?.curriculum)
        : [
            {
              title:
                "Foundation Module",
              duration: "6 Months",
              credits: "20",
              description:
                "Core business fundamentals and strategic management.",
              outcomes: [
                "Business Strategy",
                "Marketing",
                "Leadership",
              ],
            },
            {
              title:
                "Advanced Specialization",
              duration: "6 Months",
              credits: "20",
              description:
                "Industry specialization and innovation management.",
              outcomes: [
                "Innovation",
                "Analytics",
                "Operations",
              ],
            },
          ],

    /* FEES */

    emiOptions:
      safeArray(rawProgram?.emiOptions)
        .length > 0
        ? safeArray(rawProgram?.emiOptions)
        : [
            {
              months: "12 Months",
              amount: "2150",
            },
            {
              months: "18 Months",
              amount: "1450",
            },
            {
              months: "24 Months",
              amount: "1100",
            },
          ],

    /* FACULTY */

    faculty:
      safeArray(rawProgram?.faculty)
        .length > 0
        ? safeArray(rawProgram?.faculty)
        : [
            {
              name:
                "Dr. Sarah Anderson",
              role:
                "Professor of Innovation",
              description:
                "Global academic expert",
            },
            {
              name:
                "Prof. James Chen",
              role:
                "Professor of Finance",
              description:
                "Industry specialist",
            },
          ],

    /* CAREERS */

    careers:
      safeArray(rawProgram?.careers)
        .length > 0
        ? safeArray(rawProgram?.careers)
        : [
            {
              value: "90%",
              label:
                "Career advancement within 1 year",
            },
            {
              value: "45%",
              label:
                "Average salary increase",
            },
            {
              value: "85%",
              label:
                "Promoted to senior roles",
            },
          ],

    /* FAQ */

    faq:
      safeArray(rawProgram?.faq)
        .length > 0
        ? safeArray(rawProgram?.faq)
        : [
            {
              question:
                "What are the admission requirements?",
              answer:
                "Bachelor degree required.",
            },
            {
              question:
                "Is EMI available?",
              answer:
                "Yes EMI options are available.",
            },
          ],

    /* SIDEBAR */

    quickActions: [
      {
        title:
          "Download Brochure",
      },
      {
        title:
          "Schedule a Call",
      },
      {
        title:
          "View Sample Certificate",
      },
    ],

    relatedPrograms,
  };

  return (
    <div className="bg-white">

      {/* HERO */}

      <ProgramHero program={program} />

      {/* TABS */}

      <ProgramTabs program={program} />

      {/* CONTENT */}

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

          {/* LEFT */}

          <div className="lg:col-span-8 space-y-24">

            {/* OVERVIEW */}

            <section id="overview">
              <Overview
                program={program}
              />
            </section>

            {/* CURRICULUM */}

            <section id="curriculum">
              <Curriculum
                program={program}
              />
            </section>

            {/* FEES */}

            <section id="fees">
              <Fees
                program={program}
              />
            </section>

            {/* FACULTY */}

            <section id="faculty">
              <Faculty
                program={program}
              />
            </section>

            {/* CAREERS */}

            <section id="careers">
              <Careers
                program={program}
              />
            </section>

            {/* FAQ */}

            <section id="faq">
              <FAQ
                program={program}
              />
            </section>

            {/* CTA */}

            <CTA
              
            />

          </div>

          {/* RIGHT SIDEBAR */}

          <div className="lg:col-span-4">

            <div className="sticky top-24 space-y-4">

              <Sidebar
                program={program}
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}