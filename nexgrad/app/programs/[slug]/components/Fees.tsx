export default function Fees({ program }: any) {
  if (!program.tuition) return null;

  const monthlyEmi =
    program.emiAvailable && program.emiMonths
      ? (program.tuition / program.emiMonths).toFixed(0)
      : null;

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-10">
        Fees & Payment Options
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* TOTAL FEE CARD */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">

          <p className="text-4xl font-bold text-primary mb-2">
            {program.currency} {program.tuition.toLocaleString()}
          </p>

          <p className="text-gray-500 mb-4">
            Total Program Tuition
          </p>

          {program.applicationFee && (
            <p className="text-sm text-gray-600">
              Application Fee: {program.currency}{" "}
              {program.applicationFee}
            </p>
          )}

          {program.scholarships && (
            <p className="text-sm text-green-600 mt-3">
              ✔ Scholarships Available
            </p>
          )}

        </div>

        {/* EMI CARD */}
        {program.emiAvailable && monthlyEmi && (
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">

            <p className="text-2xl font-semibold mb-2">
              {program.currency} {Number(monthlyEmi).toLocaleString()}
            </p>

            <p className="text-gray-500">
              Monthly EMI for {program.emiMonths} months
            </p>

            <div className="mt-6 text-sm text-gray-600">
              Flexible installment plans available for eligible students.
            </div>

          </div>
        )}

      </div>
    </section>
  );
}