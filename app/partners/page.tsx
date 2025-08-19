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
          <div className="card" style={{textAlign:'center'}}>
            <img width="160" height="auto" alt="stow Group logo" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIyNS42IDc0LjYiPjxkZWZzPjxzdHlsZT4uZHtmaWxsOiNmMzcwMjE7fS5le2ZpbGw6IzJiOTNkMTt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImEiLz48ZyBpZD0iYiI+PGcgaWQ9ImMiPjxwYXRoIGNsYXNzPSJlIiBkPSJNMjYuMiw0NS4xbDUuOC04LjFjLS44LS42LTYuNS00LjktMTUuNC00LjktNy43LDAtMTQuMiw0LjktMTQuMiwxMi40czUuOSwxMC42LDEyLDEyLjljNC41LDEuNyw1LjgsMi41LDUuOCw0LjMsMCwxLjQtMS4yLDIuMy0yLjksMi4zLTQuOSwwLTEwLjYtNS4yLTEwLjYtNS4yTDAsNjcuNXM2LjYsNi43LDE4LjIsNi43YzkuNSwwLDE1LjItNS42LDE1LjItMTMsMC04LjMtNS40LTExLjUtMTIuNy0xMy45LTMuMy0xLTUuNy0yLTUuNy0zLjQsMC0xLjMsMS4xLTEuOSwyLjQtMS45LDMuOCwwLDcuNiwyLjMsOC44LDMuMW0zNCwyNy40di0xMS43Yy01LjIsLjMtOC4xLC4xLTguMS0zLjZ2LTExLjNoOC4xdi0xMi40aC04LjFWMTYuNmwtMjAuOCwyOS4zaDcuOHYxMS42Yy4xLDEyLjEsNS4yLDE3LDIxLjEsMTVtMzMuOS0xOS41YzAsNC44LTMuNCw4LjEtNy45LDguMXMtNy44LTMuMy03LjgtOC4xLDMuNC04LjEsNy44LTguMSw3LjksMy4zLDcuOSw4LjFtMTMsMGMwLTExLjYtOS4yLTIwLjYtMjAuOC0yMC42cy0yMC44LDktMjAuOCwyMC42LDkuNCwyMC42LDIwLjgsMjAuNmMxMS42LDAsMjAuOC04LjksMjAuOC0yMC42bTU4LjQtMTkuNWgtMTMuMmwtNy4yLDE2LjEtOS4zLTE3LjUtOS4zLDE3LjUtNy4yLTE2LjFoLTEzLjJsMjAuMiw0MS4xLDkuNS0xNy44LDkuNSwxNy44LDIwLjItNDEuMVoiLz48cGF0aCBjbGFzcz0iZCIgZD0iTTE3OS41LDQ2LjFoMTN2LTEzaC0xM3YxM1ptMTYuNSwwaDEzdi0xM2gtMTN2MTNabTE2LjYsMGgxM3YtMTNoLTEzdjEzWm0tMzMuMS0xNi41aDEzdi0xM2gtMTN2MTNabTE2LjUsMGgxM3YtMTNoLTEzdjEzWm0xNi42LDBoMTN2LTEzaC0xM3YxM1ptLTMzLjEtMTYuNmgxM1YwaC0xM1YxM1ptMTYuNSwwaDEzVjBoLTEzVjEzWm0xNi42LDBoMTNWMGgtMTNWMTNaIi8+PC9nPjwvZz48L3N2Zz4=" style={{height:'44px', width:'auto', marginBottom:'0.6rem'}} />
            <div>stow Group</div>
          </div>
          <div className="card" style={{textAlign:'center'}}>
            <img alt="Interlake Mecalux, Warehouse solutions" title="Interlake Mecalux, Warehouse solutions" src="https://interlakemecalux.cdnwm.com/o/corporate-theme/images/common/logo-interlake-mecalux.svg" style={{height:'44px', width:'auto', marginBottom:'0.6rem'}} />
            <div>Interlake Mecalux</div>
          </div>
        </div>
      </div>
    </main>
  )
}
