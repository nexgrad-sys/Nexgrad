// import type { Metadata } from "next";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   FiArrowRight,
//   FiCheckCircle,
//   FiTarget,
//   FiUsers,
//   FiBookOpen,
//   FiShield,
//   FiTrendingUp,
//   FiGlobe,
// } from "react-icons/fi";

// export const metadata: Metadata = {
//   title: "About NexGrad | Guiding Better Higher Education Decisions",
//   description:
//     "Learn about NexGrad, our purpose, our approach to higher education guidance, and how we help working professionals choose recognised universities and programmes with confidence.",
//   keywords: [
//     "About NexGrad",
//     "Education Consultancy UAE",
//     "Higher Education Guidance",
//     "University Admission Experts",
//     "Study in UAE",
//     "Online Degree Consultancy",
//     "Education Advisors",
//   ],
// };

// export default function AboutPage() {
//   return (
//     <main className="bg-white">

//       {/* ===================================================== */}
//       {/* HERO */}
//       {/* ===================================================== */}

//       <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-r from-[#111111] via-[#202020] to-[#363636]">

//         <Image
//           src="/images/about-hero.jpg"
//           alt="About NexGrad"
//           fill
//           priority
//           className="object-cover opacity-25"
//         />

//         <div className="absolute inset-0 bg-black/60" />

//         <div className="relative max-w-7xl mx-auto px-6 py-32">

//           <div className="max-w-4xl">

//             <span className="inline-flex rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white mb-8">

//               ABOUT NEXGRAD

//             </span>

//             <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">

//               Helping You Build
//               <br />
//               a Better Future Through
//               <span className="text-red-500">
//                 {" "}Better Education Decisions
//               </span>

//             </h1>

//             <p className="mt-10 text-xl leading-9 text-gray-200 max-w-3xl">

//               Choosing the right university has never been more important.
//               It has also never been more complicated.

//             </p>

//             <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl">

//               Today, students are faced with hundreds of universities,
//               thousands of programmes, different recognition systems,
//               countless rankings, and an overwhelming amount of
//               information online.

//               Every institution promises opportunity,
//               yet very few help students understand
//               which opportunity is truly right for them.

//             </p>

//             <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl">

//               NexGrad was created to change that.

//               We believe higher education decisions
//               should be guided by clarity,
//               transparency and personalised advice
//               rather than marketing claims.

//             </p>

//             <div className="flex flex-wrap gap-5 mt-12">

//               <Link
//                 href="/programs"
//                 className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
//               >
//                 Explore Programmes
//                 <FiArrowRight />
//               </Link>

//               <Link
//                 href="/contact"
//                 className="border border-white text-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl font-semibold"
//               >
//                 Talk to an Advisor
//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ===================================================== */}
//       {/* WHY NEXGRAD EXISTS */}
//       {/* ===================================================== */}

//       <section className="py-28">

//         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

//           <div>

//             <Image
//               src="/images/why-nexgrad.jpg"
//               alt="Why NexGrad"
//               width={700}
//               height={650}
//               className="rounded-3xl shadow-2xl"
//             />

//           </div>

//           <div>

//             <span className="text-red-600 font-semibold uppercase tracking-wider">

//               Why NexGrad Exists

//             </span>

//             <h2 className="text-5xl font-bold mt-4 mb-8">

//               Helping learners make
//               confident education decisions.

//             </h2>

//             <p className="text-lg leading-9 text-gray-600">

//               Every year, thousands of learners begin searching
//               for higher education opportunities with excitement
//               and ambition.

//             </p>

//             <p className="mt-6 text-lg leading-9 text-gray-600">

//               Very quickly, that excitement often turns into
//               confusion.

//             </p>

//             <div className="mt-8 space-y-4">

//               {[
//                 "Which university should I choose?",
//                 "Will employers recognise my qualification?",
//                 "Should I focus on cost or reputation?",
//                 "Is a higher ranking always better?",
//                 "Which country offers better opportunities?",
//               ].map((item) => (

//                 <div
//                   key={item}
//                   className="flex gap-4 items-start"
//                 >

//                   <FiCheckCircle
//                     className="text-red-600 mt-1"
//                     size={22}
//                   />

//                   <p className="text-lg text-gray-700">
//                     {item}
//                   </p>

//                 </div>

//               ))}

//             </div>

//             <p className="mt-10 text-lg leading-9 text-gray-600">

//               The problem is not a lack of information.

//               The problem is having too much information
//               without the context needed to make a
//               confident decision.

//             </p>

//             <p className="mt-6 text-lg leading-9 text-gray-600">

//               That is where NexGrad makes a difference.

//             </p>

//           </div>

//         </div>

//       </section>

//       {/* ===================================================== */}
//       {/* VALUES */}
//       {/* ===================================================== */}

//       <section className="bg-gray-50 py-28">

//         <div className="max-w-7xl mx-auto px-6">

//           <div className="text-center max-w-4xl mx-auto">

//             <span className="text-red-600 font-semibold uppercase">

//               Our Principles

//             </span>

//             <h2 className="text-5xl font-bold mt-4">

//               We Believe Better Decisions
//               Create Better Futures

//             </h2>

//           </div>

//           <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

//             {[
//               {
//                 icon: <FiTarget size={30} />,
//                 title: "Clarity Before Commitment",
//                 text: "Students deserve complete information before making one of the biggest investments in their future.",
//               },
//               {
//                 icon: <FiUsers size={30} />,
//                 title: "Guidance Before Admission",
//                 text: "Applications are important. Making the right decision is even more important.",
//               },
//               {
//                 icon: <FiShield size={30} />,
//                 title: "Transparency Builds Trust",
//                 text: "Recognition, fees, timelines and programme expectations explained clearly.",
//               },
//               {
//                 icon: <FiBookOpen size={30} />,
//                 title: "Education Should Fit Life",
//                 text: "Learning should support your career, family and ambitions.",
//               },
//               {
//                 icon: <FiGlobe size={30} />,
//                 title: "Every Journey Is Personal",
//                 text: "No two learners share the same goals. Our advice reflects your ambitions.",
//               },
//               {
//                 icon: <FiTrendingUp size={30} />,
//                 title: "Success Beyond Graduation",
//                 text: "A qualification is one milestone. Real success is lifelong career growth.",
//               },
//             ].map((card) => (

//               <div
//                 key={card.title}
//                 className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition border border-gray-100 hover:border-red-200"
//               >

//                 <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-8">

//                   {card.icon}

//                 </div>

//                 <h3 className="text-2xl font-bold mb-5">

//                   {card.title}

//                 </h3>

//                 <p className="text-gray-600 leading-8">

//                   {card.text}

//                 </p>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//       {/* CONTINUE IN PART 2 */}
//     </main>
//   );
// }