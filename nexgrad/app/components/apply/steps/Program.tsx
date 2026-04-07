export default function Program() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">

      <h2 className="text-xl font-semibold mb-6">
        Program Selection
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <select className="input-ui md:col-span-2">
          <option>Choose your program</option>
        </select>

        <select className="input-ui">
          <option>Select intake</option>
        </select>

        <select className="input-ui">
          <option>Select study mode</option>
        </select>

      </div>

      <textarea
        placeholder="Share your motivation for choosing this program..."
        className="input-ui mt-6 min-h-[120px]"
      />
    </div>
  );
}
