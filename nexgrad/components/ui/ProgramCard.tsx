import { FiGlobe } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

type Props = {
   slug: string;
  badge?: string;
  duration: string;
  school: string;
  title: string;
  price: string;
  img: string;
};

export default function ProgramCard({
 slug,
  badge,
  duration,
  school,
  title,
  price,
  img,
}: Props) {
  return (
     <Link
      href={`/programs/${slug}`}
      className="group block bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
    >
    <div
      className="
      group
      bg-white
      rounded-2xl
      overflow-hidden
      transition-all
      duration-300
      shadow-[0_4px_20px_rgba(0,0,0,0.06)]
      hover:shadow-[0_16px_50px_rgba(0,0,0,0.12)]
      hover:-translate-y-1
      "
    >
      
      {/* IMAGE */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full shadow">
          🔥 {badge}
        </span>

        {/* Duration */}
        <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {duration}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <p className="text-sm text-gray-500 flex items-center gap-2 mb-2">
          <FiGlobe /> {school}
        </p>

        <h3 className="font-semibold text-lg mb-2">{title}</h3>

        <p className="text-gray-500 text-sm mb-4">
          Comprehensive business education with international residencies
        </p>

        <div className="flex justify-between items-center mt-6">
          <div>
            <p className="text-xs text-gray-400">Starting at</p>
            <p className="font-semibold">{price}</p>
          </div>

          <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm">
            View →
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
}
