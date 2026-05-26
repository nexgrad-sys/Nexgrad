"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProgramPage() {
  const router = useRouter();

  const [universities, setUniversities] = useState<any[]>([]);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    degreeLevel: "",
    tuition: "",
    duration: "",
    description: "",
    universities: [] as any[],
    status: "active",
  });

  /* FETCH UNIVERSITIES */

  useEffect(() => {
    fetch("/api/universities")
      .then((res) => res.json())
      .then((data) => setUniversities(data));
  }, []);

  /* TOGGLE UNIVERSITY */

  const toggleUniversity = (u: any) => {
    const exists = form.universities.find(
      (x: any) => x.id === u.id
    );

    if (exists) {
      setForm({
        ...form,
        universities: form.universities.filter(
          (x: any) => x.id !== u.id
        ),
      });
    } else {
      setForm({
        ...form,
        universities: [
          ...form.universities,
          {
            id: u.id,
            name: u.name,
          },
        ],
      });
    }
  };

  /* SAVE */

  const saveProgram = async () => {
    await fetch("/api/programs", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),
    });

    router.push("/admin/programs");
  };

  return (
    <div className="p-6 space-y-6">

      <div>
        <h1 className="text-2xl font-bold">
          Create Program
        </h1>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 grid grid-cols-2 gap-4">

        <input
          placeholder="Program Title"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
          className="border rounded-lg p-3"
        />

        <input
          placeholder="Slug"
          value={form.slug}
          onChange={(e) =>
            setForm({
              ...form,
              slug: e.target.value,
            })
          }
          className="border rounded-lg p-3"
        />

        <input
          placeholder="Degree Level"
          value={form.degreeLevel}
          onChange={(e) =>
            setForm({
              ...form,
              degreeLevel: e.target.value,
            })
          }
          className="border rounded-lg p-3"
        />

        <input
          placeholder="Tuition Fees"
          value={form.tuition}
          onChange={(e) =>
            setForm({
              ...form,
              tuition: e.target.value,
            })
          }
          className="border rounded-lg p-3"
        />

        <input
          placeholder="Duration"
          value={form.duration}
          onChange={(e) =>
            setForm({
              ...form,
              duration: e.target.value,
            })
          }
          className="border rounded-lg p-3"
        />

        <select
          value={form.status}
          onChange={(e) =>
            setForm({
              ...form,
              status: e.target.value,
            })
          }
          className="border rounded-lg p-3"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <textarea
          placeholder="Program Description"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
          className="border rounded-lg p-3 col-span-2 h-32"
        />

        {/* UNIVERSITIES */}

        <div className="col-span-2">
          <h3 className="font-semibold mb-3">
            Select Universities
          </h3>

          <div className="grid grid-cols-3 gap-3">

            {universities.map((u) => {
              const selected =
                form.universities.find(
                  (x: any) => x.id === u.id
                );

              return (
                <div
                  key={u.id}
                  onClick={() => toggleUniversity(u)}
                  className={`border rounded-xl p-3 cursor-pointer transition ${
                    selected
                      ? "border-red-600 bg-red-50"
                      : "hover:border-gray-400"
                  }`}
                >
                  <div className="flex items-center gap-3">

                    {u.logo && (
                      <img
                        src={u.logo}
                        className="w-12 h-12 object-contain"
                      />
                    )}

                    <div>
                      <p className="font-medium">
                        {u.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        {u.country}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* SAVE */}

        <div className="col-span-2">
          <button
            onClick={saveProgram}
            className="bg-red-600 text-white px-6 py-3 rounded-xl"
          >
            Save Program
          </button>
        </div>

      </div>
    </div>
  );
}