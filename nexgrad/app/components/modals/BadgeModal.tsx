"use client";

import { useEffect, useState } from "react";

interface Badge {
  id?: string;
  name: string;
  color: string;
}

interface Props {
  data?: Badge | null;
  onClose: () => void;
  refresh: () => void;
}

export default function BadgeModal({ data, onClose, refresh }: Props) {
  const [form, setForm] = useState<Badge>({
    name: "",
    color: "#000000",
  });

  const [loading, setLoading] = useState(false);

  // Load edit data
  useEffect(() => {
    if (data) {
      setForm({
        name: data.name || "",
        color: data.color || "#000000",
      });
    }
  }, [data]);

  // Handle input change
  const handleChange = (key: keyof Badge, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Submit handler
  const handleSubmit = async () => {
    if (!form.name.trim()) {
      alert("Badge name is required");
      return;
    }

    setLoading(true);

    try {
      const method = data ? "PUT" : "POST";
      const url = data
        ? `/api/badges/${data.id}`
        : `/api/badges`;

      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      refresh();
      onClose();
    } catch (error) {
      console.error("Error saving badge:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg">
        {/* Header */}
        <h2 className="text-lg font-semibold mb-4">
          {data ? "Edit Badge" : "Add Badge"}
        </h2>

        {/* Name Input */}
        <div className="mb-3">
          <label className="text-sm font-medium">Badge Name</label>
          <input
            type="text"
            placeholder="Enter badge name"
            className="w-full border rounded-lg p-2 mt-1"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>

        {/* Color Picker */}
        <div className="mb-4">
          <label className="text-sm font-medium">Badge Color</label>

          <div className="flex items-center gap-3 mt-2">
            <input
              type="color"
              value={form.color}
              onChange={(e) => handleChange("color", e.target.value)}
              className="w-12 h-10 border rounded cursor-pointer"
            />

            <input
              type="text"
              value={form.color}
              onChange={(e) => handleChange("color", e.target.value)}
              className="border p-2 rounded-lg w-full"
              placeholder="#000000"
            />
          </div>

          {/* Preview */}
          <div className="mt-3">
            <span
              className="px-3 py-1 rounded text-white text-sm"
              style={{ backgroundColor: form.color }}
            >
              {form.name || "Preview"}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}