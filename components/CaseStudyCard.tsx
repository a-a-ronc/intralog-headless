import Image from 'next/image'
import Link from 'next/link'

// Case study data type.  You can extend this interface with additional fields
// from your CMS (e.g. subtitle, tags, customer) as needed.
type CS = {
  id: string
  slug: string
  title: string
  excerpt?: string
  uri: string
  featuredImage?: { node?: { sourceUrl?: string; altText?: string } }
}

/**
 * A responsive card component for the showcase grid.  Images are presented
 * using a 16×9 aspect ratio, and the card includes a heading, optional
 * excerpt and a subtle call‑to‑action.  On hover the card casts a deeper
 * shadow to imply interactivity.
 */
export default function CaseStudyCard({ cs }: { cs: CS }) {
  return (
    <Link
      href={cs.uri || `/case-studies/${cs.slug}`}
      className="card hover:shadow-lg transition-shadow"
      style={{ display: 'block', textDecoration: 'none' }}
    >
      <div
        className="relative"
        style={{
          paddingBottom: '56.25%', // 16:9 aspect ratio
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '0.75rem',
        }}
      >
        {cs.featuredImage?.node?.sourceUrl && (
          <Image
            src={cs.featuredImage.node.sourceUrl}
            alt={cs.featuredImage.node.altText || cs.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <h3
        style={{
          margin: '0 0 .5rem',
          fontSize: '1.125rem',
          fontWeight: 600,
          lineHeight: 1.25,
          color: 'rgb(var(--fg))',
        }}
      >
        {cs.title}
      </h3>
      {cs.excerpt && (
        <div
          className="small"
          style={{ color: 'rgb(var(--muted-fg))' }}
          dangerouslySetInnerHTML={{ __html: cs.excerpt }}
        />
      )}
      <div
        className="small cta-link"
        style={{ marginTop: '.75rem' }}
      >
        View project →
      </div>
    </Link>
  )
}