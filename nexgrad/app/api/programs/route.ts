import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const search = searchParams.get("search");
  const degree = searchParams.get("degree");
  const subject = searchParams.get("subject");
  const university = searchParams.get("university");
  const region = searchParams.get("region");
  const trending = searchParams.get("trending");
  const newLaunch = searchParams.get("newLaunch");
  const dualDegree = searchParams.get("dualDegree");
  const sort = searchParams.get("sort") || "newest";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 10;

  try {
    const where: any = {};

    if (search) {
    where.OR = [
  { title: { contains: search } },
  {
    university: {
      is: {
        name: { contains: search },
      },
    },
  },
];
    }

    if (degree) where.degreeLevel = degree;
    if (subject) where.subjectArea = subject;
    if (university) where.universityId = university;

    if (region) {
      where.university = {
        is: { region },
      };
    }

    if (trending === "true") where.trending = true;
    if (newLaunch === "true") where.newLaunch = true;
    if (dualDegree === "true") where.dualDegree = true;

    let orderBy: any = { createdAt: "desc" };
    if (sort === "tuition") orderBy = { tuition: "asc" };

    const programs = await prisma.program.findMany({
      where,
      include: { university: true },
      orderBy,
      skip: (page - 1) * limit,
      take: limit,
    });

    const total = await prisma.program.count({ where });

    return NextResponse.json({
      data: programs,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });

  } catch (error) {
    console.error("PROGRAM API ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch programs" },
      { status: 500 }
    );
  }
}