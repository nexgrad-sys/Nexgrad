import { prisma } from "@/app/lib/prisma";
import Link from "next/link";
import Image from "next/image";

export default async function BlogsPage() {
  const blogs = await prisma.blog.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-12 text-center">
          NexGrad Insights
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={blog.coverImage || "/blog-placeholder.jpg"}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-red-600 transition">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}