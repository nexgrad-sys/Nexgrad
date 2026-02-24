type Props = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export default function FeatureCard({ icon, title, desc }: Props) {
  return (
    <div
      className="
      group
      bg-[#fafafa]
      rounded-2xl
      p-8
      transition-all
      duration-300
      shadow-[0_4px_20px_rgba(0,0,0,0.05)]
      hover:shadow-[0_14px_45px_rgba(0,0,0,0.12)]
      hover:-translate-y-1
      "
    >
      {/* ICON BOX */}
      <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center rounded-lg mb-6 text-xl transition group-hover:bg-red-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="font-semibold text-lg mb-3">{title}</h3>

      <p className="text-gray-500 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
