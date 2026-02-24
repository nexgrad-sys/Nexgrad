import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetail({ params }: Props) {
    const { slug } = await params;

 if (!slug) return notFound();

  const blog = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!blog || !blog.published) {
    return notFound();
  }

  return (
    <article className="py-24">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-6">
          {blog.title}
        </h1>

        {blog.coverImage && (
          <div className="relative w-full h-[400px] mb-10 rounded-2xl overflow-hidden">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

      </div>
    </article>
  );
}