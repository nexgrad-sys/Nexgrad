"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProgramsMegaMenu() {
  const [programs, setPrograms] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/programs?limit=100")
      .then(res => res.json())
      .then(data => setPrograms(data.data || []));
  }, []);

  const grouped = programs.reduce((acc: any, program: any) => {
    if (!acc[program.degreeLevel]) {
      acc[program.degreeLevel] = [];
    }
    acc[program.degreeLevel].push(program);
    return acc;
  }, {});

  return (
    <div className="absolute left-0 top-full mt-4 w-[1000px] bg-white shadow-2xl rounded-2xl p-10 z-50">

      <div className="grid grid-cols-4 gap-10">

        {Object.keys(grouped).map((degree) => (
          <div key={degree}>
            <h4 className="text-red-600 font-semibold mb-4">
              {degree}
            </h4>

            <ul className="space-y-3 text-sm text-gray-700">
              {grouped[degree].slice(0, 6).map((program: any) => (
                <li key={program.id}>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="hover:text-red-600 transition"
                  >
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </div>
  );
}