import { wpFetch } from '@/lib/wp'
import { CASE_STUDIES_QUERY } from '@/lib/queries'
import CaseStudyCard from '@/components/CaseStudyCard'

export const metadata = { title: 'Case Studies | Intralog' }

export default async function CaseStudiesPage() {
  let items: any[] = []
  try {
    const data = await wpFetch<{ caseStudies: { nodes: any[] } }>(CASE_STUDIES_QUERY, { first: 24 })
    items = data?.caseStudies?.nodes || []
  } catch {}

  return (
    <main className="section">
      <div className="container">
        <h1>Case Studies</h1>
        <div className="grid" style={{marginTop:'1rem'}}>
          {items.map(cs => <CaseStudyCard key={cs.id} cs={cs} />)}
        </div>
      </div>
    </main>
  )
}
