import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const programs = await prisma.program.findMany({
    select: {
      degreeLevel: true,
      subjectArea: true,
    },
  });

  const degreeLevels = [
    ...new Set(programs.map((p) => p.degreeLevel)),
  ];

  const subjectAreas = [
    ...new Set(programs.map((p) => p.subjectArea)),
  ];

  return NextResponse.json({
    degreeLevels,
    subjectAreas,
  });
}