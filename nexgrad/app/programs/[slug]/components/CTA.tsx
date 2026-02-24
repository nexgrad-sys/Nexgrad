export default function CTA() {
  return (
    <div className="bg-primary text-white rounded-2xl p-12 text-center">
      <h2 className="text-3xl font-semibold mb-4">
        Ready to Take the Next Step?
      </h2>

      <div className="flex justify-center gap-4 mt-6">
        <button className="bg-white text-primary px-6 py-3 rounded-lg cursor-pointer">
          Start Application
        </button>

        <button className="border border-white px-6 py-3 rounded-lg cursor-pointer">
          Talk to Advisor
        </button>
      </div>
    </div>
  );
}
