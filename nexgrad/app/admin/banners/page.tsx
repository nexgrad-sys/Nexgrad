"use client";

import { useEffect, useState } from "react";

export default function BannerPage() {
  const [banners, setBanners] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "active",
    image: "",
  });

  // Fetch banners
  const fetchBanners = async () => {
    const res = await fetch("/api/banners");
    const data = await res.json();
    setBanners(data);
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  // Handle file → base64
  const handleImage = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  // Save banner
  const handleSave = async () => {
    if (!form.image) return alert("Image required");

    await fetch("/api/banners", {
      method: "POST",
      body: JSON.stringify(form),
    });

    setForm({
      title: "",
      description: "",
      status: "active",
      image: "",
    });

    setShowForm(false);
    fetchBanners();
  };

  // Delete banner
 const deleteBanner = async (id: string) => {
  try {
    await fetch("/api/banners", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    // refresh list
    fetchBanners();
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Banner Manager</h1>

      {/* ADD BUTTON */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        + Add Banner
      </button>

      {/* FORM */}
      {showForm && (
        <div className="border p-4 mb-6 rounded bg-gray-50">
          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              className="border p-2"
            />

            <select
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
              className="border p-2"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="border p-2 col-span-2"
            />

            <input
              type="file"
              onChange={(e: any) => handleImage(e.target.files[0])}
              className="col-span-2"
            />
          </div>

          <button
            onClick={handleSave}
            className="mt-3 px-4 py-2 bg-green-600 text-white rounded"
          >
            Save Banner
          </button>
        </div>
      )}

      {/* TABLE */}
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>

        <tbody>
          {banners.map((b) => (
            <tr key={b.id}>
              <td className="p-2 border">
                <img
                  src={b.image}
                  className="w-32 h-16 object-cover"
                />
              </td>

              <td className="p-2 border">{b.title}</td>
              <td className="p-2 border">{b.description}</td>

              <td className="p-2 border">
                <span
                  className={`px-2 py-1 rounded text-white text-sm ${
                    b.status === "active"
                      ? "bg-green-500"
                      : "bg-gray-500"
                  }`}
                >
                  {b.status}
                </span>
              </td>

              <td className="p-2 border">
                <button
                  onClick={() => deleteBanner(b.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {banners.length === 0 && (
        <p className="mt-4 text-gray-500">No banners yet</p>
      )}
    </div>
  );
}