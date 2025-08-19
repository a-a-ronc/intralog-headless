
import Image from "next/image";

const steps = [
  {
    id: "01",
    kicker: "Algorithmic Sizing",
    title: "Right-Size the Facility",
    summary: "Our in-house algorithm narrows options to the right facility type and footprint with configurable growth.",
    bullets: [
      "Inputs: order profiles, SKUs, service levels, growth %",
      "Outputs: facility type, footprint, constraints",
      "Sensitivity sliders to explore scenarios",
    ],
    img: "/images/rightsize.svg",
  },
  {
    id: "02",
    kicker: "Synthetic or Transactional Data",
    title: "Data Study & Throughput Modeling",
    summary: "We quantify storage and throughput requirements with high accuracy using real or generated data.",
    bullets: [
      "Peak vs average flow, labor windows",
      "Storage profiles & slotting logic",
      "Throughput envelopes for manual/semi-auto/auto",
    ],
    img: "/images/data-study.svg",
  },
  {
    id: "03",
    kicker: "Proof Before You Build",
    title: "Concept Design & Simulation",
    summary: "Validate flow, accumulation and buffers before committing — iterate to the ROI-optimal concept.",
    bullets: [
      "Scenario testing & digital twins",
      "Bottleneck & dwell-time analysis",
      "Iterative concept refinement",
    ],
    img: "/images/simulation.svg",
  },
  {
    id: "04",
    kicker: "Layouts That Move Fast",
    title: "Floorplans & Travel Optimization",
    summary: "Minimize travel and maximize throughput and real estate efficiency for chosen equipment.",
    bullets: [
      "Aisle strategy, docks & staging",
      "Pick modules, AMRs, AS/RS, sortation",
      "Code-compliant & expansion-ready",
    ],
    img: "/images/floorplan.svg",
  },
  {
    id: "05",
    kicker: "Best Value from Partners",
    title: "Value Engineering & Procurement",
    summary: "Engage partners to quote vetted concepts and align on lead time, price and performance.",
    bullets: [
      "Competitive quotes, apples-to-apples",
      "Spec compliance and variant options",
      "Total cost of ownership focus",
    ],
    img: "/images/procurement.svg",
  },
  {
    id: "06",
    kicker: "Turnkey Delivery",
    title: "Installation & Commissioning",
    summary: "Manage controls & mechanical install through go-live, training and stabilization KPIs.",
    bullets: [
      "Controls + mechanical install",
      "FAT/SAT, ramp plans, training",
      "Post-go-live KPIs",
    ],
    img: "/images/installation.svg",
  },
];

export default function SolutionsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="section">
        <div className="container" style={{ maxWidth: '768px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '600', margin: '0 0 1rem' }}>
            Turnkey Warehouse Optimization
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#64748b', margin: '1rem 0' }}>
            From right-sizing and data studies to simulation, layout, procurement and installation — one partner, accountable end-to-end.
          </p>
        </div>
      </section>

      {/* PROCESS GRID */}
      <section style={{ borderTop: '1px solid #f1f5f9', background: '#f8fafc' }}>
        <div className="container section">
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Our Process, Step by Step</h2>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Transparent stages with measurable outputs</p>
          </div>

          <ol className="grid">
            {steps.map((s) => (
              <li key={s.id} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    height: '36px',
                    width: '36px',
                    borderRadius: '50%',
                    background: '#1e293b',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {s.id}
                  </div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b' }}>
                    {s.kicker}
                  </div>
                </div>

                <h3 style={{ marginTop: '0.75rem', fontSize: '1.125rem', fontWeight: '600', lineHeight: '1.2' }}>
                  {s.title}
                </h3>
                <p style={{ marginTop: '0.5rem', color: '#64748b' }}>
                  {s.summary}
                </p>

                <ul style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: '#64748b' }}>
                  {s.bullets.map((b, i) => (
                    <li key={i} style={{ marginBottom: '0.25rem' }}>• {b}</li>
                  ))}
                </ul>

                {/* Consistent media box */}
                <div style={{ 
                  marginTop: '1rem', 
                  borderRadius: '0.75rem', 
                  border: '1px solid #f1f5f9', 
                  background: '#f8fafc',
                  height: '160px',
                  position: 'relative'
                }}>
                  <Image
                    src={s.img}
                    alt=""
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PARTNERS WALL */}
      <section style={{ borderTop: '1px solid #f1f5f9' }}>
        <div className="container section">
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Equipment Partners</h2>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Best value, best fit</p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {[
              { name: "Daifuku", src: "/partners/daifuku.svg" },
              { name: "Modula", src: "/partners/modula.svg" },
            ].map((logo) => (
              <div key={logo.name} style={{ 
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
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    fill
                    className="partner-img object-contain"
                    sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 16vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
