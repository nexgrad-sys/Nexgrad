export default function Academic() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">

      <h2 className="text-xl font-semibold mb-6">
        Academic Background
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <select className="input-ui">
          <option>Select degree</option>
        </select>

        <input placeholder="Institution" className="input-ui" />

        <input placeholder="Graduation Year" className="input-ui" />

        <input placeholder="GPA / Grade" className="input-ui" />

      </div>
    </div>
  );
}
