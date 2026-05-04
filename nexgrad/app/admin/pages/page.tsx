"use client";

import { useEffect, useState } from "react";

export default function PagesList() {
  const [pages, setPages] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/pages")
      .then((res) => res.json())
      .then((data) => setPages(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pages Manager</h1>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Path</th>
            <th className="border p-2">Slug</th>
            <th className="border p-2">Preview</th>
          </tr>
        </thead>

        <tbody>
          {pages.map((p, i) => (
            <tr key={i}>
              <td className="border p-2">{i + 1}</td>

              <td className="border p-2">{p.path}</td>

              <td className="border p-2">{p.slug}</td>

              <td className="border p-2">
                <a
                  href={p.path}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}