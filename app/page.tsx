
import Link from 'next/link'
import PartnerLogoRail from '@/components/PartnerLogoRail'
import CaseStudyCard from '@/components/CaseStudyCard'
import { wpFetch } from '@/lib/wp'
import { PARTNERS_QUERY, CASE_STUDIES_QUERY } from '@/lib/queries'

export default async function HomePage() {
  let partners: any[] = []
  let caseStudies: any[] = []
  try {
    const p = await wpFetch<{ partners: { nodes: any[] } }>(PARTNERS_QUERY, { first: 12 })
    partners = p?.partners?.nodes || []
  } catch {}
  try {
    const cs = await wpFetch<{ caseStudies: { nodes: any[] } }>(CASE_STUDIES_QUERY, { first: 6 })
    caseStudies = cs?.caseStudies?.nodes || []
  } catch {}

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: '1.2', textAlign: 'center' }}>
            Automated Material Handling, Engineered for ROI.
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
            maxWidth: '800px', 
            margin: '1rem auto', 
            textAlign: 'center',
            lineHeight: '1.6'
          }}>
            Conveyors, AMRs, racking, and high‑throughput sortation—designed, integrated, and supported for 3PLs and enterprise DCs.
          </p>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link className="btn" href="/contact" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <h2 style={{ 
            marginTop: 0, 
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            Trusted Partners
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
            gap: 'clamp(1rem, 3vw, 1.5rem)',
            marginTop: '1.5rem'
          }}>
            {/* Daifuku */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0',
              background: 'white',
              padding: 'clamp(0.75rem, 2vw, 1rem)',
              height: 'clamp(60px, 15vw, 80px)',
              aspectRatio: '3/2'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src="/images/daifuku.svg"
                  alt="Daifuku logo"
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'all 0.3s ease'
                  }}
                  className="partner-logo"
                />
              </div>
            </div>

            {/* Modula */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0',
              background: 'white',
              padding: 'clamp(0.75rem, 2vw, 1rem)',
              height: 'clamp(60px, 15vw, 80px)',
              aspectRatio: '3/2'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src="/images/modula.svg" // Corrected path
                  alt="Modula logo"
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'all 0.3s ease'
                  }}
                  className="partner-logo"
                />
              </div>
            </div>

            {/* Stow Group */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0',
              background: 'white',
              padding: 'clamp(0.75rem, 2vw, 1rem)',
              height: 'clamp(60px, 15vw, 80px)',
              aspectRatio: '3/2'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src="/images/stowgroup.svg"
                  alt="Stow Group logo"
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'all 0.3s ease'
                  }}
                  className="partner-logo"
                />
              </div>
            </div>

            {/* Interlake Mecalux */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0',
              background: 'white',
              padding: 'clamp(0.75rem, 2vw, 1rem)',
              height: 'clamp(60px, 15vw, 80px)',
              aspectRatio: '3/2'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src="https://interlakemecalux.cdnwm.com/o/corporate-theme/images/common/logo-interlake-mecalux.svg"
                  alt="Interlake Mecalux logo"
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'all 0.3s ease'
                  }}
                  className="partner-logo"
                />
              </div>
            </div>

            {/* Joloda Hydraroll */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0',
              background: 'white',
              padding: 'clamp(0.75rem, 2vw, 1rem)',
              height: 'clamp(60px, 15vw, 80px)',
              aspectRatio: '3/2'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src="https://www.joloda.com/assets/images/LAI_Logo.png"
                  alt="Joloda Hydraroll logo"
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'all 0.3s ease'
                  }}
                  className="partner-logo"
                />
              </div>
            </div>

            {/* Ashland Conveyor */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0',
              background: 'white',
              padding: 'clamp(0.75rem, 2vw, 1rem)',
              height: 'clamp(60px, 15vw, 80px)',
              aspectRatio: '3/2'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src="//www.ashlandconveyor.com/cdn/shop/files/ashland-logo.png?v=1613782398"
                  alt="Ashland Conveyor logo"
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'all 0.3s ease'
                  }}
                  className="partner-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ 
            marginTop: 0, 
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            Innovation in Action
          </h2>
          <div className="grid" style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1rem, 3vw, 1.5rem)'
          }}>
            {caseStudies.map(cs => <CaseStudyCard key={cs.id} cs={cs} />)}
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link href="/case-studies" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
              View our showcase →
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <h2 style={{ 
            marginTop: 0, 
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            Quick Links (Dev Sanity Check)
          </h2>
          <div className="grid" style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1rem, 3vw, 1.5rem)'
          }}>
            {[
              ["/solutions/by-technology/pallet-shuttle-systems", "Pallet Shuttle Systems"],
              ["/solutions/by-technology/goods-to-person-vlms", "Goods-to-Person / VLMs"],
              ["/solutions/by-technology/conveyor-and-sortation", "Conveyor & Sortation"],
              ["/solutions/amr-agv", "AMRs & AGVs"],
              ["/solutions/robotics", "Robotics"],
              ["/solutions/by-function/store-more-in-less-space", "Store More in Less Space"],
              ["/solutions/by-function/move-product-efficiently", "Move Product Efficiently"],
              ["/solutions/by-function/pick-and-pack-faster", "Pick & Pack Faster"],
              ["/solutions/by-function/fulfill-orders-accurately", "Fulfill Orders Accurately"],
              ["/solutions/by-function/store-more-in-less-space", "Store More in Less Space"],
              ["/solutions/by-industry/aerospace-and-defense", "Aerospace & Defense"],
              ["/solutions/by-industry/cold-storage-warehousing", "Cold Storage & Warehousing"],
              ["/solutions/by-industry/food-and-beverage", "Food & Beverage"],
              ["/solutions/wcs-wes", "WCS/WES"],
              ["/resources/videos", "Videos"],
              ["/case-studies", "Showcase"],
            ].map(([href, label]) => (
              <Link key={href as string} href={href as string} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{label}</div>
                <div className="small" style={{ color: '#64748b' }}>{href}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--brand-blue)', color: '#fff' }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '2rem', 
          flexWrap: 'wrap',
          textAlign: 'center'
        }}>
          <div style={{ flex: '1', minWidth: '280px' }}>
            <h2 style={{ 
              margin: '0 0 .5rem', 
              fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
              lineHeight: '1.3'
            }}>
              Ready to boost throughput?
            </h2>
            <div className="small" style={{ 
              opacity: 0.9, 
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: '1.5'
            }}>
              We design and integrate the right mix of equipment for your ROI.
            </div>
          </div>
          <Link 
            className="btn" 
            href="/contact" 
            style={{ 
              background: '#fff', 
              color: 'var(--brand-blue)',
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem)',
              flexShrink: 0
            }}
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  )
}
