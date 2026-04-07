"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function ProgramsPage() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("/api/programs")
      .then(res => res.json())
      .then(res => setData(res.data))
  }, [])

  return (
    <div>

      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Programs</h2>
        <Link href="/admin/programs/create" className="bg-red-600 text-white px-4 py-2 rounded">
          Add Program
        </Link>
      </div>

      <table className="w-full bg-white rounded shadow">

        <thead>
          <tr className="text-left text-sm border-b">
            <th className="p-3">Title</th>
            <th>Level</th>
            <th>Tuition</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((p:any)=>(
            <tr key={p.id} className="border-b text-sm">

              <td className="p-3">{p.title}</td>
              <td>{p.degreeLevel}</td>
              <td>{p.tuition}</td>

              <td>
                <Link href={`/admin/programs/edit/${p.id}`}>Edit</Link>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}