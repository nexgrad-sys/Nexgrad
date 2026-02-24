"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import FiltersSidebar from "./FiltersSidebar";
import ProgramCard from "./ProgramCard";

export default function ProgramsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [showFilters, setShowFilters] = useState(true);
  const [programs, setPrograms] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  // 🔹 URL STATE (single source of truth)
  const page = searchParams.get("page") || "1";
  const degree = searchParams.get("degree") || "";
  const subject = searchParams.get("subject") || "";
  const region = searchParams.get("region") || "";
  const sort = searchParams.get("sort") || "newest";
  const search = searchParams.get("search") || "";

  const [searchInput, setSearchInput] = useState(search);

  // Keep input synced with URL
  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  // 🔄 Fetch Programs
  useEffect(() => {
    async function fetchPrograms() {
      setLoading(true);

      const params = new URLSearchParams({
        page,
        degree,
        subject,
        region,
        sort,
      });

      if (search) params.append("search", search);

      const res = await fetch(`/api/programs?${params.toString()}`);
      const result = await res.json();

      setPrograms(result.data || []);
      setTotal(result.total || 0);
      setLoading(false);
    }

    fetchPrograms();
  }, [page, degree, subject, region, sort, search]);

  // 🔍 Search Submit
  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (searchInput.trim()) {
      params.set("search", searchInput.trim());
    } else {
      params.delete("search");
    }

    params.set("page", "1");
    router.push(`/programs?${params.toString()}`);
  };

  // 🔄 Change Page
  const changePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));
    router.push(`/programs?${params.toString()}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6">

      <p className="text-sm text-gray-400 mb-2">Home / Programs</p>

      <h1 className="text-4xl font-semibold mb-4">
        Explore Our Programs
      </h1>

      <p className="text-gray-600 max-w-3xl mb-8">
        Discover world-class MBA, DBA, and executive education programs.
      </p>

      {/* SEARCH + FILTER BUTTON */}
      <div className="flex gap-4 mb-6">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search programs..."
          className="input-ui flex-1"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />

        <button onClick={handleSearch} className="btn-primary">
          Search
        </button>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="btn-outline"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="grid grid-cols-12 gap-8">

        {/* SIDEBAR */}
        {showFilters && (
          <div className="col-span-3">
            <FiltersSidebar />
          </div>
        )}

        {/* PROGRAM LIST */}
        <div className={showFilters ? "col-span-9" : "col-span-12"}>

          {/* SORT */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-500">
              Showing {programs.length} of {total} programs
            </p>

            <select
              className="input-ui w-[220px]"
              value={sort}
              onChange={(e) => {
                const params = new URLSearchParams(searchParams.toString());
                params.set("sort", e.target.value);
                router.push(`/programs?${params.toString()}`);
              }}
            >
              <option value="newest">Newest First</option>
              <option value="tuition">Price: Low to High</option>
            </select>
          </div>

          {/* LOADING */}
          {loading && <p>Loading programs...</p>}

          {/* EMPTY STATE */}
          {!loading && programs.length === 0 && (
            <p className="text-gray-500">No programs found.</p>
          )}

          {/* CARDS */}
          <div className="space-y-6">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center gap-3 mt-10">
            {Array.from(
              { length: Math.ceil(total / 10) },
              (_, i) => i + 1
            ).map((p) => (
              <button
                key={p}
                onClick={() => changePage(p)}
                className={
                  p === Number(page)
                    ? "btn-primary px-4"
                    : "btn-outline px-4"
                }
              >
                {p}
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}