"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Programs", path: "/admin/programs" },
    { name: "Blogs", path: "/admin/blogs" },
    { name: "Banners", path: "/admin/banners" },
    { name: "Pages", path: "/admin/pages" },
    { name: "Universities", path: "/admin/universities" },
    { name: "Admissions", path: "/admin/admissions" },
    { name: "Badges", path: "/admin/badges" },
    { name: "Categories", path: "/admin/categories" },
    { name: "Page Builder", path: "/admin/builder" },
    { name: "FAQ's", path: "/admin/faqs" },
    { name: "Testimonials", path: "/admin/testimonials" },
  ];

  return (
    <div className="w-[240px] bg-black text-white flex flex-col">

      {/* LOGO */}
      <div className="p-6 text-xl font-bold border-b border-gray-800 flex gap-2 bg-light">
       <img src="/logo.jpeg" style={{height:'100px'}} />
      </div>

      {/* MENU */}
      <nav className="flex flex-col p-4 space-y-2 text-sm">

        {menu.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 py-2 rounded transition 
                ${isActive 
                  ? "bg-red-600 text-white" 
                  : "hover:bg-gray-800 text-gray-300"
                }
              `}
            >
              {item.name}
            </Link>
          );
        })}

      </nav>
    </div>
  );
}