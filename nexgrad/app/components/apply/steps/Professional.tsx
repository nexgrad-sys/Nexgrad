export default function Professional() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">

      <h2 className="text-xl font-semibold mb-6">
        Professional Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <input placeholder="Current Job Title" className="input-ui" />
        <input placeholder="Company" className="input-ui" />

        <select className="input-ui">
          <option>Select years of experience</option>
        </select>

        <select className="input-ui">
          <option>Select industry</option>
        </select>

      </div>

      <textarea
        placeholder="What are your career aspirations?"
        className="input-ui mt-6 min-h-[120px]"
      />
    </div>
  );
}
