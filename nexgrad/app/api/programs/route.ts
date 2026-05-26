import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "data",
  "programs.json"
);

/* ---------------- ENSURE FILE ---------------- */

function ensureFile() {
  const dir = path.dirname(filePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]");
  }
}

/* ---------------- READ ---------------- */

function readData() {
  ensureFile();

  return JSON.parse(
    fs.readFileSync(filePath, "utf-8") || "[]"
  );
}

/* ---------------- WRITE ---------------- */

function writeData(data: any) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(data, null, 2)
  );
}

/* ---------------- GET ---------------- */

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: readData(),
    });
  } catch (err) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}

/* ---------------- POST ---------------- */

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const programs = readData();

    const newProgram = {
      id: Date.now().toString(),

      title: body.title || "",

      slug: body.slug || "",

      degreeLevel: body.degreeLevel || "",

      tuition: body.tuition || "",

      duration: body.duration || "",

      description: body.description || "",

      universities: body.universities || [],

      status: body.status || "active",

      createdAt: new Date().toISOString(),
    };

    programs.push(newProgram);

    writeData(programs);

    return NextResponse.json({
      success: true,
      data: newProgram,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}

/* ---------------- DELETE ---------------- */

export async function DELETE(req: Request) {
  try {
    const body = await req.json();

    let programs = readData();

    programs = programs.filter(
      (p: any) => p.id !== body.id
    );

    writeData(programs);

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}