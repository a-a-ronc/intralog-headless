// components/JsonLd.tsx
// Renders a schema.org JSON-LD block. Server-safe: usable from layouts,
// pages, and client components (the script tag is emitted in the SSR HTML).
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
