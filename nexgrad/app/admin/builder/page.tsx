"use client";

import { useEffect, useState } from "react";

export default function BuilderPage() {

  const [pages, setPages] = useState<any[]>([]);
  const [selectedPage, setSelectedPage] =
    useState<any>(null);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  /* LOAD */

  async function loadPages() {

    const res = await fetch("/api/builder");

    const data = await res.json();

    setPages(data || []);

    if (data?.length) {
      setSelectedPage(data[0]);
    }
  }

  useEffect(() => {
    loadPages();
  }, []);

  /* SAVE */

  async function savePages(updated: any[]) {

    setPages(updated);

    await fetch("/api/builder", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(updated),
    });
  }

  /* CREATE PAGE */

  async function createPage() {

    if (!title || !slug) return;

    const newPage = {

      id: crypto.randomUUID(),

      title,

      slug,

      status: "draft",

      seo: {
  metaTitle: "",
  metaDescription: "",
  keywords: "",
  ogImage: "",
  canonicalUrl: "",
  noIndex: false,
},

      sections: [],
    };

    const updated = [
      ...pages,
      newPage,
    ];

    await savePages(updated);

    setSelectedPage(newPage);

    setTitle("");
    setSlug("");
  }

  /* DELETE PAGE */

  async function deletePage(id: string) {

    const updated = pages.filter(
      (p) => p.id !== id
    );

    await savePages(updated);

    setSelectedPage(updated[0] || null);
  }

  /* PUBLISH */

  async function publishPage() {

    const updated = pages.map((p) => {

      if (p.id === selectedPage.id) {

        return {
          ...p,
          status: "published",
        };
      }

      return p;
    });

    await savePages(updated);

    setSelectedPage(
      updated.find(
        (p) => p.id === selectedPage.id
      )
    );
  }

  /* ADD SECTION */

  async function addSection(type: string) {

    let section: any = {
      id: crypto.randomUUID(),
      type,
      data: {},
    };

    if (type === "hero") {

      section.data = {
        title: "Hero Heading",
        subtitle: "Hero subtitle",
        description:
          "Hero description text",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        buttonText: "Apply Now",
        buttonLink: "/apply",
      };
    }

    if (type === "features") {

      section.data = {
        heading: "Features",

        items: [
          {
            title: "Feature One",
            description:
              "Feature description",
          },

          {
            title: "Feature Two",
            description:
              "Feature description",
          },
        ],
      };
    }

    if (type === "cta") {

      section.data = {
        heading:
          "Ready To Apply?",

        description:
          "Start your journey today.",

        buttonText:
          "Apply Now",

        buttonLink:
          "/apply",
      };
    }

    if (type === "faq") {

      section.data = {
        heading: "FAQs",

        items: [
          {
            question:
              "What is this?",

            answer:
              "This is answer text.",
          },
        ],
      };
    }

    if (type === "testimonials") {

      section.data = {

        heading:
          "Student Testimonials",

        items: [
          {
            name: "John Doe",

            quote:
              "Amazing experience!",

            role:
              "MBA Student",
          },
        ],
      };
    }

    const updated = pages.map((p) => {

      if (p.id === selectedPage.id) {

        return {

          ...p,

          sections: [
            ...(p.sections || []),
            section,
          ],
        };
      }

      return p;
    });

    await savePages(updated);

    setSelectedPage(
      updated.find(
        (p) => p.id === selectedPage.id
      )
    );
  }

  /* UPDATE SECTION */

  async function updateSection(
    sectionId: string,
    field: string,
    value: any
  ) {

    const updated = pages.map((p) => {

      if (p.id === selectedPage.id) {

        return {

          ...p,

          sections: p.sections.map(
            (s: any) => {

              if (
                s.id === sectionId
              ) {

                return {

                  ...s,

                  data: {
                    ...s.data,
                    [field]: value,
                  },
                };
              }

              return s;
            }
          ),
        };
      }

      return p;
    });

    await savePages(updated);

    setSelectedPage(
      updated.find(
        (p) => p.id === selectedPage.id
      )
    );
  }

  /* UPDATE SEO */

