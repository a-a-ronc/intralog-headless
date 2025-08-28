// app/design-build/our-process/page.tsx
import type { Metadata } from "next";
import HoverIcon from "./HoverIcon";

export const metadata: Metadata = {
  title: "Our Process | Design–Build",
  description:
    "A clear, data-driven Design–Build process that guides you from discovery to commissioning—and continuous optimization.",
};

type Step = {
  number: number;
  title: string;
  description: string;
  Graphic: () => JSX.Element;
  // Optional hover animation media (export from Canva)
  // poster: static grayscale-friendly still image
  // anim: animated WebP/GIF (no play button) revealed on hover
  poster?: string;
  anim?: string;
  lottieSrc?: string;
};

const ACCENTS = [
  "#3DA9FC", // 1 Discovery – electric blue
  "#A3E635", // 2 Data – lime
  "#FACC15", // 3 Footprint – amber
  "#3DA9FC", // 4 Concept – blue
  "#0A1F44", // 5 Slotting – navy
  "#A3E635", // 6 Simulation/ROI – lime
  "#EF4444", // 7 Compliance – red
  "#3DA9FC", // 8 Implementation – blue
  "#A3E635", // 9 Commissioning – lime
];


const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
    {children}
  </div>
);

const Badge = ({ n }: { n: number }) => (
  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white text-sm font-semibold">
    {n}
  </div>
);

