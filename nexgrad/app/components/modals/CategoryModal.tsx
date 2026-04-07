"use client";

import { useState, useEffect } from "react";

export default function CategoryModal({ data, onClose, refresh }) {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
  });

  useEffect(() => {
    if (data) setForm(data);
  }, [data]);

  const handleSubmit = async () => {
    const method = data ? "PUT" : "POST";
    const url = data
      ? `/api/categories/${data.id}`
      : `/api/categories`;

    await fetch(url, {
      method,
      body: JSON.stringify(form),
    });

    refresh();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl w-96">
        <h2 className="mb-4 font-semibold">
          {data ? "Edit" : "Add"} Category
        </h2>

        <input
          placeholder="Title"
          className="w-full border p-2 mb-2"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          placeholder="Slug"
          className="w-full border p-2 mb-2"
          value={form.slug}
          onChange={(e) =>
            setForm({ ...form, slug: e.target.value })
          }
        />

        <textarea
          placeholder="Description"
          className="w-full border p-2 mb-2"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={handleSubmit}
            className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}