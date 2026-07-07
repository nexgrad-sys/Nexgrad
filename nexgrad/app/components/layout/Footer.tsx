import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-gray-300">

      {/* TOP */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-5 gap-12">

          {/* BRAND */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold text-xl">
                N
              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  NexGrad
                </h2>

                <p className="text-sm text-gray-400">
                  Learn • Lead • Grow
                </p>

              </div>

            </div>

            <p className="text-gray-400 leading-8 max-w-lg">

              NexGrad is your trusted higher education partner,
              helping working professionals across the UAE and GCC
              discover internationally recognised undergraduate,
              postgraduate, executive education and doctoral programs.

            </p>

            {/* Newsletter */}

            <div className="mt-10">

              <h4 className="text-white font-semibold mb-4">

                Subscribe to Career Insights

              </h4>

              <div className="flex rounded-xl overflow-hidden">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 bg-[#222] border border-[#333] text-white outline-none"
                />

                <button className="bg-red-600 hover:bg-red-700 px-6 flex items-center justify-center transition">

                  <FiArrowRight className="text-white text-xl" />

                </button>

              </div>

            </div>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              {[FiFacebook, FiInstagram, FiLinkedin, FiYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-11 h-11 rounded-full bg-[#252525] hover:bg-red-600 flex items-center justify-center transition"
                  >
                    <Icon />
                  </a>
                )
              )}

            </div>

          </div>

          {/* Programs */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-6">
              Programs
            </h3>

            <ul className="space-y-4">

              <li><Link href="/programs">MBA Programs</Link></li>
              <li><Link href="/programs">BBA Programs</Link></li>
              <li><Link href="/programs">DBA Programs</Link></li>
              <li><Link href="/programs">Executive Education</Link></li>
              <li><Link href="/programs">Bachelor Degrees</Link></li>
              <li><Link href="/programs">Master Degrees</Link></li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-6">
              Company
            </h3>

            <ul className="space-y-4">

              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/universities">Universities</Link></li>
              <li><Link href="/blogs">Career Insights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/apply">Apply Now</Link></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex gap-3">

                <FiMapPin className="text-red-500 mt-1" />

                <div>

                  <h4 className="text-white font-medium">
                    UAE Office
                  </h4>

                  <p className="text-sm leading-7">

                    Sharjah Publishing City Free Zone,
                    Sharjah, UAE

                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <FiPhone className="text-red-500 mt-1" />

                <div>

                  <p>+971 564636141</p>

                  <p>+971 521280599</p>

                </div>

              </div>

              <div className="flex gap-3">

                <FiMail className="text-red-500 mt-1" />

                <div>

                  <p>info@nexgrad.com</p>

                  <p>admissions@nexgrad.com</p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-[#2d2d2d]">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-4 text-sm">

          <p className="text-gray-400">

            © {new Date().getFullYear()} NexGrad. All Rights Reserved.

          </p>

          <div className="flex flex-wrap gap-8">

            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>

            <Link href="/cookies" className="hover:text-white">
              Cookie Policy
            </Link>

            <Link href="/refund-policy" className="hover:text-white">
              Refund Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}