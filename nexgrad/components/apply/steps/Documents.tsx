import { FiUpload } from "react-icons/fi";

const docs = [
  "Resume / CV",
  "Academic Transcripts",
  "Degree Certificate",
  "Passport Copy",
  "Recommendation Letter",
  "Statement of Purpose",
];

export default function Documents() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">

      <h2 className="text-xl font-semibold mb-6">
        Upload Documents
      </h2>

      <div className="space-y-4">

        {docs.map((d, i) => (
          <div
            key={i}
            className="border border-dashed rounded-xl p-5 flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{d}</p>
              <p className="text-sm text-gray-400">
                PDF, DOC, or DOCX (Max 5MB)
              </p>
            </div>

            <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <FiUpload /> Upload
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}
