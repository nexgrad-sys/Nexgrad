"use client";

import { useState } from "react";
import { FiTrendingUp, FiStar } from "react-icons/fi";

export default function TabSwitcher() {
  const [active, setActive] = useState("trending");

  const tabStyle = (name: string) =>
    `px-5 py-2 rounded-lg flex items-center gap-2 transition ${
      active === name
        ? "bg-red-600 text-white shadow-md"
        : "bg-gray-100 text-gray-600"
    }`;

  return (
    <div className="flex justify-center gap-3">
      <button onClick={() => setActive("trending")} className={tabStyle("trending")}>
        🔥 Trending
      </button>
      <button onClick={() => setActive("new")} className={tabStyle("new")}>
        ✨ New
      </button>
      <button onClick={() => setActive("top")} className={tabStyle("top")}>
        ⭐ Top Rated
      </button>
    </div>
  );
}
