import { buildJsonLd } from "@/lib/seo";

export default function JsonLd() {
  const schemas = buildJsonLd();

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
