export default function DashboardPage() {
  return (
   <div className="grid grid-cols-4 gap-6 mb-6">

  <div className="bg-white p-5 rounded-xl shadow">
    <p className="text-sm text-gray-500">Total Programs</p>
    <h3 className="text-xl font-semibold">38</h3>
  </div>

  <div className="bg-white p-5 rounded-xl shadow">
    <p className="text-sm text-gray-500">Blogs</p>
    <h3 className="text-xl font-semibold">12</h3>
  </div>

  <div className="bg-white p-5 rounded-xl shadow">
    <p className="text-sm text-gray-500">Admissions</p>
    <h3 className="text-xl font-semibold">104</h3>
  </div>

  <div className="bg-white p-5 rounded-xl shadow">
    <p className="text-sm text-gray-500">Users</p>
    <h3 className="text-xl font-semibold">8</h3>
  </div>

</div>
  )
}