export default function PersonalInfo() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">

      <h2 className="text-xl font-semibold mb-6">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <input placeholder="First Name" className="input-ui" />
        <input placeholder="Last Name" className="input-ui" />
        <input placeholder="Email Address" className="input-ui" />
        <input placeholder="Phone Number" className="input-ui" />
        <select className="input-ui">
          <option>Select country</option>
        </select>
        <input placeholder="City" className="input-ui" />

      </div>

    </div>
  );
}
