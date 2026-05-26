"use client";

import { useState } from "react";

export default function FaqSection({
  data,
}: any) {

  const [open, setOpen] =
    useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          {data.heading}
        </h2>

        <div className="space-y-4">

          {data.items?.map(
            (item: any, index: number) => (

              <div
                key={index}
                className="
                  bg-white
                  border
                  rounded-xl
                "
              >

                <button
                  onClick={() =>
                    setOpen(
                      open === index
                        ? null
                        : index
                    )
                  }
                  className="
                    w-full
                    flex
                    justify-between
                    p-5
                    font-medium
                  "
                >
                  {item.question}

                  <span>
                    {open === index
                      ? "-"
                      : "+"}
                  </span>
                </button>

                {open === index && (
                  <div className="px-5 pb-5 text-gray-600">
                    {item.answer}
                  </div>
                )}

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}