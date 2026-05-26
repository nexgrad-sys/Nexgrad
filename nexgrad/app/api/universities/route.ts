import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "data",
  "universities.json"
);

/* ---------------- ENSURE FILE ---------------- */

function ensureFile() {
  try {
    const dir = path.dirname(filePath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "[]");
    }
  } catch (err) {
    console.error("ensureFile error:", err);
  }
}

/* ---------------- READ ---------------- */

function readData() {
  ensureFile();

  try {
    const data = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(data || "[]");
  } catch (err) {
    console.error("readData error:", err);
    return [];
  }
}

/* ---------------- WRITE ---------------- */

function writeData(data: any) {
  ensureFile();

  try {
    fs.writeFileSync(
      filePath,
      JSON.stringify(data, null, 2)
    );
  } catch (err) {
    console.error("writeData error:", err);
  }
}

/* ---------------- GET ---------------- */

export async function GET() {
  try {
    const universities = readData();

    return NextResponse.json(universities);
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Failed to fetch universities" },
      { status: 500 }
    );
  }
}

/* ---------------- POST ---------------- */

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const universities = readData();

    const newUniversity = {
      id: Date.now().toString(),

      name: body.name || "",
      country: body.country || "",
      city: body.city || "",
      website: body.website || "",
      accreditation: body.accreditation || "",

      degreeTypes: Array.isArray(body.degreeTypes)
        ? body.degreeTypes
        : [],

      description: body.description || "",

      featured: body.featured || false,

      status: body.status || "active",

      logo: body.logo || "",

      createdAt: new Date().toISOString(),
    };

    universities.push(newUniversity);

    writeData(universities);

    return NextResponse.json({
      success: true,
      data: newUniversity,
    });
  } catch (err) {
    console.error("POST ERROR:", err);

    return NextResponse.json(
      { error: "Failed to save university" },
      { status: 500 }
    );
  }
}

/* ---------------- DELETE ---------------- */

export async function DELETE(req: Request) {
  try {
    const body = await req.json();

    const { id } = body;

    let universities = readData();

    universities = universities.filter(
      (u: any) => u.id !== id
    );

    writeData(universities);

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}

/* ---------------- TOGGLE STATUS ---------------- */

export async function PUT(req: Request) {
  try {
    const body = await req.json();

    const { id } = body;

    let universities = readData();

    universities = universities.map((u: any) =>
      u.id === id
        ? {
            ...u,
            status:
              u.status === "active"
                ? "inactive"
                : "active",
          }
        : u
    );

    writeData(universities);

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Toggle failed" },
      { status: 500 }
    );
  }
}