import Link from "next/link";

export default function HeroSection({
  data,
}: any) {

  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: `url(${data.image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

        <p className="mb-4 text-lg">
          {data.subtitle}
        </p>

        <h1 className="text-6xl font-bold mb-6">
          {data.title}
        </h1>

        <p className="text-xl max-w-2xl mb-8">
          {data.description}
        </p>

        <Link
          href={data.buttonLink || "#"}
          className="
            inline-flex
            bg-red-600
            px-8
            py-4
            rounded-xl
            text-lg
          "
        >
          {data.buttonText}
        </Link>

      </div>
    </section>
  );
}