import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// ✅ GET all categories
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { title: "asc" },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error("GET ERROR:", error);

    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

// ✅ CREATE category
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // validation
    if (!body.title || !body.slug) {
      return NextResponse.json(
        { error: "Title and slug required" },
        { status: 400 }
      );
    }

    const category = await prisma.category.create({
      data: {
        title: body.title,
        slug: body.slug,
        description: body.description || "",
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.error("POST ERROR:", error);

    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
}