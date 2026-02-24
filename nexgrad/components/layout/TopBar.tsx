"use client";

import { FiLogIn, FiGlobe } from "react-icons/fi";
import { PiStudent } from "react-icons/pi";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function TopBar() {
    const router = useRouter()
  return (
    <div className="w-full bg-[#2b2b2b] text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

        {/* Left */}
       
        <div className="flex gap-6 items-center ">
             <Link href="/apply">
          <button className="flex items-center gap-2 hover:text-black"
          onClick={()=>router.push('/apply')}
          >
            <FiLogIn size={16} />
            Login
          </button>
          </Link>
          <Link href="/alumni">
          <button className="flex items-center gap-2 hover:text-black">
            <PiStudent size={16} />
            Alumni
          </button>
          </Link>
        </div>

        {/* Right */}
        <div className="flex gap-6 items-center">
          <button className="flex items-center gap-2">
            <FiGlobe size={16} />
            EN
          </button>
          <button>Accessibility</button>
        </div>

      </div>
    </div>
  );
}
