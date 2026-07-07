import fs from "fs";
import path from "path";
import Link from "next/link";
import TestimonialCard from "@/app/components/ui/TestimonialCard";
import { FiArrowRight } from "react-icons/fi";

function getTestimonials() {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "testimonials.json"
    );

    if (!fs.existsSync(filePath)) {
      return [];
    }

    return JSON.parse(
      fs.readFileSync(filePath, "utf8")
    );
  } catch {
    return [];
  }
}

export default async function AlumniSuccess() {
  const testimonials = getTestimonials()
    .filter((item: any) => item.status === "active")
    .slice(0, 3);

  if (!testimonials.length) return null;

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-16">

          <span className="inline-flex bg-red-50 text-red-600 px-5 py-2 rounded-full text-sm font-semibold mb-5">
            Testimonials
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold">

            Success Stories from
            <span className="text-red-600">
              {" "}Working Professionals
            </span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            Hear from learners who balanced work and education while
            progressing toward new career opportunities, leadership
            roles, and professional growth.

          </p>

        </div>

        {/* Testimonials */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {testimonials.map((testimonial: any) => (

            <TestimonialCard
              key={testimonial.id}
              image={
                testimonial.image ||
                "/testi-placeholder.jpg"
              }
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              program={testimonial.program}
              initial={
                testimonial.name?.charAt(0) || "N"
              }
              video={testimonial.video}
            />

          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>

            <h3 className="text-3xl font-bold">

              Ready to Become Our Next Success Story?

            </h3>

            <p className="mt-3 text-red-100 text-lg">

              Join thousands of professionals across the UAE and GCC
              who have accelerated their careers with NexGrad.

            </p>

          </div>

          <Link
            href="/apply"
            className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >

            Apply Today

            <FiArrowRight />

          </Link>

        </div>

      </div>

    </section>
  );
}