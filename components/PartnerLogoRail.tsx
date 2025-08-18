import Image from 'next/image'
type Partner = {
  id: string
  title: string
  uri: string
  slug: string
  featuredImage?: { node?: { sourceUrl?: string, altText?: string } }
}
export default function PartnerLogoRail({ partners }: { partners: Partner[] }) {
  if (!partners?.length) return null
  return (
    <div className="logo-rail">
      {partners.map(p => (
        <a key={p.id} href={p.uri || '#'} aria-label={p.title}>
          {p.featuredImage?.node?.sourceUrl ? (
            <Image
              src={p.featuredImage.node.sourceUrl}
              alt={p.featuredImage.node.altText || p.title}
              width={120}
              height={40}
            />
          ) : (
            <span>{p.title}</span>
          )}
        </a>
      ))}
    </div>
  )
}
