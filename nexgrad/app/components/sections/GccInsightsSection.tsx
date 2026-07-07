import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiClock, FiUser } from "react-icons/fi";

function getBlogs() {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "blogs.json"
    );

    if (!fs.existsSync(filePath)) {
      return [];
    }

    const json = fs.readFileSync(filePath, "utf8");

    return JSON.parse(json || "[]");
  } catch {
    return [];
  }
}

export default async function GccInsightsSection() {
  const blogs = getBlogs()
    .filter((blog: any) => blog.status === "published")
    .slice(0, 3);

  if (!blogs.length) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="max-w-4xl mx-auto text-center mb-16">

          <span className="inline-flex bg-red-50 text-red-600 px-5 py-2 rounded-full text-sm font-semibold mb-5">
            Career Insights
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold">

            Career Insights for
            <span className="text-red-600">
              {" "}UAE & GCC Professionals
            </span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            Stay updated with industry trends, salary insights,
            hiring developments, leadership skills, and professional
            growth opportunities across the Gulf region.

          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {blogs.map((blog: any) => (

            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <div className="relative h-60 overflow-hidden">

                <Image
                  src={blog.coverImage || "/blog-placeholder.jpg"}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute top-5 left-5">

                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-xs font-semibold">

                    {blog.category || "Insights"}

                  </span>

                </div>

              </div>

              <div className="p-7">

                <div className="flex items-center gap-5 text-sm text-gray-500 mb-4">

                  <span className="flex items-center gap-2">

                    <FiUser />

                    NexGrad

                  </span>

                  <span className="flex items-center gap-2">

                    <FiClock />

                    {blog.readTime || "5 min"}

                  </span>

                </div>

                <h3 className="text-2xl font-bold leading-8 group-hover:text-red-600 transition">

                  {blog.title}

                </h3>

                <p className="mt-4 text-gray-600 leading-7 line-clamp-3">

                  {blog.excerpt}

                </p>

                <div className="mt-8 inline-flex items-center gap-3 text-red-600 font-semibold group-hover:gap-5 transition-all">

                  Read Article

                  <FiArrowRight />

                </div>

              </div>

            </Link>

          ))}

        </div>

        {/* CTA */}

        <div className="text-center mt-16">

          <Link
            href="/blogs"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg"
          >

            View All Articles

            <FiArrowRight />

          </Link>

        </div>

      </div>

    </section>
  );
}