const labels = [
  "Personal Info",
  "Academic",
  "Professional",
  "Program",
  "Documents",
  "Review",
];

export default function Stepper({ step }: { step: number }) {
  return (
    <div className="flex justify-between items-center relative">

      <div className="absolute top-5 left-0 w-full h-[2px] bg-gray-200" />
      <div
        className="absolute top-5 left-0 h-[2px] bg-red-600 transition-all"
        style={{ width: `${(step / (labels.length - 1)) * 100}%` }}
      />

      {labels.map((label, i) => (
        <div key={i} className="relative z-10 flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white
            ${i <= step ? "bg-red-600" : "bg-gray-300"}`}
          >
            ✓
          </div>
          <p className="text-xs mt-2">{label}</p>
        </div>
      ))}
    </div>
  );
}
