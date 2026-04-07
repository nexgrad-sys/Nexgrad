"use client";

import { useEffect, useState } from "react";
import AdminTable from "@/app/components/admin/DataTable";
import CategoryModal from "@/app/components/modals/CategoryModal";

// /types/category.ts
export type Category = {
  id: string;
  title: string;
  slug: string;
  description?: string;
};

export default function CategoriesPage() {
  //const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
 const [data, setData] = useState<Category[]>([]);
const [editItem, setEditItem] = useState<Category | null>(null);

 const fetchData = async () => {
  const res = await fetch("/api/categories");

  console.log("STATUS:", res.status);

  const text = await res.text(); // 👈 use text instead of json
  console.log("RAW RESPONSE:", text);

  try {
    const json = JSON.parse(text);
    setData(json);
  } catch (err) {
    console.error("Invalid JSON:", err);
  }
};

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    await fetch(`/api/categories/${id}`, { method: "DELETE" });
    fetchData();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-semibold">Categories</h1>
        <button
          onClick={() => {
            setEditItem(null);
            setOpen(true);
          }}
          className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700"
        >
          + Add Category
        </button>
      </div>

     <AdminTable
  data={data}
  onEdit={(item: Category) => {
    setEditItem(item);
    setOpen(true);
  }}
  onDelete={handleDelete}
/>

      {open && (
        <CategoryModal
          data={editItem}
          onClose={() => setOpen(false)}
          refresh={fetchData}
        />
      )}
    </div>
  );
}