import Image from "next/image";

export default function Faculty({ program }: any) {
  if (!program?.faculty?.length) return null;

  return (
    <section>
      <h2 className="heading-2 mb-8">Meet Our Faculty</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {program.faculty.map((member: any) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 border"
          >
            <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden">
              <Image
                src={member.photo || "/faculty-placeholder.jpg"}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-semibold text-lg mb-1">
              {member.name}
            </h3>

            <p className="text-red-600 text-sm mb-2">
              {member.designation}
            </p>

            <p className="text-gray-500 text-sm">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}