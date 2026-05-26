import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "data",
  "pages.json"
);

/* READ */

function readData() {

  try {

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "[]");
    }

    const json = fs.readFileSync(
      filePath,
      "utf-8"
    );

    return JSON.parse(json || "[]");

  } catch (err) {
    return [];
  }
}

/* WRITE */

function writeData(data: any) {

  fs.writeFileSync(
    filePath,
    JSON.stringify(data, null, 2)
  );
}

/* GET */

export async function GET() {

  const pages = readData();

  return NextResponse.json(pages);
}

/* POST */

export async function POST(req: Request) {

  const body = await req.json();

  writeData(body);

  return NextResponse.json({
    success: true,
  });
}