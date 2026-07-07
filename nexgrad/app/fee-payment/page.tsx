"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  HandCoins,
  Landmark,
  ShieldCheck,
} from "lucide-react";

export default function FeePaymentPage() {
  const feeFactors = [
    "University",
    "Programme",
    "Qualification Level",
    "Duration",
    "Intake",
    "Applicable promotions or scholarships",
    "Selected payment plan",
  ];

  return (
    <div className="bg-[#f7f7f7] text-gray-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.6}}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500 px-4 py-2 text-sm text-red-600">
              <ShieldCheck className="w-4 h-4"/>
              Transparent Fee Guidance
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              Invest in Your Future
              <span className="text-red-600"> with Confidence</span>
            </h1>

            <p className="mt-6 text-gray-600 leading-8">
              Higher education is one of the most valuable investments you can
              make, but planning for it should never feel uncertain.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              At NexGrad, we believe students should understand the financial
              commitment before they apply. Our advisors provide transparent fee
              guidance, explain payment schedules, and help you understand
              available payment options before you make a decision.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-red-600 px-6 py-3 text-white hover:bg-red-700">
                Request Fee Details
              </button>

              <button className="rounded-xl border border-red-600 px-6 py-3 text-red-600 hover:bg-red-50">
                Talk to an Advisor
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity:0,x:40}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6}}
            className="rounded-3xl bg-gradient-to-br from-red-600 to-red-700 p-10 text-white"
          >
            <BadgeDollarSign className="w-14 h-14 mb-6"/>
            <h2 className="text-3xl font-semibold">
              Financial Clarity Before You Apply
            </h2>

            <p className="mt-5 text-red-100 leading-8">
              Since tuition fees vary by university, programme and intake, we
              provide personalised guidance so you always receive accurate,
              up-to-date fee information before submitting your application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold">
            Education Is an Investment,
            <span className="text-red-600"> Not Just an Expense</span>
          </h2>

          <div className="mt-8 space-y-6 text-gray-600 leading-8">
            <p>
              Every learner approaches higher education with different goals.
              Some want to accelerate their careers, qualify for leadership
              roles, change industries, or complete a qualification they could
              not pursue earlier.
            </p>

            <p>
              At NexGrad, we encourage students to evaluate education as an
              investment in knowledge, professional growth, career progression,
              and future opportunities rather than focusing only on the
              immediate cost.
            </p>

            <p>
              Before you apply, our advisors explain the fee structure,
              payment schedule, and available payment options so you can plan
              confidently.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold">
            Understanding Your Programme Fees
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Tuition fees depend on several factors:
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {feeFactors.map((item)=>(
              <div key={item} className="flex items-center gap-3 rounded-xl border p-5">
                <CheckCircle2 className="w-5 h-5 text-red-600"/>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-gradient-to-r from-red-600 to-red-700 p-10 text-white">
            <h3 className="text-2xl font-semibold">
              Want to Know the Exact Fee for Your Programme?
            </h3>

            <p className="mt-4 text-red-100">
              Select your preferred programme and request a personalised fee
              breakdown with the latest tuition information.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-red-600 font-medium">
              Get Fee Details
              <ArrowRight className="w-4 h-4"/>
            </button>
          </div>

               {/* SECTION 3 */}
      <section className="py-20 px-6 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Flexible <span className="text-red-600">Payment Options</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Financial planning looks different for every student. Where
              available, our partner universities offer flexible payment
              options to make higher education more accessible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: CreditCard,
                title: "One-Time Payment",
                desc: "Complete tuition in a single transaction before your programme begins. Some universities may offer promotional or administrative benefits where applicable.",
              },
              {
                icon: CalendarDays,
                title: "Instalment Plans",
                desc: "Many programmes allow tuition to be divided into scheduled instalments across the duration of your studies.",
              },
              {
                icon: Landmark,
                title: "Employer Sponsorship",
                desc: "If your employer supports professional development, our advisors will guide you through sponsorship documentation where applicable.",
              },
              {
                icon: HandCoins,
                title: "Flexible Financial Planning",
                desc: "Our advisors help you understand payment schedules and choose an option aligned with your budget and long-term goals.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-white border p-8 shadow-sm hover:shadow-md"
                >
                  <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-gray-600 leading-7">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      {/* PAYMENT TIMELINE */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600">
        Payment Journey
      </span>

      <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-900">
        When Do I <span className="text-red-600">Pay?</span>
      </h2>

      <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
        Understanding the payment journey helps you plan your education with
        complete confidence.
      </p>
    </div>

    <div className="relative">

      {/* Connecting Line */}
      <div className="hidden lg:block absolute left-0 right-0 top-8 h-1 bg-red-100"></div>

      <div className="grid lg:grid-cols-5 gap-8 relative">

        {[
          {
            title: "Choose Your Programme",
            desc: "Select the university and programme that best aligns with your goals.",
          },
          {
            title: "Receive Fee Breakdown",
            desc: "Understand tuition fees, payment schedules and applicable charges.",
          },
          {
            title: "Confirm Admission",
            desc: "Receive your admission confirmation and payment instructions.",
          },
          {
            title: "Complete Payment",
            desc: "Pay using the approved schedule or available instalment plan.",
          },
          {
            title: "Start Learning",
            desc: "Receive programme access and begin your learning journey.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Number */}
            <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-700 text-xl font-bold text-white shadow-xl">
              {index + 1}
            </div>

            {/* Card */}
            <div className="mt-8 rounded-3xl border border-gray-100 bg-white p-7 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7 text-sm">
                {item.desc}
              </p>

            </div>
          </motion.div>
        ))}

      </div>
    </div>

    <div className="mt-16 rounded-3xl border border-red-100 bg-red-50 p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white">
          <ShieldCheck className="h-6 w-6" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Important Note
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Payment schedules, due dates and instalment availability vary
            between universities and programmes. Your NexGrad advisor will
            explain the complete payment process before you enrol.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>
       <section className="py-20 px-6 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              What Does Your <span className="text-red-600">Tuition Fee Cover?</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Students often focus only on the tuition amount, but understanding
              what your fee includes is equally important. Exact inclusions vary
              by university and programme.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {[
              "Academic instruction",
              "Digital learning platform access",
              "Course materials and learning resources",
              "Faculty support",
              "Assessments and academic evaluation",
              "Student services provided by the university",
              "Programme administration",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl bg-white border p-6 shadow-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h4 className="font-semibold text-amber-700">
              Additional Charges
            </h4>
            <p className="mt-2 text-gray-700 leading-7">
              Examination fees, graduation fees, document processing, and other
              administrative charges (where applicable) depend on the individual
              university and programme. Your advisor will explain these clearly
              before you enrol.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Why Financial <span className="text-red-600">Transparency Matters</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Before you apply, we help you understand every aspect of your
              financial commitment so you can make an informed education
              decision with complete clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {[
              {
                title: "Complete Tuition Structure",
                desc: "Understand the full tuition fee before you enrol.",
              },
              {
                title: "Available Payment Options",
                desc: "Choose from available payment schedules and instalment plans.",
              },
              {
                title: "Expected Payment Schedule",
                desc: "Know when payments are due and how your journey is structured.",
              },
              {
                title: "University-Specific Charges",
                desc: "Receive complete clarity on applicable university charges.",
              },
              {
                title: "Total Investment",
                desc: "Understand the complete financial commitment for your chosen programme.",
              },
              {
                title: "No Hidden Surprises",
                desc: "We believe education decisions should be made with transparency and confidence.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border bg-[#f8f9fb] p-8 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6 text-red-600" />
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-600 leading-7">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-gradient-to-r from-red-600 to-red-700 p-10 text-white">
            <h3 className="text-3xl font-semibold">
              Our Goal Is Simple
            </h3>

            <p className="mt-5 text-red-100 leading-8">
              We want every learner to understand tuition fees, payment options,
              university charges, and the complete investment required before
              making an admission decision.
            </p>
          </div>

           <section className="py-20 px-6 bg-[#f7f7f7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
          </div>

          {[
            ["How much does a programme cost?","Programme fees vary depending on the university, qualification, specialisation and intake. Request a personalised fee breakdown for accurate information."],
            ["Can I pay my tuition fees in instalments?","Many partner universities offer instalment plans where available. Your advisor will explain your options."],
            ["Do I have to pay the entire fee before admission?","Payment requirements differ by university. Some require an initial payment while others provide structured schedules."],
            ["Are there any hidden charges?","No. We believe in complete transparency and explain all applicable charges before enrolment."],
            ["Which payment methods are accepted?","Accepted methods vary but commonly include bank transfer, debit card and credit card."],
            ["Can my employer sponsor my education?","Yes, where employer sponsorship is available we help with the required documentation."],
            ["Can international students make payments?","Yes. Available payment methods depend on the university and country of residence."],
            ["Can programme fees change?","Universities may revise fees for future intakes. NexGrad always shares the latest available information."],
            ["Will I receive proof of payment?","Yes. Payment acknowledgement follows the university's procedures."],
            ["I am unsure whether I can afford the programme.","Speak with a NexGrad advisor to explore suitable programmes and payment options."]
          ].map(([q,a],i)=>(
            <motion.div
              key={i}
              initial={{opacity:0,y:15}}
              whileInView={{opacity:1,y:0}}
              className="mb-5 rounded-2xl border bg-white p-6"
            >
              <h3 className="font-semibold text-lg">{q}</h3>
              <p className="mt-3 text-gray-600 leading-7">{a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold">
            Plan Your Education with Complete Financial Clarity
          </h2>

          <p className="mt-6 text-red-100 leading-8 max-w-3xl mx-auto">
            Whether you are comparing programmes or ready to apply, our advisors
            will help you understand tuition fees, payment schedules and
            available payment options before you make any commitment.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-white px-8 py-3 font-semibold text-red-600">
              Request Fee Details
            </button>

            <button className="rounded-xl border border-white px-8 py-3">
              Talk to an Advisor
            </button>
          </div>
        </div>
      </section>
        </div>
      </section>
        </div>
      </section>
    </div>
  );
}
