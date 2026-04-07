import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

export async function GET() {
  const programs: Prisma.ProgramGetPayload<{
    select: {
      degreeLevel: true;
      subjectArea: true;
    };
  }>[] = await prisma.program.findMany({
    select: {
      degreeLevel: true,
      subjectArea: true,
    },
  });

  const degreeLevels = [...new Set(programs.map((p) => p.degreeLevel))];
  const subjectAreas = [...new Set(programs.map((p) => p.subjectArea))];

  return NextResponse.json({
    degreeLevels,
    subjectAreas,
  });
}