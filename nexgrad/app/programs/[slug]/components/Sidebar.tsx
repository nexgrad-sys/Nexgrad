import { FiDownload, FiCalendar, FiFileText } from "react-icons/fi"

export default function Sidebar() {
  return (
    <div className="sticky top-[140px] space-y-6">

      {/* QUICK ACTIONS */}
      <div className="bg-[#F7F7F8] rounded-2xl p-6">
        <h3 className="font-semibold text-lg mb-5 text-gray-800">
          Quick Actions
        </h3>

        <div className="space-y-3">

          <button className="flex items-center gap-3 w-full bg-white border border-gray-200 rounded-xl px-5 py-3 text-gray-700 hover:border-primary transition">
            <FiDownload size={18} className="text-gray-500"/>
            Download Brochure
          </button>

          <button className="flex items-center gap-3 w-full bg-white border border-gray-200 rounded-xl px-5 py-3 text-gray-700 hover:border-primary transition">
            <FiCalendar size={18} className="text-gray-500"/>
            Schedule a Call
          </button>

          <button className="flex items-center gap-3 w-full bg-white border border-gray-200 rounded-xl px-5 py-3 text-gray-700 hover:border-primary transition">
            <FiFileText size={18} className="text-gray-500"/>
            View Sample Certificate
          </button>

        </div>
      </div>

      {/* RELATED PROGRAMS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h3 className="font-semibold text-lg mb-6 text-gray-800">
          Related Programs
        </h3>

        {/* Program 1 */}
        <div className="flex justify-between items-start">
          <div>
            <p className="font-medium text-gray-800">Global MBA</p>
            <p className="text-sm text-gray-500 mt-1">24 months</p>
            <button className="text-primary text-sm mt-2 font-medium hover:underline">
              Learn More →
            </button>
          </div>
          <p className="font-medium text-gray-800">$30,000</p>
        </div>

        <div className="border-t border-gray-200 my-6"></div>

        {/* Program 2 */}
        <div className="flex justify-between items-start">
          <div>
            <p className="font-medium text-gray-800">DBA Program</p>
            <p className="text-sm text-gray-500 mt-1">36 months</p>
            <button className="text-primary text-sm mt-2 font-medium hover:underline">
              Learn More →
            </button>
          </div>
          <p className="font-medium text-gray-800">$40,000</p>
        </div>

      </div>

    </div>
  )
}
