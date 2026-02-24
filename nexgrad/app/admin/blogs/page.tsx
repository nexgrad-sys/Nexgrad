"use client";

import { useEffect, useState } from "react";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then(res => res.json())
      .then(setBlogs);
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Manage Blogs</h1>

      {blogs.map(blog => (
        <div key={blog.id} className="p-4 border mb-4 rounded-lg">
          <p className="font-semibold">{blog.title}</p>
          <p className="text-sm text-gray-500">{blog.slug}</p>
        </div>
      ))}
    </div>
  );
}