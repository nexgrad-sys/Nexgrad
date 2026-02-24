export default function Review() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">

      <h2 className="text-xl font-semibold mb-6">
        Review Application
      </h2>

      <div className="space-y-6">

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Personal Information</h4>
          <p className="text-sm text-gray-500">Not provided</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Academic Background</h4>
          <p className="text-sm text-gray-500">Not provided</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Professional Experience</h4>
          <p className="text-sm text-gray-500">Not provided</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Program Selection</h4>
          <p className="text-sm text-gray-500">Not selected</p>
        </div>

        {/* AGREEMENT */}
        <label className="flex items-start gap-3 mt-6">
          <input type="checkbox" className="mt-1" />
          <span className="text-sm">
            I confirm that all information provided is accurate and I agree
            to the Terms & Conditions and Privacy Policy.
          </span>
        </label>

      </div>
    </div>
  );
}
