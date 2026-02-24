"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

export default function ProgramSearchCard() {
  const router = useRouter();

  const [degreeLevels, setDegreeLevels] = useState<string[]>([]);
  const [subjectAreas, setSubjectAreas] = useState<string[]>([]);

  const [degree, setDegree] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    fetch("/api/program-filters")
      .then((res) => res.json())
      .then((data) => {
        setDegreeLevels(data.degreeLevels);
        setSubjectAreas(data.subjectAreas);
      });
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (degree) params.set("degree", degree);
    if (subject) params.set("subject", subject);

    router.push(`/programs?${params.toString()}`);
  };

  return (
    <div className="bg-white text-black rounded-2xl shadow-2xl p-8 w-full max-w-md">

      <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
        <FiSearch className="text-red-500" />
        Find Your Perfect Program
      </h3>

      {/* Degree Level */}
      <div className="mb-4">
        <label className="text-sm text-gray-600">
          Degree Level
        </label>
        <select
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          className="w-full mt-2 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 transition"
        >
          <option value="">Select degree level</option>
          {degreeLevels.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Field */}
      <div className="mb-6">
        <label className="text-sm text-gray-600">
          Field of Study
        </label>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full mt-2 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 transition"
        >
          <option value="">Select field</option>
          {subjectAreas.map((item) => (
            <option key={item} value={item}>
              {item.replace(/_/g, " ")}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleSearch}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg flex justify-center items-center gap-2 transition shadow-md"
      >
        <FiSearch />
        Search Programs
      </button>
    </div>
  );
}