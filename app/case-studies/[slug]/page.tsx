import { wpFetch } from '@/lib/wp'
import { CASE_STUDY_BY_SLUG_QUERY } from '@/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Params = { params: { slug: string } }

/**
 * Detailed page for an individual project.  Provides a clean header with a
 * back‑navigation link and displays the featured image followed by the full
 * HTML content from WordPress.  Uses the same section and container spacing
 * conventions as the rest of the site.
 */
export default async function CaseStudyDetail({ params }: Params) {
  let data: any = null
  try {
    const res = await wpFetch<{ caseStudy: any }>(CASE_STUDY_BY_SLUG_QUERY, { slug: params.slug })
    data = res.caseStudy
  } catch {}

  if (!data) return notFound()

  return (
    <div>
      <section className="section">
        <div className="container" style={{ maxWidth: '768px' }}>
          <div className="small" style={{ marginBottom: '1rem', color: '#6b7280' }}>
            ← Back to{' '}
            <Link href="/case-studies" style={{ textDecoration: 'underline' }}>
              Project Showcase
            </Link>
          </div>
          <h1
            style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, marginBottom: '1rem' }}
          >
            {data.title}
          </h1>
          {data.featuredImage?.node?.sourceUrl && (
            <Image
              src={data.featuredImage.node.sourceUrl}
              alt={data.featuredImage.node.altText || ''}
              width={1200}
              height={600}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                margin: '1rem 0',
              }}
            />
          )}
          <article dangerouslySetInnerHTML={{ __html: data.content || '' }} />
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  // optional: you could prebuild known slugs via an additional query
  return []
}