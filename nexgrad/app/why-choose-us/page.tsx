"use client";

import { motion } from "framer-motion";
import {
  Users,
  Globe,
  Target,
  Award,
  Briefcase,
  BookOpen,
  Brain,
  CheckCircle,
  Shield,
  GraduationCap,
  Clock,
  Compass,
  FileText,
  MessageCircle,
  HelpCircle,
  Map,
  Building2,
  Laptop
} from "lucide-react";

export default function Page() {
  const steps = [
    {
      title: "Discover Your Goals",
      desc: "We begin by understanding your academic background, work experience, and long-term career objectives.",
    },
    {
      title: "Compare Universities & Programmes",
      desc: "Receive personalised recommendations based on recognition, curriculum, flexibility, budget, and career outcomes.",
    },
    {
      title: "Make an Informed Decision",
      desc: "Understand the strengths of each university before selecting the programme that best matches your aspirations.",
    },
    {
      title: "Complete Your Admission",
      desc: "Our advisors assist with eligibility checks, documentation, application submission, and admission formalities.",
    },
    {
      title: "Begin Your Learning Journey",
      desc: "Start studying with confidence while continuing to receive guidance whenever required.",
    },
  ];

  const features = [
    {
      title: "Personalised Education Guidance",
      icon: Users,
      description: "Every learner has a different academic background, career stage, and future ambition. Our advisors take time to understand your goals before recommending suitable universities and programmes.",
    },
    {
      title: "Recognised University Partners",
      icon: Award,
      description: "We work with carefully selected universities and awarding organisations known for academic quality, recognised qualifications, and flexible learning designed for modern professionals.",
    },
    {
      title: "Transparent & Honest Advice",
      icon: Shield,
      description: "Our role is to help you make an informed decision. We clearly explain programme structure, eligibility, recognition, learning format, duration, and career opportunities.",
    },
    {
      title: "Flexible Learning Options",
      icon: Clock,
      description: "Whether you are a full-time employee, entrepreneur, business owner, or busy professional, we help you identify programmes that fit around your work and personal commitments.",
    },
    {
      title: "End-to-End Admission Support",
      icon: FileText,
      description: "From your first enquiry until your admission is confirmed, our team supports you with programme selection, documentation, application submission, and university communication.",
    },
    {
      title: "Long-Term Learning Partner",
      icon: Compass,
      description: "Our relationship does not end after admission. We continue supporting students by helping them navigate their academic journey and make informed decisions about future qualifications.",
    },
  ];

  const promises = [
    "We recommend programmes based on your career aspirations, not popularity.",
    "We explain university recognition, accreditation, and programme structure in clear, practical language.",
    "We encourage you to compare options before making a final decision.",
    "We remain transparent about admission requirements, timelines, fees, and learning expectations.",
    "We respect your career goals, budget, learning preferences, and personal commitments.",
    "We aim to build long-term relationships by helping learners make confident education decisions.",
  ];

  const partners = [
    { name: "City University Malaysia", desc: "Recognised for academic excellence and global partnerships." },
    { name: "Shoolini University", desc: "India's leading research-focused university." },
    { name: "Amity University Online", desc: "Pioneering digital education with global accreditations." },
    { name: "OTHM UK", desc: "UK-regulated awarding organisation offering flexible pathways." },
  ];

  const programs = [
    { title: "Master of Business Administration (MBA)", desc: "Build leadership, strategic thinking, and business management skills that prepare you for senior roles across industries." },
    { title: "Executive MBA", desc: "Designed for experienced professionals and managers looking to strengthen leadership capabilities while continuing to work." },
    { title: "Bachelor of Business Administration (BBA)", desc: "Develop a strong foundation in business, entrepreneurship, marketing, finance, and management." },
    { title: "Bachelor of Computer Applications (BCA)", desc: "Prepare for careers in software development, programming, databases, cloud computing, and digital technologies." },
    { title: "Bachelor of Commerce (B.Com)", desc: "Build expertise in accounting, taxation, finance, economics, and business operations." },
    { title: "Master of Computer Applications (MCA)", desc: "Advance your technical knowledge in software engineering, cloud technologies, artificial intelligence, and enterprise applications." },
    { title: "Master of Education (M.Ed)", desc: "Strengthen your expertise in educational leadership, curriculum development, research, and modern teaching practices." },
  ];

  const faqs = [
    { q: "What is NexGrad?", a: "NexGrad is a higher education guidance platform that helps students and working professionals explore recognised universities, compare programmes, understand admission requirements, and make informed decisions about their education. We partner with recognised universities and awarding organisations to simplify the admission journey." },
    { q: "Why should I apply through NexGrad instead of applying directly?", a: "Applying through NexGrad gives you access to personalised guidance throughout the decision-making process. We help you compare universities, understand programme differences, evaluate eligibility, review documentation, and complete your admission with dedicated support." },
    { q: "Does NexGrad charge for counselling?", a: "Please contact our admissions team to understand the counselling process and whether any services are chargeable. We will explain everything clearly before you proceed." },
    { q: "Can I compare multiple universities before deciding?", a: "Yes. In fact, we encourage it. Every university has different strengths, recognition, learning models, tuition fees, and programme structures. Our advisors help you compare your options objectively so you can choose the university that best fits your goals." },
    { q: "Does NexGrad offer only online programmes?", a: "Our portfolio primarily focuses on flexible learning programmes designed for working professionals. Programme availability depends on the university and may vary over time." },
    { q: "Will my degree be awarded by NexGrad?", a: "No. Your qualification is awarded directly by the university or awarding organisation where you enrol. NexGrad provides education guidance, admission support, and student assistance throughout your journey." },
    { q: "Can international students apply through NexGrad?", a: "Yes. Many of our partner universities welcome international students. Eligibility requirements may vary depending on the university and programme. Our advisors will guide you through the admission requirements." },
    { q: "Will someone help me choose the right programme?", a: "Yes. Our advisors take time to understand your educational background, work experience, and career aspirations before recommending suitable universities and programmes." },
    { q: "Can I speak with an advisor before applying?", a: "Absolutely. We encourage prospective students to speak with an advisor before making any decision. This allows you to compare programmes, understand eligibility, and clarify any questions you may have." },
    { q: "Does NexGrad help with documentation?", a: "Yes. We guide students through the documentation process, eligibility verification, application submission, and admission formalities to help make the experience as smooth as possible." },
    { q: "What happens after I submit an enquiry?", a: "One of our education advisors will contact you to understand your goals, discuss suitable options, explain the admission process, and answer any questions before you decide to apply." },
    { q: "How do I get started?", a: "Simply submit an enquiry, schedule a consultation, or speak with one of our advisors. We will help you explore your options and guide you through every step of your higher education journey." },
  ];

  return (
    <div className="bg-[#f7f7f7] text-gray-800 font-sans">
      
      {/* HERO */}
      <section className="text-center py-20 px-6 bg-white">
        <h1 className="text-sm font-bold tracking-widest text-red-600 uppercase mb-4">Why Choose NexGrad</h1>
        <h2 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Your Education Journey Deserves More Than Just an Admission
        </h2>
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Choosing a university is one of the biggest investments you will make in your future. The right decision can accelerate your career, while the wrong one can cost valuable time, money, and opportunities. With hundreds of universities, multiple accreditation systems, varying tuition fees, and countless programme options available today, making an informed choice has become increasingly challenging.
          <br /><br />
          <strong>NexGrad exists to simplify that journey.</strong>
        </p>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          We help working professionals, graduates, and ambitious learners identify recognised universities, compare programmes objectively, understand eligibility requirements, and confidently choose qualifications that align with their career aspirations. From your first enquiry to your final enrolment, our advisors remain with you at every stage.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-3 rounded-lg font-medium">
            Explore Programmes
          </button>
          <button className="border border-red-600 text-red-600 hover:bg-red-50 transition px-8 py-3 rounded-lg font-medium">
            Speak with an Advisor
          </button>
        </div>
      </section>

      {/* SECTION 1: MORE THAN AN ADMISSION PLATFORM */}
      <section className="py-20 px-6 bg-[#f7f7f7]">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="bg-white h-[400px] rounded-2xl flex items-center justify-center shadow-sm">
            <span className="text-gray-400">Image: Consultation / Education Concept</span>
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-semibold">More Than an Admission Platform</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Many education consultancies focus on completing applications. Our approach begins much earlier. Before recommending a university or programme, we take time to understand your educational background, professional experience, career ambitions, and personal circumstances. Every learner has different goals, and every recommendation should reflect those differences.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you are looking to earn your first degree, prepare for leadership opportunities, switch careers, or continue learning while working full-time, our objective remains the same: helping you make an informed decision with confidence.
            </p>
            <p className="mt-4 text-gray-800 font-medium">
              We believe higher education is not about choosing the most popular university. It is about choosing the university and programme that best fit your future.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW NEXGRAD WORKS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center font-semibold mb-12">How NexGrad Works</h2>
          <div className="flex flex-col md:flex-row gap-6 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 relative bg-[#f7f7f7] p-6 rounded-xl text-center">
                <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 relative z-10">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY PROFESSIONALS CHOOSE NEXGRAD */}
      <section className="py-20 px-6 bg-[#f7f7f7]">
        <h2 className="text-3xl text-center font-semibold">Why Professionals Choose NexGrad</h2>
        <p className="text-center text-gray-500 mt-4 max-w-3xl mx-auto">
          Higher education is more than selecting a university. It is about choosing a learning path that supports your career, fits your lifestyle, and delivers long-term value. At NexGrad, every recommendation is centred around your goals rather than a one-size-fits-all approach.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 mt-2 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: OUR STUDENT-FIRST PROMISE */}
      <section className="py-20 px-6 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Our Student-First Promise</h2>
          <p className="mt-4 text-red-100 max-w-2xl mx-auto">
            Everything we do begins with one simple belief: The right education decision should be based on your goals, not sales targets. That principle guides every conversation, every recommendation, and every admission journey.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
            {promises.map((promise, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-xl flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-red-200 shrink-0" />
                <p className="text-sm text-white">{promise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR UNIVERSITY NETWORK */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Our University Network</h2>
          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
            Choosing the right university starts with understanding your options. NexGrad partners with recognised universities and awarding organisations that offer flexible, career-focused programmes for today's learners.
          </p>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {partners.map((partner, i) => (
              <div key={i} className="border border-gray-100 bg-[#f7f7f7] p-8 rounded-2xl flex flex-col items-center hover:shadow-md transition">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="font-semibold">{partner.name}</h3>
                <p className="text-xs text-gray-500 mt-2 flex-grow">{partner.desc}</p>
                <button className="text-red-600 text-sm font-medium mt-4">Learn More &rarr;</button>
              </div>
            ))}
          </div>
          <button className="mt-12 text-red-600 font-semibold border-b border-red-600 pb-1">
            Explore All Partner Universities &rarr;
          </button>
        </div>
      </section>

      {/* SECTION 6: WHAT CAN YOU STUDY */}
      <section className="py-20 px-6 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center font-semibold">What Can You Study Through NexGrad?</h2>
          <p className="text-center text-gray-500 mt-4 max-w-3xl mx-auto mb-12">
            Whether you are starting your higher education journey or preparing for your next career move, NexGrad offers programmes designed to support different professional goals. Our portfolio includes undergraduate, postgraduate, doctoral and executive programmes delivered through recognised university partners.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col">
                <h3 className="font-semibold text-lg text-red-600 mb-2">{prog.title}</h3>
                <p className="text-sm text-gray-600 mb-6 flex-grow">{prog.desc}</p>
                <button className="text-sm font-medium text-gray-800 flex items-center gap-1 w-max">
                  Explore Programme <span className="text-red-600">&rarr;</span>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium shadow-sm hover:bg-red-700 transition">
              Explore All Programmes &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: DESIGNED FOR WORKING PROFESSIONALS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center font-semibold">Designed for Working Professionals</h2>
          <p className="text-center text-gray-500 mt-4 max-w-3xl mx-auto mb-12">
            Balancing work, family, and education is one of the biggest challenges faced by today's learners. That is why the programmes offered through NexGrad are selected with flexibility in mind, allowing students to continue building their qualifications without stepping away from their careers.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 bg-[#f7f7f7] rounded-2xl">
              <Laptop className="w-8 h-8 text-red-600 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Continue Working While You Study</h3>
                <p className="text-sm text-gray-600 mt-2">Advance your education without taking a career break. Flexible learning enables you to study alongside your professional responsibilities.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[#f7f7f7] rounded-2xl">
              <Clock className="w-8 h-8 text-red-600 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Learn at Your Own Pace</h3>
                <p className="text-sm text-gray-600 mt-2">Access learning resources according to your schedule while meeting programme requirements and academic milestones.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[#f7f7f7] rounded-2xl">
              <Target className="w-8 h-8 text-red-600 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Apply What You Learn</h3>
                <p className="text-sm text-gray-600 mt-2">The concepts you study today can often be applied immediately within your workplace, helping you grow professionally while you learn.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[#f7f7f7] rounded-2xl">
              <TrendingUp className="w-8 h-8 text-red-600 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Build Long-Term Career Value</h3>
                <p className="text-sm text-gray-600 mt-2">Higher education is not just about earning another qualification. It is about preparing yourself for greater responsibilities, leadership opportunities, career transitions, and lifelong professional growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHY TRUST NEXGRAD? */}
      <section className="py-20 px-6 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center font-semibold">Why Trust NexGrad?</h2>
          <p className="text-center text-gray-500 mt-4 max-w-3xl mx-auto mb-12">
            Trust is earned through transparency, guidance, and a genuine commitment to helping learners succeed. We believe students should have complete clarity before making one of the most important investments in their future. Instead of simply helping you submit an application, we help you understand the complete picture so you can move forward with confidence.
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { title: "We Listen Before We Recommend", desc: "Every learner has different goals. Our recommendations begin with understanding your aspirations, not with promoting a particular university." },
              { title: "We Simplify Complex Decisions", desc: "From accreditation and eligibility to programme comparisons and admission requirements, we explain everything in straightforward language." },
              { title: "We Stay with You Throughout the Journey", desc: "Our support continues beyond your application. From admission guidance to answering your questions during the enrolment process, we remain available." },
              { title: "We Believe In Long-Term Relationships", desc: "Our success is measured by the confidence our students have in their decisions and the progress they make throughout their academic and professional journey." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-3">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center font-semibold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-lg flex gap-3">
                  <HelpCircle className="w-6 h-6 text-red-600 shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 mt-3 ml-9 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">Your Future Starts with the Right Decision</h2>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            The right university can shape your career for years to come. Whether you are planning your first degree, preparing for leadership opportunities, or investing in professional growth, NexGrad is here to help you make that decision with confidence.
            <br /><br />
            Receive personalised guidance, compare recognised universities, and choose the programme that best aligns with your goals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-3 rounded-lg font-medium">
              Explore Programmes
            </button>
            <button className="border border-white hover:bg-white hover:text-gray-900 transition px-8 py-3 rounded-lg font-medium">
              Talk to an Advisor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Simple internal icon for layout consistency
function TrendingUp(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );
}