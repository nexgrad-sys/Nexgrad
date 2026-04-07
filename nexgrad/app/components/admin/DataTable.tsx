"use client";

type AdminTableProps<T> = {
  data: T[];
  onEdit: (item: T) => void;
  onDelete: (id: string) => void;
};

export default function AdminTable<T extends { id: string; [key: string]: any }>({
  data,
  onEdit,
  onDelete,
}: AdminTableProps<T>) {
  return (
    <div className="bg-white rounded-2xl shadow">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center p-4 border-b"
        >
          <div>
            <h2 className="font-medium">
              {item.title || item.name || "No Title"}
            </h2>
            <p className="text-sm text-gray-500">
              {item.slug || item.color || "-"}
            </p>
          </div>

          <div className="flex gap-3">
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}