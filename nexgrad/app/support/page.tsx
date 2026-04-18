import React from "react";
import {
  BookOpen,
  Heart,
  Users,
  Lightbulb,
  Clock,
  MessageCircle,
  Headphones,
  FileText,
  Shield,
  Video,
  Book,
  ArrowRight,
} from "lucide-react";

export default function StudentSupportPage() {
  return (
    <div className="bg-white text-slate-800 font-sans min-h-screen relative">
      
      {/* 1. HERO SECTION */}
      <section className="pt-20 pb-16 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 text-slate-800">
          Student <span className="text-[#E11D48]">Support</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Your success is our priority. Access comprehensive support services
          designed to help you thrive academically, professionally, and
          personally.
        </p>
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
          alt="Students in a classroom"
          className="w-full h-[500px] object-cover rounded-3xl shadow-sm"
        />
      </section>

      {/* 2. ACADEMIC MENTORING */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-slate-800">
              Academic Mentoring
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Every student is paired with a dedicated academic advisor who
              provides personalized guidance throughout your program. From
              course selection to thesis development, we are here to ensure your
              academic success.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Personalized Learning Plans",
                  desc: "Customized academic pathways aligned with your career goals",
                },
                {
                  title: "Study Skills Workshops",
                  desc: "Master time management, note-taking, and exam preparation techniques",
                },
                {
                  title: "Thesis & Research Guidance",
                  desc: "Expert supervision for capstone projects and dissertations",
                },
                {
                  title: "Academic Writing Support",
                  desc: "Improve your research and writing skills with dedicated resources",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <BookOpen className="text-[#E11D48] shrink-0 mt-1" size={24} strokeWidth={1.5} />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80"
              alt="Academic mentoring session"
              className="w-full rounded-2xl shadow-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. MENTAL WELLNESS & WELL-BEING */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Heart className="text-[#E11D48] mx-auto mb-4" size={40} strokeWidth={1.5} />
            <h2 className="text-3xl font-semibold text-slate-800 mb-4">
              Mental Wellness & Well-being
            </h2>
            <p className="text-gray-500">
              Your mental health matters. Access confidential counseling and
              wellness resources
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart size={32} strokeWidth={1.5} />,
                title: "Counseling Services",
                desc: "Confidential one-on-one sessions with licensed counselors for stress, anxiety, and personal challenges",
              },
              {
                icon: <Users size={32} strokeWidth={1.5} />,
                title: "Peer Support Groups",
                desc: "Connect with fellow students facing similar challenges in a safe, supportive environment",
              },
              {
                icon: <Lightbulb size={32} strokeWidth={1.5} />,
                title: "Wellness Workshops",
                desc: "Regular sessions on mindfulness, stress management, work-life balance, and resilience building",
              },
            ].map((item, idx) => (
               <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                 <div className="text-[#E11D48] mb-6">{item.icon}</div>
                 <h3 className="font-semibold text-lg text-slate-800 mb-3">{item.title}</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERT FACULTY GUIDANCE */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Students collaborating"
              className="w-full rounded-2xl shadow-sm object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold mb-4 text-slate-800">
              Expert Faculty Guidance
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Our distinguished faculty members bring decades of academic and
              industry experience. They are accessible, approachable, and
              committed to your learning success.
            </p>
            <ul className="space-y-4">
              {[
                "Regular office hours for individual consultations",
                "Responsive to emails and questions within 24 hours",
                "Industry insights and practical career guidance",
                "Mentorship for research and professional development",
                "Letters of recommendation and career referrals",
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-center text-gray-500 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mr-4 shrink-0"></span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. 24/7 SUPPORT HELPDESK */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Clock className="text-[#E11D48] mx-auto mb-4" size={40} strokeWidth={1.5} />
            <h2 className="text-3xl font-semibold text-slate-800 mb-4">
              24/7 Support Helpdesk
            </h2>
            <p className="text-gray-500">
              Get assistance whenever you need it through multiple channels
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <MessageCircle size={28} strokeWidth={1.5} />,
                title: "Live Chat",
                desc: "Instant responses for urgent queries",
                status: "Available 24/7",
              },
              {
                icon: <Headphones size={28} strokeWidth={1.5} />,
                title: "Phone Support",
                desc: "Speak directly with support staff",
                status: "Mon-Fri, 8AM-8PM",
              },
              {
                icon: <FileText size={28} strokeWidth={1.5} />,
                title: "Email Support",
                desc: "Detailed assistance via email",
                status: "Response within 24hrs",
              },
              {
                icon: <Shield size={28} strokeWidth={1.5} />,
                title: "Student Portal",
                desc: "Submit tickets and track issues",
                status: "Always accessible",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="bg-red-50 text-[#E11D48] p-4 rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-slate-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow">{item.desc}</p>
                <p className="text-[#E11D48] text-xs font-semibold">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEARNING RESOURCES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-slate-800 mb-4">
            Learning Resources
          </h2>
          <p className="text-gray-500">
            Access a comprehensive library of tools and resources to enhance your learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <BookOpen size={32} strokeWidth={1.5} />,
              title: "E-Library Access",
              desc: "Thousands of e-books, journals, and research papers across all disciplines",
            },
            {
              icon: <FileText size={32} strokeWidth={1.5} />,
              title: "Study Guides",
              desc: "Course-specific materials, sample papers, and study templates",
            },
            {
              icon: <Lightbulb size={32} strokeWidth={1.5} />,
              title: "Tutorial Videos",
              desc: "On-demand video tutorials covering complex topics and skills",
            },
            {
              icon: <Users size={32} strokeWidth={1.5} />,
              title: "Study Groups",
              desc: "Join or create peer study groups for collaborative learning",
            },
            {
              icon: <Book size={32} strokeWidth={1.5} />,
              title: "Writing Center",
              desc: "Professional editing and proofreading services for assignments",
            },
            {
              icon: <Headphones size={32} strokeWidth={1.5} />,
              title: "Tech Support",
              desc: "Assistance with LMS, software, and technical issues",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start h-full">
              <div className="text-[#E11D48] mb-6">{item.icon}</div>
              <h3 className="font-semibold text-lg text-slate-800 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
              <button className="text-[#E11D48] font-medium text-sm flex items-center gap-2 hover:underline">
                Access Resource <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Quick answers to common questions about student support
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "How do I access academic advising?",
              a: "You can schedule appointments with your academic advisor through the student portal or by emailing support@nexgrad.com. Advisors are available for both virtual and in-person consultations.",
            },
            {
              q: "Is counseling confidential?",
              a: "Yes, all counseling services are completely confidential. Your privacy is protected by professional standards and legal requirements.",
            },
            {
              q: "What if I need help outside business hours?",
              a: "Our 24/7 live chat is always available for urgent queries. You can also submit tickets through the student portal which will be addressed first thing the next business day.",
            },
            {
              q: "How can I access learning resources?",
              a: "All learning resources are available through your student portal. Once logged in, navigate to the Resources section to access e-library, study guides, and more.",
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold text-slate-800 mb-2">{faq.q}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="bg-[#E11D48] text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">We Are Here for You</h2>
          <p className="text-red-100 text-lg mb-10 leading-relaxed">
            Join NexGrad and experience world-class support throughout your academic journey
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-white text-[#E11D48] px-8 py-3.5 rounded-lg font-medium transition-colors hover:bg-gray-50">
              Apply Now
              <ArrowRight size={20} />
            </button>
            <button className="flex items-center justify-center border border-white text-white px-8 py-3.5 rounded-lg font-medium transition-colors hover:bg-white/10">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* FLOATING CHAT BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#10B981] hover:bg-[#059669] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105">
          <MessageCircle size={28} />
        </button>
      </div>

    </div>
  );
}