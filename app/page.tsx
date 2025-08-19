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
          <PartnerLogoRail partners={partners} />
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
