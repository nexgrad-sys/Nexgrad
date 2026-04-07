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
   <div className="bg-white rounded-xl shadow">

  <div className="flex justify-between items-center p-5 border-b">

    <h2 className="text-lg font-semibold">Programs</h2>

    <Link
      href="/admin/programs/create"
      className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700"
    >
      + Add Program
    </Link>

  </div>


  <table className="w-full text-sm">

    <thead className="bg-gray-50 text-gray-600">
      <tr>
        <th className="p-4 text-left">Title</th>
        <th className="text-left">Level</th>
        <th className="text-left">Tuition</th>
        <th className="text-left">Actions</th>
      </tr>
    </thead>

    <tbody>

      {data.map((p:any)=>(
        <tr
          key={p.id}
          className="border-t hover:bg-gray-50 transition"
        >

          <td className="p-4 font-medium">{p.title}</td>
          <td>{p.degreeLevel}</td>
          <td>{p.currency} {p.tuition}</td>

          <td>
            <Link
              href={`/admin/programs/edit/${p.id}`}
              className="text-blue-600 hover:underline"
            >
              Edit
            </Link>
          </td>

        </tr>
      ))}

    </tbody>

  </table>

</div>
  )
}