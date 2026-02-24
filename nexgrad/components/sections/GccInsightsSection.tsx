import { prisma } from "@/app/lib/prisma";
import Link from "next/link";
import Image from "next/image";

export default async function GccInsightsSection() {
  const posts = await prisma.blog.findMany({
    where: {
      region: "GCC",
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  if (!posts.length) return null;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold mb-3">
            Career Insights for Professionals in the GCC
          </h2>

          <p className="text-gray-600 text-lg">
            Latest industry trends, executive education guidance, and
            career growth strategies tailored for GCC professionals.
          </p>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={post.coverImage || "/blog-placeholder.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-red-600 transition">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-4 text-sm text-red-600 font-medium">
                  Read Article →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/blogs?region=GCC"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition shadow-lg"
          >
            View All GCC Articles →
          </Link>
        </div>

      </div>
    </section>
  );
}