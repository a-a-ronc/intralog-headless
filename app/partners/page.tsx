import { wpFetch } from '@/lib/wp'
import { PARTNERS_QUERY } from '@/lib/queries'
import Image from 'next/image'

export const metadata = { title: 'Partners | Intralog' }

export default async function PartnersPage() {
  let partners: any[] = []
  try {
    const data = await wpFetch<{ partners: { nodes: any[] } }>(PARTNERS_QUERY, { first: 50 })
    partners = data?.partners?.nodes || []
  } catch {}

  return (
    <main className="section">
      <div className="container">
        <h1>Partners & Collaborators</h1>
        <p className="small">Vendor‑agnostic; we work with industry leaders to deliver the best fit.</p>
        <div className="grid" style={{marginTop:'1rem'}}>
          {partners.map(p => (
            <div key={p.id} className="card" style={{textAlign:'center'}}>
              {p.featuredImage?.node?.sourceUrl && (
                <Image src={p.featuredImage.node.sourceUrl} alt={p.featuredImage.node.altText || p.title} width={140} height={44} style={{height:'44px', width:'auto', marginBottom:'0.6rem'}} />
              )}
              <div>{p.title}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
