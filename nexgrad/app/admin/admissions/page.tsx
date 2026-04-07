export default function AdmissionsPage() {
  const admissions = [
    {
      id: 1,
      name: "Rahul Sharma",
      class: "10th",
      email: "rahul@example.com",
      phone: "9876543210",
      status: "Pending",
    },
    {
      id: 2,
      name: "Priya Singh",
      class: "9th",
      email: "priya@example.com",
      phone: "9123456780",
      status: "Approved",
    },
    {
      id: 3,
      name: "Aman Verma",
      class: "8th",
      email: "aman@example.com",
      phone: "9988776655",
      status: "Rejected",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Admissions</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Student Name</th>
              <th className="px-4 py-2 border">Class</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {admissions.map((student, index) => (
              <tr key={student.id} className="text-center">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{student.name}</td>
                <td className="px-4 py-2 border">{student.class}</td>
                <td className="px-4 py-2 border">{student.email}</td>
                <td className="px-4 py-2 border">{student.phone}</td>
                <td
                  className={`px-4 py-2 border font-medium ${
                    student.status === "Approved"
                      ? "text-green-600"
                      : student.status === "Rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {student.status}
                </td>
                <td className="px-4 py-2 border space-x-2">
                  <button className="px-3 py-1 bg-green-500 text-white rounded">
                    Approve
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}