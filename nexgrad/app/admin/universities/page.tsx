"use client";

import { useEffect, useState } from "react";

export default function UniversitiesPage() {
  const [universities, setUniversities] = useState<any[]>([]);

  const [form, setForm] = useState({
    name: "",
    country: "",
    city:"",
    website: "",
    accreditation: "",
    degreeTypes: "",
    description: "",
    featured: false,
    status: "active",
    logo: "",
  });

  const [loading, setLoading] = useState(false);

  /* ---------------- FETCH ---------------- */

  const fetchUniversities = async () => {
    try {
      const res = await fetch("/api/universities");
      const data = await res.json();
      setUniversities(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUniversities();
  }, []);

  /* ---------------- IMAGE ---------------- */

  const handleLogo = (file: File) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        logo: reader.result as string,
      }));
    };

    reader.readAsDataURL(file);
  };

  /* ---------------- SAVE ---------------- */

  const saveUniversity = async () => {
    if (!form.name) {
      return alert("University name required");
    }

    setLoading(true);

    try {
      await fetch("/api/universities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          degreeTypes: form.degreeTypes
            .split(",")
            .map((d) => d.trim())
            .filter(Boolean),
        }),
      });

      setForm({
        name: "",
        country: "",
        city:"",
        website: "",
        accreditation: "",
        degreeTypes: "",
        description: "",
        featured: false,
        status: "active",
        logo: "",
      });

      fetchUniversities();
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  /* ---------------- DELETE ---------------- */

  const deleteUniversity = async (id: string) => {
    try {
      await fetch("/api/universities", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      fetchUniversities();
    } catch (err) {
      console.error(err);
    }
  };

  /* ---------------- TOGGLE STATUS ---------------- */

  const toggleStatus = async (id: string) => {
    try {
      await fetch("/api/universities", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      fetchUniversities();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Universities Manager
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Manage partner universities, accreditations and programs.
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="bg-white rounded-2xl shadow p-6 grid grid-cols-2 gap-4">

        {/* NAME */}
        <div>
          <label className="text-sm font-medium mb-1 block">
            University Name
          </label>

          <input
            placeholder="Harvard Business School"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* COUNTRY */}
        <div>
          <label className="text-sm font-medium mb-1 block">
            Country
          </label>

          <input
            placeholder="United States"
            value={form.country}
            onChange={(e) =>
              setForm({
                ...form,
                country: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">
            City
          </label>

          <input
            placeholder="United States"
            value={form.city}
            onChange={(e) =>
              setForm({
                ...form,
                city: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* WEBSITE */}
        <div>
          <label className="text-sm font-medium mb-1 block">
            Website
          </label>

          <input
            placeholder="https://university.com"
            value={form.website}
            onChange={(e) =>
              setForm({
                ...form,
                website: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* ACCREDITATION */}
        <div>
          <label className="text-sm font-medium mb-1 block">
            Accreditation
          </label>

          <input
            placeholder="AACSB, EQUIS"
            value={form.accreditation}
            onChange={(e) =>
              setForm({
                ...form,
                accreditation: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

  <div >
     <label className="text-sm font-medium mb-1 block">
           Status
          </label>
        <select
            value={form.status}
            
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          >
            <option  value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
</div>
        {/* DEGREE TYPES */}
        <div className="col-span-2">
          <label className="text-sm font-medium mb-1 block">
            Degree Types
          </label>

          <input
            placeholder="MBA, DBA, MSc"
            value={form.degreeTypes}
            onChange={(e) =>
              setForm({
                ...form,
                degreeTypes: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* DESCRIPTION */}
        <div className="col-span-2">
          <label className="text-sm font-medium mb-1 block">
            Description
          </label>

          <textarea
            placeholder="University overview..."
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3 h-32"
          />
        </div>

        {/* LOGO */}
        <div>
          <label className="text-sm font-medium mb-1 block">
            University Logo
          </label>

          <input
            type="file"
            onChange={(e: any) =>
              handleLogo(e.target.files[0])
            }
            className="w-full"
          />

          {form.logo && (
            <img
              src={form.logo}
              className="w-24 h-24 object-contain border rounded-lg mt-3"
            />
          )}
        </div>

        {/* OPTIONS */}
        <div className="flex flex-col gap-4">

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) =>
                setForm({
                  ...form,
                  featured: e.target.checked,
                })
              }
            />

            <span className="text-sm">
              Featured University
            </span>
          </div>

          

          <button
            onClick={saveUniversity}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white rounded-lg py-3 font-medium"
          >
            {loading ? "Saving..." : "Save University"}
          </button>

        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Logo</th>
              <th className="p-4 text-left">University</th>
              <th className="p-4 text-left">Country</th>
              <th className="p-4 text-left">Accreditation</th>
              <th className="p-4 text-left">Programs</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Featured</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {universities.map((u) => (
              <tr
                key={u.id}
                className="border-t hover:bg-gray-50"
              >

                {/* LOGO */}
                <td className="p-4">
                  {u.logo ? (
                    <img
                      src={u.logo}
                      className="w-14 h-14 object-contain border rounded-lg"
                    />
                  ) : (
                    <div className="w-14 h-14 border rounded-lg bg-gray-100" />
                  )}
                </td>

                {/* NAME */}
                <td className="p-4">
                  <div className="font-medium">
                    {u.name}
                  </div>

                  {u.website && (
                    <a
                      href={u.website}
                      target="_blank"
                      className="text-blue-600 text-xs"
                    >
                      Visit Website
                    </a>
                  )}
                </td>

                {/* COUNTRY */}
                <td className="p-4">
                  {u.country}
                </td>

                {/* ACCREDITATION */}
                <td className="p-4">
                  {u.accreditation}
                </td>

                {/* PROGRAMS */}
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {u.degreeTypes?.map((d: string) => (
                      <span
                        key={d}
                        className="bg-gray-100 px-2 py-1 rounded text-xs"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </td>

                {/* STATUS */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs ${
                      u.status === "active"
                        ? "bg-green-600"
                        : "bg-gray-500"
                    }`}
                  >
                    {u.status}
                  </span>
                </td>

                {/* FEATURED */}
                <td className="p-4 text-xl">
                  {u.featured ? "⭐" : "—"}
                </td>

                {/* ACTIONS */}
                <td className="p-4">
                  <div className="flex gap-2">

                    <button
                      onClick={() => toggleStatus(u.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-xs"
                    >
                      Toggle
                    </button>

                    <button
                      onClick={() => deleteUniversity(u.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-xs"
                    >
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

        {universities.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            No universities added yet.
          </div>
        )}
      </div>
    </div>
  );
}