async function updateSEO(
  field: string,
  value: any
) {

  const updated = pages.map((p) => {

    if (p.id === selectedPage.id) {

      return {

        ...p,

        seo: {
          ...p.seo,
          [field]: value,
        },
      };
    }

    return p;
  });

  await savePages(updated);

  setSelectedPage(
    updated.find(
      (p) => p.id === selectedPage.id
    )
  );
}

  /* DELETE SECTION */

  async function deleteSection(
    sectionId: string
  ) {

    const updated = pages.map((p) => {

      if (p.id === selectedPage.id) {

        return {

          ...p,

          sections:
            p.sections.filter(
              (s: any) =>
                s.id !== sectionId
            ),
        };
      }

      return p;
    });

    await savePages(updated);

    setSelectedPage(
      updated.find(
        (p) => p.id === selectedPage.id
      )
    );
  }

  /* DUPLICATE */

  async function duplicateSection(
    section: any
  ) {

    const clone = {
      ...section,
      id: crypto.randomUUID(),
    };

    const updated = pages.map((p) => {

      if (p.id === selectedPage.id) {

        return {

          ...p,

          sections: [
            ...p.sections,
            clone,
          ],
        };
      }

      return p;
    });

    await savePages(updated);

    setSelectedPage(
      updated.find(
        (p) => p.id === selectedPage.id
      )
    );
  }

  /* MOVE */

  async function moveSection(
    index: number,
    direction: "up" | "down"
  ) {

    const sections = [
      ...selectedPage.sections,
    ];

    const target =
      direction === "up"
        ? index - 1
        : index + 1;

    if (
      target < 0 ||
      target >= sections.length
    ) return;

    [
      sections[index],
      sections[target],
    ] = [
      sections[target],
      sections[index],
    ];

    const updated = pages.map((p) => {

      if (p.id === selectedPage.id) {

        return {
          ...p,
          sections,
        };
      }

      return p;
    });

    await savePages(updated);

    setSelectedPage(
      updated.find(
        (p) => p.id === selectedPage.id
      )
    );
  }

  return (

    <div className="flex h-screen bg-gray-100">

      {/* SIDEBAR */}

      <div className="w-[320px] bg-black text-white overflow-y-auto">

        <div className="p-5">

          <h2 className="text-2xl font-bold">
            Builder
          </h2>

          <div className="space-y-3 mt-5">

            <input
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder="Page Title"
              className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            />

            <input
              value={slug}
              onChange={(e) =>
                setSlug(e.target.value)
              }
              placeholder="page-slug"
              className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            />

            <button
              onClick={createPage}
              className="w-full bg-red-600 py-3 rounded-xl"
            >
              Create Page
            </button>

          </div>

        </div>

        {/* PAGE LIST */}

        {pages.map((page, index) => (

          <div
            key={page.id || index}
            onClick={() =>
              setSelectedPage(page)
            }
            className={`
              border-t border-gray-800
              p-4 cursor-pointer
              ${
                selectedPage?.id === page.id
                  ? "bg-gray-900"
                  : ""
              }
            `}
          >

            <div className="flex justify-between">

              <div>

                <p className="font-semibold">
                  {page.title}
                </p>

                <p className="text-xs text-gray-400">
                  /{page.slug}
                </p>

                <p className="text-xs mt-1 text-green-400">
                  {page.status}
                </p>

              </div>

              <button
                onClick={(e) => {

                  e.stopPropagation();

                  deletePage(page.id);

                }}
                className="text-red-500"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* CONTENT */}

      <div className="flex-1 overflow-y-auto p-8">

        {!selectedPage ? (

          <div>
            Select Page
          </div>

        ) : (

          <div>

            {/* TOP */}

            <div className="flex justify-between mb-8">

              <div>

                <h1 className="text-4xl font-bold">
                  {selectedPage.title}
                </h1>

                <p className="text-gray-500">
                  /{selectedPage.slug}
                </p>

              </div>

              <div className="flex gap-3">

                <button
                  onClick={publishPage}
                  className="bg-green-600 text-white px-6 py-3 rounded-xl"
                >
                  Publish
                </button>

                <a
                  href={`/preview/${selectedPage.slug}`}
                  target="_blank"
                  className="bg-black text-white px-6 py-3 rounded-xl"
                >
                  Preview
                </a>

              </div>

            </div>

            {/* SEO PANEL */}

<div className="bg-white rounded-3xl shadow mb-10 overflow-hidden">

  <div className="border-b p-6">

    <h2 className="text-3xl font-bold">
      SEO Settings
    </h2>

    <p className="text-gray-500 mt-2">
      Manage Google & Social Preview
    </p>

  </div>

  <div className="grid lg:grid-cols-2 gap-10 p-8">

    {/* SEO FORM */}

    <div className="space-y-5">

      {/* META TITLE */}

      <div>

        <label className="font-medium mb-2 block">
          SEO Title
        </label>

        <input
          value={
            selectedPage.seo?.metaTitle || ""
          }
          onChange={(e) =>
            updateSEO(
              "metaTitle",
              e.target.value
            )
          }
          placeholder="SEO Title"
          className="w-full border rounded-xl p-4"
        />

        <p className="text-sm text-gray-500 mt-1">
          {
            (
              selectedPage.seo
                ?.metaTitle || ""
            ).length
          }
          /60 characters
        </p>

      </div>

      {/* META DESCRIPTION */}

      <div>

        <label className="font-medium mb-2 block">
          Meta Description
        </label>

        <textarea
          rows={5}
          value={
            selectedPage.seo
              ?.metaDescription || ""
          }
          onChange={(e) =>
            updateSEO(
              "metaDescription",
              e.target.value
            )
          }
          placeholder="Meta Description"
          className="w-full border rounded-xl p-4"
        />

        <p className="text-sm text-gray-500 mt-1">
          {
            (
              selectedPage.seo
                ?.metaDescription || ""
            ).length
          }
          /160 characters
        </p>

      </div>

      {/* KEYWORDS */}

      <div>

        <label className="font-medium mb-2 block">
          Keywords
        </label>

        <input
          value={
            selectedPage.seo?.keywords || ""
          }
          onChange={(e) =>
            updateSEO(
              "keywords",
              e.target.value
            )
          }
          placeholder="MBA, Online MBA, Nexgrad"
          className="w-full border rounded-xl p-4"
        />

      </div>

      {/* OG IMAGE */}

      <div>

        <label className="font-medium mb-2 block">
          OG Image
        </label>

        <input
          value={
            selectedPage.seo?.ogImage || ""
          }
          onChange={(e) =>
            updateSEO(
              "ogImage",
              e.target.value
            )
          }
          placeholder="https://..."
          className="w-full border rounded-xl p-4"
        />

      </div>

      {/* CANONICAL */}

      <div>

        <label className="font-medium mb-2 block">
          Canonical URL
        </label>

        <input
          value={
            selectedPage.seo
              ?.canonicalUrl || ""
          }
          onChange={(e) =>
            updateSEO(
              "canonicalUrl",
              e.target.value
            )
          }
          placeholder="https://nexgrad.com/page"
          className="w-full border rounded-xl p-4"
        />

      </div>

      {/* NOINDEX */}

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={
            selectedPage.seo?.noIndex || false
          }
          onChange={(e) =>
            updateSEO(
              "noIndex",
              e.target.checked
            )
          }
        />

        <label>
          No Index (Hide from Google)
        </label>

      </div>

    </div>

    {/* LIVE PREVIEW */}

    <div>

      <div className="border rounded-3xl p-8">

        <p className="text-green-700 text-sm">

          https://nexgrad.com/
          {selectedPage.slug}

        </p>

        <h3 className="text-blue-700 text-3xl font-medium mt-3">

          {selectedPage.seo?.metaTitle ||
            selectedPage.title}

        </h3>

        <p className="text-gray-600 mt-3 leading-7">

          {selectedPage.seo
            ?.metaDescription ||
            "Meta description preview will appear here."}

        </p>

      </div>

      {/* OG PREVIEW */}

      {selectedPage.seo?.ogImage && (

        <div className="mt-8 border rounded-3xl overflow-hidden">

          <img
            src={
              selectedPage.seo?.ogImage
            }
            alt=""
            className="w-full h-[240px] object-cover"
          />

          <div className="p-5">

            <p className="text-sm text-gray-500">
              Open Graph Preview
            </p>

            <h3 className="text-xl font-bold mt-2">
              {selectedPage.seo?.metaTitle ||
                selectedPage.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {selectedPage.seo
                ?.metaDescription ||
                "OG Description"}
            </p>

          </div>

        </div>
      )}

    </div>

  </div>

</div>

            {/* ADD SECTION */}

            <div className="flex gap-3 flex-wrap mb-10">

              <button
                onClick={() =>
                  addSection("hero")
                }
                className="bg-white border px-5 py-3 rounded-xl"
              >
                + Hero
              </button>

              <button
                onClick={() =>
                  addSection("features")
                }
                className="bg-white border px-5 py-3 rounded-xl"
              >
                + Features
              </button>

              <button
                onClick={() =>
                  addSection("cta")
                }
                className="bg-white border px-5 py-3 rounded-xl"
              >
                + CTA
              </button>

              <button
                onClick={() =>
                  addSection("faq")
                }
                className="bg-white border px-5 py-3 rounded-xl"
              >
                + FAQ
              </button>

              <button
                onClick={() =>
                  addSection(
                    "testimonials"
                  )
                }
                className="bg-white border px-5 py-3 rounded-xl"
              >
                + Testimonials
              </button>

            </div>

            {/* SECTIONS */}

            <div className="space-y-10">

              {(selectedPage.sections ||
                []).map(
                (
                  section: any,
                  index: number
                ) => (

                  <div
                    key={
                      section.id || index
                    }
                    className="bg-white rounded-3xl shadow overflow-hidden"
                  >

                    {/* ACTIONS */}

                    <div className="flex gap-2 p-4 border-b bg-gray-50">

                      <button
                        onClick={() =>
                          moveSection(
                            index,
                            "up"
                          )
                        }
                        className="border px-3 py-1 rounded"
                      >
                        ↑
                      </button>

                      <button
                        onClick={() =>
                          moveSection(
                            index,
                            "down"
                          )
                        }
                        className="border px-3 py-1 rounded"
                      >
                        ↓
                      </button>

                      <button
                        onClick={() =>
                          duplicateSection(
                            section
                          )
                        }
                        className="border px-3 py-1 rounded"
                      >
                        Duplicate
                      </button>

                      <button
                        onClick={() =>
                          deleteSection(
                            section.id
                          )
                        }
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>

                    </div>

                    <div className="grid lg:grid-cols-2">

  {/* EDITOR */}

  <div className="p-6 space-y-4 border-r">

    <h3 className="text-2xl font-bold capitalize">
      {section.type} Section
    </h3>

    {/* HERO */}

    {section.type === "hero" && (
      <>

        <input
          value={section.data.title}
          onChange={(e) =>
            updateSection(
              section.id,
              "title",
              e.target.value
            )
          }
          placeholder="Heading"
          className="w-full border rounded-xl p-3"
        />

        <textarea
          value={section.data.description}
          onChange={(e) =>
            updateSection(
              section.id,
              "description",
              e.target.value
            )
          }
          rows={5}
          placeholder="Description"
          className="w-full border rounded-xl p-3"
        />

        <input
          value={section.data.image}
          onChange={(e) =>
            updateSection(
              section.id,
              "image",
              e.target.value
            )
          }
          placeholder="Image URL"
          className="w-full border rounded-xl p-3"
        />

        <input
          value={section.data.buttonText}
          onChange={(e) =>
            updateSection(
              section.id,
              "buttonText",
              e.target.value
            )
          }
          placeholder="Button Text"
          className="w-full border rounded-xl p-3"
        />

        <input
          value={section.data.buttonLink}
          onChange={(e) =>
            updateSection(
              section.id,
              "buttonLink",
              e.target.value
            )
          }
          placeholder="Button Link"
          className="w-full border rounded-xl p-3"
        />

      </>
    )}

    {/* FEATURES */}

    {section.type === "features" && (
      <>

        <input
          value={section.data.heading}
          onChange={(e) =>
            updateSection(
              section.id,
              "heading",
              e.target.value
            )
          }
          placeholder="Section Heading"
          className="w-full border rounded-xl p-3"
        />

        {(section.data.items || []).map(
          (item: any, i: number) => (

            <div
              key={i}
              className="border rounded-2xl p-4 space-y-3"
            >

              <input
                value={item.title}
                onChange={(e) => {

                  const updatedItems =
                    [...section.data.items];

                  updatedItems[i].title =
                    e.target.value;

                  updateSection(
                    section.id,
                    "items",
                    updatedItems
                  );
                }}
                placeholder="Feature Title"
                className="w-full border rounded-xl p-3"
              />

              <textarea
                value={item.description}
                onChange={(e) => {

                  const updatedItems =
                    [...section.data.items];

                  updatedItems[i].description =
                    e.target.value;

                  updateSection(
                    section.id,
                    "items",
                    updatedItems
                  );
                }}
                rows={3}
                placeholder="Feature Description"
                className="w-full border rounded-xl p-3"
              />

            </div>
          )
        )}

        <button
          onClick={() => {

            const updatedItems = [
              ...(section.data.items || []),

              {
                title: "New Feature",
                description:
                  "Feature Description",
              },
            ];

            updateSection(
              section.id,
              "items",
              updatedItems
            );
          }}
          className="bg-black text-white px-5 py-3 rounded-xl"
        >
          Add Feature
        </button>

      </>
    )}

    {/* CTA */}

    {section.type === "cta" && (
      <>

        <input
          value={section.data.heading}
          onChange={(e) =>
            updateSection(
              section.id,
              "heading",
              e.target.value
            )
          }
          placeholder="CTA Heading"
          className="w-full border rounded-xl p-3"
        />

        <textarea
          value={section.data.description}
          onChange={(e) =>
            updateSection(
              section.id,
              "description",
              e.target.value
            )
          }
          rows={4}
          placeholder="CTA Description"
          className="w-full border rounded-xl p-3"
        />

        <input
          value={section.data.buttonText}
          onChange={(e) =>
            updateSection(
              section.id,
              "buttonText",
              e.target.value
            )
          }
          placeholder="Button Text"
          className="w-full border rounded-xl p-3"
        />

        <input
          value={section.data.buttonLink}
          onChange={(e) =>
            updateSection(
              section.id,
              "buttonLink",
              e.target.value
            )
          }
          placeholder="Button Link"
          className="w-full border rounded-xl p-3"
        />

      </>
    )}

    {/* FAQ */}

    {section.type === "faq" && (
      <>

        <input
          value={section.data.heading}
          onChange={(e) =>
            updateSection(
              section.id,
              "heading",
              e.target.value
            )
          }
          placeholder="FAQ Heading"
          className="w-full border rounded-xl p-3"
        />

        {(section.data.items || []).map(
          (item: any, i: number) => (

            <div
              key={i}
              className="border rounded-2xl p-4 space-y-3"
            >

              <input
                value={item.question}
                onChange={(e) => {

                  const updatedItems =
                    [...section.data.items];

                  updatedItems[i].question =
                    e.target.value;

                  updateSection(
                    section.id,
                    "items",
                    updatedItems
                  );
                }}
                placeholder="Question"
                className="w-full border rounded-xl p-3"
              />

              <textarea
                value={item.answer}
                onChange={(e) => {

                  const updatedItems =
                    [...section.data.items];

                  updatedItems[i].answer =
                    e.target.value;

                  updateSection(
                    section.id,
                    "items",
                    updatedItems
                  );
                }}
                rows={4}
                placeholder="Answer"
                className="w-full border rounded-xl p-3"
              />

            </div>
          )
        )}

        <button
          onClick={() => {

            const updatedItems = [
              ...(section.data.items || []),

              {
                question:
                  "New Question",
                answer:
                  "New Answer",
              },
            ];

            updateSection(
              section.id,
              "items",
              updatedItems
            );
          }}
          className="bg-black text-white px-5 py-3 rounded-xl"
        >
          Add FAQ
        </button>

      </>
    )}

    {/* TESTIMONIALS */}

    {section.type === "testimonials" && (
      <>

        <input
          value={section.data.heading}
          onChange={(e) =>
            updateSection(
              section.id,
              "heading",
              e.target.value
            )
          }
          placeholder="Testimonials Heading"
          className="w-full border rounded-xl p-3"
        />

        {(section.data.items || []).map(
          (item: any, i: number) => (

            <div
              key={i}
              className="border rounded-2xl p-4 space-y-3"
            >

              <input
                value={item.name}
                onChange={(e) => {

                  const updatedItems =
                    [...section.data.items];

                  updatedItems[i].name =
                    e.target.value;

                  updateSection(
                    section.id,
                    "items",
                    updatedItems
                  );
                }}
                placeholder="Name"
                className="w-full border rounded-xl p-3"
              />

              <input
                value={item.role}
                onChange={(e) => {

                  const updatedItems =
                    [...section.data.items];

                  updatedItems[i].role =
                    e.target.value;

                  updateSection(
                    section.id,
                    "items",
                    updatedItems
                  );
                }}
                placeholder="Role"
                className="w-full border rounded-xl p-3"
              />

              <textarea
                value={item.quote}
                onChange={(e) => {

                  const updatedItems =
                    [...section.data.items];

                  updatedItems[i].quote =
                    e.target.value;

                  updateSection(
                    section.id,
                    "items",
                    updatedItems
                  );
                }}
                rows={4}
                placeholder="Quote"
                className="w-full border rounded-xl p-3"
              />

            </div>
          )
        )}

        <button
          onClick={() => {

            const updatedItems = [
              ...(section.data.items || []),

              {
                name: "Student Name",
                role: "Student",
                quote:
                  "Amazing experience",
              },
            ];

            updateSection(
              section.id,
              "items",
              updatedItems
            );
          }}
          className="bg-black text-white px-5 py-3 rounded-xl"
        >
          Add Testimonial
        </button>

      </>
    )}

  </div>

  {/* PREVIEW */}

  <div className="bg-white">

    {/* HERO */}

    {section.type === "hero" && (

      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${section.data.image})`,
        }}
      >

        <div className="absolute inset-0 bg-black/50 flex items-center">

          <div className="p-10 text-white">

            <h2 className="text-6xl font-bold mb-4">
              {section.data.title}
            </h2>

            <p className="text-xl mb-6 max-w-xl">
              {section.data.description}
            </p>

            <a
              href={section.data.buttonLink}
              className="inline-block bg-red-600 px-8 py-4 rounded-2xl"
            >
              {section.data.buttonText}
            </a>

          </div>

        </div>

      </div>
    )}

    {/* FEATURES */}

    {section.type === "features" && (

      <div className="p-10">

        <h2 className="text-4xl font-bold mb-10">
          {section.data.heading}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {(section.data.items || []).map(
            (item: any, i: number) => (

              <div
                key={i}
                className="border rounded-2xl p-6"
              >

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.description}
                </p>

              </div>
            )
          )}

        </div>

      </div>
    )}

    {/* CTA */}

    {section.type === "cta" && (

      <div className="bg-black text-white p-20 text-center">

        <h2 className="text-5xl font-bold mb-5">
          {section.data.heading}
        </h2>

        <p className="mb-8 text-lg">
          {section.data.description}
        </p>

        <a
          href={section.data.buttonLink}
          className="bg-red-600 px-8 py-4 rounded-2xl inline-block"
        >
          {section.data.buttonText}
        </a>

      </div>
    )}

    {/* FAQ */}

    {section.type === "faq" && (

      <div className="p-10">

        <h2 className="text-4xl font-bold mb-10">
          {section.data.heading}
        </h2>

        <div className="space-y-5">

          {(section.data.items || []).map(
            (item: any, i: number) => (

              <div
                key={i}
                className="border rounded-2xl p-5"
              >

                <h3 className="font-bold text-xl mb-3">
                  {item.question}
                </h3>

                <p className="text-gray-600">
                  {item.answer}
                </p>

              </div>
            )
          )}

        </div>

      </div>
    )}

    {/* TESTIMONIALS */}

    {section.type === "testimonials" && (

      <div className="p-10">

        <h2 className="text-4xl font-bold mb-10">
          {section.data.heading}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {(section.data.items || []).map(
            (item: any, i: number) => (

              <div
                key={i}
                className="border rounded-2xl p-6"
              >

                <p className="text-lg italic mb-5">
                  "{item.quote}"
                </p>

                <h4 className="font-bold">
                  {item.name}
                </h4>

                <p className="text-gray-500">
                  {item.role}
                </p>

              </div>
            )
          )}

        </div>

      </div>
    )}

  </div>

</div>

                  </div>

                )
              )}

            </div>

          </div>

        )}

      </div>

    </div>
  );
}