/** Minimal, clean inline SVGs (no external assets => no 404s) */
const GraphicCompass = () => (
  <svg viewBox="0 0 200 60" className="w-full h-24">
    <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="2" />
    <polygon points="30,16 40,44 30,36 20,44" fill="currentColor" />
    <line x1="70" y1="30" x2="190" y2="30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
  </svg>
);
const GraphicData = () => (
  <svg viewBox="0 0 200 60" className="w-full h-24">
    <rect x="10" y="10" width="60" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="18" y="18" width="44" height="8" fill="currentColor" opacity="0.15" />
    <rect x="18" y="30" width="30" height="8" fill="currentColor" opacity="0.15" />
    <rect x="18" y="42" width="38" height="4" fill="currentColor" opacity="0.15" />
    <path d="M90 30 L120 30 L140 12 L180 12" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
    <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs>
  </svg>
);
const GraphicFootprint = () => (
  <svg viewBox="0 0 200 60" className="w-full h-24">
    <rect x="10" y="10" width="70" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="90" y="10" width="100" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
    <text x="18" y="38" fontSize="10" fill="currentColor">Current</text>
    <text x="130" y="38" fontSize="10" fill="currentColor">Growth</text>
  </svg>
);
const GraphicFlow = () => (
  <svg viewBox="0 0 200 60" className="w-full h-24">
    <rect x="10" y="10" width="40" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="80" y="10" width="40" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="150" y="10" width="40" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M50 30 H80 M120 30 H150" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow2)" />
    <defs><marker id="arrow2" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs>
  </svg>
);
const GraphicSlotting = () => (
  <svg viewBox="0 0 200 60" className="w-full h-24">
    {[0,1,2,3,4,5].map((i)=>(
      <rect key={i} x={10+i*30} y={10+(i%2?18:0)} width="24" height="32" fill="none" stroke="currentColor" strokeWidth="2" />
    ))}
    <path d="M10 50 H190" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const GraphicChart = () => (
  <svg viewBox="0 0 200 60" className="w-full h-24">
    <polyline points="10,48 40,44 70,40 100,30 130,22 160,18 190,14" fill="none" stroke="currentColor" strokeWidth="2"/>
    <rect x="145" y="10" width="45" height="16" rx="3" fill="currentColor" opacity="0.1"/>
    <text x="150" y="22" fontSize="10" fill="currentColor">ROI</text>
  </svg>
);
const GraphicPermit = () => (
  <svg viewBox="0 0 200 60" className="w-full h-24">
    <rect x="10" y="8" width="70" height="44" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
    <text x="20" y="28" fontSize="10" fill="currentColor">Stamped</text>
    <circle cx="135" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
    <text x="125" y="34" fontSize="10" fill="currentColor">OK</text>
    <path d="M90 30 H115" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow3)" />
    <defs><marker id="arrow3" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs>
  </svg>
);
const GraphicGantt = () => (
  <svg viewBox="0 0 200 60" className="w-full h-24">
    <rect x="10" y="12" width="70" height="10" fill="currentColor" opacity="0.2"/>
    <rect x="40" y="28" width="110" height="10" fill="currentColor" opacity="0.2"/>
    <rect x="70" y="44" width="80" height="10" fill="currentColor" opacity="0.2"/>
    <line x1="10" y1="8" x2="10" y2="56" stroke="currentColor" strokeWidth="1"/>
    <line x1="10" y1="56" x2="190" y2="56" stroke="currentColor" strokeWidth="1"/>
  </svg>
);
const GraphicRocket = () => (
  <svg viewBox="0 0 200 60" className="w-full h-24">
    <path d="M40 40 C60 15, 100 15, 120 40 L100 40 L90 50 L80 40 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
    <polygon points="90,50 96,58 84,58" fill="currentColor" opacity="0.2"/>
    <polyline points="130,48 150,38 170,48" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const GraphicLoop = () => (
  <svg viewBox="0 0 200 60" className="w-full h-24">
    <path d="M30,30 a20,20 0 1,1 40,0 a20,20 0 1,1 -40,0" fill="none" stroke="currentColor" strokeWidth="2"/>
    <polyline points="70,30 120,30 150,18 180,30" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);


const steps: Step[] = [
  {
    number: 1,
    title: "Discovery & Alignment",
    description:
      "We clarify goals, constraints, SLAs, growth assumptions, and success metrics. You’ll leave with a shared charter and data checklist.",
    Graphic: GraphicCompass,
    poster: "/images/design-build/our-process/discovery_alignment.svg",
    anim: "/animations/process/discovery_alignment.mp4",
  },
  {
    number: 2,
    title: "Data Intake & Diagnostic",
    description:
      "Securely ingest WMS/ERP extracts (orders, lines, SKU master, velocities). Python/R analysis highlights constraints, failure modes, and quick wins.",
    Graphic: GraphicData,
    anim: "/animations/process/data_intake_diagnostic.mp4",
  },
  {
    number: 3,
    title: "Footprint Modeling",
    description:
      "Our capacity/throughput model sizes the exact building envelope you need (clear height, docks, staging) at today’s volume and your target growth rate.",
    Graphic: GraphicFootprint,
    poster: "/images/design-build/our-process/footprint_modeling.svg",
    anim: "/animations/process/footprint_modeling.mp4",
  },
  {
    number: 4,
    title: "Concept & Flow Design",
    description:
      "Map inbound → storage → pick/pack → outbound. Evaluate conventional vs. automated flows with options matrix and staffing models.",
    Graphic: GraphicFlow,
    anim: "/animations/process/concept_flow_design.mp4",
  },
  {
    number: 5,
    title: "Slotting & Equipment Selection",
    description:
      "Use Warehousr for bin right-sizing and pick-module design. Layer in conveyors/sortation, GTP, VLMs, robotics, or conventional rack as justified by data.",
    Graphic: GraphicSlotting,
    poster: "/images/design-build/our-process/slotting_equipment_selection.svg",
    anim: "/animations/process/slotting_equipment_selection.mp4",
  },
  {
    number: 6,
    title: "Simulation & Business Case",
    description:
      "Stress-test scenarios (peaks, promotions, seasonality). Build an ROI with sensitivity around labor rates, service levels, and future growth.",
    Graphic: GraphicChart,
    anim: "/animations/process/simulation_business_case.mp4",
  },
  {
    number: 7,
    title: "Codes & Permits (Fast-Track)",
    description:
      "Design to NFPA, FM Global, IBC and OSHA from day one. Painless Permit automates submittals and reviewer responses—compressing timelines significantly.",
    Graphic: GraphicPermit,
    poster: "/images/design-build/our-process/codes_permits.svg",
    anim: "/animations/process/codes_permits.mp4",
  },
  {
    number: 8,
    title: "Implementation & Project Management",
    description:
      "Single-point accountability for procurement, installation, safety, and change control. Weekly dashboards keep risk, cost, and schedule on track.",
    Graphic: GraphicGantt,
    anim: "/animations/process/implementation_project_management.mp4",
  },
  {
    number: 9,
    title: "Commissioning, Training & Optimization",
    description:
      "FAT/SAT, ramp plans, SOPs, and training. DensityPro can boost picker throughput up to 20% by sequencing optimal paths. Seasonal re-slotting stays easy.",
    Graphic: GraphicRocket,
    poster: "/images/design-build/our-process/commissioning_training_optimization.svg",
    anim: "/animations/process/commissioning_training_optimization.mp4",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-10">
        <p className="text-sm uppercase tracking-wider text-zinc-500">Design–Build</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Our Process</h1>
        <p className="mt-3 text-zinc-600">
          A transparent, repeatable path from idea to live operations—powered by our in-house tools:
          <span className="font-medium"> Warehousr</span> (slotting & space planning),
          <span className="font-medium">DensityPro</span> (pick path sequencing),
          and <span className="font-medium">Painless Permit</span> (code compliance & permits).
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(({ number, title, description, Graphic, poster, anim, lottieSrc }) => (
          <Card key={number}>
            <div className="flex items-start gap-4">
              <Badge n={number} />
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-zinc-600">{description}</p>
              </div>
            </div>
            <HoverIcon
              accent="#2563eb"
              Graphic={Graphic}
              poster={poster}
              anim={anim}
              lottieSrc={lottieSrc}
              title={title}
            />
          </Card>
        ))}
      </section>

      <section className="mt-12">
        <Card>
          <h3 className="text-lg font-semibold">Tools we use along the way</h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            <li className="text-zinc-700">
              <span className="font-medium">Footprint Model:</span> determine exact facility size for current + projected volume.
            </li>
            <li className="text-zinc-700">
              <span className="font-medium">Warehousr:</span> bin right-sizing, shelf design, seasonal re-slotting.
            </li>
            <li className="text-zinc-700">
              <span className="font-medium">DensityPro:</span> headless sequencer that guides optimal pick paths for +15–25% throughput.
            </li>
            <li className="text-zinc-700">
              <span className="font-medium">Painless Permit:</span> automated submittals and reviewer responses for NFPA/FM/IBC/OSHA.
            </li>
            <li className="text-zinc-700">
              <span className="font-medium">Python & R analytics:</span> demand modeling, SKU clustering, labor forecasting, ROI.
            </li>
            <li className="text-zinc-700">
              <span className="font-medium">Vendor network:</span> competitive RFQs across conveyors, storage, robotics, and integration.
            </li>
          </ul>
        </Card>
      </section>

      <footer className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold">Ready to walk the process with us?</h3>
          <p className="text-zinc-600">Share your data extract and constraints—we’ll return a concrete plan and timeline.</p>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-white font-medium hover:bg-zinc-800"
        >
          Book a discovery call
        </a>
      </footer>
    </main>
  );
}