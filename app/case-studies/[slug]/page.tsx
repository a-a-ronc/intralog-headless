import { wpFetch } from '@/lib/wp'
import { CASE_STUDY_BY_SLUG_QUERY } from '@/lib/queries'
import Image from 'next/image'
import { notFound } from 'next/navigation'

type Params = { params: { slug: string } }

export default async function CaseStudyDetail({ params }: Params) {
  let data: any = null
  try {
    const res = await wpFetch<{ caseStudy: any }>(CASE_STUDY_BY_SLUG_QUERY, { slug: params.slug })
    data = res.caseStudy
  } catch {}

  if (!data) return notFound()

  return (
    <main className="section">
      <div className="container">
        <h1>{data.title}</h1>
        {data.featuredImage?.node?.sourceUrl && (
          <Image src={data.featuredImage.node.sourceUrl} alt={data.featuredImage.node.altText || ''} width={1200} height={600} style={{width:'100%', height:'auto', borderRadius:'12px', margin:'1rem 0'}}/>
        )}
        <article dangerouslySetInnerHTML={{ __html: data.content || '' }} />
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  // optional: you could prebuild known slugs via an additional query
  return []
}
