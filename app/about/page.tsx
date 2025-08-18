import { wpFetch } from '@/lib/wp'
import { PAGES_QUERY } from '@/lib/queries'

export const metadata = { title: 'About | Intralog' }

export default async function AboutPage() {
  let page: any = null
  try {
    const data = await wpFetch<{ nodeByUri: any }>(PAGES_QUERY, { uri: '/about' })
    page = data?.nodeByUri
  } catch {}

  return (
    <main className="section">
      <div className="container">
        <h1>{page?.title || 'About Intralog'}</h1>
        <div dangerouslySetInnerHTML={{ __html: page?.content || '<p>We engineer and integrate automated material handling systems for ROI.</p>' }} />
      </div>
    </main>
  )
}
