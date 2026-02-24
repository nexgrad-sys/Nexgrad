import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const blogs = await prisma.blog.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(blogs);
}

export async function POST(req: Request) {
  const body = await req.json();

  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      slug: body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      excerpt: body.excerpt,
      content: body.content,
      coverImage: body.coverImage,
      category: body.category,
      region: body.region,
      published: body.published ?? false,
    },
  });

  return NextResponse.json(blog);
}