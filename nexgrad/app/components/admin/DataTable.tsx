"use client";

export default function AdminTable({ data, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow">
      {data.map((item: any) => (
        <div
          key={item.id}
          className="flex justify-between items-center p-4 border-b"
        >
          <div>
            <h2 className="font-medium">{item.title || item.name}</h2>
            <p className="text-sm text-gray-500">
              {item.slug || item.color}
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