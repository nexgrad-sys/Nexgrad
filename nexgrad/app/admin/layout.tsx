"use client"

import Sidebar from "@/app/components/admin/Sidebar"
import Topbar from "@/app/components/admin/Topbar"

export default function AdminLayout({ children }: any) {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-50">

        <Topbar />

        <div className="p-6 overflow-y-auto">
          {children}
        </div>

      </div>
    </div>
  )
}