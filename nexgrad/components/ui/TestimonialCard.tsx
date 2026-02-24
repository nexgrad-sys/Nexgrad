import Image from "next/image";
import { FiPlay } from "react-icons/fi";

type Props = {
  image?: string;
  name: string;
  role: string;
  quote: string;
  program: string;
  initial: string;
  video?: boolean;
};

export default function TestimonialCard({
  image,
  name,
  role,
  quote,
  program,
  initial,
  video,
}: Props) {
  return (
    <div
      className="
      group
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-[0_4px_20px_rgba(0,0,0,0.06)]
      hover:shadow-[0_16px_50px_rgba(0,0,0,0.12)]
      transition-all
      duration-300
      hover:-translate-y-1
      "
    >
      {/* IMAGE AREA */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {video && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-600 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg">
                <FiPlay size={20} />
              </div>
            </div>
          )}
        </div>
      )}

      {/* CONTENT */}
      <div className="p-6">
        <div className="text-red-500 text-3xl mb-3">”</div>

        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {quote}
        </p>

        {/* USER */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold">
            {initial}
          </div>

          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>

        {/* Stars */}
        <div className="text-red-500 mt-3">★★★★★</div>

        <p className="text-xs text-gray-500 mt-2">{program}</p>
      </div>
    </div>
  );
}
