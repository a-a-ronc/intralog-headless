import Image from 'next/image'
import Link from 'next/link'
import { wpFetch } from '@/lib/wp'
import { CASE_STUDIES_QUERY } from '@/lib/queries'
import CaseStudyCard from '@/components/CaseStudyCard'
import ClientLogo from '@/components/Clientlogo' //added for little giant logo
import { demoShowcase, demoClients } from '@/lib/demo'

export const metadata = { title: 'Project Showcase | Intralog' }

// Using demo clients from lib/demo.ts as fallback data

/*
 * The project showcase page lists recent warehouse projects with a modern, client‑focused
 * design.  It pulls projects from WordPress via `wpFetch` and arranges them in a
 * responsive grid.  A hero section introduces the purpose of the page, a client
 * logo rail builds trust, and a call to action encourages visitors to get in touch.
 */
export default async function ShowcasePage() {
  let items: any[] = []
  try {
    const data = await wpFetch<{ caseStudies: { nodes: any[] } }>(CASE_STUDIES_QUERY, { first: 24 })
    items = data?.caseStudies?.nodes || []
  } catch {
    // gracefully handle unreachable CMS by leaving items empty
  }

  // Use demo content when WordPress is down or returns empty
  const list = items.length ? items : demoShowcase

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="container" style={{ textAlign: 'center', maxWidth: '768px' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem,4vw,3rem)',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            Project Showcase
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'rgba(255,255,255,0.85)',
              margin: '0 auto',
              maxWidth: '640px',
            }}
          >
            Explore a selection of projects where we translated our clients' needs into efficient,
            innovative warehouse solutions.  See photos, drawings and narratives of how we helped
            them overcome their unique challenges.
          </p>
        </div>
      </section>

      {/* CLIENT LOGO RAIL */}
      <section style={{ borderBottom: '1px solid #f1f5f9' }}>
        <div className="container section">
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            Clients &amp; Partners
          </h2>
          <div className="logo-rail">
            {demoClients.map((client) => (
              <Image
                key={client.name}
                src={client.src}
                alt={`${client.name} logo`}
                height={40}
                width={120}
              />
            ))}
          </div>
        </div>
      </section>

      {/* GRID OF PROJECTS */}
      <section className="section">
        <div className="container">
          <div
            style={{
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                margin: 0,
              }}
            >
              Solutions in Action
            </h2>
            <p className="small" style={{ margin: 0 }}>
              Real‑world examples of our work
            </p>
          </div>
          <div className="grid">
            {list.map((cs: any) =>
              "id" in cs && cs.featuredImage?.node ? (
                <CaseStudyCard key={cs.id} cs={cs} />
              ) : (
                <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="card hover:shadow-lg transition-shadow" style={{ display: 'block', textDecoration: 'none' }}>
                  <div
                    className="relative"
                    style={{
                      paddingBottom: '56.25%', // 16:9 aspect ratio
                      borderRadius: '12px',
                      overflow: 'hidden',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <Image 
                      src={cs.featuredImage.node.sourceUrl} 
                      alt={cs.featuredImage.node.altText || cs.title} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3
                    style={{
                      margin: '0 0 .5rem',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      lineHeight: 1.25,
                      color: '#1e293b',
                    }}
                  >
                    {cs.title}
                  </h3>
                  <div
                    className="small"
                    style={{ color: '#475569' }}
                  >
                    {cs.excerpt}
                  </div>
                  <div
                    className="small"
                    style={{ marginTop: '.75rem', color: '#0B2D52', fontWeight: 600 }}
                  >
                    View project →
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
        <div className="container section" style={{ textAlign: 'center' }}>
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
            }}
          >
            Ready to talk through your project?
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#64748b',
              margin: '0 0 1.5rem',
            }}
          >
            Reach out to discuss your unique warehouse challenges and learn how our team can help.
          </p>
          <Link href="/contact" className="btn">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}