import Image from "next/image";

export default function Faculty({ program }: any) {

  if (!program?.faculty?.length) return null;

  return (
    <section>

      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        Meet Our Faculty
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {program.faculty.map(
          (member: any, index: number) => (

            <div
              key={member?.id || index}
              className="
                bg-[#F8F8F8]
                rounded-3xl
                p-8
                border
                border-gray-100
                hover:shadow-xl
                transition
              "
            >

              <div className="flex items-start gap-5">

                {/* IMAGE */}

                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-red-600 flex-shrink-0">

                  <Image
                    src={
                      member?.photo ||
                      "/faculty-placeholder.jpg"
                    }
                    alt={member?.name || "Faculty"}
                    fill
                    className="object-cover"
                  />

                </div>

                {/* CONTENT */}

                <div>

                  <h3 className="text-2xl font-semibold text-gray-900">
                    {member?.name}
                  </h3>

                  <p className="text-red-600 mt-1 font-medium">
                    {member?.designation}
                  </p>

                  <p className="text-gray-600 mt-4 leading-7">
                    {member?.bio}
                  </p>

                </div>

              </div>

            </div>
          )
        )}

      </div>

    </section>
  );
}