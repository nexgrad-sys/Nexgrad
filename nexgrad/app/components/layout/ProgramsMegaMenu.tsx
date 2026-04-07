"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function ProgramsMegaMenu() {

  const [programs, setPrograms] = useState<any[]>([])
  const [filtered, setFiltered] = useState<any[]>([])
  const [preview, setPreview] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeLevel, setActiveLevel] = useState<string>("")

  // 🔥 FETCH DATA
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true)

        const res = await fetch("/api/programs?limit=100")
        const json = await res.json()

        const data = json?.data || []

        setPrograms(data)

        // ✅ DEFAULT FIRST LEVEL
        if (data.length > 0) {
          const firstLevel = data[0].degreeLevel

          const defaultPrograms = data.filter(
            (p: any) => p.degreeLevel === firstLevel
          )

          setFiltered(defaultPrograms)
          setPreview(defaultPrograms[0] || null)
          setActiveLevel(firstLevel)
        }

      } catch (err) {
        console.error("Menu API error:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPrograms()
  }, [])


  // 🔥 FILTER BY LEVEL
  const filterLevel = (level: string) => {
    setActiveLevel(level)

    const result = programs.filter((p: any) => p.degreeLevel === level)

    setFiltered(result)
    setPreview(result[0] || null)
  }


  // 🔥 FILTER FEATURED
  const filterFeatured = (type: string) => {
    let result: any[] = []

    if (type === "TRENDING") result = programs.filter(p => p.trending)
    if (type === "NEW") result = programs.filter(p => p.newLaunch)
    if (type === "DUAL") result = programs.filter(p => p.dualDegree)

    setFiltered(result)
    setPreview(result[0] || null)
    setActiveLevel("") // remove highlight
  }


  // 🔥 UNIQUE LEVELS
  const levels = [...new Set(programs.map(p => p.degreeLevel))]


  // 🔥 LOADER UI
  if (loading) {
    return (
      <div className="absolute left-0 top-full mt-4 w-[1100px] bg-white shadow-2xl rounded-2xl p-10 z-50 flex justify-center items-center h-[200px]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-red-600"></div>
      </div>
    )
  }


  // 🔥 MAIN UI
  return (
    <div className="absolute left-0 top-full mt-4 w-[985px] bg-white shadow-2xl rounded-2xl p-6 z-50">

      <div className="flex gap-10">

        {/* COLUMN 1 — BY LEVEL */}
        <div className="w-[180px]">
          <h3 className="text-red-600 font-semibold mb-3">BY LEVEL</h3>

          <div className="space-y-2">
            {levels.map((level: any) => (
              <div
                key={level}
                onMouseEnter={() => filterLevel(level)}
                className={`cursor-pointer hover:text-red-600 ${
                  activeLevel === level ? "text-red-600 font-semibold" : ""
                }`}
              >
                {level}
              </div>
            ))}
          </div>
        </div>


        {/* COLUMN 2 — PROGRAMS */}
        <div className="w-[320px]">
          <h3 className="text-red-600 font-semibold mb-3">PROGRAMS</h3>

          <div className="space-y-2 text-sm">
            {filtered.map((p: any) => (
              <div
                key={p.id}
                onMouseEnter={() => setPreview(p)}
                className="cursor-pointer hover:text-red-600"
              >
                <Link href={`/programs/${p.slug}`}>
                  {p.title}
                </Link>
              </div>
            ))}
          </div>
        </div>


        {/* COLUMN 3 — DETAILS */}
        <div className="w-[260px]">
          {preview && (
            <div className="bg-gray-100 p-4 rounded-xl shadow">

              <h4 className="font-semibold mb-2 text-sm">
                {preview.title}
              </h4>

              <p className="text-xs text-gray-600 mb-1">
                Duration: {preview.durationMonths} months
              </p>

              <p className="text-xs text-gray-600 mb-1">
                Tuition: {preview.currency} {preview.tuition}
              </p>

              <p className="text-xs text-gray-500">
                {preview.mode}
              </p>

            </div>
          )}
        </div>


        {/* COLUMN 4 — FEATURED */}
        <div className="w-[200px]">
          <h3 className="text-red-600 font-semibold mb-3">FEATURED</h3>

          <div className="space-y-2 text-sm">
            <div
              onMouseEnter={() => filterFeatured("TRENDING")}
              className="cursor-pointer hover:text-red-600"
            >
              Trending Programs
            </div>

            <div
              onMouseEnter={() => filterFeatured("NEW")}
              className="cursor-pointer hover:text-red-600"
            >
              New Launches
            </div>

            <div
              onMouseEnter={() => filterFeatured("DUAL")}
              className="cursor-pointer hover:text-red-600"
            >
              Dual Qualifications
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}