"use client";

import { useEffect, useState } from "react";
import AdminTable from "@/app/components/admin/DataTable";
import BadgeModal from "@/app/components/modals/BadgeModal";

export default function BadgesPage() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const fetchData = async () => {
    const res = await fetch("/api/badges");
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    await fetch(`/api/badges/${id}`, { method: "DELETE" });
    fetchData();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-semibold">Badges</h1>
        <button
          onClick={() => {
            setEditItem(null);
            setOpen(true);
          }}
          className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700"
        >
          + Add Badge
        </button>
      </div>

      <AdminTable
        data={data}
        onEdit={(item) => {
          setEditItem(item);
          setOpen(true);
        }}
        onDelete={handleDelete}
      />

      {open && (
        <BadgeModal
          data={editItem}
          onClose={() => setOpen(false)}
          refresh={fetchData}
        />
      )}
    </div>
  );
}