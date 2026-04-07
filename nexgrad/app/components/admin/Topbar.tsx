"use client";

import { useState } from "react";

export default function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* Left */}
      <h1 className="font-semibold text-lg">Admin Dashboard</h1>

      {/* Right - Profile */}
      <div className="relative">
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 cursor-pointer"
        >
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
            A
          </div>

          {/* Info */}
          <div className="hidden md:block">
            <p className="text-sm font-medium">Admin</p>
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
        </div>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-xl border z-50">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              Profile
            </button>

            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              Settings
            </button>

            <div className="border-t" />

            <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}