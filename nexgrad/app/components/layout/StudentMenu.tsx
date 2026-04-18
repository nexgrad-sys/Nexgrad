import Link from "next/link";

export default function StudentMenu() {
  return (
    <div className="absolute top-full mt-4 bg-white shadow-xl rounded-2xl p-6 w-[260px] z-50 animate-fadeIn">

      <div className="flex flex-col space-y-3 text-gray-700 text-sm">

        {/* <Link href="/life-at-nexgrad" className="hover:text-red-600 transition">
          Life at NexGrad
        </Link> */}

         <Link href="/campus" className="hover:text-red-600 transition">
         Campus Life
        </Link>

        {/* <Link href="/testimonials" className="hover:text-red-600 transition">
          Testimonials
        </Link> */}

        <Link href="/career" className="hover:text-red-600 transition">
          Career Servics
        </Link>

        {/* <Link href="/alumni" className="hover:text-red-600 transition">
          Alumni
        </Link> */}

        <Link href="/support" className="hover:text-red-600 transition">
          Student Support
        </Link>

        <Link href="/events" className="hover:text-red-600 transition">
          Events & Activities
        </Link>

        {/* <Link href="/blogs" className="hover:text-red-600 transition">
          Blogs
        </Link> */}

        <Link href="/alumni" className="hover:text-red-600 transition">
          Alumni Sucess
        </Link>

      </div>

    </div>
  );
}