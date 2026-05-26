/* app/programs/[slug]/components/ProgramTabs.tsx */

"use client";

export default function ProgramTabs({
  program,
}: {
  program?: any;
}) {

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      show: true,
    },

    {
      id: "curriculum",
      label: "Curriculum",
      show:
        program?.curriculum &&
        program?.curriculum?.length > 0,
    },

    {
      id: "fees",
      label: "Fees & EMI",
      show: true,
    },

    {
      id: "faculty",
      label: "Faculty",
      show:
        program?.faculty &&
        program?.faculty?.length > 0,
    },

    {
      id: "careers",
      label: "Careers",
      show:
        program?.careers &&
        program?.careers?.length > 0,
    },

    {
      id: "faq",
      label: "FAQ",
      show:
        program?.faq &&
        program?.faq?.length > 0,
    },

    {
      id: "apply",
      label: "Apply",
      show: true,
    },
  ].filter((tab) => tab.show);

  return (
    <div className="sticky top-0 z-40 bg-white border-b">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        <div className="flex gap-8 overflow-x-auto no-scrollbar py-5">

          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className="
                whitespace-nowrap
                text-[16px]
                font-medium
                text-gray-600
                hover:text-red-600
                transition
              "
            >
              {tab.label}
            </a>
          ))}

        </div>

      </div>

    </div>
  );
}