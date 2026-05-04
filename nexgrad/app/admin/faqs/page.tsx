"use client";

import { useEffect, useState } from "react";

export default function FAQManager() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [form, setForm] = useState({
    question: "",
    answer: "",
    status: "active",
  });

  const fetchFaqs = async () => {
    const res = await fetch("/api/faqs");
    const data = await res.json();
    setFaqs(data);
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const addFaq = async () => {
    await fetch("/api/faqs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setForm({ question: "", answer: "", status: "active" });
    fetchFaqs();
  };

  const deleteFaq = async (id: string) => {
    await fetch("/api/faqs", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    fetchFaqs();
  };

  const toggleStatus = async (id: string) => {
    await fetch("/api/faqs", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    fetchFaqs();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">FAQ Manager</h1>

      {/* ADD FORM */}
      <div className="border p-4 mb-6 bg-gray-50">
        <input
          type="text"
          placeholder="Question"
          value={form.question}
          onChange={(e) =>
            setForm({ ...form, question: e.target.value })
          }
          className="border p-2 w-full mb-2"
        />

        <textarea
          placeholder="Answer"
          value={form.answer}
          onChange={(e) =>
            setForm({ ...form, answer: e.target.value })
          }
          className="border p-2 w-full mb-2"
        />

        <button
          onClick={addFaq}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add FAQ
        </button>
      </div>

      {/* TABLE */}
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Question</th>
            <th className="border p-2">Answer</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {faqs.map((f, i) => (
            <tr key={f.id}>
              <td className="border p-2">{i + 1}</td>

              <td className="border p-2">{f.question}</td>

              <td className="border p-2">{f.answer}</td>

              <td className="border p-2">
                <span
                  className={`px-2 py-1 text-white text-xs rounded ${
                    f.status === "active"
                      ? "bg-green-600"
                      : "bg-gray-400"
                  }`}
                >
                  {f.status}
                </span>
              </td>

              <td className="border p-2 flex gap-2">
                <button
                  onClick={() => toggleStatus(f.id)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Toggle
                </button>

                <button
                  onClick={() => deleteFaq(f.id)}
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