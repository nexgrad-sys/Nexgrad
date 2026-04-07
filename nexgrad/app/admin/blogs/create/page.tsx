"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBlogPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    content: "",
    status: "draft",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Blog Data:", formData);

    // 👉 Later connect API here
    // await fetch("/api/blogs", { method: "POST", body: JSON.stringify(formData) })

    alert("Blog Created Successfully!");

    router.push("/admin/blogs");
  };

  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-2xl font-semibold mb-6">Create Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter blog title"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. Technology"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block mb-1 font-medium">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Author name"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block mb-1 font-medium">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={6}
            className="w-full border px-3 py-2 rounded"
            placeholder="Write blog content..."
          />
        </div>

        {/* Status */}
        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            Create Blog
          </button>

          <button
            type="button"
            onClick={() => router.push("/admin/blogs")}
            className="bg-gray-400 text-white px-5 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}