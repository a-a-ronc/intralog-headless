
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
      <section className="section-pad">
        <div className="page-wrap text-center max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Turnkey Warehouse Optimization
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            From right-sizing and data studies to simulation, layout, procurement and installation — one partner, accountable end-to-end.
          </p>
        </div>
      </section>

      {/* PROCESS GRID */}
      <section className="border-t border-slate-100 bg-slate-50/60">
        <div className="page-wrap section-pad">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold">Our Process, Step by Step</h2>
            <p className="text-sm text-slate-600">Transparent stages with measurable outputs</p>
          </div>

          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <li key={s.id} className="card flex flex-col h-full">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-semibold">
                    {s.id}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">{s.kicker}</div>
                </div>

                <h3 className="mt-3 text-lg font-semibold leading-tight">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.summary}</p>

                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  {s.bullets.map((b, i) => <li key={i}>• {b}</li>)}
                </ul>

                {/* Consistent media box */}
                <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50">
                  {/* Use fixed-height box + object-contain for absolute symmetry */}
                  <div className="relative w-full" style={{ height: 160 }}>
                    <Image
                      src={s.img}
                      alt=""
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PARTNERS WALL */}
      <section className="border-t border-slate-100">
        <div className="page-wrap section-pad">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Equipment Partners</h2>
            <p className="text-sm text-slate-600">Best value, best fit</p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              { name: "Daifuku", src: "/partners/daifuku.svg" },
              { name: "Modula",  src: "/partners/modula.svg"  },
              // add more here
            ].map((logo) => (
              <div key={logo.name} className="partner-box">
                <div className="relative w-full" style={{ height: 40 }}>
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
