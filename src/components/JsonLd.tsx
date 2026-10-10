import { buildJsonLd } from "@/lib/seo";

export default function JsonLd({
  schemas = buildJsonLd(),
}: {
  schemas?: Record<string, unknown>[];
}) {
  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@id"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
