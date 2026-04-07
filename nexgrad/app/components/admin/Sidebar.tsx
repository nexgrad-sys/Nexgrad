"use client"

import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="w-[240px] bg-black text-white flex flex-col">

      <div className="p-6 text-xl font-bold border-b border-gray-800 flex gap-2 ">
       <div className="w-9 h-9 bg-red-600 text-white flex items-center justify-center font-bold rounded">
            N
          </div>
          <span className="text-xl font-semibold mt-1">NexGrad</span>
      </div>

      <nav className="flex flex-col p-4 space-y-2 text-sm">

        <Link href="/admin/dashboard" className="px-3 py-2 rounded hover:bg-gray-800">
          Dashboard
        </Link>

        <Link href="/admin/programs" className="px-3 py-2 rounded hover:bg-gray-800">
          Programs
        </Link>

        <Link href="/admin/blogs" className="px-3 py-2 rounded hover:bg-gray-800">
          Blogs
        </Link>

        <Link href="/admin/admissions" className="px-3 py-2 rounded hover:bg-gray-800">
          Admissions
        </Link>

         <Link href="/admin/badges" className="px-3 py-2 rounded hover:bg-gray-800">
          Badges
        </Link>

         <Link href="/admin/categories" className="px-3 py-2 rounded hover:bg-gray-800">
          Categories
        </Link>

      </nav>
    </div>
  )
}