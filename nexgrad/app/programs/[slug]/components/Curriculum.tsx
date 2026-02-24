export default function Curriculum({ program }: any) {
  if (!program.curriculum || program.curriculum.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-10">
        Curriculum Structure
      </h2>

      <div className="space-y-6">
        {program.curriculum.map((module: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-2">
              {module.title}
            </h3>

            <p className="text-sm text-gray-500">
              {module.duration} • {module.credits} ECTS Credits
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}