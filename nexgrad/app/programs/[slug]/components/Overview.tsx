export default function Overview({ program }: any) {
  if (!program.overview) return null;

  return (
    <section className="pt-6">
      <h2 className="text-3xl font-semibold mb-8">
        Program Overview
      </h2>

      <div
        className="prose prose-lg max-w-none 
                   prose-headings:text-gray-900
                   prose-p:text-gray-700
                   prose-li:text-gray-700
                   prose-ul:pl-6"
        dangerouslySetInnerHTML={{ __html: program.overview }}
      />
    </section>
  );
}