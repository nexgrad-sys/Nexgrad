import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import HeroSection from "@/app/components/builder/HeroSection";
import FeaturesSection from "@/app/components/builder/FeaturesSection";
import FaqSection from "@/app/components/builder/FaqSection";

const filePath = path.join(process.cwd(), "data", "pages.json");

/* GET PAGES */

function getPages() {
  try {
    if (!fs.existsSync(filePath)) {
      return [];
    }

    const json = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(json || "[]");
  } catch (err) {
    return [];
  }
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const pages = getPages();

  /* ONLY PUBLISHED */

  const page = pages.find(
    (p: any) => p.slug === slug && p.status === "published",
  );

  if (!page) {
    notFound();
  }

  return (
    <div>
      {page.sections.map((section: any) => (
        <div key={section.id}>
          {/* HERO */}

          {section.type === "hero" && (
            <section
              className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
    "
            >
              {/* BACKGROUND */}

              <div
                className="
        absolute
        inset-0
        bg-cover
        bg-center
      "
                style={{
                  backgroundImage: `url(${section.data.image})`,
                }}
              />

              {/* DARK OVERLAY */}

              <div className="absolute inset-0 bg-black/60" />

              {/* CONTENT */}

              <div
                className="
        relative
        z-10
        w-full
        max-w-7xl
        mx-auto
        px-6
        py-32
      "
              >
                <div className="max-w-3xl">
                  {/* SUBTITLE */}

                  {/* {section.data.subtitle && (
                    <span
                      className="
              inline-block
              bg-red-600
              text-white
              px-5
              py-2
              rounded-full
              text-sm
              font-semibold
              uppercase
              tracking-wider
              mb-6
            "
                    >
                      {section.data.subtitle}
                    </span>
                  )} */}

                  {/* TITLE */}

                  <h1
                    className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            text-white
          "
                  >
                    {section.data.title}
                  </h1>

                  {/* DESCRIPTION */}

                  <p
                    className="
            mt-8
            text-xl
            text-gray-200
            leading-9
            max-w-2xl
          "
                  >
                    {section.data.description}
                  </p>

                  {/* BUTTON */}

                  <div className="mt-10">
                    <a
                      href={section.data.buttonLink || "#"}
                      className="
              inline-flex
              items-center
              justify-center
              bg-red-600
              hover:bg-red-700
              text-white
              px-10
              py-5
              rounded-2xl
              text-lg
              font-semibold
              shadow-2xl
              transition
            "
                    >
                      {section.data.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* FEATURES */}

          {section.type === "features" && (
            <section className="py-28 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                  <span className="text-red-600 font-semibold uppercase tracking-widest">
                    Why Choose Us
                  </span>

                  <h2 className="text-5xl font-bold mt-4">
                    {section.data.heading}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(section.data.items || []).map((item: any, i: number) => (
                    <div
                      key={i}
                      className="
                    bg-white
                    border border-red-100
                    rounded-3xl
                    p-10
                    shadow-lg
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition
                  "
                    >
                      <div
                        className="
                      w-14 h-14
                      rounded-2xl
                      bg-red-50
                      flex items-center justify-center
                      text-red-600
                      text-2xl
                      mb-6
                    "
                      >
                        ✓
                      </div>

                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                      <p className="text-gray-600 leading-8">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA */}

          {section.type === "cta" && (
            <section className="py-24 bg-red-600" style={{marginTop:'10px',marginBottom:'10px'}}>
              <div className="max-w-5xl mx-auto px-6 text-center text-white ">
                <span className="uppercase tracking-[5px] text-red-100">
                  Admissions Open
                </span>

                <h2 className="text-6xl font-bold mt-6 leading-tight">
                  {section.data.heading}
                </h2>

                <p className="mt-8 text-xl leading-9 text-red-100">
                  {section.data.description}
                </p>

                <a
                  href={section.data.buttonLink}
                  className="
              inline-flex
              mt-10
              bg-white
              text-red-600
              px-10
              py-5
              rounded-2xl
              font-bold
              text-lg
              shadow-2xl
              hover:scale-105
              transition
            "
                >
                  {section.data.buttonText}
                </a>
              </div>
            </section>
          )}

          {/* FAQ */}

          {section.type === "faq" && (
            <section className="py-28 bg-gray-50">
              <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-20">
                  <span className="text-red-600 uppercase tracking-widest font-semibold">
                    Support
                  </span>

                  <h2 className="text-5xl font-bold mt-4">
                    {section.data.heading}
                  </h2>
                </div>

                <div className="space-y-6">
                  {(section.data.items || []).map((item: any, i: number) => (
                    <div
                      key={i}
                      className="
                    bg-white
                    rounded-3xl
                    p-8
                    shadow-md
                    border border-gray-100
                  "
                    >
                      <h3 className="text-2xl font-semibold mb-4">
                        {item.question}
                      </h3>

                      <p className="text-gray-600 leading-8">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* TESTIMONIALS */}

          {section.type === "testimonials" && (
            <section className="py-28 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                  <span className="text-red-600 uppercase tracking-widest font-semibold">
                    Testimonials
                  </span>

                  <h2 className="text-5xl font-bold mt-4">
                    {section.data.heading}
                  </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {(section.data.items || []).map((item: any, i: number) => (
                    <div
                      key={i}
                      className="
                    bg-gradient-to-br
                    from-white
                    to-red-50
                    rounded-3xl
                    p-10
                    shadow-xl
                    border border-red-100
                  "
                    >
                      <div className="text-red-600 text-5xl mb-6">"</div>

                      <p className="text-gray-700 text-lg leading-9 mb-8">
                        {item.quote}
                      </p>

                      <div>
                        <h4 className="text-xl font-bold">{item.name}</h4>

                        <p className="text-gray-500 mt-1">{item.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      ))}
    </div>
  );
}

export async function generateMetadata({ params }: any) {
  const pages = getPages();

  const page = pages.find((p: any) => p.slug === params.slug);

  return {
    title: page?.seo?.title || page?.title,

    description: page?.seo?.description,

    keywords: page?.seo?.keywords,

    openGraph: {
      images: [page?.seo?.ogImage],
    },
  };
}
