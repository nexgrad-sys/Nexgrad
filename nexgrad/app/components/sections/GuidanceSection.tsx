import {
  FiSearch,
  FiUsers,
  FiFileText,
  FiBookOpen,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";

const steps = [
  {
    icon: <FiSearch size={28} />,
    step: "01",
    title: "Discover Programs",
    desc: "Browse internationally recognised undergraduate, postgraduate and executive education programs tailored for your career goals.",
  },
  {
    icon: <FiUsers size={28} />,
    step: "02",
    title: "Speak with an Advisor",
    desc: "Our education consultants help you compare universities, eligibility, tuition fees and learning formats.",
  },
  {
    icon: <FiFileText size={28} />,
    step: "03",
    title: "Apply with Confidence",
    desc: "Receive complete assistance with documentation, eligibility checks, admissions and university applications.",
  },
  {
    icon: <FiBookOpen size={28} />,
    step: "04",
    title: "Start Learning",
    desc: "Access flexible online learning designed for working professionals across the UAE and GCC.",
  },
  {
    icon: <FiTrendingUp size={28} />,
    step: "05",
    title: "Advance Your Career",
    desc: "Develop practical leadership, management and business skills that employers value.",
  },
  {
    icon: <FiAward size={28} />,
    step: "06",
    title: "Graduate Successfully",
    desc: "Earn a globally recognised qualification and join a growing international alumni network.",
  },
];

export default function GuidanceSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center max-w-4xl mx-auto mb-20">

          <span className="inline-flex bg-red-50 text-red-600 px-5 py-2 rounded-full text-sm font-semibold mb-5">
            Learning Journey
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">

            Your Journey with
            <span className="text-red-600">
              {" "}NexGrad
            </span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            From discovering the right university to earning your
            qualification, our team supports you through every stage
            of your academic journey.

          </p>

        </div>

        {/* Timeline */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {steps.map((item) => (

            <div
              key={item.step}
              className="
                relative
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                border
                border-gray-100
                hover:border-red-200
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              {/* Step */}

              <div className="absolute top-6 right-6 text-5xl font-bold text-gray-100">
                {item.step}
              </div>

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 mb-6">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold mb-4">

                {item.title}

              </h3>

              <p className="text-gray-600 leading-8">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-red-600 to-red-700 p-12 text-center text-white">

          <h3 className="text-3xl font-bold">

            Ready to Begin Your Academic Journey?

          </h3>

          <p className="mt-4 text-red-100 max-w-3xl mx-auto text-lg leading-8">

            Whether you're looking for an MBA, BBA, DBA, Executive Education,
            or another internationally recognised qualification, our advisors
            are here to help you choose the right path.

          </p>

          <a
            href="/apply"
            className="
              inline-flex
              mt-8
              bg-white
              text-red-600
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-gray-100
              transition
              shadow-lg
            "
          >
            Talk to an Advisor
          </a>

        </div>

      </div>

    </section>
  );
}