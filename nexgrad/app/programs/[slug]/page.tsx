import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";

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

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProgramDetails({ params }: PageProps) {
  const { slug } = await params; 

 if (!slug) {
    return notFound();
  }

  const program = await prisma.program.findUnique({
    where: { slug },
    include: { university: true },
  });

  if (!program) {
    return notFound();
  }

  return (
    <div>

      <ProgramHero program={program} />
      <ProgramTabs program={program} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-12 mt-16">

        <div className="col-span-8 space-y-24">

          <section id="overview" className="scroll-mt-32">
            <Overview program={program} />
          </section>

          <section id="curriculum" className="scroll-mt-32">
            <Curriculum program={program} />
          </section>

          <section id="fees" className="scroll-mt-32">
            <Fees program={program} />
          </section>

          <section id="faculty" className="scroll-mt-32">
            <Faculty program={program} />
          </section>

          <section id="careers" className="scroll-mt-32">
            <Careers program={program} />
          </section>

          <section id="faq" className="scroll-mt-32">
            <FAQ program={program} />
          </section>

          <CTA />

        </div>

        <div className="col-span-4">
          <Sidebar  />
        </div>

      </div>

    </div>
  );
}