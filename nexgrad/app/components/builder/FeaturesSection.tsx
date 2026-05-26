export default function FeaturesSection({
  data,
}: any) {

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          {data.heading}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {data.items?.map(
            (item: any, index: number) => (
              <div
                key={index}
                className="
                  border
                  rounded-2xl
                  p-8
                "
              >
                <h3 className="text-2xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}