import { FiTrendingUp, FiBriefcase, FiAward } from "react-icons/fi";

export default function CareerImpact({ program }: any) {
  if (
    !program?.careerAdvancement &&
    !program?.salaryIncrease &&
    !program?.employmentRate
  ) {
    return null;
  }

  const stats = [
    {
      label: "Career Advancement",
      value: program.careerAdvancement,
      icon: <FiTrendingUp />,
      suffix: "% within 1 year",
    },
    {
      label: "Average Salary Increase",
      value: program.salaryIncrease,
      icon: <FiBriefcase />,
      suffix: "% increase",
    },
    {
      label: "Employment Success Rate",
      value: program.employmentRate,
      icon: <FiAward />,
      suffix: "% placement",
    },
  ];

  return (
    <section>
      <h2 className="heading-2 mb-10">Career Impact</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map(
          (item, i) =>
            item.value && (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition duration-300 border"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-red-50 text-red-600 flex items-center justify-center rounded-lg text-xl">
                  {item.icon}
                </div>

                <p className="text-4xl font-bold text-red-600 mb-2">
                  {item.value}%
                </p>

                <p className="font-medium mb-1">{item.label}</p>

                <p className="text-sm text-gray-500">{item.suffix}</p>
              </div>
            )
        )}
      </div>
    </section>
  );
}