"use client";

import { FiLock } from "react-icons/fi";

export default function AlumniLogin() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-10 w-full max-w-md text-center">

      {/* ICON */}
      <div className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl">
        <FiLock />
      </div>

      {/* TITLE */}
      <h2 className="text-2xl font-semibold mb-2">
        Alumni Portal
      </h2>

      <p className="text-gray-500 mb-8">
        Sign in to access exclusive alumni resources
      </p>

      {/* FORM */}
      <div className="text-left space-y-5">

        <div>
          <label className="text-sm mb-1 block">Email Address</label>
          <input
            type="email"
            placeholder="your.email@example.com"
            className="input-ui"
          />
        </div>

        <div>
          <label className="text-sm mb-1 block">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input-ui"
          />
        </div>

        {/* REMEMBER */}
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>

          <button className="text-red-600 hover:underline">
            Forgot password?
          </button>
        </div>

        {/* BUTTON */}
        <button className="btn-primary w-full">
          Sign In
        </button>

        <div className="border-t pt-5 text-center text-sm">
          Not registered yet?{" "}
          <span className="text-red-600 cursor-pointer hover:underline">
            Create an account
          </span>
        </div>

      </div>
    </div>
  );
}
