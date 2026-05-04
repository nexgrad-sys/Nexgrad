"use client";

import { useEffect, useState } from "react";

export default function TestimonialsManager() {
  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState({
    name: "",
    role: "",
    message: "",
    image: "",
    rating: 5,
    status: "active",
  });

  const fetchData = async () => {
    const res = await fetch("/api/testimonials");
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addItem = async () => {
    await fetch("/api/testimonials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setForm({
      name: "",
      role: "",
      message: "",
      image: "",
      rating: 5,
      status: "active",
    });

    fetchData();
  };

  const deleteItem = async (id: string) => {
    await fetch("/api/testimonials", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    fetchData();
  };

  const toggleStatus = async (id: string) => {
    await fetch("/api/testimonials", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    fetchData();
  };

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        image: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Testimonials Manager</h1>

      {/* FORM */}
      <div className="border p-4 mb-6 bg-gray-50 grid gap-2">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2"
        />

        <input
          placeholder="Role (e.g. Student)"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="border p-2"
        />

        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="border p-2"
        />

        <input
          type="number"
          min={1}
          max={5}
          value={form.rating}
          onChange={(e) =>
            setForm({ ...form, rating: Number(e.target.value) })
          }
          className="border p-2"
        />

        <input
          type="file"
          onChange={(e) =>
            e.target.files && handleImageUpload(e.target.files[0])
          }
        />

        {form.image && (
          <img src={form.image} className="w-24 h-24 object-cover" />
        )}

        <button
          onClick={addItem}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Testimonial
        </button>
      </div>

      {/* TABLE */}
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Image</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Message</th>
            <th className="border p-2">Rating</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((t) => (
            <tr key={t.id}>
              <td className="border p-2">
                {t.image && (
                  <img
                    src={t.image}
                    className="w-16 h-16 object-cover"
                  />
                )}
              </td>

              <td className="border p-2">{t.name}</td>
              <td className="border p-2">{t.role}</td>
              <td className="border p-2">{t.message}</td>
              <td className="border p-2">{t.rating} ⭐</td>

              <td className="border p-2">
                <span
                  className={`px-2 py-1 text-white text-xs rounded ${
                    t.status === "active"
                      ? "bg-green-600"
                      : "bg-gray-400"
                  }`}
                >
                  {t.status}
                </span>
              </td>

              <td className="border p-2 flex gap-2">
                <button
                  onClick={() => toggleStatus(t.id)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Toggle
                </button>

                <button
                  onClick={() => deleteItem(t.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}