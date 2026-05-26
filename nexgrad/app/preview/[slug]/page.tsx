import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

const filePath = path.join(
  process.cwd(),
  "data",
  "pages.json"
);

function getPages() {

  if (!fs.existsSync(filePath)) {
    return [];
  }

  const json = fs.readFileSync(
    filePath,
    "utf-8"
  );

  return JSON.parse(json || "[]");
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {

  const { slug } = await params;

  const pages = getPages();

  const page = pages.find(
    (p: any) => p.slug === slug
  );

  if (!page) {
    return notFound();
  }

  return (
    <div>

      {(page.sections || []).map(
        (section: any) => (

          <section
            key={section.id}
            className="relative h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url(${section.data.image})`,
            }}
          >

            <div className="absolute inset-0 bg-black/60 flex items-center">

              <div className="max-w-7xl mx-auto px-6 text-white">

                <h1 className="text-7xl font-bold mb-6">
                  {section.data.title}
                </h1>

                <p className="text-xl max-w-2xl mb-8">
                  {
                    section.data
                      .description
                  }
                </p>

                <button className="bg-red-600 px-8 py-4 rounded-xl">
                  {
                    section.data
                      .buttonText
                  }
                </button>

              </div>

            </div>

          </section>

        )
      )}

    </div>
  );
}