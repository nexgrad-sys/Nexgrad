"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { FiFilter, FiClock } from "react-icons/fi";
import { PiGraduationCap, PiBookOpenText } from "react-icons/pi";
import { LuBuilding2 } from "react-icons/lu";

export default function FiltersSidebar() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentDegree = searchParams.get("degree");
  const currentSubject = searchParams.get("subject");
  const currentRegion = searchParams.get("region");

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (params.get(key) === value) {
      params.delete(key); // uncheck
    } else {
      params.set(key, value);
    }

    params.set("page", "1"); // reset pagination
    router.push(`/programs?${params.toString()}`);
  };

  const formatLabel = (value: string) =>
    value.replace(/_/g, " ").toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());

  const DEGREE_OPTIONS = [
    "MBA",
    "DBA",
    "MCA",
    "MCOM",
    "MED",
    "BBA",
    "BCA",
    "BCOM",
  ];

  const SUBJECT_OPTIONS = [
    "GENERAL_MANAGEMENT",
    "FINANCE_BANKING",
    "MARKETING_STRATEGY",
    "HEALTHCARE_MANAGEMENT",
    "TECHNOLOGY_INNOVATION",
    "HUMAN_RESOURCES",
  ];

  const REGION_OPTIONS = [
    "Asia",
    "Europe",
    "UK",
    "US",
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm h-[650px] overflow-y-auto">

      {/* HEADER */}
      <div className="flex items-center gap-2 font-semibold mb-6">
        <FiFilter className="text-gray-500" />
        Filters
      </div>

      {/* DEGREE LEVEL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 font-medium mb-3">
          <PiGraduationCap className="text-red-500" />
          Degree Level
        </div>

        {DEGREE_OPTIONS.map((d) => (
          <label key={d} className="flex items-center gap-3 mb-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={currentDegree === d}
              onChange={() => updateFilter("degree", d)}
              className="w-4 h-4"
            />
            {d}
          </label>
        ))}
      </div>

      <hr className="my-6" />

      {/* SUBJECT AREA */}
      <div className="mb-6">
        <div className="flex items-center gap-2 font-medium mb-3">
          <PiBookOpenText className="text-red-500" />
          Subject Area
        </div>

        {SUBJECT_OPTIONS.map((s) => (
          <label key={s} className="flex items-center gap-3 mb-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={currentSubject === s}
              onChange={() => updateFilter("subject", s)}
              className="w-4 h-4"
            />
            {formatLabel(s)}
          </label>
        ))}
      </div>

      <hr className="my-6" />

      {/* REGION (Partner Filter) */}
      <div className="mb-6">
        <div className="flex items-center gap-2 font-medium mb-3">
          <LuBuilding2 className="text-red-500" />
          Region
        </div>

        {REGION_OPTIONS.map((r) => (
          <label key={r} className="flex items-center gap-3 mb-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={currentRegion === r}
              onChange={() => updateFilter("region", r)}
              className="w-4 h-4"
            />
            {r}
          </label>
        ))}
      </div>

      <hr className="my-6" />

      {/* FEATURED FILTERS */}
      <div>
        <div className="flex items-center gap-2 font-medium mb-3">
          <FiClock className="text-red-500" />
          Featured
        </div>

        {[
          { label: "Trending Programs", key: "trending" },
          { label: "New Launches", key: "newLaunch" },
          { label: "Dual Qualifications", key: "dualDegree" },
        ].map((item) => {
          const isChecked = searchParams.get(item.key) === "true";

          return (
            <label key={item.key} className="flex items-center gap-3 mb-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => updateFilter(item.key, "true")}
                className="w-4 h-4"
              />
              {item.label}
            </label>
          );
        })}
      </div>

    </div>
  );
}