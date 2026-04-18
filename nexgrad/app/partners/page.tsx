"use client";

export default function PartnerInstitutions() {
  const partners = [
    {
      name: "European Business School",
      location: "Paris, France",
      accreditations: ["AACSB", "EQUIS", "AMBA"],
    },
    {
      name: "London School of Management",
      location: "London, UK",
      accreditations: ["AACSB", "AMBA"],
    },
    {
      name: "Swiss Business Institute",
      location: "Zurich, Switzerland",
      accreditations: ["EQUIS", "AMBA"],
    },
    {
      name: "American Business University",
      location: "New York, USA",
      accreditations: ["AACSB"],
    },
    {
      name: "Singapore Management School",
      location: "Singapore",
      accreditations: ["AACSB", "EQUIS"],
    },
    {
      name: "Dubai Business College",
      location: "Dubai, UAE",
      accreditations: ["AMBA"],
    },
  ];

  return (
    <section className="py-24 bg-[#f6f8fb]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-[#0f172a] mb-4">
          Partner Institutions
        </h2>

        <p className="text-gray-600 max-w-2xl mb-16">
          We partner with globally recognized universities that are accredited
          and renowned for academic excellence.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {partners.map((item, index) => {
            const initial = item.name.charAt(0);

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all"
              >
                {/* Logo Placeholder */}
                <div className="w-14 h-14 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold text-lg mb-6">
                  {initial}
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>

                {/* Location */}
                <p className="text-sm text-gray-500 mt-1 mb-4">
                  {item.location}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.accreditations.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="text-red-600 text-sm font-medium hover:underline">
                  View Programs →
                </button>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}