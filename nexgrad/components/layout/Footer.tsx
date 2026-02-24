import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 pt-20">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center font-bold rounded">
              N
            </div>
            <span className="text-xl font-semibold text-white">
              NexGrad
            </span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering professionals worldwide with transformative higher education
            programs from prestigious partner universities.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            {[FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiYoutube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              )
            )}
          </div>
        </div>

        {/* PROGRAMS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Programs</h4>
         <ul className="space-y-3 text-sm">
  <li>
    <Link href="#" className="hover:text-white transition cursor-pointer">
      MBA Programs
    </Link>
  </li>

  <li>
    <Link href="#" className="hover:text-white transition cursor-pointer">
      DBA Programs
    </Link>
  </li>

  <li>
    <Link href="#" className="hover:text-white transition cursor-pointer">
      Executive Education
    </Link>
  </li>

  <li>
    <Link href="#" className="hover:text-white transition cursor-pointer">
      Online Programs
    </Link>
  </li>

  <li>
    <Link href="#" className="hover:text-white transition cursor-pointer">
      Corporate Solutions
    </Link>
  </li>
</ul>

        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li>
                <Link href="#" className="hover:text-white transition cursor-pointer">
                About Us
                </Link>
                </li>
            <li>
                <Link href="#" className="hover:text-white transition cursor-pointer">
                Blog & Articles
                </Link>
                </li>
            <li>
                <Link href="#" className="hover:text-white transition cursor-pointer">
                Events & Webinars
                </Link>
                </li>
            <li>
                <Link href="#" className="hover:text-white transition cursor-pointer">
                Alumni Network
                </Link>
                </li>
            <li>
                <Link href="#" className="hover:text-white transition cursor-pointer">
                Contact Us
                </Link>
                </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>

          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-3">
              <FiMapPin className="text-red-500" />
              123 Business Bay, Dubai, UAE
            </p>

            <p className="flex items-center gap-3">
              <FiPhone className="text-red-500" />
              +971 50 123 4567
            </p>

            <p className="flex items-center gap-3">
              <FiMail className="text-red-500" />
              info@nexgrad.com
            </p>
          </div>

          <div className="border-t border-white/10 mt-6 pt-4 text-sm">
            <p className="text-white mb-1">Office Hours</p>
            <p>Mon - Fri: 9:00 AM - 6:00 PM GST</p>
            <p>Sat: 10:00 AM - 2:00 PM GST</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-16 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-sm">
          <p>© 2026 NexGrad. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
