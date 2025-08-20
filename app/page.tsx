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
          <h1>Automated Material Handling, Engineered for ROI.</h1>
          <p>Conveyors, AMRs, racking, and high‑throughput sortation—designed, integrated, and supported for 3PLs and enterprise DCs.</p>
          <div style={{marginTop:'1rem'}}>
            <Link className="btn" href="/contact">Let&apos;s Talk</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <img 
            src="https://yt3.googleusercontent.com/u9BR-rnXe3BW9w_txou9SrwD8jAHu2M3p8jrFMM3VL9uSMXtytgu7_nHez4EirBvQyOApl4j8wI=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" 
            alt="" 
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius)' }}
          />
        </div>
      </section>

      <section className="section" style={{background:'var(--light)'}}>
        <div className="container">
          <h2 style={{marginTop:0}}>Trusted Partners</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
            gap: '1.5rem',
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
              padding: '1rem',
              height: '80px'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '40px' }}>
                <img
                  src="/partners/daifuku.svg"
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
                  onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                  onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
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
              padding: '1rem',
              height: '80px'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '40px' }}>
                <img
                  src="/images/modula.svg"
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
                  onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                  onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
                />
              </div>
            </div>

            {/* stow Group */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0',
              background: 'white',
              padding: '1rem',
              height: '80px'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '40px' }}>
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIyNS42IDc0LjYiPjxkZWZzPjxzdHlsZT4uZHtmaWxsOiNmMzcwMjE7fS5le2ZpbGw6IzJiOTNkMTt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImEiLz48ZyBpZD0iYiI+PGcgaWQ9ImMiPjxwYXRoIGNsYXNzPSJlIiBkPSJNMjYuMiw0NS4xbDUuOC04LjFjLS44LS42LTYuNS00LjktMTUuNC00LjktNy43LDAtMTQuMiw0LjktMTQuMiwxMi40czUuOSwxMC42LDEyLDEyLjljNC41LDEuNyw1LjgsMi41LDUuOCw0LjMsMCwxLjQtMS4yLDIuMy0yLjksMi4zLTQuOSwwLTEwLjYtNS4yLTEwLjYtNS4yTDAsNjcuNXM2LjYsNi43LDE4LjIsNi43YzkuNSwwLDE1LjItNS42LDE1LjItMTMsMC04LjMtNS40LTExLjUtMTIuNy0xMy45LTMuMy0xLTUuNy0yLTUuNy0zLjQsMC0xLjMsMS4xLTEuOSwyLjQtMS45LDMuOCwwLDcuNiwyLjMsOC44LDMuMW0zNCwyNy40di0xMS43Yy01LjIsLjMtOC4xLC4xLTguMS0zLjZ2LTExLjNoOC4xdi0xMi40aC04LjFWMTYuNmwtMjAuOCwyOS4zaDcuOHYxMS42Yy4xLDEyLjEsNS4yLDE3LDIxLjEsMTVtMzMuOS0xOS41YzAsNC44LTMuNCw4LjEtNy45LDguMXMtNy44LTMuMy03LjgtOC4xLDMuNC04LjEsNy44LTguMSw3LjksMy4zLDcuOSw4LjFtMTMsMGMwLTExLjYtOS4yLTIwLjYtMjAuOC0yMC42cy0yMC44LDktMjAuOCwyMC42LDkuNCwyMC42LDIwLjgsMjAuNmMxMS42LDAsMjAuOC04LjksMjAuOC0yMC42bTU4LjQtMTkuNWgtMTMuMmwtNy4yLDE2LjEtOS4zLTE3LjUtOS4zLDE3LjUtNy4yLTE2LjhoLTEzLjJsMjAuMiw0MS4xLDkuNS0xNy44LDkuNSwxNy44LDIwLjItNDEuMVoiLz48cGF0aCBjbGFzcz0iZCIgZD0iTTE3OS41LDQ2LjFoMTN2LTEzaC0xM3YxM1ptMTYuNSwwaDEzdi0xM2gtMTN2MTNabTE2LjYsMGgxM3YtMTNoLTEzdjEzWm0tMzMuMS0xNi41aDEzdi0xM2gtMTN2MTNabTE2LjUsMGgxM3YtMTNoLTEzdjEzWm0xNi42LDBoMTN2LTEzaC0xM3YxM1ptLTMzLjEtMTYuNmgxM1YwaC0xM1YxM1ptMTYuNSwwaDEzVjBoLTEzVjEzWm0xNi42LDBoMTNWMGgtMTNWMTNaIi8+PC9nPjwvZz48L3N2Zz4="
                  alt="stow Group logo"
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
                  onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                  onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
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
              padding: '1rem',
              height: '80px'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '40px' }}>
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
                  onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                  onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
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
              padding: '1rem',
              height: '80px'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '40px' }}>
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
                  onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                  onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
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
              padding: '1rem',
              height: '80px'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '40px' }}>
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
                  onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                  onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{marginTop:0}}>Featured Case Studies</h2>
          <div className="grid">
            {caseStudies.map(cs => <CaseStudyCard key={cs.id} cs={cs} />)}
          </div>
          <div style={{marginTop:'1rem'}}><Link href="/case-studies">See all case studies →</Link></div>
        </div>
      </section>

      <section className="section" style={{background:'var(--brand-blue)', color:'#fff'}}>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'1rem',flexWrap:'wrap'}}>
          <div>
            <h2 style={{margin:'0 0 .4rem'}}>Ready to boost throughput?</h2>
            <div className="small" style={{opacity:.9}}>We design and integrate the right mix of equipment for your ROI.</div>
          </div>
          <Link className="btn" href="/contact" style={{background:'#fff', color:'var(--brand-blue)'}}>Get in touch</Link>
        </div>
      </section>
    </main>
  )
}
