import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const appDir = path.join(process.cwd(), "app");

function scanPages(dir: string, base = ""): any[] {
  const items = fs.readdirSync(dir);

  let pages: any[] = [];

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      pages = [
        ...pages,
        ...scanPages(fullPath, `${base}/${item}`),
      ];
    }

    if (item === "page.tsx" || item === "page.jsx") {
      pages.push({
        path: base || "/",
        slug: base.replace(/\//g, "") || "home",
      });
    }
  }

  return pages;
}

export async function GET() {
  try {
    const pages = scanPages(appDir);

    return NextResponse.json(pages);
  } catch (err) {
    return NextResponse.json({ error: "Failed to scan pages" }, { status: 500 });
  }
}