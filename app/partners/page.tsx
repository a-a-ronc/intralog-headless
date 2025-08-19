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
                <Image src={p.featuredImage.node.sourceUrl} alt={p.featuredImage.node.altText || p.title} width={140} height={44} style={{height:'44px', width:'auto', marginBottom:'0.6rem'}} className="partner-logo" />
              )}
              <div>{p.title}</div>
            </div>
          ))}
          <div className="card" style={{textAlign:'center'}}>
            <img width="160" height="auto" alt="stow Group logo" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIyNS42IDc0LjYiPjxkZWZzPjxzdHlsZT4uZHtmaWxsOiNmMzcwMjE7fS5le2ZpbGw6IzJiOTNkMTt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImEiLz48ZyBpZD0iYiI+PGcgaWQ9ImMiPjxwYXRoIGNsYXNzPSJlIiBkPSJNMjYuMiw0NS4xbDUuOC04LjFjLS44LS42LTYuNS00LjktMTUuNC00LjktNy43LDAtMTQuMiw0LjktMTQuMiwxMi40czUuOSwxMC42LDEyLDEyLjljNC41LDEuNyw1LjgsMi41LDUuOCw0LjMsMCwxLjQtMS4yLDIuMy0yLjksMi4zLTQuOSwwLTEwLjYtNS4yLTEwLjYtNS4yTDAsNjcuNXM2LjYsNi43LDE4LjIsNi43YzkuNSwwLDE1LjItNS42LDE1LjItMTMsMC04LjMtNS40LTExLjUtMTIuNy0xMy45LTMuMy0xLTUuNy0yLTUuNy0zLjQsMC0xLjMsMS4xLTEuOSwyLjQtMS45LDMuOCwwLDcuNiwyLjMsOC44LDMuMW0zNCwyNy40di0xMS43Yy01LjIsLjMtOC4xLC4xLTguMS0zLjZ2LTExLjNoOC4xdi0xMi40aC04LjFWMTYuNmwtMjAuOCwyOS4zaDcuOHYxMS42Yy4xLDEyLjEsNS4yLDE3LDIxLjEsMTVtMzMuOS0xOS41YzAsNC44LTMuNCw4LjEtNy45LDguMXMtNy44LTMuMy03LjgtOC4xLDMuNC04LjEsNy44LTguMSw3LjksMy4zLDcuOSw4LjFtMTMsMGMwLTExLjYtOS4yLTIwLjYtMjAuOC0yMC42cy0yMC44LDktMjAuOCwyMC42LDkuNCwyMC42LDIwLjgsMjAuNmMxMS42LDAsMjAuOC04LjksMjAuOC0yMC42bTU4LjQtMTkuNWgtMTMuMmwtNy4yLDE2LjEtOS4zLTE3LjUtOS4zLDE3LjUtNy4yLTE2LjFoLTEzLjJsMjAuMiw0MS4xLDkuNS0xNy44LDkuNSwxNy44LDIwLjItNDEuMVoiLz48cGF0aCBjbGFzcz0iZCIgZD0iTTE3OS41LDQ2LjFoMTN2LTEzaC0xM3YxM1ptMTYuNSwwaDEzdi0xM2gtMTN2MTNabTE2LjYsMGgxM3YtMTNoLTEzdjEzWm0tMzMuMS0xNi41aDEzdi0xM2gtMTN2MTNabTE2LjUsMGgxM3YtMTNoLTEzdjEzWm0xNi42LDBoMTN2LTEzaC0xM3YxM1ptLTMzLjEtMTYuNmgxM1YwaC0xM1YxM1ptMTYuNSwwaDEzVjBoLTEzVjEzWm0xNi42LDBoMTNWMGgtMTNWMTNaIi8+PC9nPjwvZz48L3N2Zz4=" style={{height:'44px', width:'auto', marginBottom:'0.6rem'}} className="partner-logo" />
            <div>stow Group</div>
          </div>
          <div className="card" style={{textAlign:'center'}}>
            <img alt="Interlake Mecalux, Warehouse solutions" title="Interlake Mecalux, Warehouse solutions" src="https://interlakemecalux.cdnwm.com/o/corporate-theme/images/common/logo-interlake-mecalux.svg" style={{height:'44px', width:'auto', marginBottom:'0.6rem'}} className="partner-logo" />
            <div>Interlake Mecalux</div>
          </div>
          <div className="card" style={{textAlign:'center'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.88 61.03" width="90" height="62" aria-label="Modula logo" role="img" style={{height:'44px', width:'auto', marginBottom:'0.6rem'}} className="partner-logo">
              <rect x="18.24" width="15.91" height="10.35" rx="2.14" fill="#faa21b"/>
              <g fill="#575a5d">
                <path d="M2.14,19H13.77a2.14,2.14,0,0,1,2.14,2.14v6.07a2.13,2.13,0,0,1-2.13,2.14H2.14A2.14,2.14,0,0,1,0,27.21V21.14A2.14,2.14,0,0,1,2.14,19Z"/>
                <path d="M20.38,19H32a2.13,2.13,0,0,1,2.13,2.14v6.07A2.13,2.13,0,0,1,32,29.35H20.38a2.14,2.14,0,0,1-2.14-2.14V21.14A2.14,2.14,0,0,1,20.38,19Z"/>
                <rect x="36.48" y="19" width="15.91" height="10.35" rx="2.14"/>
                <path d="M56.86,19H68.5a2.14,2.14,0,0,1,2.14,2.14v6.07a2.14,2.14,0,0,1-2.14,2.14H56.86a2.13,2.13,0,0,1-2.13-2.14V21.14A2.13,2.13,0,0,1,56.86,19Z"/>
                <path d="M75.11,19H86.74a2.14,2.14,0,0,1,2.14,2.14v6.07a2.14,2.14,0,0,1-2.14,2.14H75.1A2.13,2.13,0,0,1,73,27.21V21.14A2.14,2.14,0,0,1,75.11,19Z"/>
                <path d="M2.14,6H13.77a2.14,2.14,0,0,1,2.14,2.14v6.07a2.13,2.13,0,0,1-2.13,2.14H2.14A2.14,2.14,0,0,1,0,14.21V8.14A2.14,2.14,0,0,1,2.14,6Z"/>
                <path d="M38.62,6H50.26a2.13,2.13,0,0,1,2.13,2.14v6.07a2.13,2.13,0,0,1-2.13,2.14H38.62a2.14,2.14,0,0,1-2.14-2.14V8.14A2.14,2.14,0,0,1,38.62,6Z"/>
                <path d="M56.86,6H68.5a2.14,2.14,0,0,1,2.14,2.14v6.07a2.14,2.14,0,0,1-2.14,2.14H56.86a2.13,2.13,0,0,1-2.13-2.14V8.14A2.13,2.13,0,0,1,56.86,6Z"/>
                <path d="M75.11,6H86.74a2.14,2.14,0,0,1,2.14,2.14v6.07a2.14,2.14,0,0,1-2.14,2.14H75.1A2.13,2.13,0,0,1,73,14.22V8.14A2.14,2.14,0,0,1,75.11,6Z"/>
                <path d="M29.71,32H21.5a2.38,2.38,0,0,0-2.28,2.36V58.67A2.38,2.38,0,0,0,21.5,61h8.21A2.38,2.38,0,0,0,32,58.67V34.36A2.38,2.38,0,0,0,29.71,32M28.27,57.29a.58.58,0,0,1-.59.58H23.54a.58.58,0,0,1-.59-.58V36.12a.58.58,0,0,1,.59-.59h4.14a.58.58,0,0,1,.59.58Z"/>
                <path d="M14.75,32H2.28A2.24,2.24,0,0,0,0,34.17v26.35a.51.51,0,0,0,.51.51H3.22a.5.5,0,0,0,.5-.5V36.12a.58.58,0,0,1,.59-.59H6.07a.58.58,0,0,1,.59.59v24.4a.5.5,0,0,0,.5.51H9.88a.5.5,0,0,0,.5-.5V36.12a.58.58,0,0,1,.59-.59H12.7a.58.58,0,0,1,.59.59v24.4a.5.5,0,0,0,.49.51h2.74a.5.5,0,0,0,.5-.5V34.4a2.18,2.18,0,0,0-2-2.39Z"/>
                <path d="M86.91,32H78.75a2.22,2.22,0,0,0-2.28,2.17V60.52a.5.5,0,0,0,.5.5h2.72a.5.5,0,0,0,.5-.49V50.71a.43.43,0,0,1,.42-.43h4.06a.42.42,0,0,1,.42.43v9.82a.5.5,0,0,0,.5.5h2.72a.5.5,0,0,0,.5-.5V34.4a2.18,2.18,0,0,0-2-2.39Zm-1.82,14.17a.42.42,0,0,1-.42.43H80.61a.42.42,0,0,1-.42-.43V36.12a.58.58,0,0,1,.59-.59H84.5a.58.58,0,0,1,.59.59Z"/>
                <path d="M59.88,32H57.17a.5.5,0,0,0-.5.5V57.28a.59.59,0,0,1-.59.59H52.35a.59.59,0,0,1-.59-.59V32.51a.5.5,0,0,0-.5-.5H48.55a.5.5,0,0,0-.5.5V58.63A2.19,2.19,0,0,0,50,61h8.11a2.21,2.21,0,0,0,2.28-2.16V32.51a.5.5,0,0,0-.5-.5Z"/>
                <path d="M74.38,57.88h-7.6a.58.58,0,0,1-.59-.59V32.51a.5.5,0,0,0-.5-.5H63a.5.5,0,0,0-.5.5V58.19A2.84,2.84,0,0,0,65.31,61h9.08a.5.5,0,0,0,.5-.5V58.39a.51.51,0,0,0-.5-.51Z"/>
                <path d="M40.64,32H34.72a.51.51,0,0,0-.51.5v28a.51.51,0,0,0,.51.51h6.07C43.45,61,46,59.55,46,56.36V36.86c0-3.34-2.66-4.86-5.4-4.86Zm1.66,23.44A2.35,2.35,0,0,1,40,57.88h-1.47a.58.58,0,0,1-.59-.58V36.12a.58.58,0,0,1,.59-.59h1.34a2.27,2.27,0,0,1,2.43,2.1Z"/>
              </g>
            </svg>
            <div>Modula</div>
          </div>
          <div className="card" style={{textAlign:'center'}}>
            <img src="/media/u15eb2t3/tomiartboard-1.png?width=770&height=420&v=1db70b147ad65b0" alt="Tomi" style={{height:'44px', width:'auto', marginBottom:'0.6rem'}} className="partner-logo" />
            <div>Tomi</div>
          </div>
          <div className="card" style={{textAlign:'center'}}>
            <img src="https://ryson.com/wp-content/uploads/2023/05/ryson-logo_sm.png" alt="Ryson" style={{height:'44px', width:'auto', marginBottom:'0.6rem'}} className="partner-logo" />
            <div>Ryson</div>
          </div>
          <div className="card" style={{textAlign:'center'}}>
            <img src="//www.ashlandconveyor.com/cdn/shop/files/ashland-logo.png?v=1613782398" alt="Ashland Conveyor" style={{height:'44px', width:'auto', marginBottom:'0.6rem'}} className="partner-logo" />
            <div>Ashland Conveyor</div>
          </div>
          <div className="card" style={{textAlign:'center'}}>
            <img src="https://fmhconveyors.com/wp-content/uploads/2021/03/fmh-logo.svg" alt="FMH Conveyors" style={{height:'44px', width:'auto', marginBottom:'0.6rem'}} className="partner-logo" />
            <div>FMH Conveyors</div>
          </div>
          <div className="card" style={{textAlign:'center'}}>
            <img src="https://www.mccue.com/hubfs/images/assets/logos/mccue-logo-on-dark.svg" alt="McCue" style={{height:'44px', width:'auto', marginBottom:'0.6rem'}} className="partner-logo" />
            <div>McCue</div>
          </div>
          <div className="card" style={{textAlign:'center'}}>
            <img src="https://www.handleitinc.com/wp-content/uploads/2025/05/HII-Horizontal-Logo-center-justified-2024-scaled-e1748528058528.png" alt="Handle It Inc" style={{height:'44px', width:'auto', marginBottom:'0.6rem'}} className="partner-logo" />
            <div>Handle It Inc</div>
          </div>
        </div>
      </div>
    </main>
  )
}
