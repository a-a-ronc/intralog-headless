// app/design-build/our-process/page.tsx
import type { Metadata } from "next";
import HoverMedia from "@/components/HoverMedia";

export const metadata: Metadata = {
  title: "Our Process | Design–Build",
  description:
    "A clear, data-driven Design–Build process that guides you from discovery to commissioning—and continuous optimization.",
};

type Step = {
  number: number;
  title: string;
  description: string;
  poster: string; // idle svg (required)
  colorSvg?: string; // optional colored SVG
  mp4?: string;   // optional animation
  webm?: string;  // optional animation
};

const ACCENTS = [
  "#3DA9FC", // 1 Discovery – electric blue
  "#A3E635", // 2 Data – lime
  "#FACC15", // 3 Footprint – amber
  "#3DA9FC", // 4 Concept – blue
  "#0A1F44", // 5 Slotting – navy
  "#A3E635", // 6 Simulation – lime
  "#EF4444", // 7 Compliance – red
  "#3DA9FC", // 8 Implementation – blue
  "#A3E635", // 9 Commissioning – lime
];

const steps: Step[] = [
  {
    number: 1,
    title: "Discovery & Alignment",
    description:
      "We clarify goals, constraints, SLAs, growth assumptions, and success metrics. You'll leave with a shared charter and data checklist.",
    poster: "/icons/process/discovery_alignment.svg",
    mp4: "/animations/process/discovery_alignment.mp4",
  },
  {
    number: 2,
    title: "Data Intake & Diagnostic",
    description:
      "Securely ingest WMS/ERP extracts (orders, lines, SKU master, velocities). Python/R analysis highlights constraints, failure modes, and quick wins.",
    poster: "/icons/process/Data Intake & Diagnostic.svg",
    mp4: "/animations/process/data_intake_diagnostic.mp4",
  },
  {
    number: 3,
    title: "Footprint Modeling",
    description:
      "Our capacity/throughput model sizes the exact building envelope you need (clear height, docks, staging) at today's volume and your target growth rate.",
    poster: "/icons/process/footprintModeling.svg",
    mp4: "/animations/process/footprintModeling.mp4",
  },
  {
    number: 4,
    title: "Concept & Flow Design",
    description:
      "Map inbound → storage → pick/pack → outbound. Evaluate conventional vs. automated flows with options matrix and staffing models.",
    poster: "/icons/process/conceptFlowDesign.svg",
    mp4: "/animations/process/conceptFlowDesign.mp4",
  },
  {
    number: 5,
    title: "Slotting & Equipment Selection",
    description:
      "Use Warehousr for bin right-sizing and pick-module design. Layer in conveyors/sortation, GTP, VLMs, robotics, or conventional rack as justified by data.",
    poster: "/icons/process/slottingEquipmentSelection.svg",
    mp4: "/animations/process/slottingEquipmentSelection.mp4 ",
  },
  {
    number: 6,
    title: "Simulation & Business Case",
    description:
      "Stress-test scenarios (peaks, promotions, seasonality). Build an ROI with sensitivity around labor rates, service levels, and future growth.",
    poster: "/icons/process/simulationBusinessCase.svg",
    colorSvg: "/icons/process/simulationBusinessCase.svg", // Added for hover effect
  },
  {
    number: 7,
    title: "Compliance & Vendor Coordination",
    description:
      "Design to NFPA, FM Global, IBC and OSHA from day one. Painless Permit automates submittals and reviewer responses—compressing timelines significantly.",
    poster: "/icons/process/codesPermits.svg",
    mp4: "/animations/process/codesPermits.mp4",
  },
  {
    number: 8,
    title: "Implementation & Project Management",
    description:
      "Single-point accountability for procurement, installation, safety, and change control. Weekly dashboards keep risk, cost, and schedule on track.",
    poster: "/icons/process/implementationProjectManagement.svg",
    mp4: "/animations/process/implementationProjectManagement.mp4",
  },
  {
    number: 9,
    title: "Commissioning, Training & Optimization",
    description:
      "FAT/SAT, ramp plans, SOPs, and training. DensityPro can boost picker throughput up to 20% by sequencing optimal paths. Seasonal re-slotting stays easy.",
    poster: "/icons/process/commissioningTrainingOptimization.svg",
    mp4: "/animations/process/commissioningTrainingOptimization.mp4",
  },
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
        {steps.map((s, i) => (
          <Card key={s.number}>
            <div className="flex items-start gap-4">
              <Badge n={s.number} />
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-zinc-600">{s.description}</p>
              </div>
            </div>

            <HoverMedia
              className="mt-4 h-32"
              posterSvg={s.poster}
              colorSvg={s.colorSvg}
              mp4={s.mp4}
              webm={s.webm}
              title={s.title}
              accent={ACCENTS[i] || "#3DA9FC"}
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