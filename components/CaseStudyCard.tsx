import Image from 'next/image'
import Link from 'next/link'

type CS = {
  id: string
  slug: string
  title: string
  excerpt?: string
  uri: string
  featuredImage?: { node?: { sourceUrl?: string, altText?: string } }
}

export default function CaseStudyCard({ cs }: { cs: CS }) {
  return (
    <Link href={cs.uri || `/case-studies/${cs.slug}`} className="card" style={{display:'block'}}>
      {cs.featuredImage?.node?.sourceUrl && (
        <Image
          src={cs.featuredImage.node.sourceUrl}
          alt={cs.featuredImage.node.altText || cs.title}
          width={600}
          height={360}
          style={{width:'100%', height:'auto', borderRadius:'12px', marginBottom:'0.8rem'}}
        />
      )}
      <h3 style={{margin:'0 0 .5rem'}}>{cs.title}</h3>
      {cs.excerpt && <div className="small" dangerouslySetInnerHTML={{__html: cs.excerpt}} />}
      <div className="small" style={{marginTop:'.6rem'}}>View project →</div>
    </Link>
  )
}
