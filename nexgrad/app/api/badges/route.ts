import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// ✅ GET all badges
export async function GET() {
  try {
    const badges = await prisma.badge.findMany({
      orderBy: { name: "asc" },
    });

    return NextResponse.json(badges);
  } catch (error) {
    console.error("BADGE GET ERROR:", error);

    return NextResponse.json(
      { error: "Failed to fetch badges" },
      { status: 500 }
    );
  }
}

// ✅ CREATE badge
export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.name || !body.color) {
      return NextResponse.json(
        { error: "Name and color required" },
        { status: 400 }
      );
    }

    const badge = await prisma.badge.create({
      data: {
        name: body.name,
        color: body.color,
      },
    });

    return NextResponse.json(badge);
  } catch (error) {
    console.error("BADGE POST ERROR:", error);

    return NextResponse.json(
      { error: "Failed to create badge" },
      { status: 500 }
    );
  }
}